import { AuthServiceService } from './../auth-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  registrationForm: FormGroup;
  email = '';
  username = '';
  password = '';
  role = 'user';

  constructor(
    private router: Router,
    private authServiceService: AuthServiceService,
   
  ){
    this.registrationForm = new FormGroup({
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


  onSignUp(){
    const getUser = this.authServiceService.signUp(this.email, this.username, this.password, this.role);
    if(getUser){
      this.router.navigate(['/login']);
    }else{
      alert('User Already Exists!')
    }
   console.log(this.registrationForm.value);
   
  }
}
