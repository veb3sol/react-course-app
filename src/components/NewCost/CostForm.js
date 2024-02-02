import React, {useState} from 'react'
import './CostForm.css'

const CostForm = (props) => {

    // вариант когда используем 3 состояния
    
    const [inputName, setInputName] = useState('')
    const [inputSum, setInputSum] = useState('')
    const [inputData, setInputData] = useState('')

    const nameChangeHandler = (event) => {
        setInputName(event.target.value) 
    }
    const sumChangeHandler = (event) => {
        setInputSum(event.target.value)
   }
    const dataChangeHandler = (event) => {
        setInputData(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const costData = {
            name: inputName,
            sum: inputSum,
            data: new Date(inputData) 
        } 

        // запускаем функцию сохранения донных полученую от родителя
        props.onSaveCostData(costData)

        // для очистки полей формы
        setInputName('')
        setInputSum('')
        setInputData('')
    }
    
    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" min='0.01' step='0.01' value={inputSum} onChange={sumChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" min='2024-01-03' max='20204-12-31' value={inputData} onChange={dataChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;