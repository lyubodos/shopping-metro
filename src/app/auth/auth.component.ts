import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  constructor(private authService: AuthServiceComponent) {}

  ngOnInit(): void {
    this.initAuthForm();
  }

  public onSubmit(form: FormGroup): void {
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    if(this.isAuthenticated){
      this.authService.login(email, password)
      .subscribe(resData => {
        console.log(resData);
      }, error => {
        this.error = error.error.error.message;
        console.log(error);
      })
    } else {
      this.authService.signUp(email, password)
      .subscribe((resData) => {
        console.log(resData);
        
      }, error => {
        this.error = error.error.error.message;
        console.log(error);
      });
    }
    console.log(this.authForm.value);
    
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
