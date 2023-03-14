import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feature',
  template: `
    <app-btn-go-home-card-ui
    ></app-btn-go-home-card-ui>
  `,
  styles: [`
  `
  ]
})
export class HomeFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
