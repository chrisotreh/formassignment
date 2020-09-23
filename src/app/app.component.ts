import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f', { static: false }) subsForm: NgForm;
  title = 'formassignment';
  subscription = ["Basic", "Advanced", "Pro"];
  defaultSubscription = "Advanced";

  userData = {
    email: '',
    password: '',
    subscription: ''
  }
  submitted = false;
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted=true;
    this.userData.email=this.subsForm.value.email;
    this.userData.password=this.subsForm.value.password;
    this.userData.subscription=this.subsForm.value.subscription;
    this.subsForm.reset();
  }
}
