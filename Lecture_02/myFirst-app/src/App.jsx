import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyComponent from './MyComponent';
import DisplayData from './DisplayData';

function App() {
    const fruits = ['apple', 'banana', 'grapes', 'orange', 'Mango'];
    const person = { name: 'jon', profile: 'Dev' };
    return (
        <>
            {/* <MyComponent
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
            /> */}
            {/* <MyComponent />*/}

            <h2>Props example with Array</h2>
            <DisplayData fruits = {fruits} person = {person} />
        </>
    );
}

export default App;
