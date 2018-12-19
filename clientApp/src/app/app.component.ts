import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clientApp';
  constructor(private service:TestserviceService){

  }

  ngOnInit(){
    this.service.servicetest().subscribe(data=> {
      console.log(data);
    })
  }
  
}
