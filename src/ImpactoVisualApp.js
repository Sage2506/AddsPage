import React from 'react';

import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';

export const ImpactoVisualApp = () => {
    return (
        <>
            <Header />
            <AppRouter />
        </>
    )
}
