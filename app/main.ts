import {bootstrap}    from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, Jsonp, Response, HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {NameService} from './name.service'
import {MockService} from "./mock.service";
import 'rxjs/Rx';
import 'rxjs/operator/map';

bootstrap(AppComponent,
[ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  NameService,
  MockService]
);
