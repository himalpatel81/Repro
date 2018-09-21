import { Component } from '@angular/core';
import {UserconfigsService} from './services/userconfigs.service';
import {DatagridService} from './services/datagrid.service';

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceTest';

  private name = '';
  private address = '';
  constructor(private userConfigService: UserconfigsService, private dataGridService: DatagridService) {
    this.name = this.userConfigService.getUserName();
    this.address= this.dataGridService.getAddress();


  }
}
