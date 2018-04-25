import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'workspace',
  templateUrl: 'workspace.component.html',
  providers: [ApiService]
})
export class WorkspaceComponent {

  title: string;

  constructor(private api: ApiService) {
    this.title = 'EVENTS';
  }

}
