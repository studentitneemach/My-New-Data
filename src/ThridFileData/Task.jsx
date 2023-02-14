import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import './Task.css';
import { useHistory } from 'react-router-dom';

export  const Task =({ task, handleTaskClick, handleTaskDeletion })=>{
    const history = useHistory();

    const  handleTaskDetailsClick=()=>{
        history.push(`/${task.title}`)
    } 

    return(
        <React.Fragment>
             <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
            <div  className="task-title" onClick={() => handleTaskClick(task.id)}>{task.title}</div>
            <div className="buttons-container"> 
                <buttton className="remove-task-button" onClick={()=> handleTaskDeletion(task.id)}>
                    <CgClose />
                </buttton>
                <buttton className="see-task-details-button" onClick={handleTaskDetailsClick}>
                    <CgInfo />
                    </buttton>
            </div>
    </div>
        </React.Fragment>
    )
}