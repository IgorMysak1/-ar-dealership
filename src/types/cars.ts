export enum ActionCars {
  LOAD_CARS = "LOAD_CARS",
  ADD_CARS = "ADD_CARS",
  REMOVE_CARS = "REMOVE_CARS",
  CHANGE_CARS = "CHANGE_CARS",
}
export interface Car {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

interface LoadCars {
  type: ActionCars.LOAD_CARS;
  payload: Car[];
}
interface AddCars {
  type: ActionCars.ADD_CARS;
  payload: Car;
}
interface RemoveCars {
  type: ActionCars.REMOVE_CARS;
  payload: number;
}
interface ChangeCars {
  type: ActionCars.CHANGE_CARS;
  payload: Car;
}
export interface CarsState {
  cars: Car[];
}
export type Action = AddCars | RemoveCars | LoadCars | ChangeCars;
