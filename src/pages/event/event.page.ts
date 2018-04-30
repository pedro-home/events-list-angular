import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { UtilsService } from '../../services/utils.service';

@IonicPage({
  name: 'page-event',
  segment: 'page-event/:id',
  defaultHistory: ['page-home']
})
@Component({
  selector: 'page-event',
  templateUrl: 'event.page.html',
  providers: [UtilsService]
})
export class EventPage {

  data: Array<Object>;

  constructor(public navParams: NavParams, private utils: UtilsService) {
    this.data = navParams.data;

    // TODO: Add data to FIREBASE
    this.data['messages'] = [
      {
        author: 'Mr. Bean',
        photo: 'https://www.srbijadanas.com/sites/default/files/styles/full_article_image/public/a/t/2017/11/12/mister-bin.jpg',
        dateTime: this.utils.parseDate('27-04-2018 10:21:01'),
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
        dateTime: this.utils.parseDate('27-04-2018 10:21:20'),
        comment: '@Mr. Bean, you are a naughty boy!',
        feedback: {
          highFives: 537,
          comments: 284
        }
      }
    ];
  }

}
