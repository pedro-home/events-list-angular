import { Component, Input, OnInit } from '@angular/core';
import { BindableComponent } from '../bindable/bindable.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'voters',
  templateUrl: 'voters.component.html',
  providers: [UtilsService]
})
export class VotersComponent extends BindableComponent implements OnInit {

  @Input('maximumNumber')
  maxNumber: number;

  @Input('simple')
  simpleStyling: boolean;

  missNumber: number;

  public constructor(private utils: UtilsService) {
    super();
    this.missNumber = 0;
    this.simpleStyling = false;

    // TODO: Calculate maxNumber through available space
    this.maxNumber = 10;
  }

  public ngOnInit(): void {
    this.limitVoters();
  }

  private limitVoters(): void {
    this.missNumber = this.data.length - this.maxNumber;
    this.data = this.utils.clone(this.data).slice(0, this.maxNumber);
  }

}
