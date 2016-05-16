import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, Jsonp, Response, HTTP_PROVIDERS} from '@angular/http';
import {NameService} from './name.service';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {MockService} from "./mock.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.tpl.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [NameService, MockService]
})

@RouteConfig([
  {path:'/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path:'/about', name: 'About', component: AboutComponent}
])

export class AppComponent { }
