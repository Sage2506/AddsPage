import React, { Component } from 'react';
import ButtonsWithMail from '../components/ButtonsWithMail';
import BuyForm from '../components/BuyForm';

export default class BuyConfirm extends Component {
    handleSubmit = () => {
        console.log("handle submit")
    }
    render() {
        return (
            <div className="buy__confirm">
                <p className="buy__title">
                    Confirmación de compra
                </p>
                <BuyForm />
                <ButtonsWithMail
                    firstName="Atrás"
                    secondName="Siguiente"
                    firstLink="previsualizacion"
                    secondLink="finalizacion"
                    handleSubmit={this.handleSubmit}
                />

            </div>
        )
    }
}