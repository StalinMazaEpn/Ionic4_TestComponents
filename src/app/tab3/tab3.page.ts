import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    showPost = 2;

    alternatePost = false;

    constructor() { }
    
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
