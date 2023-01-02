import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navigation: Array<NavItem> = [
    {
      name: 'About',
      route: '/about',
    },
    {
      name: 'Help',
      route: '/help',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface NavItem {
  name: string;
  route: string;
}
