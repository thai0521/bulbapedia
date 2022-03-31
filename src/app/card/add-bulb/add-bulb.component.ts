import { Component, OnInit } from '@angular/core';
import { BulbItemModel } from 'src/app/bulb-item.model';
import { BulbService } from '../bulbs.service';

@Component({
  selector: 'bp-add-bulb',
  templateUrl: './add-bulb.component.html',
  styles: [
  ]
})
export class AddBulbComponent implements OnInit {

  constructor(private ps:BulbService) { }

  ngOnInit(): void {
  }

  addBulb(bulb:BulbItemModel){
    console.log("You pressed add bulb");
    console.log(bulb);
    this.ps.addBulb(bulb);
  }

}
