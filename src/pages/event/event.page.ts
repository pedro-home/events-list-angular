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

  data: Array<Object>;

  constructor(public navParams: NavParams) {
    this.data = navParams.data;

    // TODO: Add data to FIREBASE
    this.data['messages'] = [
      {
        author: 'Mr. Bean',
        photo: 'https://www.srbijadanas.com/sites/default/files/styles/full_article_image/public/a/t/2017/11/12/mister-bin.jpg',
        time: '14',
        comment: 'I went there yesterday!',
        attachment: {
          image: 'http://jarviscity.com/wp-content/uploads/2014/08/mr-bean-middle-finger-scene.jpg',
          title: 'TOP 10 Best Scenes of Mr. Bean',
          description: 'These are the best moments of the wonderful man, Mr. Bean.',
          provider: 'youtube'
        },
        feedback: {
          highFives: 10,
          comments: 2
        }
      },
      {
        author: 'Santa Claus',
        photo: 'https://vmcdn.ca/f/files/shared/holidays/christmas/santa-claus-adobestock.jpeg;w=630',
        time: '2',
        comment: '@Mr. Bean, you are a naughty boy!',
        feedback: {
          highFives: 537,
          comments: 284
        }
      }
    ];
  }

}
