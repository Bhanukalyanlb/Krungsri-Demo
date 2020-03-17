import {from} from 'rxjs';

import {ContactService} from './../contact.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from './Contact';
import {FormGroup, FormBuilder} from '@angular/forms';
// import { HttpClientService } from '../service/http-client.service';
// import { ContactFormComponent } from './contactform/contactform.component';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  contacts: Contact[];
  fb: any;

  constructor(
    public router: Router,
    private contactService: ContactService
  ) {
  }

  contactModel: Contact;

  ngOnInit() {
    this.contactModel = new Contact();
    this.getData();
  }

  getData() {
    console.log('xxxx');
    this.contactService.getContacts().subscribe(
      (Response) => this.handleSuccessfulResponse(Response),
    );
  }

  // onSubmitClick() {
  public onSubmitClick() {
    alert('Your message has been sent');
    console.log(this.contactModel);
    this.router.navigateByUrl('/dashboard');
  }


  handleSuccessfulResponse(response) {
    this.contacts = response;
  }

}
