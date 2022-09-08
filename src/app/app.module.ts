import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import{MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { state, style, transition, trigger, animate } from "@angular/animations";
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import { TokenInterceptorService } from './shared/token-interceptor.service';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { UserslistModule } from './userslist/userslist.module';
import { LoginModule } from './login/login.module';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    SuccessComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    UserslistModule,
    MatCardModule,
    LoginModule,
    DetailsModule
    
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
