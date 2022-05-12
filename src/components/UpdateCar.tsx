import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, InputText, addCarAction, Car } from "./index";
import "../style/modalWindow.scss";
import "../style/updateCar.scss";

interface UpdateCarProps {
  isOpenModalWindow: Dispatch<SetStateAction<boolean>>;
  initialState?: Car;
  dbHandler: ({}: Car) => void;
  dispatchHandler: ({}: Car) => void;
}
interface ValidProperties {
  title: boolean;
  price: boolean;
  description: boolean;
}

export const UpdateCar: React.FC<UpdateCarProps> = ({
  isOpenModalWindow,
  dbHandler,
  dispatchHandler,
  initialState = {
    id: 0,
    title: "",
    price: "",
    description: "",
    image: "img/silhouette.jpg",
  } as Car,
}) => {
  const dispatch = useDispatch();
  const [propertiesCard, setPropertiesCard] = useState(initialState);
  const [validProperties, setvalidProperties] = useState<ValidProperties>({
    title: true,
    price: true,
    description: true,
  });
  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.add("offScroll");
    return () => body?.classList.remove("offScroll");
  }, []);
  const onChangeInputFile: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    if (e.target.files) {
      setPropertiesCard({
        ...propertiesCard,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const updateCar = async () => {
    const isValid = {
      title: !!propertiesCard.title,
      price: !!propertiesCard.price,
      description: !!propertiesCard.description,
      image: !!propertiesCard.image,
    };
    setvalidProperties(isValid);
    if (Object.values(isValid).every(Boolean)) {
      dispatchHandler(propertiesCard);
      dbHandler(propertiesCard);
      isOpenModalWindow(false);
    }
  };
  return (
    <div className="updateCar modalWindow">
      <div className="updateCar__title">
        <h1>Add your car</h1>
        <Button
          text="X"
          handler={() => isOpenModalWindow((prev) => !prev)}
        ></Button>
      </div>
      <div className="updateCar__content content-updateCar">
        <div className="updateCar__card">
          <Card
            index={0}
            title={propertiesCard.title}
            price={propertiesCard.price}
            image={propertiesCard.image}
            description={propertiesCard.description}
            width="100%"
            minHeight="450px"
          />
        </div>
        <div className="content-updateCar__create">
          <h1 className="content-updateCar__title">Fill Card</h1>
          <InputText
            value={propertiesCard.title}
            onChangeHandler={(value) =>
              setPropertiesCard({ ...propertiesCard, title: value })
            }
            placeholder="Caaaaar"
            description="Name of car"
            valid={validProperties.title}
          />
          <InputText
            value={propertiesCard.price}
            onChangeHandler={(value) =>
              setPropertiesCard({ ...propertiesCard, price: value })
            }
            placeholder="$$$$$"
            description="Price"
            valid={validProperties.price}
          />
          <InputText
            value={propertiesCard.description}
            onChangeHandler={(value) =>
              setPropertiesCard({
                ...propertiesCard,
                description: value,
              })
            }
            maxLength={800}
            placeholder="top car"
            description="Description"
            valid={validProperties.description}
          />
          <div className="content-updateCar__file">
            <label htmlFor="files">
              <img src="img/file.svg" alt="File" />
              <p>Click</p>
            </label>
            <input
              id="files"
              type="file"
              size={5242880}
              onChange={onChangeInputFile}
            />
          </div>
          <div className="content-updateCar__btns">
            <Button
              text="Cancel"
              handler={() => isOpenModalWindow((prev) => !prev)}
              margin="0 15px 0 0"
            />
            <Button
              text="Add"
              handler={() => updateCar()}
              margin="0 0 0 15px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
