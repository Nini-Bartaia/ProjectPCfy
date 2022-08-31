import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public onMobile=false;

  constructor() { }

  ngOnInit(): void {

    window.onresize=()=> this.onMobile= window.innerWidth <=390
  }


 
}
