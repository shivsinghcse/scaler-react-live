import { useEffect, useState } from 'react';
import UserForm from './UserForm';
import ComplexFormData from './ComplexFormData';
import TempratureInput from './TempratureInput';
import TempratureDisplay from './TempratureDisplay';
import GetData from './GetData';
function App() {
    const [counter, setCounter] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const handleTemperatureChange = (newTemp) => {
        setTemperature(newTemp);
    };

    useEffect(() => {
        console.log('Hi', counter);
        document.title = `You clicked ${counter} times.`;
    }, [counter]);
    return (
        <>
        <GetData />
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>

            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <UserForm />
            <ComplexFormData />
            <TempratureInput
                temperature={temperature}
                handleTemperatureChange={handleTemperatureChange}
            />
            <TempratureDisplay temperature={temperature} />
        </>
    );
}

export default App;
