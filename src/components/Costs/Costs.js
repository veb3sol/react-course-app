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
        {props.costs.map(cost => {
          console.log(cost.id)
          return (<CostItem
                                  key={cost.id}
                                  date={cost.date}
                                  description={cost.description}
                                  amount={cost.amount}
                  />)})}

        
      
     
    </Card>
    
    
  );
}

export default Costs;
