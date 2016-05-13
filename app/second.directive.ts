import {Component, Directive} from '@angular/core';
import {NameService} from "./name.service";
import {MockService} from "./mock.service";

@Component({
  selector: 'secondDirective',
  templateUrl: 'app/second-directive.tpl.html'
})


export class SecondDirective {

  data: any;
  name: any;

  constructor(private mockService: MockService, private nameService: NameService) {
    this.mockService = mockService;
    mockService.stateChange.subscribe((data: any) => { this.data = data; console.log('Change made!') });
    nameService.stateChange.subscribe((data: any) => { this.name = data; console.log('Change made to name data!') })
  }

  ngOnInit() {

  }


}
