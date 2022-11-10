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
  public subs: Subscription;
  public isAuthenticated: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthServiceComponent
  ) {}

  ngOnInit(): void {
    this.subs = this.authService.user
    .subscribe(user => {
        this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }

  public saveRecipes(): void {
    this.dataStorageService.storeRecipes();
  }

  public fetchRecipes() {
    this.dataStorageService.fetchRecipes();
  }
}
