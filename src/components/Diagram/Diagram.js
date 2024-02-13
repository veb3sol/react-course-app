import DiagramBar from "./DiagramBar"
import './Diagram.css'

const Diagram = (props) => {
    // получаем масив значений раскодов по месяцам за год
    const dataSetsValue = props.dataSets.map(dataSet => dataSet.value)

    // среди значений расходов за каждый месяц в году ищем максимальное значение
    const maxMonthCost = Math.max(...dataSetsValue)
    // ...dataSetsValue -- что бы с масива получить переменные разделенные запятыми


return <div className="diagram">
    {props.dataSets.map(dataSet => <DiagramBar
                                    key = {dataSet.label} 
                                    value = {dataSet.value} 
                                    maxValue = {maxMonthCost}
                                    label={dataSet.label}
                                    />)}
</div>
}

export default Diagram