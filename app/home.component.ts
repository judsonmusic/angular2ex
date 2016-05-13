import {Component, Directive} from '@angular/core';
import {AboutComponent} from './about.component';
import {FirstDirective} from './first.directive';
import {SecondDirective} from "./second.directive";
import {MockService} from "./mock.service";
import {NameService} from "./name.service";


@Component({
  selector: 'home',
  templateUrl: 'app/home.tpl.html',
  directives: [FirstDirective, SecondDirective]
})

export class HomeComponent {

  public data: any;
  public name: string;

  constructor(private mockService: MockService, private nameService: NameService) {

    mockService.stateChange.subscribe((data: any) => { this.data = data; console.log('Change made to mock data!') })
    nameService.stateChange.subscribe((data: string) => { this.name = data; console.log('Change made to name data!') })
    mockService.getData();

  }

  changeData() {

    //change the data by calling a different API.
    this.data = null;
    this.mockService.getData('http://jsonplaceholder.typicode.com/albums');

  }

  changeName(evt: Event) {
    console.log(evt.srcElement.value);
    this.nameService.setValue(evt.srcElement.value);

  }


}
