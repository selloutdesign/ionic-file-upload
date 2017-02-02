import { Component } from '@angular/core';

/*
  Generated class for the NewComp component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'new-comp',
  templateUrl: 'new-comp.html'
})
export class NewCompComponent {

  text: string;

  constructor() {
    console.log('Hello NewComp Component');
    this.text = 'Hello World';
  }

}
