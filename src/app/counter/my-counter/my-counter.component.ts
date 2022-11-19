import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, clear } from 'src/app/shared/store/actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  public count$: Observable<number>;

  public isClearDisabled: boolean = false;

  constructor(private store: Store) { 

    //@ts-ignore
    this.count$ = this.store.select('count');
  }

  ngOnInit(): void {
    this.count$.subscribe(val => {
      if(val <= 0){
        this.isClearDisabled = true;
      } else {
        this.isClearDisabled = false;
      }
    })
  }


  public onIncrement(){
    this.store.dispatch(increment());
  }

  public onDecrement(){
    this.store.dispatch(decrement());
  }

  
  public onClear(){
    this.store.dispatch(clear());
  }

}
