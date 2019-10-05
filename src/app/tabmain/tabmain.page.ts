import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabmain',
  templateUrl: 'tabmain.page.html',
  styleUrls: ['tabmain.page.scss']
})
export class TabMainPage {

  constructor(private route: Router) {}

  goToTab(tab: string){
    this.route.navigateByUrl(`/tabs/${tab}`);
  }

}