import React, { useState, useEffect } from 'react';
import { getStateLocalStorage, updateStateCheckStorage } from '../utils/localStorage';
import { useLocalStorage } from '../utils/useLocalStorage';

export const PlanMensualCard = ({ setAmount, amount }) => {

    const [arrayDataCard, setArrayDataCard] = useLocalStorage("planMensual",
        [
            {
                id: 0,
                name: 'Paquete vean',
                titleHead: 'Selecciona tu paquete de preferencia.',
                title: 'PaqueTe Vean',
                price: '15000',
                descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonlaoreet dolore magna aliquamerat volutp',
                state: false
            },
            {
                id: 1,
                name: 'Paquete vean',
                titleHead: 'Selecciona tu paquete de preferencia.',
                title: 'PaqueTe Vean',
                price: '15000',
                descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonlaoreet dolore magna aliquamerat volutp',
                state: false
            },
            {
                id: 2,
                name: 'Paquete vean',
                titleHead: 'Selecciona tu paquete de preferencia.',
                title: 'PaqueTe Vean',
                price: '15000',
                descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonlaoreet dolore magna aliquamerat volutp',
                state: false
            }
        ]);

    const [reload, setReload] = useState(false);

    useEffect(() => {
        setReload(false);
    }, [arrayDataCard, reload]);

    const handleSelectCard = (value) => {
        //Busca el elemento en el array para cambiar su estado
        let item = arrayDataCard.find(item => item.id === value);
        let price = item.price;
        let total;
        let bolean;
        const storage = 'planMensual';
        let actualityStorage = getStateLocalStorage('planMensual');

        //Estado inicial del paquete, evita que se puedan elegir mas de
        //Un paquete
        let stateInitial = arrayDataCard.map(items => {
            if (items.id !== value) {
                return {
                    ...items,
                    state: false
                }
            }
            return items;
        });

        setArrayDataCard(stateInitial);

        if (item.state === false) {
            item.state = true;
            bolean = true;
            setReload(true);
            setAmount(price);
            updateStateCheckStorage(storage, value, bolean, actualityStorage);

        } else {
            //setReload(false)
            bolean = false;
            item.state = false;
            setReload(true);
            updateStateCheckStorage(storage, value, bolean, actualityStorage);
            if (amount) {
                total = amount - price;
                setAmount(total);
            }
        }
    }

    return (
        <>
            {
                arrayDataCard.map((data, index) =>

                    <div key={index}>
                        <div
                            className={`${data.state === true ? "card w-100 select__item" : "card w-100"}`}
                            onClick={() => handleSelectCard(index)}
                        >
                            <div className="card-body">
                                <div className="row">
                                    <h5 className="card-title">
                                        PaqueTe Vean
                                    </h5>
                                    <span>$15,000</span>
                                </div>
                                <p className="card-text">
                                    {data.descripcion}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
