import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminAuthService, PolicyCheck } from '../admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
})
export class AdminLoginComponent {
  password = '';
  error = '';
  loading = false;
  showPolicy = false;
  policy: PolicyCheck = {
    minLength: false, hasUppercase: false,
    hasLowercase: false, hasDigit: false, hasSpecial: false,
  };

  constructor(private auth: AdminAuthService, private router: Router) {}

  onPasswordChange(): void {
    this.policy = this.auth.checkPolicy(this.password);
    this.showPolicy = this.password.length > 0;
    this.error = '';
  }

  submit(): void {
    if (!this.auth.isPolicyCompliant(this.password)) {
      this.error = 'Le mot de passe ne respecte pas la politique requise.';
      return;
    }
    this.loading = true;
    this.auth.login(this.password).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: err => {
        this.loading = false;
        if (err.status === 401) {
          this.error = 'Mot de passe incorrect.';
        } else if (err.status === 404) {
          this.error = 'Aucun compte admin. Créez-en un d\'abord.';
        } else {
          this.error = 'Erreur serveur. Réessayez plus tard.';
        }
      },
    });
  }
}
