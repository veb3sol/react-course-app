import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id:1,
    date: new Date(2024, 2, 15),
    description: "Холодильничек",
    amount: 500,
  },
  {
    id:2,
    date: new Date(2024, 5, 1),
    description: "Телевизор",
    amount: 400,
  },
  {
    id:3,
    date: new Date(2024, 7, 18),
    description: "Джинсы",
    amount: 300,
  },
];

function App() {

  const [costik, setCost] = useState(INITIAL_COST)

  const addCostHandler = (cost) => {
    cost.id = costik.length + 1
    // setCost([cost, ...costik])  --- неправильно!!!
    
    setCost( prevCost => {         // prevCost - предыдущее состояние
      return[cost, ...prevCost]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costik} />
    </div>
  );
}
export default App;
