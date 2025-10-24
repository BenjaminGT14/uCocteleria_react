// src/App.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App (spec de ejemplo)', () => {
  it('renderiza algo reconocible (texto del README o header)', () => {
    render(<App />);
    // Ajusta la siguiente línea al texto real que tu App muestra en la UI
    const anyText = screen.queryByText(/uCocteleria/i) || screen.queryByRole('heading');
    expect(anyText).not.toBeNull();
  });
});


