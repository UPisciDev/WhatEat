import { Component, OnInit } from '@angular/core';
import {faPizzaSlice, faBars} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  pizzaIcon = "https://i.ibb.co/8rsZ5b5/pizza.png";
  menuIcon = "https://i.ibb.co/G5SrQB3/menu.png";
  startMenuIcon = this.menuIcon;


}
