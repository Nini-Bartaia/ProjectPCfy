import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { SharedserviceService } from 'src/app/shared/sharedservice.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LogincompComponent implements OnInit {
  show:boolean=false;
  myform= new UntypedFormGroup({})

  constructor(private service:SharedserviceService, private route:Router) { }

  ngOnInit(): void {

    this.myform= new UntypedFormGroup({
      name: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.pattern(/^[ა-ჰ]+$/ )]),
      surname: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.pattern(/^[ა-ჰ]+$/)]),
      email: new FormControl('',[Validators.required,Validators.pattern(/^[^@]+@(gmail)\.com$/i)]),
    })
  }


  public checkUser(){
    this.service.getUsers().subscribe((res)=>{
      const element= res.find(n=>{
        return n.email===this.myform.value.email && n.name=== this.myform.value.name && n.surname===this.myform.value.surname
      })
      if(element){
        this.route.navigate(['/list'])
        return this.show=false
      }else{
        return this.show=true
      }
    })
  }


}
