import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const clear = createAction('[Counter Component] Clear');