import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  username = '';
  password = '';

  constructor(
    private router: Router,
    private authServiceService: AuthServiceService,
  ) { }

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  navigateToSignUp() {
    this.router.navigate(['/signUp']);
  }

  onLogIn(){
   const logUser = this.authServiceService.login(this.username, this.password)

   if(logUser){
  //   this.router.navigate(['/home'])
  //  }else{
  //    alert('Invalid Credintial')
  //  }
  const role = this.authServiceService.getUserRole();
  if (role === 'admin') {
    this.router.navigate(['/list-item']);
  } else {
    this.router.navigate(['/home']);
  }
} else {
  alert('Invalid username or password!');
  }
}

  ngOnInit(): void {

  }
}
