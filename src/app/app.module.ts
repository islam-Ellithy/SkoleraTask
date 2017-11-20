import { Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { UserComponent } from './components/user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { routes } from './app.router';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileComponent,
    NavbarComponent
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
