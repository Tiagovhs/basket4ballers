import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminAuthService, PolicyCheck } from '../admin-auth.service';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.scss',
})
export class AdminRegisterComponent {
  password = '';
  confirm = '';
  error = '';
  success = false;
  loading = false;
  showPolicy = false;
  policy: PolicyCheck = {
    minLength: false, hasUppercase: false,
    hasLowercase: false, hasDigit: false, hasSpecial: false,
  };

  constructor(private auth: AdminAuthService, private router: Router) {}

  get policyOk(): boolean {
    return this.auth.isPolicyCompliant(this.password);
  }

  get passwordsMatch(): boolean {
    return this.confirm.length > 0 && this.password === this.confirm;
  }

  onPasswordChange(): void {
    this.policy = this.auth.checkPolicy(this.password);
    this.showPolicy = this.password.length > 0;
    this.error = '';
  }

  submit(): void {
    if (!this.policyOk) {
      this.error = 'Le mot de passe ne respecte pas la politique requise.';
      return;
    }
    if (this.password !== this.confirm) {
      this.error = 'Les mots de passe ne correspondent pas.';
      return;
    }
    this.loading = true;
    this.auth.register(this.password).subscribe({
      next: () => {
        this.success = true;
        setTimeout(() => this.router.navigate(['/admin/login']), 2000);
      },
      error: err => {
        this.loading = false;
        if (err.status === 409) {
          this.error = 'Un compte admin existe déjà.';
        } else {
          this.error = 'Erreur serveur. Réessayez plus tard.';
        }
      },
    });
  }
}
