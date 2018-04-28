import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'page-event',
  segment: 'page-event/:id',
  defaultHistory: ['page-home']
})
@Component({
  selector: 'page-event',
  templateUrl: 'event.page.html',
})
export class EventPage {

  data: Array<JSON>;

  constructor(public navParams: NavParams) {
    this.data = navParams.data;
  }

}
