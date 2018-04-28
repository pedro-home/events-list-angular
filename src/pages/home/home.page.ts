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

  categories: Array<Object>;
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

  private initComponents(): void
  {
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
          restrictFn = config['restriction'];
          if (restrictFn ? restrictFn(dateNow, dataVal['dateTime']) : true)
          {
            if (config['events'])
            {
              config['events'].push(dataVal);
            }
            else
            {
              config['events'] = [dataVal];
            }

            break;
          }
        }
      }
    });
  }
}
