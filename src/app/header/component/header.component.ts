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
  private unsubscribe$: Subject<void>;
  public isAuthenticated: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthServiceComponent
  ) {}

  ngOnInit(): void {
    this.authService.user
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(user => {
        this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public saveRecipes(): void {
    this.dataStorageService.storeRecipes();
  }

  public fetchRecipes() {
    this.dataStorageService.fetchRecipes();
  }
}
