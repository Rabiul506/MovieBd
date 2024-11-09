import { AuthServiceService } from './../auth-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(
    private router: Router,
    private authServiceService: AuthServiceService,
<<<<<<< HEAD
  ) { }

  registrationForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  })

=======
   
  ){
    this.registrationForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
>>>>>>> b8b829c (signUp changes)

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSignUp() {

    const registrationFormData = this.authServiceService.signupData.some(x => x.email === this.registrationForm.value.email)

    if (registrationFormData === false) {

      this.authServiceService.signupData.push(this.registrationForm.value);

      localStorage.setItem('signupDataLocal', JSON.stringify(this.authServiceService.signupData))

      console.log('New user Registered');
      console.log(this.registrationForm.value)

    } else {
      console.log('User already exist');
    }
  }
}
