import {Page, NavController} from 'ionic-angular';

import {Page3} from "../../../app/pages/page3/page3";

@Page({
    templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
    
    public data: string;

    constructor(private nav: NavController) {

    }
    
    push() {
        this.nav.push(Page3);
    }

}
