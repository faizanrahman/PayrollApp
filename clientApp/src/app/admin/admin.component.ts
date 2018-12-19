import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  this.logout
  }
  logout(){
    let observable = this._httpService.create(this.productForm);
    observable.subscribe((data:any) => {
      //console.log(data.task)
      this.productForm = { title:"", price:Number, url:""}
      console.log("looooooooooook", this.productForm)
    })
  }
}
