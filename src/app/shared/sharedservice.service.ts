import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { teams } from '../shared/form.interface';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {


  private myurl='https://pcfy.redberryinternship.ge/api';
  constructor(private http:HttpClient) { }


  public getData():Observable<teams[]>{
    return this.http.get<{data:teams[]}>(this.myurl+'/teams').pipe(map(res =>{ return res.data}));
    // return this.http.get<any>(this.myurl+'/teams');
  
    // .pipe(map(res =>{ return res}));
    // return this.http.get<any>(this.myurl+'/teams').pipe(map((res:any)=>res.json()))
    // return this.http.get<any>(this.myurl+'/teams').map(response => response.json())
  }
}
