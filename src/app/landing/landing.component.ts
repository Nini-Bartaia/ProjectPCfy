import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public onMobile=false;

  constructor(public route:Router) { }

  ngOnInit(): void {

    window.onresize=()=> this.onMobile= window.innerWidth <=390
  }


 


  public navigate(){
    this.route.navigate(['logincomp'])
  }

}


