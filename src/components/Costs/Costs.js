import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import "./Costs.css";
import { useState } from "react";

function Costs(props) {
  const years = {
    y: 2021
  }
  const[myYear, setMyYear] = useState(years.y)
  const onChangeYear = (year) => {
    setMyYear(year)
    years.y = year
    console.log(years)
  }
  return (
    
      <Card className="costs">
        <CostsFilter onChangeYear={onChangeYear} year={myYear}/>
      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      />
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      />
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      />
    </Card>
    
    
  );
}

export default Costs;
