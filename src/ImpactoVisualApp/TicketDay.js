import React from 'react';
import { Buttons } from '../components/Buttons';

export const TicketDay = () => {

    return (
        <div className="ticket__preview">
            <p className="title">Recibo de mes</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Plan por día
                        </th>
                        <th></th>
                        <th>
                            10/sep/21 - 15/sep/21
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="table-active">Nombre</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="table-active">Campaña</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="table-active">Pantallas</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="table-active">Total días</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="table-active">Total horas</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

            <div class="container-price">
                <label for="inputPassword2" class="visually-hidden">Total:</label>
                <input type="text" class="form-control" />
            </div>

            <div>
                <Buttons
                    firstName="Atrás"
                    secondName="Aceptar"
                />
            </div>
        </div>
    )
}