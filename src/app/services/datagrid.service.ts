import { Injectable } from '@angular/core';
import {DataproviderService} from './dataprovider.service';

@Injectable({
  providedIn: 'root'
})
export class DatagridService extends DataproviderService {
  getAddress(): string {
    return 'Address goes here';
  }
}
