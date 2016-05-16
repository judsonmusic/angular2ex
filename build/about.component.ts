import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router-deprecated';


@Component({
  selector: 'about',
  template: '<section>This is the about component.</section><router-outlet></router-outlet>',
  directives: [RouterOutlet]
})

export class AboutComponent {

  constructor(){



  }


}
