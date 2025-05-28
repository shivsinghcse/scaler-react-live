import React from 'react'



function Button() {
    function buttonclicked(){
        console.log("button clicked")
    }
  return (
    <>
        <button onClick={buttonclicked}>Click me and check console</button>
        {/* <button onClick={buttonclicked()}>Click me and check console</button> */}
    </>
  )
}

export default Button