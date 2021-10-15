import React from 'react';
import { Buttons } from '../components/Buttons';
import { PlanMensualCard } from '../components/PlanMensualCard';
import { TotalAmount } from '../components/TotalAmount';
import { useLocalStorage } from '../utils/useLocalStorage';

export const PlanMensual = () => {

    const [amount, setAmount] = useLocalStorage('amount', 0);

    return (
        <>
            <div className="container__plan-mensual" >
                <p className="title">¿Cuál es tu plan con Loopita?</p>
                <p className="subtitle__plan-mensual">
                Selecciona el mood que buscas con Loopita
                </p>
                <PlanMensualCard
                    setAmount={setAmount}
                    amount={amount}
                />
                <div className="cont__plan-men">
                    <Buttons
                        firstLink="contrato"
                        firstName="Atrás"
                        secondLink="archivos"
                        secondName="Siguiente"
                    />
                </div>
            </div>
            <TotalAmount
                amount={amount}
            />
        </>
    )
}