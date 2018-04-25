import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'workspace',
  templateUrl: 'workspace.component.html',
  providers: [ApiService]
})
export class WorkspaceComponent implements OnInit {

  title: string;
  data: Object;

  constructor(private api: ApiService) {
    this.title = 'EVENTS';
    this.data = {};
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void
  {
    this.api.getEvents().subscribe(data => {
      this.data = data.json();
    });
  }

}
