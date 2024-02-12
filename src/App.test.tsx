import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('updates min temperature input correctly', () => {
    const { getByLabelText } = render(<App />);
    const minTempInput = getByLabelText('Min Temperature:');
    fireEvent.change(minTempInput, { target: { value: '10' } });
    expect(minTempInput.value).toBe('10');
  });

  test('updates max temperature input correctly', () => {
    const { getByLabelText } = render(<App />);
    const maxTempInput = getByLabelText('Max Temperature:');
    fireEvent.change(maxTempInput, { target: { value: '90' } });
    expect(maxTempInput.value).toBe('90');
  });

  test('updates current temperature input correctly', () => {
    const { getByLabelText } = render(<App />);
    const currentTempInput = getByLabelText('Current Temperature:');
    fireEvent.change(currentTempInput, { target: { value: '30' } });
    expect(currentTempInput.value).toBe('30');
  });

  test('renders TargetTemperatureDisplay with correct props', () => {
    const { getByTestId } = render(<App />);
    const targetTemperatureDisplay = getByTestId('target-temperature-display');
    expect(targetTemperatureDisplay).toBeInTheDocument();
  });
});
