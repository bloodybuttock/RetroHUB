import { User } from './../../models/User';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any;
  signupForm: FormGroup;
  register$: Observable<User[]>;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {}

  signup() {
    this.authService.register(this.signupForm.value);
  }
}
