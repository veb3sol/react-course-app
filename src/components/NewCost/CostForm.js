import React, {useState} from 'react'
import './CostForm.css'

const CostForm = (props) => {


    // вариант когда используем 3 состояния
    
    const [inputName, setInputName] = useState('')
    const [inputSum, setInputSum] = useState('')
    const [inputData, setInputData] = useState('')
    const [inputSeeForm, setInputSeeForm] = useState(false)

    const nameChangeHandler = (event) => {
        setInputName(event.target.value) 
    }
    const sumChangeHandler = (event) => {
        setInputSum(event.target.value)
   }
    const dataChangeHandler = (event) => {
        console.log(event.target.value)
        setInputData(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const costData = {
            description: inputName,
            amount: inputSum,
            date: new Date(inputData) 
        } 

        console.log(costData.date)

        // запускаем функцию сохранения данных полученую от родителя
        props.onSaveCostData(costData)

        // для очистки полей формы
        setInputName('')
        setInputSum('')
        setInputData('')

        setInputSeeForm(false)
    }

    const CancelClick = ()=> {
        setInputSeeForm(false)
    }
    const seeForm = ()=> {
        setInputSeeForm(true)
    }

    if(!inputSeeForm){
        return  <div className="new-cost__controls">
        <div className="new-cost__actions">
            <button type='submit' onClick={seeForm}>Заполнить форму</button>
        </div>
    </div>
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
                <input type="date" min='2022-01-03' max='2026-12-31' value={inputData} onChange={dataChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить расход</button>
                <button type='cencel' onClick={CancelClick}>Отмена</button>
            </div>
        </div>
    </form>
}

export default CostForm;