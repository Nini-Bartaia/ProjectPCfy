import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { positions, teams } from '../shared/form.interface';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {


  private myurl='https://pcfy.redberryinternship.ge/api';
  constructor(private http:HttpClient) { }


  public getData():Observable<teams[]>{
    return this.http.get<{data:teams[]}>(this.myurl+'/teams').pipe(map(res =>{ return res.data}));
   
  }

  public getPositions():Observable<positions[]>{
    return this.http.get<{data:positions[]}>(this.myurl+'/positions').pipe(map(res=>res.data))
    
  }
}
