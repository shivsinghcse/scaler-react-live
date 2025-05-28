import React from 'react';

const DisplayData = (props) => {
    return(
        <>
            <ul>
                {
                    props.fruits.map((fruit, index) => {
                        return <li key={index}>{fruit}</li>
                    })
                }
            </ul>
        </>
    )
}

export default DisplayData;