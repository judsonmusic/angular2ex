import {Component, Directive} from '@angular/core';
import {NameService} from './name.service';
import {MockService} from "./mock.service";

@Component({
  selector: 'firstDirective',
  templateUrl: 'app/first-directive.tpl.html'
})
export class FirstDirective {

  data: string[];
  name: string;

  constructor(private mockService: MockService, private nameService: NameService) {
    this.mockService = mockService;
    mockService.stateChange.subscribe((value: any) => { this.data = value; console.log('Change made!') });
    nameService.stateChange.subscribe((data: any) => { this.name = data; console.log('Change made to name data!') })
  }

  ngOnInit() {

  }


}

