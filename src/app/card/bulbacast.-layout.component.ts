import { Component, OnInit } from "@angular/core";
import { BulbItemModel } from "../bulb-item.model";
import { mock_bulb_list } from "../mock_bulb_list";
import { BulbService } from "./bulbs.service";

@Component({
    selector: 'bp-bulbacast',
    templateUrl: 'bulbacast-layout.component.html',
    styleUrls: ['bulbacast-layout.component.css']
})

export class BulbaCastLayoutComponent implements OnInit{
    bulbs: BulbItemModel [] = [];

    constructor(private service:BulbService){
      
    }
    
    ngOnInit(): void {
      console.log("Fetch Data");
      this.service.getBulbs().subscribe(data => {
        console.log(data);
        for(var bulb of data){
          this.bulbs.push(bulb);
        }
      });
    }
}