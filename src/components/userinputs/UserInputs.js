import React, { useState } from 'react'
import './UserInputs.css'

const UserInputs = () => {
    const [nitrogen, setNitrogen] = useState('')
    const [phosphorus, setPhosphorus] = useState('')
    const [potassium, setPotassium] = useState('')

    const userFormSubmitHandler = (e) => {
        e.preventDefault()
        
        const data = {
            nitrogen: +nitrogen,
            phosphorus: +phosphorus,
            potassium: +potassium
        }

        console.log(data)
    }

    const nitrogenChangeHandler = (e) => {
        setNitrogen(e.target.value)
    }

    const phosphorusChangeHandler = (e) => {
        setPhosphorus(e.target.value)
    }

    const potassiumChangeHandler = (e) => {
        setPotassium(e.target.value)
    }

    return (
        <div className="userInputForm-container">
            <form onSubmit={userFormSubmitHandler} className="flex flex-column userInputForm">
                <label>Nitrogen</label>
                <input onChange={nitrogenChangeHandler} type="number"/>
                <label>Phosphorus</label>
                <input onChange={phosphorusChangeHandler} type="number" />
                <label>Potassium</label>
                <input onChange={potassiumChangeHandler} type="number"/>
                <button value="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default UserInputs