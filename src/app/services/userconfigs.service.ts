import { Injectable } from '@angular/core';
import {DataproviderService} from './dataprovider.service';


@Injectable({
  providedIn: 'root'
})
export class UserconfigsService extends DataproviderService {

   constructor() { 
     super();
   }
  getUserName(): string {
    return 'Hello World!';
  }
}
