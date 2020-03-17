import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // toggleNavbar() {
  //   this.navBurger.nativeElement.classList.toggle('is-active');
  //   this.navMenu.nativeElement.classList.toggle('is-active');
  // }

  title: string;
 
  constructor() {
    this.title = 'demo-app';
  }

}
