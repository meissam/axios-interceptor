import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles';
import { App } from './App';

// index.js is the entry point
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
