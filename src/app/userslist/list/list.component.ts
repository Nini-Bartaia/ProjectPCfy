import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/shared/form.interface';
import { SharedserviceService } from 'src/app/shared/sharedservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
 
})
export class ListComponent implements OnInit {

  usersData: data[]=[]

  

  constructor(private service:SharedserviceService, private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
      
    this.service.getUsers().subscribe( res =>{
  this.usersData=res;
  console.log(this.usersData)
  
},(err)=>{
  console.error('error caught in component')
})
  }





  


}
