import React from 'react';
import {getFullData} from '../service/storaje'
export const Ending = () => {
    const serviceData = getFullData()
    console.log(serviceData)
    return (
        <div className="ending__container">
            <p className="title__ending">Finalización</p>
            <div>
                <div className="msn__ending">
                    <p>¡Todo está listo, ahora vas en grande con Loopita!</p>
                    <p>En unos momentos nos comunicamos contigo para dar seguimiento a tu proyecto.</p>
                </div>
                <div className="btn__end ">
                    <button
                        className="btn btn-md btn-primary"
                    >
                        Terminar

                    </button>
                </div>
            </div>
        </div>
    )
}