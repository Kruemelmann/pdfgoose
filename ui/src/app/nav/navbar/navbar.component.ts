import { Component } from '@angular/core';
import { faTableList, faBorderAll, faEye, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sidebarLogo = faTableList
  pagesLogo = faBorderAll
  viewLogo = faEye
  editLogo = faPen
}
