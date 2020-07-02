import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import newStore from './newStore';
import { BrowserRouter } from 'react-router-dom';



  // const renderDomEliment=()=>{
     ReactDOM.render (   <BrowserRouter>
    <Provider store={newStore}><App /> </Provider></BrowserRouter >, document.getElementById('root'));
    
        
// }
// store.subscribe(renderDomEliment) 

// renderDomEliment()





