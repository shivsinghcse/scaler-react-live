import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <MyComponent
                message="Hello, I am a component1"
                user={{ name: 'Shiv Singh', Profile: 'Dev' }}
            />
            <MyComponent
                message="Hi, I am 2nd"
                user={{ name: 'Shiv Singh', Profile: 'Dev' }}
            />
            <MyComponent
                message="Hola! I am last"
                user={{ name: 'Shiv Singh', Profile: 'Dev' }}
            />
            {/* <MyComponent />*/}
        </>
    );
}

export default App;
