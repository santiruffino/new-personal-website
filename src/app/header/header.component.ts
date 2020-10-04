import { Component, OnInit } from '@angular/core';
import { Header } from './header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: Header[] = [
    {
      label: 'Home',
      icon: 'home',
      href: '/'
    }, {
      label: 'Blog',
      icon: 'article',
      href: '/blog'
    }, {
      label: 'Talks',
      icon: 'mic',
      href: '/talks'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
