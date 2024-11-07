import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  moviesUser: string [] = [];

  constructor(
    private router: Router,
    
  ) { }



    // Save user data to localStorage
    // saveUser(): void {

    //   this.signUpUser.push(this.userData)
    //     localStorage.setItem('signUpUser', JSON.stringify(signUpUser));
      
    // }

    signUp(email: string, username: string, password: string, role: string,): boolean {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some((user: any) => user.username === username);
  
      if (!userExists) {
        users.push({email, username, password, role});
        localStorage.setItem('users', JSON.stringify(users));
        return true;
      }
      return false;
    }
  
    // Get user data from localStorage
    // getUser(): { user: string, password: string } | null {
    //   const storedUser = localStorage.getItem('userData');
    //   return storedUser ? JSON.parse(storedUser) : null;
    // }

    login(username: string, password: string): boolean {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.username === username && u.password === password);
  
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    }

 // Logout - clears session data
 logout(): void {
  localStorage.removeItem('currentUser');
  this.router.navigate(['/login']);
}

// Gets the current user's role
getUserRole(): string | null {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  return currentUser ? currentUser.role : null;
}

// Checks if the user is logged in
isLoggedIn(): boolean {
  return localStorage.getItem('currentUser') !== null;
}
}
