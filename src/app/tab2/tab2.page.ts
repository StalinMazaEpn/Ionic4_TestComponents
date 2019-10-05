import { Component } from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


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
