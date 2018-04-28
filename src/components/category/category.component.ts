import { Component } from '@angular/core';
import { BindableComponent } from '../bindable/bindable.component';
import { NavController } from 'ionic-angular';
import { EventPage } from '../../pages/event/event.page';

@Component({
  selector: 'category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent extends BindableComponent {

  activeStatusConfig: Array<Object>;

  public constructor(private navCtrl: NavController)
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

  changeStatus(id: string, activeStatus: string, status: string): void
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

  goToDetails(id: string): void
  {
    this.navCtrl.push(EventPage, this.data.events.find(val => val.id === id));
  }
}