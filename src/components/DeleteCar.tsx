import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, deleteCar, removeCarAction, useTypedSelector } from "./index";
import "../style/modalWindow.scss";
import "../style/deleteCar.scss";

interface DeleteCarProps {
  setIsOpenRemoveCar: Dispatch<SetStateAction<boolean>>;
}
export const DeleteCar: React.FC<DeleteCarProps> = ({ setIsOpenRemoveCar }) => {
  const { cars } = useTypedSelector((state) => state.cars);
  const dispatch = useDispatch();
  const removeCar = (id: number): void => {
    dispatch(removeCarAction(id));
    deleteCar(id);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.add("offScroll");
    return () => body?.classList.remove("offScroll");
  }, []);
  return (
    <div className="deleteCar modalWindow">
      <div className="deleteCar__title">
        <h1>Delete all the cards you need</h1>
        <Button
          text="X"
          handler={() => setIsOpenRemoveCar((prev) => !prev)}
        ></Button>
      </div>
      <div className="deleteCar__listCar">
        {cars.map(({ title, id, image }) => (
          <div
            className="deleteCar__car"
            key={title}
            onClick={() => removeCar(id)}
          >
            <div className="deleteCar__wrapper">
              <img src={image} alt={title} />
              <p className="deleteCar__titleCar">{title}</p>
            </div>
            <Button text="delete" handler={() => removeCar(id)} />
          </div>
        ))}
      </div>
    </div>
  );
};
