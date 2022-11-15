import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, clear } from 'src/app/shared/store/actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  initialState: number;
  count$: Observable<number>;

  constructor(private store: Store) { 

    //@ts-ignore
    this.count$ = this.store.select('count');
  }

  ngOnInit(): void {
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
