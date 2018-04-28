import { Component } from '@angular/core';
import { BindableComponent } from '../bindable/bindable.component';

@Component({
  selector: 'category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent extends BindableComponent {

  activeStatusConfig: Array<Object>;

  public constructor()
  {
    super();
    this.activeStatusConfig = [
      {
        type: 'going',
        color: 'primary',
        label: 'Going',
        icon: 'checkmark'
      },
      {
        type: 'ignore',
        color: 'danger',
        label: 'Ignore',
        icon: 'close'
      }
    ];
  }

  changeStatus(id: string, activeStatus: string, status: string)
  {
    let nextStatus: string;
    switch (status)
    {
      case 'ignore':
      case 'going':
        nextStatus = 'none';
        break;
      case 'none':
        nextStatus = activeStatus;
    }

    this.data.events.find(val => val.id === id)
    .status = nextStatus;
  }
}