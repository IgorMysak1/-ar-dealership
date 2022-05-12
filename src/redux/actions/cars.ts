import { ActionCars, Car } from "../../types/cars";
export const loadCarAction = (listCar: Car[]) => ({
  type: ActionCars.LOAD_CARS,
  payload: listCar,
});
export const addCarAction = (aboutCar: Car) => ({
  type: ActionCars.ADD_CARS,
  payload: aboutCar,
});
export const removeCarAction = (id: number) => ({
  type: ActionCars.REMOVE_CARS,
  payload: id,
});
export const changeCarAction = (aboutCar: Car) => ({
  type: ActionCars.CHANGE_CARS,
  payload: aboutCar,
});
