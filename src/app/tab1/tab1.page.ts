import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    showPost = 1;

    alternatePost = false;

  constructor() {}

    
    showOne() {
        this.showPost = 1;
    }
    showTwo() {
        this.showPost = 2;
    }

    toggle() {
        this.alternatePost = !this.alternatePost;
    }
    
}
