import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthServiceComponent } from 'src/app/auth/services/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header implements OnInit, OnDestroy {

  private userSub: Subscription;
  public isAuthenticated: boolean = false;
  public isLoading: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthServiceComponent
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user
    .subscribe(user => {      
        this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
   this.userSub.unsubscribe();
  }

  public saveRecipes(): void {
    this.dataStorageService.storeRecipes();
  }

  public fetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe(resData => console.log(resData)
    )
  }

  public onLogout(){
    this.isAuthenticated = false;
    this.authService.user.next(null);
  }
}
