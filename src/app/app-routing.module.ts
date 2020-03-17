import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppLayerComponent } from './app-layer/app-layer.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component'
import { ContactformComponent } from './contactform/contactform.component';
import { PersonalbankingComponent } from './personalbanking/personalbanking.component';

  import { from } from 'rxjs';


const routes: Routes = [
  {
    path:"",component:AppLayerComponent,
    children:[
      {path:"", component:HomeComponent},
      {path:"dashboard", component:DashboardComponent},
      {path:"about", component:AboutComponent},
      {path:"features", component:FeaturesComponent},
      {path:"Services", component:ServicesComponent},
      {path:"OtherServices", component:OtherServicesComponent},
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
      // {path:"", redirectTo:"dashboard", pathMatch:"full"}
      {path:"Login", component:LoginComponent},
      {path:"Signup", component:SignupComponent},
      {path:"Logout", component:LogoutComponent},
      {path:"Login", redirectTo:"/dashboard", pathMatch:"full"},
      {path:"Contactform", component:ContactformComponent},
      { path: 'Contactform', redirectTo: '/dashboard', pathMatch: 'full'},
      {path:"Personalbanking", component:PersonalbankingComponent},
      { path: 'Login', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
