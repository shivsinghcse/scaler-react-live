import React from 'react';

const DisplayData = ({fruits, person}) => {
    // console.log(props);
    // const {fruits, person} = props;
    console.log(fruits, person);
    
    
    return <>
            {/* <h1>Hi, I'm {props.person.name} a {props.person.profile} and I love {props.fruits[3]}</h1> */}
            {/* <h1>Hi, I'm {person.name} a {person.profile} and I love {fruits[2]}</h1> */}

            <h2>Fruits list:</h2>
            <ul>
                {/* render each fruit from fruits array */}
                {fruits.map((fruit)=>{
                    return <li key={index}>{fruit}</li>
                })}
            </ul>

            <h2>Person info:</h2>
            <p>{person.name}</p>
            <p>{person.profile}</p>
    </>
}

export default DisplayData;
