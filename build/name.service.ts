import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class NameService {

  private data: string;
  stateChange:EventEmitter<any> = new EventEmitter();

  constructor() {}

  setValue(val: string) {
    console.log('Value to service for name change: ', val);
    this.data = val;
    this.stateChange.emit(this.data);
  }


}
