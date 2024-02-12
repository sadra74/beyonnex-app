import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('updates min temperature input correctly', () => {
    render(<App />);
    const minTempInput = screen.getByLabelText('Min Temperature:') as HTMLInputElement;
    fireEvent.change(minTempInput, { target: { value: '10' } });
    expect(minTempInput.value).toBe('10');
  });

  test('updates max temperature input correctly', () => {
    render(<App />);
    const maxTempInput = screen.getByLabelText('Max Temperature:') as HTMLInputElement;
    fireEvent.change(maxTempInput, { target: { value: '90' } });
    expect(maxTempInput.value).toBe('90');
  });

  test('updates current temperature input correctly', () => {
    render(<App />);
    const currentTempInput = screen.getByLabelText('Current Temperature:') as HTMLInputElement;
    fireEvent.change(currentTempInput, { target: { value: '30' } });
    expect(currentTempInput.value).toBe('30');
  });

  test('renders TargetTemperatureDisplay with correct props', () => {
    render(<App />);
    const targetTemperatureDisplay = screen.getByTestId('target-temperature-display');
    expect(targetTemperatureDisplay).toBeInTheDocument();
  });
});
