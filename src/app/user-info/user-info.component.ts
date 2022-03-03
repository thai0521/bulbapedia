import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info';

@Component({
  selector: 'bp-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  MyInfo: UserInfo | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Sending get request");
    this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<UserInfo>("https://bulbapedia-bdaaa-default-rtdb.firebaseio.com/MyInfo.json");
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo) =>{
      console.log(data);
      this.MyInfo = data;
    })
  }
}
