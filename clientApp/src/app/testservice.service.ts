import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {Observable,of, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

constructor(private _http: HttpClient) { }

  servicetest(){
    return this._http.get('http://localhost:5000/api/values')
    
  }
  login(login_form){
    console.log("I'm in SERVICE")
    console.log(login_form.email)
    console.log(login_form.password)
    return this._http.post('http://localhost:5000/api/auth/login', login_form)
    .catch(this.handleError)
    // .pipe(catchError(this.handleError));
  }
  // logout(){
  //   return this._testService.get('http://localhost:5000/api/auth/logout');
  // }
  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('Client side Error: ', error.error.message);
    } else {
      console.error('Server side error: ', error);
    }
  }
}
