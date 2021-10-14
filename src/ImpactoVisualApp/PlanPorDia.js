import React from 'react';
import { CalendarRange } from '../components/CalendarRange';

export const PlanPorDia = () => {

    return (
        <>
            <div className="title__time">
                <p className="title">
                    Plan por día
                </p>
                <p className="subtitle__plan-mensual">
                    Selecciona las fechas de actividad de tu campaña.
                </p>
            </div>
            <div className="calendar__cont">
                <CalendarRange />
            </div>
        </>
    )
}