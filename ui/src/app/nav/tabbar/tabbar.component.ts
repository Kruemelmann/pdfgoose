import {Component, signal} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Tab, TabService} from "../../services/tab.service";

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {
  addLogo = faPlus;

  readonly tablist = signal<Tab[]>([]);

  constructor(private tabService: TabService){
    this.tablist = tabService.tabList;
  }

  newTab() {
    this.tabService.newTab();
  }
}

