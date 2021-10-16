import React, { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { es } from 'date-fns/locale';
import { TimePickerDate } from './TimePickerDate';
import { TotalAmount } from './TotalAmount';
import { Buttons } from '../components/Buttons';
import { setDailyAmount } from '../service/storaje';
const locale = es;

export const CalendarRange = () => {

  // Estado para guardar el dia seleccionado del calendario
  // & poder iterar la lista de picker time
  const [selectedDays, setSelectedDays] = useState([]);
  const [itemsTimePicker, setItemsTimePicker] = useState([]);
  //Elementos seleccionados se guarda el objeto con el tiempo
  //Seleccionado precio etc
  const [dateTimeItems, setdateTimeItems] = useState([]);
  const [amount, setAmount] = useState(0);
  //const [pickerTimeAmount, setPickerTimeAmount] = useState([])
  const [price, setprice] = useState({
    valueA: 7,
    valueB: 10,
    valueC: 16,
    valueD: 20
  });

  const handleDayClick = (day, { selected }) => {

    //Se optiene el dia seleccionado en el calendario
    //Para ser utilizado como id para eliminar el elemento del array
    let idDaySelect = day.getDate();
    const selectDays = selectedDays.concat();

    if (selected) {
      const selectedIndex = selectDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );

      selectDays.splice(selectedIndex, 1);

      const priceRest = dateTimeItems.find(item => item.getDate === idDaySelect);
      if (priceRest) {
        let restAmount = amount - priceRest.price;
        setAmount(restAmount);
      }
      const result = dateTimeItems.filter(days => days.getDate !== idDaySelect);
      setdateTimeItems(result);

    } else {
      selectDays.push(day);
    }

    setSelectedDays(selectDays);
  }

  const handleClick = (index) => {

    const indexItem = itemsTimePicker.indexOf(index);
    const newItem = [...itemsTimePicker];

    if (indexItem === -1) {
      newItem.push(index);
      setItemsTimePicker(newItem);
    } else {
      newItem.splice(indexItem, 1);
    }

  }

  const handleSetAmount = amount =>{
    setAmount(amount)
    setDailyAmount(amount)
  }

  return (
    <>
      <div className="container__calendar">
        <DayPicker
          selectedDays={selectedDays}
          onDayClick={handleDayClick}
          locale={locale}
          disabled={true}
          className="calendar"
        />
        <p>Horario</p>
        {selectedDays.map((data, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
          >
            {data.getDate()}
            <TimePickerDate
              getDate={`${data.getDate()}`}
              idDayPicker={index}
              setdateTimeItems={setdateTimeItems}
              dateTimeItems={dateTimeItems}
              price={price}
              setAmount={handleSetAmount}
              amount={amount}
            />
          </li>
        ))}
      </div>
      <div style={{ padding: "1rem" }}>
        <Buttons
          firstName="Atrás"
          secondName="Siguiente"
          firstLink="contrato"
          secondLink="archivos"
        />
      </div>
      <TotalAmount
        amount={amount}
      />
    </>
  )
}