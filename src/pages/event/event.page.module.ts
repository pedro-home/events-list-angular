import { NgModule } from "@angular/core";
import { EventPage } from "./event.page";
import { IonicPageModule } from "ionic-angular";

@NgModule({
    declarations: [
      EventPage
    ],
    imports: [
      IonicPageModule.forChild(EventPage)
    ]
  })

  export class EventPageModule {}