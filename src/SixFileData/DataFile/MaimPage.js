import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {counterActions} from '../Store/store'
import '../../App.css';
// import {DECREMENT,INCRENET,INCRENETBYACTION,TOGGLEBUTTON} from '../Store/store'
const MainPage = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter)
    const showCounter = useSelector (state => state.counter.showCounter)
    return <div className="App-header">
        <h4>counter</h4>
        {showCounter && <span><h1>{counter}</h1></span>}
        <button onClick={() => { dispatch(counterActions.decrent()) }}> <span>-</span></button>
        <button onClick={() => { dispatch(counterActions.incrementbyaction(5)) }}> <span>+5</span></button>
        <button onClick={() => { dispatch(counterActions.increment()) }}> <span>+</span></button>
        <button onClick={() => { dispatch(counterActions.toggleButton()) }}> <span>Toggle Button</span></button>
    </div>
}
export default MainPage;