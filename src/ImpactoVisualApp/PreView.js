import React from 'react';
import { PreviewScreenOne } from '../components/PreviewScreenOne';
import { PreviewScreenTwo } from '../components/PreviewScreenTwo';
import { Buttons } from '../components/Buttons';

export const PreView = () => {

    return (
        <div className="contaienr__preview-screen">
            <p className="title__preview">Previsualización</p>
            <p className="sub__title-preview">
                Especificaciones del video. Lorem ipsum dolot sit amet, consectetuer
                adispicing e it, sed diam nonummy nibh.
            </p>
            <PreviewScreenOne />
            <PreviewScreenTwo />
            <Buttons
                firstName="Atrás"
                secondName="Siguiente"
                firstLink="archivos"
                secondLink="compra"
            />
        </div>
    )

}