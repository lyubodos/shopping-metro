import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceComponent } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  @ViewChild('authForm') authForm: NgForm;

  public isAuthenticated: boolean = false;
  public isLoading: boolean = false;
  public error: string = null;

  constructor(private authService: AuthServiceComponent) {}

  public onSwitchMode(): void {
    this.isAuthenticated = !this.isAuthenticated;
    this.authForm.reset();
  }

  public onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const authEmail = form.value.email;
    const pass = form.value.password;

    this.isLoading = true;

    if (this.isAuthenticated) {
      this.error = null;
      this.authService.login(authEmail, pass).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
    } else {
      this.error = null;

      this.authService.signUp(authEmail, pass).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          const errorMessage = error.error.error.message.split('_');

          this.error = errorMessage.join(' ').toLowerCase();
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
}
