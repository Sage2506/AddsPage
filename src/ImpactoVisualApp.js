import React from 'react';

import { Header } from './components/Header';
import Footer from './components/Footer'
import { AppRouter } from './router/AppRouter';

export const ImpactoVisualApp = () => {
    return (
        <div className="main__container">
            <Header />
            <AppRouter />
            <Footer/>
        </div>
    )
}
