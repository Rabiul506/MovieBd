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
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  navigateToSignUp() {
    this.router.navigate(['/signUp']);
  }

  onLogIn() {
    const index = this.authServiceService.signupData.findIndex(
      x => x.email === this.loginForm.value.email
    )

    if (index !== -1 && this.authServiceService.signupData[index].password === this.loginForm.value.password) {
      this.authServiceService.loggedInAs = this.authServiceService.signupData[index].role;
      localStorage.setItem('loggedInAsLocal', JSON.stringify(this.authServiceService.loggedInAs));

      console.log("Login successful")
      this.router.navigate(['/home'])
    }
    else if (index == -1) {
      console.log("Username not found");
    }
    else {
      console.log('Password is incorrect');
    }
  }
}
