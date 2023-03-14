import {Component, Input, OnInit} from '@angular/core';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-custom-btn-ui',
  templateUrl: './custom-btn-ui.component.html',
  styleUrls: ['./custom-btn-ui.component.scss']
})
export class CustomBtnUiComponent implements OnInit {

  @Input() haveImage : boolean | undefined = false;
  @Input() isInFront : boolean | undefined = false;
  @Input() positionRelative : boolean | undefined = false;
  @Input() imgSrc : string | undefined;
  @Input() text : string | undefined;
  @Input() haveArrowIcon : boolean | undefined = false;
  @Input() height50 : boolean | undefined = false;
  faArrowRight = faArrowRight

  constructor() { }

  ngOnInit(): void {
  }

}
