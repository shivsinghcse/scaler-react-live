import React from 'react';

const MyComponent = (props) => {
    console.log(props.user.name);
    
    return (
        <>
            <h1>{props.message}. Hi, I'm {props.user.name} a {props.user.Profile} </h1>
        </>
    );
};

export default MyComponent;
