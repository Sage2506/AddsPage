import React, { useState, useEffect } from 'react';
import { getSelectedPlan, setSelectedPlan } from '../service/storaje';
import { getStateLocalStorage, updateStateCheckStorage } from '../utils/localStorage';
import { useLocalStorage } from '../utils/useLocalStorage';

export const PlanMensualCard = ({ setAmount, amount }) => {
    const plansCard = [{
                          id: 0,
                          name: 'Que me vean con Loopita',
                          titleHead: 'Selecciona tu paquete de preferencia.',
                          title: 'PaqueTe Vean',
                          price: '15000',
                          descripcion: 'Loopita tiene un plan semanal para ti, conoce sus beneficios',
                          state: false
                      },
                      {
                          id: 1,
                          name: 'Que me recuerden con Loopita',
                          titleHead: 'Selecciona tu paquete de preferencia.',
                          title: 'PaqueTe Vean',
                          price: '15000',
                          descripcion: 'Loopita tiene un plan mensual para ti, conoce sus beneficios',
                          state: false
                      },
                      {
                          id: 2,
                          name: 'Todo con Loopita',
                          titleHead: 'Selecciona tu paquete de preferencia.',
                          title: 'PaqueTe Vean',
                          price: '15000',
                          descripcion: 'Conoce el plan mensual y los complementos que Loopita tiene para ti',
                          state: false
                      }]
    const [arrayDataCard, setArrayDataCard] = useLocalStorage("planMensual",
        [
            {
                id: 0,
                name: 'Que me vean con Loopita',
                titleHead: 'Selecciona tu paquete de preferencia.',
                title: 'PaqueTe Vean',
                price: '15000',
                descripcion: 'Loopita tiene un plan semanal para ti, conoce sus beneficios',
                state: false
            },
            {
                id: 1,
                name: 'Que me recuerden con Loopita',
                titleHead: 'Selecciona tu paquete de preferencia.',
                title: 'PaqueTe Vean',
                price: '15000',
                descripcion: 'Loopita tiene un plan mensual para ti, conoce sus beneficios',
                state: false
            },
            {
                id: 2,
                name: 'Todo con Loopita',
                titleHead: 'Selecciona tu paquete de preferencia.',
                title: 'PaqueTe Vean',
                price: '15000',
                descripcion: 'Conoce el plan mensual y los complementos que Loopita tiene para ti',
                state: false
            }
        ]);
    const [selectedPlan, setServicePlan] = useState({id: -1})
    if( getSelectedPlan().id !== -1 && getSelectedPlan().id !== selectedPlan.id){
      setServicePlan(getSelectedPlan())
    }
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setReload(false);
    }, [arrayDataCard, reload]);

    const handleSelectCard = (value) => {
        setSelectedPlan(value)
        setServicePlan(value)
        //Busca el elemento en el array para cambiar su estado
       /*  let item = arrayDataCard.find(item => item.id === value);
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
        } */
    }

    return (
        <>
            {
                plansCard.map((data, index) =>

                    <div key={index}>
                        <div
                            className={`${selectedPlan.id === data.id ? "card w-100 select__item" : "card w-100"}`}
                            onClick={() => handleSelectCard(data)}
                        >
                            <div className="card-body">
                                <div className="row">
                                    <h5 className="card-title">
                                        {data.name}
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
