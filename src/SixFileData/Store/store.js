import  { createSlice,configureStore } from '@reduxjs/toolkit';

const initialCounterState = {counter : 0 ,showCounter : true };
 const counterSlice =  createSlice({
   name:'counter',
    initialState : initialCounterState,
    reducers:   {
        increment(state){
            state.counter++;
        },
        incrementbyaction(state,action){
            state.counter =  state.counter + action.payload;
        },
        decrent(state){
            state.counter--;
        },
        toggleButton(state){
            state.showCounter  = !state.showCounter;
        }
    }
});
const initialAuthState = {
    isAuthenticted : false
}
const authentSlice = createSlice({
    name :"authentiction",
    initialState :initialAuthState, 
    reducers:{
        login(state){
            state.isAuthenticted = true;
        },
        logOut(state){
            state.isAuthenticted = false;
        }
    }
})
// const countReducer =(state = initialState , action )=>{
    
//     if(action.type === 'increment'){
//         state.counter++
//         return {
//             counter : state.counter,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'incrementbyaction'){
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter
//         }
//     }
//     (action.type === 'decrent' ){
//         return {
//             counter : state.counter - 1 ,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'toggleButton'){
//         return {
//             showCounter: !state.showCounter,
//             counter : state.counter
//         }
//     }
//     return state;
// }
// const store = createStore(countReducer);
const store = configureStore({
    reducer: { counter :counterSlice.reducer, authentiction : authentSlice.reducer}
});
export const counterActions = counterSlice.actions ; 
export const authenticActions = authentSlice.actions ; 
export default store;