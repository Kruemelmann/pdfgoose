import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {
  addLogo = faPlus;

  tabList: Tab[] = [];

  constructor(){
    this.tabList.push({title: 'New Tab', path: ''})
  }

  newTab() {
    this.tabList.push({title: 'New Tab', path: ''})
  }

}

export interface Tab {
  title: string;
  path: string;
}

