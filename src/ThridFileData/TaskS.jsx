import React from "react";
import { Task } from "./Task";
export  const TaskS =({ tasks, handleTaskClick, handleTaskDeletion})=>{
    
    return  (
        tasks.map((task)=>{
         return (
            <React.Fragment>
                     <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
            </React.Fragment>
         )   
        })
    )
}