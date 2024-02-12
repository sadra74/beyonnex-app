import React from 'react';
import { render } from '@testing-library/react';
import TargetTemperatureDisplay from './TargetTemperatureDisplay';
import { screen } from '@testing-library/react';

describe('TargetTemperatureDisplay Component Tests', () => {
    test('renders TargetTemperatureDisplay with valid props', () => {
        render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={20} />);
    });

    test('displays error message for invalid temperature range', () => {
        render(<TargetTemperatureDisplay minTemp={30} maxTemp={10} currentTemp={20} />);
        expect(screen.getByText('Max temperature should be greater than min temperature!')).toBeInTheDocument();
    });

    test('displays error message for missing data', () => {
        render(<TargetTemperatureDisplay minTemp={undefined} maxTemp={20} currentTemp={30} />);
        expect(screen.getByText('Some data are missing!')).toBeInTheDocument();
    });

    test('displays error message for out-of-range temperature', () => {
        render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={35} />);
        expect(screen.getByText('Current temperature is not in the range!')).toBeInTheDocument();
    });

    test('displays current temperature', () => {
        render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={20} />);
        expect(screen.getByText('20°C')).toBeInTheDocument();
    });
    
    test('renders TargetTemperatureDisplay with zero temperature range', () => {
        render(<TargetTemperatureDisplay minTemp={0} maxTemp={0} currentTemp={0} />);
        expect(screen.getByText('Max temperature should be greater than min temperature!')).toBeInTheDocument();
    });

    test('displays error message for missing current temperature', () => {
        render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={undefined} />);
        expect(screen.getByText('Some data are missing!')).toBeInTheDocument();
    });

    test('displays current temperature at minimum range', () => {
        render(<TargetTemperatureDisplay minTemp={0} maxTemp={100} currentTemp={0} />);
        expect(screen.getByText('0°C')).toBeInTheDocument();
    });

    test('displays current temperature at maximum range', () => {
        render(<TargetTemperatureDisplay minTemp={0} maxTemp={100} currentTemp={100} />);
        expect(screen.getByText('100°C')).toBeInTheDocument();
    });

    test('displays current temperature at mid-range', () => {
        render(<TargetTemperatureDisplay minTemp={0} maxTemp={100} currentTemp={50} />);
        expect(screen.getByText('50°C')).toBeInTheDocument();
    });
});
