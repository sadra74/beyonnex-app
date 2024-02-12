import React from 'react';
import { render } from '@testing-library/react';
import TargetTemperatureDisplay from './TargetTemperatureDisplay';

describe('TargetTemperatureDisplay Component Tests', () => {
    test('renders TargetTemperatureDisplay with valid props', () => {
        render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={20} />);
    });

    test('displays error message for invalid temperature range', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={30} maxTemp={10} currentTemp={20} />);
        expect(getByText('Max temperature should be greater than min temperature!')).toBeInTheDocument();
    });

    test('displays error message for missing data', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={undefined} maxTemp={20} currentTemp={30} />);
        expect(getByText('Some data are missing!')).toBeInTheDocument();
    });

    test('displays error message for out-of-range temperature', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={35} />);
        expect(getByText('Current temperature is not in the range!')).toBeInTheDocument();
    });

    test('displays current temperature', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={20} />);
        expect(getByText('20°C')).toBeInTheDocument();
    });

    // Additional tests to make it 10
    test('renders TargetTemperatureDisplay with zero temperature range', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={0} maxTemp={0} currentTemp={0} />);
        expect(getByText('Max temperature should be greater than min temperature!')).toBeInTheDocument();
    });

    test('displays error message for missing current temperature', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={10} maxTemp={30} currentTemp={undefined} />);
        expect(getByText('Some data are missing!')).toBeInTheDocument();
    });

    test('displays current temperature at minimum range', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={0} maxTemp={100} currentTemp={0} />);
        expect(getByText('0°C')).toBeInTheDocument();
    });

    test('displays current temperature at maximum range', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={0} maxTemp={100} currentTemp={100} />);
        expect(getByText('100°C')).toBeInTheDocument();
    });

    test('displays current temperature at mid-range', () => {
        const { getByText } = render(<TargetTemperatureDisplay minTemp={0} maxTemp={100} currentTemp={50} />);
        expect(getByText('50°C')).toBeInTheDocument();
    });
});
