import React from 'react';
import { HomePage } from '@/views';
import { GlobalStyles } from '@/styles';

export const App: React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <HomePage />
        </React.Fragment>
    );
};
