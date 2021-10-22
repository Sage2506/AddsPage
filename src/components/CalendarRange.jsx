import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { es } from 'date-fns/locale';
import TimePickerDate from './TimePickerDate';
import { TotalAmount } from './TotalAmount';
import { Buttons } from '../components/Buttons';
import { addSelectedDate, getSelectedDates, removeSelectedDate, setDailyAmount } from '../service/storaje';
const locale = es;

export default class CalendarRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDays : [],
      itemsTimePicker : [],
      dateTimeItems: [],
      amount : 0,
      price : {
        valueA: 50,
        valueB: 75
      }
    }
  }

  componentDidMount = () => {
  }

  handleDayClick = (day, { selected }) => {
    let dayParsed = day.getDate();
    if (dayParsed < 10) {
      dayParsed = '0' + dayParsed
    } else {
      dayParsed = dayParsed.toString()
    }
    let monthParsed = day.getMonth();
    if (monthParsed < 10) {
      monthParsed = '0' + monthParsed
    } else {
      monthParsed = monthParsed.toString()
    }
    const year = day.getFullYear();
    const parsedDate = dayParsed + '-' + monthParsed + '-' + year
    // cuando viene selected borrarlo de la lista, cuando viene undefined agregarlo
    const selectDays = this.state.selectedDays.concat()
    if( selected ){
      const selectedIndex = selectDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectDays.splice(selectedIndex, 1);
      removeSelectedDate(parsedDate)
    } else {
      selectDays.push(day)
      var newAddDate = {
        stringDate: parsedDate,
        startHour: 0,
        endHour: 1
      }
      addSelectedDate(newAddDate)
    }
    this.setState({
      selectedDays : selectDays
    })
  }

  setAmount = () => {
    console.log('make calculation')
    console.log(this.state.selectedAddItems)
    return 100
  }

  render (  ) {
    const { selectedDays, dateTimeItems, price, amount, selectedAddItems } = this.state
    console.log('selectedDays on render: ', selectedDays)
    return(
      <>
      <div className="container__calendar">
        <DayPicker
          selectedDays={selectedDays}
          onDayClick={this.handleDayClick}
          locale={locale}
          disabled={true}
          className="calendar"
        />
        <p>Horario</p>
        {getSelectedDates().map((data, index) => (
          <li
            key={index}
          >
            <TimePickerDate
              getDate={data}
              idDayPicker={index}
              dateTimeItems={dateTimeItems}
              price={price}
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
        amount={this.setAmount()}
      />
    </>
    );
  }
}