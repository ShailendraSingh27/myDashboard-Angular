import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileSidenavComponent } from './profile-sidenav/profile-sidenav.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileSidenavComponent,
    ProfileInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: ProfileInfoComponent
      }

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
