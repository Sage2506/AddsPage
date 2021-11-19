import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ButtonsWithMail from '../components/ButtonsWithMail';
import BuyForm from '../components/BuyForm';
import { getFullData } from '../service/storaje';

export default class BuyConfirm extends Component {
    constructor(props){
        super(props)
        this.state= {
            purchaseConfirmationInfo : {},
            redirect : false
        }
    }

    componentDidMount = () => {
        var fullData = getFullData();
        if(!fullData.clientData.nameClient){
            this.setState({
                redirect:true
            })
        }
    }

    editPurchaseInfo = purchaseInfo =>{
        this.setState({purchaseConfirmationInfo : purchaseInfo})
    }

    handleSubmit = () => {
        var fullData = getFullData();
        var sumarizedData = {...fullData, purchaseInfo: this.state.purchaseConfirmationInfo}
        axios.post('https://loopita.impactovisual.info/api/contact/index.php', sumarizedData).then( response => {
            if(response.data.sent){
                alert('¡Pronto nos contactaremos contigo!')
                this.setState({ redirect: true})
            }
        })
    }
    render() {
        var {redirect} = this.state
        if( redirect ){
            return (<Redirect to="/" />)
        } else{
            const {purchaseConfirmationInfo} =this.state
            return (
            <div className="buy__confirm">
                <p className="buy__title">
                    Confirmación de compra
                </p>
                <BuyForm editPurchaseInfo={this.editPurchaseInfo}/>
                <ButtonsWithMail
                    firstName="Atrás"
                    secondName="Siguiente"
                    firstLink="archivos"
                    secondLink="finalizacion"
                    handleSubmit={this.handleSubmit}
                    submitDisabled= { !purchaseConfirmationInfo.razonSocial || !purchaseConfirmationInfo.rfc || !purchaseConfirmationInfo.direccionFiscal || !purchaseConfirmationInfo.tipoFactura}
                />
            </div>
            )

        }
    }
}