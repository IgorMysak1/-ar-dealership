import React, { useState } from "react";
import {
  UpdateCar,
  useTypedSelector,
  changeCar,
  changeCarAction,
} from "./index";
import "../style/card.scss";
import { useDispatch } from "react-redux";

interface CardProps {
  index: number;
  title: string;
  price: string;
  description: string;
  image: string;
  width?: string;
  minHeight?: string;
}
export const Card: React.FC<CardProps> = ({
  index,
  title,
  price,
  description,
  image,
  width,
  minHeight,
}) => {
  const [isEditCard, setIsEditCard] = useState<boolean>(false);
  const { cars } = useTypedSelector((state) => state.cars);
  const dispatch = useDispatch();
  return (
    <>
      {isEditCard && (
        <UpdateCar
          dbHandler={(propertiesCard) => changeCar(propertiesCard)}
          dispatchHandler={(propertiesCard) =>
            dispatch(changeCarAction(propertiesCard))
          }
          initialState={cars[index]}
          isOpenModalWindow={setIsEditCard}
        />
      )}
      <div
        className="card"
        onClick={() => setIsEditCard(!isEditCard)}
        style={{ width: width, minHeight: minHeight }}
      >
        <div className="card__image">
          <img src={image} alt={title} />
        </div>
        <div className="card__title">Name: {title}</div>
        <div className="card__price">Price: {`${price}${price && " $"}`}</div>
        <div className="card__description">Description: {description}</div>
      </div>
    </>
  );
};
