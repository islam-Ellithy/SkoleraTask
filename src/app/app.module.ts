import { Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { UserComponent } from './components/user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { routes } from './app.router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
