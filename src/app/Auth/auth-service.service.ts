import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  moviesUser: string[] = [];

  constructor(private router: Router,) {
    const _signupData = localStorage.getItem('signupDataLocal')
    this.signupData = _signupData ? JSON.parse(_signupData) : [];

    const tempLoggedInAs = localStorage.getItem('loggedInAsLocal')
    this.loggedInAs = tempLoggedInAs ? JSON.parse(tempLoggedInAs) : null;
  }

  signupData: any[] = []

  loggedInAs: string | null = null;

  // Logout - clears session data
  logout(): void {
    localStorage.removeItem('loggedInAsLocal')
    this.router.navigate(['/login']);
  }

  // Checks if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
