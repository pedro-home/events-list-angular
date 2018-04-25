import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'workspace',
  templateUrl: 'workspace.component.html',
  providers: [ApiService, UtilsService]
})
export class WorkspaceComponent implements OnInit {

  title: string;
  categories: Array<Object>;
  loading: boolean;

  constructor(private api: ApiService, private utils: UtilsService) {
    this.title = 'EVENTS';
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
    this.loading = true;
    this.initCategories();
  }

  private initCategories(): void
  {
    let dateNow: Date;
    let dateVal: Date;
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
        dateVal = this.utils.parseDate(dataVal['dateTime']);

        for (idxCat = 0; idxCat < this.categories.length; idxCat++)
        {
          config = this.categories[idxCat];
          restrictFn = config['restriction'];
          if (restrictFn ? restrictFn(dateNow, dateVal) : true)
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

      this.loading = false;
    });
  }
}
