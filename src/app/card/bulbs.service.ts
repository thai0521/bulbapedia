import { Injectable } from "@angular/core";
import { BulbItemModel } from "../bulb-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn:'root'
})
export class BulbService{

   

    constructor(private db:AngularFireDatabase){

    }

    public getBulbs(){
        return this.db.list<BulbItemModel>("bulbs").valueChanges();
    }

    public getBulb(index:number){

        
    }
}