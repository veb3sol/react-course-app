import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function CostItem(props) {

  // useState() -- вызывается в компоненте до ретурна, не может вызываться в других функциях
  // хук вызывает перерисовку этого компонента при изменении данных
  // параметр - начальное значение

  const [description, setDescription] = useState(props.description)
  // description - текущее значение состояния
  // setDescription - функция для изменения переменной


  const changeDescriptionHandler = () => {
    setDescription('Комбайн')
  }
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Изменить описание</button>
    </Card>
  );
}

export default CostItem;
