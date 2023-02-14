import React,{useState,useEffect} from "react";
import './IndexFile.css';
import {v4 as uuidv4} from  'uuid';
import axios from 'axios';
import {Router,Route} from 'react-router-dom';
import { Header } from "./Header";
import { AddTask } from "./AddTask";
import { Task_Details } from "./Task_Detail";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { TaskS } from "./TaskS";
import history from './History';
export  const IndexFile =()=>{
    const [tasks,setTasks]  = useState([]);
    useEffect(()=>{
        const fetchtask = async()=>{
            const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
            setTasks(data)
        }
        fetchtask();
    },[])

    const handleTaskClick =(taskId)=>{
        const newTasks = tasks.map((task)=>{
            if(task.id === taskId) return { ...task ,completed: !task.completed };
            return task;
        })
        setTasks(newTasks)
    }

const handleTaskAddition  =(taskTitle)=>{
    const newTasks = [
        {
            title: taskTitle,
        id: uuidv4(),
        completed: false,
        },
    ]
    setTasks(newTasks)
}

const handleTaskDeletion  =(taskId)=>{
    const newTasks = tasks.filter((task)=> task.id !== taskId);
    setTasks(newTasks)
}

const RenderClick=()=>{
  return <>
        <AddTask handleTaskAddition={handleTaskAddition}  />
        <TaskS
            tasks={tasks}
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
          />
        </>
}

const Taskdetailcalll=()=>{
    return <Task_Details />
}
    return(  <Router>
            <div className="container">
       <Header />
{/*        
      <Route 
        path='/' exact 
        render={()=>(
            <>
            <AddTask handleTaskAddition={handleTaskAddition}  />
            <TaskS
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
        )}
       />
       

       <Route path="/:taskTitle" exact component={Task_Details} /> */}

       <button onClick={()=>{
        history.push('/')
        RenderClick();
       }} />
          <button onClick={()=>{
        history.push('/:taskTitle')
        Taskdetailcalll();
       }} />
    </div>
        
        </Router>
        )
}