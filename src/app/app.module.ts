import { Contact } from './contactform/Contact';
import { ContactService } from './contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtherServicesComponent } from './other-services/other-services.component';
import { ServicesComponent } from './services/services.component';
import { AppLayerComponent } from './app-layer/app-layer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactformComponent } from './contactform/contactform.component';
import { PersonalbankingComponent } from './personalbanking/personalbanking.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    AboutComponent,
    FeaturesComponent,
    OtherServicesComponent,
    ServicesComponent,
    AppLayerComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ContactformComponent,
    PersonalbankingComponent,
    // Contact,
    // ContactService,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
