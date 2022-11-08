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

  public onSubmit(form) {

    if(this.isAuthenticated){
     
    } else {
      this.authService.signUp(this.authForm.value.email, this.authForm.value.password)
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
