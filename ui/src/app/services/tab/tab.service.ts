import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  public tabList = signal<Tab[]>([]);

  constructor() {this.tabList.set([{title: "new Tab", path: "dummy.pdf"}]); }

  newTab() {
    const newMessage = {title: "new Tab", path: "dummy.pdf"}
    this.tabList.mutate(values => values.push(newMessage));
  }
}

export interface Tab {
  title: string;
  path: string;
}
