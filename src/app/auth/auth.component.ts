import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceComponent } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  @ViewChild('authForm') authForm: NgForm;

  public isAuthenticated: boolean = false;

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

    if (this.isAuthenticated) {
    } else {
      this.authService.signUp(authEmail, pass).subscribe(
        (resData) => {
          console.log(resData);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    form.reset();
  }
}
