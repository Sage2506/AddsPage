import React, { useState } from 'react';
import { getStateLocalStorage, updateStateCheckStorage } from '../utils/localStorage';
import { useLocalStorage } from '../utils/useLocalStorage';

export const ScreensTable = ({ selectedCheck }) => {

    const [listScreen, setListScreen] = useLocalStorage("dbListScreen",
        [
            {
                id: 1,
                name: 'PantallaRio',
                title: '1 hora',
                service: '12 pm',
                state: false,
            },
            {
                id: 2,
                name: 'PantallaDos',
                title: '1 hora',
                service: '12 pm',
                state: false,
            }
        ]);

    const [stateCheck, setStateCheck] = useState([]);

    const isChecked = (value) => {

        const storage = 'dbListScreen';
        //Valor del check seleccionado
        const currentIndex = stateCheck.indexOf(value);
        //Estate del estado
        const newChecked = [...stateCheck];
        //Busca en el estorage si esta en true o en false 
        const stateItem = listScreen.find(res => res.id === value);
        //Comprueba si esta 
        if (stateItem.state === true) {
            newChecked.splice(currentIndex, 1);
            stateItem.state = false

            let actualityStorage = getStateLocalStorage('dbListScreen');
            updateStateCheckStorage(storage, value, false, actualityStorage);

            setStateCheck(newChecked);

            if (stateCheck.length === 0) {
                selectedCheck(false);
            }

        } else {
            stateItem.state = true;
            newChecked.push(value);

            let actualityStorage = getStateLocalStorage('dbListScreen');
            updateStateCheckStorage(storage, value, true, actualityStorage);

            setStateCheck(newChecked);
            selectedCheck(true);
        }
    }

    return (
        <>
            <p className="title__form">
                Pantallas disponibles
            </p>
            <p className="sb__title_table">
                Selecciona las pantallas
                donde se mostrará tu campaña.
            </p>
            <table className="table table-bordered table__info" align="center">
                <thead>
                    <tr>
                        <th scope="col" style={{ width: '40px' }}></th>
                        <th scope="col">Pantalla</th>
                        <th scope="col">Promedio Tráfico por hora</th>
                        <th scope="col">Hora más concurrida</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listScreen.map((el, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={el.name}
                                        name="p1"
                                        onChange={() => isChecked(el.id)}
                                        checked={el.state}
                                    />
                                </td>
                                <td>{el.name}</td>
                                <td>{el.name}</td>
                                <td>{el.name}</td>
                            </tr>

                        ))
                    }


                </tbody>
            </table>
        </>
    );
}