import { Component } from "@angular/core";
import { BulbItemModel } from "../bulb-item.model";
import { mock_bulb_list } from "../mock_bulb_list";

@Component({
    selector: 'bp-archives',
    templateUrl: 'archives-layout.component.html',
    styleUrls: ['archives-layout.component.css']
})

export class ArchivesLayoutComponent{
    bulbs: BulbItemModel [] = [];

    constructor(){
      for(var bulb of mock_bulb_list){
        console.log(bulb);
        this.bulbs.push(bulb);
      }
    }
}