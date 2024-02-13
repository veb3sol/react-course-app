
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import "./Costs.css";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

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
  const yearCosts = props.costs.filter(cost => cost.date.getFullYear() === +myYear)

 

  return (
    
      <Card className="costs">
        <CostsFilter onChangeYear={onChangeYear} year={myYear}/> 
        <CostsDiagram costs = {yearCosts}/>  
        <CostList costs={yearCosts} />
    </Card>
    
    
  );
}

export default Costs;
