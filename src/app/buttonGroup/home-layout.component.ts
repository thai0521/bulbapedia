import { Component, OnInit } from "@angular/core";
import { BulbItemModel } from "../bulb-item.model";
import { BulbService } from "../card/bulbs.service";
import { mock_bulb_list } from "../mock_bulb_list";

@Component({
    selector: 'bp-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
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