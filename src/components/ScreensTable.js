import React, { useState } from 'react';
import { getLocalScreen, setLocalScreen } from '../service/storaje';

export const ScreensTable = ({ selectedCheck }) => {
    const listScreenT = [
      {
          id: 1,
          name: 'PantallaRio',
          title: '1 hora',
          service: '12 pm',
          state: false,
          maxPoint: '17:00',
          avgViewers : '1548'
      },
      {
        id: 2,
        name: 'PantallaRio',
        title: '1 hora',
        service: '12 pm',
        state: false,
        maxPoint: '17:00',
        avgViewers : '1440'
      },
      {
        id: 3,
        name: 'PantallaRio',
        title: '1 hora',
        service: '12 pm',
        state: false,
        maxPoint: '14:00',
        avgViewers : '1235'
      },
      {
        id: 4,
        name: 'PantallaRio',
        title: '1 hora',
        service: '12 pm',
        state: false,
        maxPoint: '15:00',
        avgViewers : '899'
      }
  ]


    const [selectedScreen, setScreen] = useState({ id : -1});
    if(getLocalScreen() !== null && getLocalScreen().id !== selectedScreen.id ){
      setScreen(getLocalScreen());
    }
    const isChecked = (value) => {
        console.log(value)
        setLocalScreen(value)
        setScreen(value)
    }

    return (
        <>
            <p className="title__form">
                Que te vean con loopita en
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

                    { listScreenT.map((el, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={el.name}
                                        name="p1"
                                        onChange={() => isChecked(el)}
                                        checked={selectedScreen && selectedScreen.id === el.id}
                                    />
                                </td>
                                <td>{el.name}</td>
                                <td>{el.avgViewers}</td>
                                <td>{el.maxPoint}</td>
                            </tr>

                        ))
                    }


                </tbody>
            </table>
        </>
    );
}