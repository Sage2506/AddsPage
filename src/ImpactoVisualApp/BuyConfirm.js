import React from 'react';
import { Buttons } from '../components/Buttons';
import { BuyForm } from '../components/BuyForm';

export const BuyConfirm = () => {
    return (
        <div className="buy__confirm">
            <p className="buy__title">
                Confirmación de compra
            </p>
            <BuyForm/>
            <Buttons 
                firstName="Atrás"
                secondName="Siguiente"
                firstLink="previsualizacion"
                secondLink="confirmacionCompraMes"
            />
        </div>
    )
}