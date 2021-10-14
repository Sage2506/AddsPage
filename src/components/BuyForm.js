import React, { useState } from 'react';

export const BuyForm = () => {

    const [formValues, setValuesForm] = useState({
        razonSocial: '',
        email: '',
        direccionFiscal: '',
        tipoFactura: ''
    });

    const handleChangeValues = ({ target }) => {
        setValuesForm({
            [target.name]: target.value
        })
    }

    return (
        <div className="buy__form">
            <form
                onChange={handleChangeValues}
            >
                <div className="form-group">
                    <label>Razón social</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        name="razonSocial"
                    />
                </div>
                <div className="form-group">
                    <label>RFC</label>
                    <input
                        type="email"
                        className="form-control form-control-sm"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label>Dirección fiscal</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        name="direccionFiscal"
                    />
                </div>

                <div className="form-group ">
                    <label>Tipo de factura</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        name="tipoFactura"
                    />
                </div>
            </form>
        </div>
    )
}