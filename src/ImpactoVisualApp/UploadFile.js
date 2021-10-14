import React from 'react';
import { Buttons } from '../components/Buttons';
import { DropFile } from '../components/DropFile';

export const UploadFile = () => {
    return (
        <div className="Drop__file">
            <p className="title__video">Sube tu video</p>
            <p>Especificaciones del video. Lorem ipsum dolot sit amet, consectetuer
                adispicing e it, sed diam nonummy nibh</p>
            <DropFile />
            <Buttons 
                firstLink="planPorDia"
                firstName="atrás"
                secondLink="previsualizacion"
                secondName="Siguiente"              
            />
        </div>
    )
}