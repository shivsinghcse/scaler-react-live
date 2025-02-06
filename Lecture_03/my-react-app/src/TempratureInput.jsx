import React from 'react';
function TempratureInput({ temperature, handleTemperatureChange }) {
    return (
        <>
            <h1>Temprature App</h1>
            <input
                type="number"
                value={temperature}
                onChange={(e) => handleTemperatureChange(e.target.value)}
            />
        </>
    );
}

export default TempratureInput;
