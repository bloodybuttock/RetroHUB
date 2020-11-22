import { Component, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core'
import * as jQuery from 'jquery';
declare var $:JQueryStatic;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
   
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }

}
