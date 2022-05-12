import axios from "axios";
import { Car } from "../types/cars";

export const getCars = async () => {
  try {
    const response = await axios.get("http://localhost:3005/cars");
    return response.data;
  } catch (e) {
    alert(`Error: ${e}`);
  }
};
export const deleteCar = async (id: number) => {
  await axios.delete(`http://localhost:3005/cars/${id}`);
};
export const changeCar = async (dataCar: Car) => {
  axios.patch(`http://localhost:3005/cars/${dataCar.id}`, dataCar);
};
export const setCar = async (dataCar: Car) => {
  try {
    const id = new Date().getTime();
    const signUpUser = await axios.post(`http://localhost:3005/cars`, {
      id,
      title: dataCar.title,
      price: dataCar.price,
      description: dataCar.description,
      image: dataCar.image,
    });
    return signUpUser.data;
  } catch (e) {
    alert(`Error: ${e}`);
  }
};
