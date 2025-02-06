

function TempratureDisplay({temperature}) {
    
    const fahrenheit = (temperature * 9) / 5 + 32;
    return (
        <>
            <p>Temprature in Celcius: {temperature}</p>
            <p>Temprature in Fahrenheit: {fahrenheit}</p>
        </>
    );
}

export default TempratureDisplay;
