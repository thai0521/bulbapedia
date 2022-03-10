import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BulbItemModel } from "../bulb-item.model";

@Injectable({
    providedIn:'root'
})
export class BulbService{

    private baseUrl:string = 'https://bulbapedia-bdaaa-default-rtdb.firebaseio.com/';
    private bulbsEndPoint:string = 'bulbs.json';

    constructor(private http:HttpClient){

    }

    public getBulbs(){
        return this.http.get<BulbItemModel []>(this.baseUrl + this.bulbsEndPoint);
    }

    public getBulb(index:number){
        return this.http.get<BulbItemModel>(this.baseUrl + 'bulbs/' + index + '.json')
    }
}