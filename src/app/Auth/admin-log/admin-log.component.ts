import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-admin-log',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-log.component.html',
  styleUrl: './admin-log.component.scss'
})
export class AdminLogComponent {
  loginForm: FormGroup;

  username = '';
  password = '';

  constructor(
    private router: Router,
    private authServiceService: AuthServiceService,
  ){
    
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
