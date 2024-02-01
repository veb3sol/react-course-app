import React, {useState} from 'react'
import './CostForm.css'

const CostForm = () => {
    const [name, setName] = useState('')
    const [sum, setSum] = useState('')
    const [data, setData] = useState('')

    const nameChangeHandler = (event) => {
        // console.log(event) -- много инфы о вводимой в инпут информации
        //console.log(event.target.value) // то что сейчас в поле
        setName(event.target.value) // для сохранения данніх в стейте
    }
    const sumChangeHandler = (event) => {
        setSum(event.target.value)
    }
    const dataChangeHandler = (event) => {
        setData(event.target.value)
    }
    return <form>
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
                <button>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;