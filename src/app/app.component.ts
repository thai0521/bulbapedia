import { Component } from '@angular/core';
import { ButtonItemModel } from './button-item.model';
import { mock_button_list } from './mock_button_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulbapedia';
  buttons: ButtonItemModel [] = [];

  constructor(){
    for(var button of mock_button_list){
      console.log(button);
      this.buttons.push(button);
    }
  }
}
