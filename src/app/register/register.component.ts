import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatTabGroup, MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { brands, cpus, positions, teams } from '../shared/form.interface';
import { SharedserviceService } from '../shared/sharedservice.service';
import { HttpClient } from '@angular/common/http';
import { user } from '../shared/form.interface';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formArr=[];
  mydata: teams[]=[];
  position:positions[]=[];
  brands:brands[]=[];
  cpus: cpus[]=[];
  isValid:boolean=false;
  active=0;
  isshown=false;
  matTabs = [1,2]; 
  selectedFile:File|null=null;
  @ViewChild('tabGroup', { static: false })
  tabGroup!: MatTabGroup;
  step:number=2;
  selectedProjectIndex: number = 0;
  isDisabled=true;

  constructor(private service:SharedserviceService,private http:HttpClient) { }

  myform=new UntypedFormGroup({});
  secondForm=new UntypedFormGroup({});
  ngOnInit(): void {
    
    this.myform=new UntypedFormGroup({
      name: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')]),
      surname: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')]),
      teamId: new FormControl(null,Validators.required),
      positionId: new FormControl(null,Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern(/^[^@]+@(redberry)\.ge$/i)]),
      phone: new FormControl(null,[Validators.required,Validators.pattern(/^\d{9}$/)]),
      

    } )

    this.secondForm=new UntypedFormGroup({
    laptopName:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/)]),
    laptopImage: new FormControl('',Validators.required),
    laptopBrandId:new FormControl('',Validators.required),
    laptopCpu:new FormControl('',Validators.required),
    laptopCpuCores: new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    laptopCpuThreads:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    laptopRam:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    laptopHardDriveType:new FormControl('',Validators.required),
    laptopState:new FormControl('',Validators.required),
    laptopPurchaseDate:new FormControl(''),
    laptopPrice:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    })

    this.service.getData().subscribe((data)=>{
      console.log(data)
      this.mydata=data;
    })

    this.service.getPositions().subscribe((value)=>{
      console.log(value)
      this.position=value;
      
    })

    this.service.getBrands().subscribe((value)=>{
      console.log(value)
      this.brands=value;
      
    })
    this.service.getCpu().subscribe((value)=>{
      console.log(value)
      this.cpus=value;
      
    })

    // this.mydata = this.service.getData();
    

  }

  // url="./assets/Frame.png";
  url=''

  public changeImage(e:any){
    if(e.target.files){
      let reader= new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
          this.url=event.target.result;
           
      }
     
    }
    
  }

  public getphoto(){
    this.isshown=!this.isshown
  }

  // public fun(){
  //   if(this.getFile()){
      
  //   }
  // }
  // public hidden(){
  //   this.show=!this.show
  // }

  // public get(){
  //   this.service.getData().subscribe((data:any)=>{
  //     console.log(data)
  //     this.mydata=data;
  //   })
  // }
  public selectList(e:any){
     //this.myform.controls['teamId'].setValue(e.target.value);
    // this.myform.controls['positionId'].setValue(e.target.value);
    console.log(e.target.value)
    //this.isValid=true;
    return e.target.value
  }
  public selectList2(e:any){
    //this.myform.controls['teamId'].setValue(e.target.value);
    //this.myform.controls['positionId'].setValue(e.target.value);
   console.log(e.target.value)
   //this.isValid=true;
   return e.target.value
 }
 public selectList3(e:any){
  //this.myform.controls['teamId'].setValue(e.target.value);
  //this.myform.controls['laptopBrandId'].setValue(e.target.value);
 console.log(e.target.value)
 //this.isValid=true;
 return e.target.value
}
public selectList4(e:any){
  //this.myform.controls['teamId'].setValue(e.target.value);
 // this.myform.controls['laptopbCpu'].setValue(e.target.value);
 console.log(e.target.value)
 //this.isValid=true;
 return e.target.value
}

public getFile(event:any){
  this.selectedFile=<File>event.target.files[0];
  console.log(this.selectedFile);
  return this.isshown
 
}

public postImage(){
  const upload= new FormData();
  upload.append('image',this.selectedFile!,this.selectedFile!.name)
  this.http.post('https://pcfy.redberryinternship.ge/api/laptop/create',upload).subscribe(res =>{
    console.log(res);
  })
}


  get listError(){
    return (
      // this.myform.get('teamId')?.valid||
      // this.myform.get('teamId')?.dirty ||
      this.myform.get('teamId')?.markAllAsTouched ||
      this.myform.get('teamId')?.touched

     
      
      //this.myform.get('teamId')?.errors
      
    )
  }
  // public onSubmit() {
  //   for (let controller in this.myform.controls) {
  //     this.myform.get(controller)?.markAsTouched()
  //   }

  //   if(this.myform.valid) {
  //     console.log('Ok')
  //   } else {
  //     console.log('No')
  //   }
  // }

  get f() {
    return this.myform.controls;
  }
  onSubmit() {
    this.isValid = true;
    // stop here if form is invalid
    if (this.myform.invalid) {
      return;
    }
    console.log(this.myform.value);
  }

   
  
logChange(event:any){
  console.log(event)
  return event;
  
}
buttonClick() {
  if(this.myform.invalid && this.myform.untouched){

  this.tabGroup._tabs.toArray()[1].disabled = true;
  } else{
    this.tabGroup._tabs.toArray()[1].disabled = false;
  }
  //  or
 // this.tabGroup._tabs['_results'][1].disabled = true;
}
moveToSelectedTab(tabName: string) {
 
      if(this.myform.valid ){
        console.log(this.myform.valid)
      if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[1]).innerText == tabName) {
        console.log((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[1]).innerText);
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[1]).click();
        //console.log( (<HTMLElement>document.querySelectorAll('.mat-tab-label')[1]).click());
        //  this.isDisabled=false;
        //  console.log(this.isDisabled)
       // console.log(this.tabGroup._tabs.toArray()[1])
          return this.tabGroup._tabs.toArray()[1].isActive = true;
      }
    }
    return this.tabGroup._tabs.toArray()[1].isActive = false;
     
}

moveToSelectedTab2(tabName: string) {
 
  if(this.myform.valid ){
   // console.log(this.myform.valid)
  if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[0]).innerText == tabName) {
    console.log((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[0]).innerText);
    (<HTMLElement>document.querySelectorAll('.mat-tab-label')[0]).click();
      return this.tabGroup._tabs.toArray()[0].isActive = true;
  }
}
return this.tabGroup._tabs.toArray()[0].isActive = false;
 
}

changeProjectTab() {
  this.selectedProjectIndex = 0;
}


}
