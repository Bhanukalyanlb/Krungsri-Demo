import { from } from 'rxjs';

import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './Contact';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { HttpClientService } from '../service/http-client.service';
// import { ContactFormComponent } from './contactform/contactform.component';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  contacts:string[];
  fb: any;

  constructor(
  // public router:Router, public fb: FormBuilder,
  // private contactService:ContactService,

  private contactService: ContactService

    ) { }

 

  contactForm: FormGroup;
  contactModel = new Contact();

  ngOnInit() {
    this.createContactForm();
    this.getData();
}

  getData(){
this.contactService.getContacts().subscribe(
  (Response) => this.handleSuccessfulResponse(Response),
  
);
  }

  // onSubmitClick() {
    public onSubmitClick(){

  

    this.contactModel.name = this.getField('name').value;
    this.contactModel.country = this.getField('country').value;
    this.contactModel.subject = this.getField('subject').value;
    console.log(this.contactModel);

      // this.contactform.contactName = this.getField('name').value;
      // this.contactform.country = this.getField('country').value;

      // this.animalService.addAnimal(this.animal).then((res) => {
      //   console.log(res);
      //   this.utils.resetFormGroup(this.form);
      // }).catch((error) => {
      //   console.log(error);
      // });

    
        // this.router.navigate(['/dashboard']);
    }
  

  createContactForm() {
    this.contactForm = this.fb.group({
      contactId: [''],
      name: [''],
      country: [''],
      subject: ['']
    });
  }

  get validateForm() { return this.contactForm.valid; }

  getField(name: any) {
    return this.contactForm.get(name);
  }

  handleSuccessfulResponse(response)
{
    this.contacts=response;
}

}
