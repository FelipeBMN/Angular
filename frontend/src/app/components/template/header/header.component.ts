import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
    
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.title
  }

  toggleMenu(): void{
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav')
    const ham = document.getElementById('hamburger')
    nav?.classList.toggle('active')
    ham?.classList.toggle('active')
  }

}
