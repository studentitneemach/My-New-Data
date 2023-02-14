import React from 'react';
import { createRoot } from 'react-dom/client';
import CardData from './CardData';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './Cart-Data/Store/index';
// console.log(store)

createRoot(document.getElementById('root')).render(
<Provider store ={store}> <CardData /></Provider>

);

// import React, { Fragment } from 'react';
// import { createRoot } from 'react-dom/client';
// import { useSelector } from 'react-redux/es/exports';
// // import { App } from './App';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import {Provider} from 'react-redux';
// import store from './SixFileData/Store/store';
// import MainPage from './SixFileData/DataFile/MaimPage';
// import Header from './SixFileData/DataFile/Header';
// import Auth from './SixFileData/DataFile/Auth';
// import UserProfile from './SixFileData/DataFile/userProfile';
// const App =()=>{
//     const isAuth = useSelector(state => state.authentiction.isAuthenticted)
//     return (
//         <Fragment>
//             <Header />
// {!isAuth && <Auth />}
// {isAuth && <UserProfile />}
// <MainPage />
//         </Fragment>
//     )
// }
// createRoot(document.getElementById('root')).render(
// <Provider store = {store}>
// <App />
// </Provider>
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//////////https://github.com/academind/react-complete-guide-code/tree/19-advanced-redux