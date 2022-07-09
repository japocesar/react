import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';
// import HelloWorldApp from './HelloWorld';


ReactDOM.createRoot( document.querySelector("#root") ).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title="I'm Batman" /> */}
        { <CounterApp value={ 10 } /> }
    </React.StrictMode>
)
