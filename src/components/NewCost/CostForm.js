import React, {useState} from 'react'
import './CostForm.css'

const CostForm = () => {

    // вариант когда используем 3 состояния
    
    const [inputName, setInputName] = useState('')
    const [inputSum, setInputSum] = useState('')
    const [inputData, setInputData] = useState('')


    // вариант использования 1 состояния
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     sum: '',
    //     data: ''
    // })

    
    const nameChangeHandler = (event) => {
        // console.log(event) -- много инфы о вводимой в инпут информации
        // console.log(event.target.value) // то что сейчас в поле
        setInputName(event.target.value) // для сохранения данніх в стейте
        
        // setUserInput({
        //     ...userInput,        //перезаписать старые данные
        //     name: event.target.value,       // обновить это поле
        // })
    }
    const sumChangeHandler = (event) => {
        setInputSum(event.target.value)
        // setInputSum((previusState) => {
        //     return {
        //         ...previusState,
        //         name: event.target.value
        //     }
        // })
        
    }
    const dataChangeHandler = (event) => {
        setInputData(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // создаем обьект с текущими данными с полей
        const costData = {
            name: inputName,
            sum: inputSum,
            data: new Date(inputData) 
        } 

        console.log(costData)
    }
    
    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type="text" onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" min='0.01' step='0.01' onChange={sumChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" min='2024-01-03' max='20204-12-31' onChange={dataChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;