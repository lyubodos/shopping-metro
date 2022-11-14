import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthResponse } from './data/auth-res.data';
import { AuthServiceComponent } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  public authForm: FormGroup;
  public isAuthenticated: boolean = false;
  public error: string = null;
  public isLoading: boolean = false;

  constructor(
    private authService: AuthServiceComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initAuthForm();
  }

  public onSubmit(form: FormGroup): void {
    this.isLoading = true;
    let authObservable: Observable<AuthResponse>;

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    if (this.isAuthenticated) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    authObservable.subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/recipes']);
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  public onSwitchMode(): void {
    this.isAuthenticated = !this.isAuthenticated;
    this.error = null;
  }

  private initAuthForm(): void {
    const email = '';
    const pass = '';

    this.authForm = new FormGroup({
      email: new FormControl(email, Validators.required),
      password: new FormControl(pass, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
