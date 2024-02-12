import React from 'react';
import './targetTemperatureDisplay.css';

interface TargetTemperatureDisplayProps {
    minTemp?: number;
    maxTemp?: number;
    currentTemp?: number;
}

const TargetTemperatureDisplay: React.FC<TargetTemperatureDisplayProps> = ({
                                                                               minTemp,
                                                                               maxTemp,
                                                                               currentTemp,
                                                                           }) => {
    if (minTemp === undefined || maxTemp === undefined || currentTemp === undefined ||
        minTemp === null || maxTemp === null || currentTemp === null ||
        isNaN(minTemp) || isNaN(maxTemp) || isNaN(currentTemp)) {
        return <div className="alert">Some data are missing!</div>;
    }
    else if(maxTemp <= minTemp) {
        return <div className="alert">Max temperature should be greater than min temperature!</div>;
    }
    else if(currentTemp > maxTemp || currentTemp < minTemp) {
        return <div className="alert">Current temperature is not in the range!</div>;
    }
    const percentage = ((currentTemp - minTemp) / (maxTemp - minTemp)) * 100;

    return (
        <div data-testid="target-temperature-display" className="parentStyle">
            <div className="clockStyle">
                <div className="legStyle minLegStyle"></div>
                <div className="legStyle maxLegStyle"></div>
                <div
                    className="legStyle targetLineStyle"
                    style={{ rotate: `${28 + (330 - 28) * percentage / 100}deg` }}
                ></div>
            </div>
            <div>{currentTemp}°C</div>
        </div>
    );
};
export default TargetTemperatureDisplay;
