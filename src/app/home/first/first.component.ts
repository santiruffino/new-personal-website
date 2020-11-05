import { Component, OnInit } from '@angular/core';
import { SocialNetworks } from './social-networks';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  socialsNetworks: SocialNetworks[] = [
    {
      name: 'Github',
      link: 'https://github.com/santiruffino',
      alt: 'Github Icon',
      logo: 'github-brands.svg'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/santiruffinodev',
      alt: 'Twitter Icon',
      logo: 'twitter-brands.svg'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/santiago-javier-ruffino/',
      alt: 'LinkedIn Icon',
      logo: 'linkedin-brands.svg'
    },


    ];

  constructor() { }

  ngOnInit(): void {
  }

}
