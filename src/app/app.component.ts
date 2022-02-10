import { Component } from '@angular/core';
import { BulbItemModel } from './bulb-item.model';
import { mock_bulb_list } from './mock_bulb_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulbapedia';
  bulbs: BulbItemModel [] = [];

  constructor(){
    for(var bulb of mock_bulb_list){
      console.log(bulb);
      this.bulbs.push(bulb);
    }
  }
}
