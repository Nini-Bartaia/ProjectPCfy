import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/shared/sharedservice.service';
import { data } from 'src/app/shared/form.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailid',
  templateUrl: './detailid.component.html',
  styleUrls: ['./detailid.component.scss']
})
export class DetailidComponent implements OnInit {
id:string='';
data:data[]=[]
constructor(private service:SharedserviceService, private http: HttpClient, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getUsers().subscribe(res=>{
      this.data=res;
      console.log(this.data)
    })
    this.id=this.router.snapshot.params['id']
    this.getId()
    
  
  }

  getId(){
    this.service.getUserId(this.id).subscribe(res=>{
      this.data=res;
      console.log(this.data)
    })
  }



}
