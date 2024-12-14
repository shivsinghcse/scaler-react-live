import React from 'react'

const ConditionalRendering = ({isLoggedin, username}) => {

    // if isLoggedin = true : hello {username}
    return <>
        <h1>Conditional Rendering</h1>
        {isLoggedin ? <h1>Hi, {username}</h1>
        : <h1>Hello Guest</h1>}
    </>

}

export default ConditionalRendering;