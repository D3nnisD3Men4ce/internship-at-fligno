import './bootstrap'
import React from 'react';
import ReactDOM from 'react-dom/client';

// import Login from './auth/login';


const root = ReactDOM.createRoot(document.getElementById("app"));

const Index = () => {

    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

root.render(<Index />);