import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { brands, cpus, data, positions, teams } from '../shared/form.interface';
import { Teams } from '../register/teams';
import { Positions } from '../register/positions';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  myTeams:teams[]=[];

  request = new HttpHeaders({
    'Auth':'6d8e33bcc7d765da654c61de1d4151af'
  })

  //mytoken='6d8e33bcc7d765da654c61de1d4151af'


  public myurl='https://pcfy.redberryinternship.ge/api';
  public postApi='http://localhost:3000';
  
  constructor(private http:HttpClient) { }


  public getData():Observable<teams[]>{
    return this.http.get<{data:teams[]}>(this.myurl+'/teams').pipe(map(res =>{ return res.data}));
   
  }

  public getPositions():Observable<positions[]>{
    return this.http.get<{data:positions[]}>(this.myurl+'/positions').pipe(map(res=>res.data))
    
  }

  public getBrands():Observable<brands[]>{
    return this.http.get<{data:brands[]}>(this.myurl +'/brands').pipe(map(res => res.data))
  }
  public getCpu():Observable<cpus[]>{
    return this.http.get<{data:cpus[]}>(this.myurl +'/cpus').pipe(map(res => res.data))
  }
  public post(payload:data){
    return this.http.post(this.postApi+'/users',payload, {headers:this.request});
  }

  public getUsers():Observable<data[]>{
    return this.http.get<data[]>(this.postApi+'/users');
   
  }


  getTeams() {
    return [
     new Teams(1, "დეველოპერი" ),
     new Teams(2,  "HR" ),
     new Teams(1,  "გაყიდვები" ),
     new Teams(2, 'Brazil' ),
     new Teams(1, "დიზაინი" ),
     new Teams(2, "მარკეგინგი" ),
    ];
  }

  getPos(){
    return [
      new Positions(  1,
       "ინტერნი",
      1),
      new Positions(  2,
      "ჯუნიორ დეველოპერი",
       1),
      new Positions(
         3,
         "მიდლ დეველოპერი",
       1),
      new Positions(  4,
       "სენიორ დეველოპერი",
      1),
      new Positions(  5,
      "ლიდ დეველოპერი",
       1),
      new Positions( 6,
     "HR სპეციალისტი",
      2),
      new Positions(
      7,
      "HR პროექტ მენეჯერი",
         2),
      new Positions(8,
      "HR ბიზნეს პარტნიორი",
       2),
      new Positions( 9,
       "ჯუნიორ ბიზნეს დეველოპერი",
       3),
      new Positions(10,
      "ბიზნეს დეველოპერი",
       3),
      new Positions(  11,
       "სენიორ ბიზნეს დეველოპერი",
      3),
      new Positions( 12,
       "ჯუნიორ UI/UX დიზაინერი",
       4),
      new Positions(  13,
     "UI/UX დიზაინერი",
       4),
      new Positions( 14,
      "სენიორ UI/UX დიზაინერი",
       4),
      new Positions(15,
      "ლიდ UI/UX დიზაინერი",
       4),
      new Positions( 16,
    "ბლოგერი",
       5),
      new Positions(17,
     "growth მარკეტინგის სპეციალისტი",
      5),
      new Positions(18,
     "მარკეტინგის თიმ ლიდი",
      5)
      
      
    ]
  }


}
