import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

constructor(private _testService: HttpClient) { }

  servicetest(){
    return this._testService.get('http://localhost:5000/api/values');
  }
}
