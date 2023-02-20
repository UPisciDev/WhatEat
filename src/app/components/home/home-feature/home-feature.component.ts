import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feature',
  template: `
    <div class="w-100 text-center">
      <img src="https://i.ibb.co/StV7wJW/logo-whateat.png" alt="" width="30%">
    </div>
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
