import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {


  @Input() image: string = "https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg";
  description2 = "Conoce a uno de neustros expositores @Splaktar visita nuestra cuenta Twitter @Angular Quito";
  @Input() description = "Conoce a uno de neustros expositores @Splaktar visita nuestra cuenta Twitter @Angular Quito";

  constructor() {}

}