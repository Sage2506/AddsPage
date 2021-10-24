import React, { Component } from 'react';

export default class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      razonSocial: '',
    email: '',
    direccionFiscal: '',
    tipoFactura: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render (  ) {
    const { handleInputChange, state } = this
    const { razonSocial, email, direccionFiscal, tipoFactura } = state
    return(
      <div className="buy__form">
      <form>
          <div className="form-group">
              <label>Razón social</label>
              <input
                  type="text"
                  className="form-control form-control-sm"
                  name="razonSocial"
                  onChange={handleInputChange}
                  value={razonSocial}
              />
          </div>
          <div className="form-group">
              <label>RFC</label>
              <input
                  type="email"
                  className="form-control form-control-sm"
                  name="email"
                  onChange={handleInputChange}
                  value={email}
              />
          </div>
          <div className="form-group">
              <label>Dirección fiscal</label>
              <input
                  type="text"
                  className="form-control form-control-sm"
                  name="direccionFiscal"
                  onChange={handleInputChange}
                  value={direccionFiscal}
              />
          </div>

          <div className="form-group ">
              <label>Tipo de factura</label>
              <input
                  type="text"
                  className="form-control form-control-sm"
                  name="tipoFactura"
                  onChange={handleInputChange}
                  value={tipoFactura}
              />
          </div>
      </form>
  </div>
    );
  }
}