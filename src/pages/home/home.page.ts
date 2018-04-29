import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ApiService } from '../../services/api.service';
import { UtilsService } from '../../services/utils.service';

@IonicPage({
  name: 'page-home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage implements OnInit {

  private categories: Array<Object>;
  currCategories: Array<Object>;
  title: string;

  constructor(private api: ApiService, private utils: UtilsService) {
    this.title = 'Events';

    this.categories = [
      {
        id: 'day',
        label: 'TODAY',
        restriction: (date1, date2) => { return this.utils.inSameDay(date1, date2); }
      },
      {
        id: 'week',
        label: 'THIS WEEK',
        restriction: (date1, date2) => { return this.utils.inSameWeek(date1, date2); }
      },
      {
        id: 'none',
        label: 'OTHER'
      }
    ];
  }

  ngOnInit(): void {
    this.initComponents();
  }

  private initComponents(): void {
    let dateNow: Date;
    let restrictFn;
    let idxData: number;
    let idxCat: number;
    let dataVal: Object; 
    let config: Object;

    this.api.getEvents().subscribe(data => {
      data = data.json();
      dateNow = new Date();

      for (idxData = 0; idxData < data.length; idxData++)
      {
        dataVal = data[idxData];
        dataVal['dateTime'] = this.utils.parseDate(dataVal['dateTime']);

        for (idxCat = 0; idxCat < this.categories.length; idxCat++)
        {
          config = this.categories[idxCat];
          if (!config['events'])
          {
            config['events'] = [];
          }

          restrictFn = config['restriction'];
          if (restrictFn ? restrictFn(dateNow, dataVal['dateTime']) : true)
          {
            config['events'].push(dataVal);
            break;
          }
        }
      }

      this.currCategories = this.utils.clone(this.categories);
    });
  }

  searchEvent(e: any): void {
    let value: string = e.target.value;
    this.currCategories = this.utils.clone(this.categories);
    if (value && value.trim() !== '')
    {
      let idxCat: number;
      let idxEv: number;
      let events: Array<Object>;

      for (idxCat = 0; idxCat < this.currCategories.length; idxCat++)
      {
        events = this.currCategories[idxCat]['events'];
        for (idxEv = 0; idxEv < events.length; idxEv++)
        {
          if (!events[idxEv]['title'].toLowerCase().includes(value.toLowerCase()))
          {
            events.splice(idxEv, 1);
            idxEv--;
          }
        }
      }
    }
  }
}