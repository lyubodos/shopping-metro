import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html'

})

export class AuthComponent {
 @ViewChild('authForm') authForm: NgForm;

 public isAuthenticated: boolean = false;

 public onSwitchMode(): void {
    this.isAuthenticated = !this.isAuthenticated;
    this.authForm.reset();
 }

 public onSubmit(form: NgForm): void {
    console.log(form);
 }
}