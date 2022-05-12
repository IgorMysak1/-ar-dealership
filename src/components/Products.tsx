import React, { useState } from "react";
import {
  Button,
  ListOfProducts,
  UpdateCar,
  DeleteCar,
  setCar,
  addCarAction,
} from "./index";
import "../style/products.scss";
import { useDispatch } from "react-redux";

export const Products: React.FC = () => {
  const [isOpenUpdateCar, setIsOpenUpdateCar] = useState<boolean>(false);
  const [isOpenRemoveCar, setIsOpenRemoveCar] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div className="products">
      <div className={isOpenUpdateCar || isOpenRemoveCar ? "shadow" : ""}></div>
      <div className="products__header">
        <h1 className="products__title">Choose your favorite car</h1>
        <div className="products__btn">
          <Button
            text="Add"
            handler={() => setIsOpenUpdateCar(!isOpenUpdateCar)}
            margin="0 20px 0 0"
          />
          <Button
            text="Delete"
            handler={() => setIsOpenRemoveCar(!isOpenRemoveCar)}
          />
        </div>
      </div>
      <ListOfProducts />
      {isOpenUpdateCar && (
        <UpdateCar
          dbHandler={(propertiesCard) => setCar(propertiesCard)}
          dispatchHandler={(propertiesCard) =>
            dispatch(addCarAction(propertiesCard))
          }
          isOpenModalWindow={setIsOpenUpdateCar}
        />
      )}
      {isOpenRemoveCar && <DeleteCar setIsOpenRemoveCar={setIsOpenRemoveCar} />}
    </div>
  );
};
