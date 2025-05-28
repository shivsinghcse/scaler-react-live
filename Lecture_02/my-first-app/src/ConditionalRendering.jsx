import React from 'react';

const ConditionalRendering = ({isLoggedIn, username}) => {
    return (
        <>
        {
            isLoggedIn ? <h1>hello {username}</h1> : <h1>Please, Login first!!</h1>
        }
        </>
    )
}

export default ConditionalRendering;