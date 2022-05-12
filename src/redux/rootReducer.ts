import { combineReducers } from "redux";
import { carsReducer } from "./reducers/carsReducer";
export const rootReducer = combineReducers({ cars: carsReducer });

export type RootState = ReturnType<typeof rootReducer>;
