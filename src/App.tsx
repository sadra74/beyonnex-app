import React, {useState} from 'react';
import './App.css';
import TargetTemperatureDisplay from "./TargetTemperatureDisplay/TargetTemperatureDisplay";

function App() {
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(100);
    const [currentTemp, setCurrentTemp] = useState(50);

    return (
        <div className='container'>
            <div className="input-group">
                <label htmlFor="minTemp" className={'min'}>Min Temperature:</label>
                <input
                    step={0.01}
                    type="number"
                    id="minTemp"
                    value={minTemp}
                    onChange={(e) => setMinTemp(parseFloat(e.target.value))}
                    placeholder="Enter min temperature"
                />
            </div>
            <div className="input-group">
                <label htmlFor="currentTemp">Current Temperature:</label>
                <input
                    step={0.01}
                    type="number"
                    id="currentTemp"
                    value={currentTemp}
                    onChange={(e) => setCurrentTemp(parseFloat(e.target.value))}
                    placeholder="Enter current temperature"
                />
            </div>
            <div className="input-group">
                <label htmlFor="maxTemp" className={'max'}>Max Temperature:</label>
                <input
                    step={0.01}
                    type="number"
                    id="maxTemp"
                    value={maxTemp}
                    onChange={(e) => setMaxTemp(parseFloat(e.target.value))}
                    placeholder="Enter max temperature"
                />
            </div>
            <TargetTemperatureDisplay
                minTemp={minTemp}
                maxTemp={maxTemp}
                currentTemp={currentTemp}
            />
        </div>
    );
}

export default App;
