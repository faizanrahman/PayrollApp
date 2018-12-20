import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { logging } from 'protractor';
import { TestserviceService } from 'src/app/testservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
user : User;
userId:any;
login_form = {email: "", password:""};
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(
    private _httpService:TestserviceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.resetForm();
    this.userId = this.route.snapshot.paramMap.get('id');
    this.user = { Email: '', Password:''};
  }

  // resetForm(form? : NgForm){
  //     if(form != null)
  //     form.reset();
  //     this.user = {
  //       Email: '',
  //       Password: ''
  //   }
  // }
  login(){
    //should I pass login form or user id??? ? 
    console.log(this.login_form)
    let observable = this._httpService.login(this.login_form);
    observable.subscribe((data)=> {
      console.log(data);
      //Handle session ?
      if(data === 1){
        console.log("LALALALALALALALA")
      }
    })
  }
}
