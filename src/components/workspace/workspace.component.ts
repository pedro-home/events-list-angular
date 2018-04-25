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
    let index: number;
    let config: Object;

    this.api.getEvents().subscribe(data => {
      data = data.json();
      dateNow = new Date();

      data.forEach(dataVal => {
        dateVal = this.utils.parseDate(dataVal['dateTime']);

        for (index = 0; index < this.categories.length; index++)
        {
          config = this.categories[index];
          restrictFn = config['restriction'];
          if (restrictFn ? restrictFn(dateNow, dateVal) : true)
          {
            if (config['data'])
            {
              config['data'].push(dataVal);
            }
            else
            {
              config['data'] = [dataVal];
            }

            break;
          }
        }
      });

      this.loading = false;
    });
  }
}
