import React from "react";
import DisplayData from './DisplayData';


const MyComponent = (props) => {
    // console.log(props); // props is an JS object
    const fruits = ['apple', 'banana', 'Mango', 'Orange'];
    const person  = {name: 'Jon', profile: 'Dev'};
    
    return (
        <>
        {/* <h1>Hi, this is my {props.order} component!!</h1> */}
        <DisplayData fruits={fruits} person={person} />
       
        </>
    )
}

export default MyComponent;