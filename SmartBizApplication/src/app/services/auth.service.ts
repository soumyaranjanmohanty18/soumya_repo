import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface User {
  username: string;
  password: string;
  role: 'Admin' | 'Employee';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: 'admin123', role: 'Admin' },
    { username: 'employee', password: 'emp123', role: 'Employee' }
  ];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUserSubject.next(user);
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
