import { Injectable } from '@angular/core';
import { Customerdetails } from 'app/model/customerdetails.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  mockurl:string = 'http://localhost:8082';

  saveData(data: Customerdetails) {
   return this.http.post<Customerdetails>(this.mockurl + '/' + 'add', data);
  }
//previewdata(data: Customerdetails){
  //return this.http.get(data);
//}
}
