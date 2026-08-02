import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface PolicyCheck {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasDigit: boolean;
  hasSpecial: boolean;
}

@Injectable({ providedIn: 'root' })
export class AdminAuthService {

  private readonly TOKEN_KEY = 's4b_admin_token';

  constructor(private http: HttpClient) {}

  register(password: string): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/admin/register`, { password });
  }

  login(password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/admin/login`, { password }).pipe(
      tap(res => sessionStorage.setItem(this.TOKEN_KEY, res.token))
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  checkPolicy(password: string): PolicyCheck {
    return {
      minLength:    password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasDigit:     /[0-9]/.test(password),
      hasSpecial:   /[!@#$%^&*()\-_=+[\]{};:'",.<>?/\\|`~]/.test(password),
    };
  }

  isPolicyCompliant(password: string): boolean {
    const p = this.checkPolicy(password);
    return p.minLength && p.hasUppercase && p.hasLowercase && p.hasDigit && p.hasSpecial;
  }
}
