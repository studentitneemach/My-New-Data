import React, { useState } from "react";
import './AddTask.css';
import { toast } from 'react-toastify';
import { Button } from "./Button";
export const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState([]);

    const OnChangeData = (e) => setInputData(e.target.value);

    const handleAddTaskClick = () => {
        if (inputData === "") {
            toast.info('Can not Add Blank Task');
            return;
        } else {
            handleTaskAddition(inputData)
            setInputData('')
        }
    }
    document.addEventListener('keydown', (e) => {
        if (inputData === "" && e.key === "Enter") {
            return setInputData("")
        }
        if (e.key === "Enter") {
            handleTaskAddition(inputData)
            setInputData("")
        }
    })

    return <div className="add-task-container">
        <input value={inputData} onChange={OnChangeData} className="add-task-input" type="text" />
        <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Add</Button>
        </div>
    </div>
}