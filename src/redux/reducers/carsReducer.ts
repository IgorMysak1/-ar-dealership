import { ActionCars, CarsState, Action } from "../../types/cars";

const initialState: CarsState = {
  cars: [],
};

export const carsReducer = (
  state = initialState,
  action: Action
): CarsState => {
  switch (action.type) {
    case ActionCars.LOAD_CARS:
      return { ...state, cars: action.payload };
    case ActionCars.ADD_CARS:
      return { ...state, cars: [...state.cars, action.payload] };
    case ActionCars.REMOVE_CARS:
      return {
        ...state,
        cars: state.cars.filter(({ id }) => id !== action.payload),
      };
    case ActionCars.CHANGE_CARS:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car
        ),
      };
    default:
      return state;
  }
};
