import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, useTypedSelector, ActionCars, getCars } from "./index";
import "../style/listOfProducts.scss";

export const ListOfProducts: React.FC = () => {
  const { cars } = useTypedSelector((state) => state.cars);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const response = await getCars();
      dispatch({ type: ActionCars.LOAD_CARS, payload: response });
    })();
  }, []);

  return (
    <div className="listOfProducts">
      {cars
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map(({ title, ...rest }, index) => (
          <Card key={title} title={title} index={index} {...rest} />
        ))}
    </div>
  );
};
