import { Component, OnInit } from '@angular/core';
import {faPizzaSlice, faBars} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faPizzaSlice = faPizzaSlice;
  faBars = faBars;
  faMenuIcon = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
