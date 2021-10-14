import React from 'react'

export const TotalAmount = ({ amount }) => {
    return (
        <div className="total__amount">
            <p className="total">Total:</p>
            <div className="bx-amount">
                <p>$</p><p className="amoun__cant">{amount}</p>
            </div>
        </div>
    )
}
