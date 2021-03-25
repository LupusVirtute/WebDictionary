import { Component } from '@angular/core';
import { NavItem } from './NavItem';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
  navItems: NavItem[] = [
    new NavItem('fa-home','Strona główna',''),
    new NavItem('fa-spell-check','Rozwijaj się','/play'),
    new NavItem('fa-clipboard-list','Baza Słów','/fetch-data'),
    new NavItem('fa-clipboard-list','Translator','/translate'),

  ];

}
