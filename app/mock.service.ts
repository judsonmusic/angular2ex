import {Injectable, EventEmitter} from "@angular/core";
import {Http, Jsonp, Response, HTTP_PROVIDERS} from '@angular/http';
import {Observable}  from 'rxjs/Observable';

@Injectable()
export class MockService {

  data: any[];
  stateChange:EventEmitter<any> = new EventEmitter();
  someName: string;

  url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
      this.someName = "Judson Terrell"
  }


  //store new data in data model.
  getData(url?: string) : void {
    this.http.get(url || this.url)
      .map((res: Response) => res.json())
      .subscribe(
        res => { this.data = res },
        error => { console.log(error) },
        () => this.stateChange.emit(this.data));
  }






}



