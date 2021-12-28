import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Categories {
  id : Number,
  titre : String
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  validationForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.validationForm = fb.group({
      emailFormEx: [null, [Validators.required, Validators.email]],
      passwordFormEx: [null, Validators.required],
    });
  }

  get emailFormEx() { return this.validationForm.get('emailFormEx'); }
  get passwordFormEx() { return this.validationForm.get('passwordFormEx'); }
  
  ngOnInit(): void {
  }

}
