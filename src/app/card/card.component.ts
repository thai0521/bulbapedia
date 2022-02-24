import { Component, Input } from "@angular/core";

@Component({
    selector: 'bp-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'] 
})
export class CardComponent{
    @Input()
    img: string;
    @Input()
    name: string;
    @Input()
    link: string;


    constructor(){
        this.img ="";
        this.name= "missing description";
        this.link="";
    }
}
