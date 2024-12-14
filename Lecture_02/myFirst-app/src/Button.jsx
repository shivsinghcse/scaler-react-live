import React from 'react'
// you can write here also
// const handleClick = () => console.log("Button Clicked!")
const Button = (props) => {

    const handleClick = () => console.log("Button Clicked!")
    // const handleClick = () => console.log(props.text)
    return<>
            <button onClick={handleClick}>Click me! & check console</button>
    </>
}

export default Button;