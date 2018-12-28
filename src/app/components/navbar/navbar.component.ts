import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'mt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menus: Menu[];

  constructor() {
    this.menus = [
      { url: '/menu_item_1', title: 'Menu aktywne 1', active: true },
      { url: '/menu_item_2', title: 'Menu aktywne 2', active: true },
      { url: '/menu_item_3', title: 'Menu nie aktywne 3', active: false }
    ];
  }

  ngOnInit() {
  }

}
