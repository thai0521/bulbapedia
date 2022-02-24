import { Component } from "@angular/core";
import { BulbItemModel } from "../bulb-item.model";
import { mock_bulb_list } from "../mock_bulb_list";

@Component({
    selector: 'bp-bulbacast',
    templateUrl: 'bulbacast-layout.component.html',
    styleUrls: ['bulbacast-layout.component.css']
})

export class BulbaCastLayoutComponent{
    bulbs: BulbItemModel [] = [];

    constructor(){
      for(var bulb of mock_bulb_list){
        console.log(bulb);
        this.bulbs.push(bulb);
      }
    }
}