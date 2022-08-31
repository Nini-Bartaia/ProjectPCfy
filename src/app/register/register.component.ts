import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { teams } from '../shared/form.interface';
import { SharedserviceService } from '../shared/sharedservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mydata: teams[]=[];

  constructor(private service:SharedserviceService) { }

  myform=new UntypedFormGroup({});
  ngOnInit(): void {

    this.myform=new UntypedFormGroup({
      name: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')]),
      surname: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')]),
      teamId: new FormControl(null,Validators.required),
      positionId: new FormControl(null,Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern(/^[^@]+@(redberry)\.ge$/i)]),
      phone: new FormControl(null,[Validators.required,Validators.pattern(/^\d{9}$/)])

    })

    this.service.getData().subscribe((data:any)=>{
      console.log(data)
      this.mydata=data.data;
    })

    // this.mydata = this.service.getData();
    

  }

  // public get(){
  //   this.service.getData().subscribe((data:any)=>{
  //     console.log(data)
  //     this.mydata=data;
  //   })
  // }
  public selectList(e:any){
   
    console.log(e.target.value)
  }
  

}
