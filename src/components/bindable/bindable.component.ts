import { Component, Input } from '@angular/core';

@Component({
  selector: 'bindable',
  template: '<div>Bindable component</div>'
})
export class BindableComponent {

	@Input('data')
	public data;

	constructor() {

	}
}