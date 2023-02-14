import React from "react";
import { useHistory,useParams } from "react-router-dom";
import { Button } from "./Button";

export  const Task_Details =()=>{
    const  params = useParams();
    const history = useHistory();
    const handleBackButtonClick  =()=> history.goBack();

    return (
        <React.Fragment>
            <div className="back-button-container">
                <Button  onClick={handleBackButtonClick} >Back</Button>
            </div>
            <div className="task-details-container">
             <h2>   {params.taskTitle}</h2>
             <p>The company itself is a very successful company. To be chosen
           Do you see that you owe the pleasure of the praisers to the accusers?</p>
            </div>
        </React.Fragment>
    )
}