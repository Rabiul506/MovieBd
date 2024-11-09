import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authServiceService: AuthServiceService,
  ) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  navigateToSignUp() {
    this.router.navigate(['/signUp']);
  }

  onLogIn() {
    const index = this.authServiceService.signupData.findIndex(
      x => x.username === this.loginForm.value.username
    )

    if (index !== -1 && this.authServiceService.signupData[index].password === this.loginForm.value.password) {
      this.router.navigate(['/home'])
      console.log("Login successful");
    }
    else if (index == -1) {
      console.log("Username not found");
    }
    else {
      console.log('Password is incorrect');
    }

  }
}
