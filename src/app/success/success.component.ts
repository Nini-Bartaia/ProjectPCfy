import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SuccessComponent implements OnInit {

  constructor(public route:Router ) {}

  ngOnInit(): void {

    
  
  }

navigate(){
  this.route.navigate(['list'])
}

}


