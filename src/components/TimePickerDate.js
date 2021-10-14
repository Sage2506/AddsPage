import React from 'react'
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';

export const TimePickerDate = ({
    idDayPicker,
    dateTimeItems,
    setdateTimeItems,
    price,
    amount,
    setAmount,
    getDate
}) => {

    const onChange = (time, timeString) => {

        let valueStart = timeString[0];
        let resStart = valueStart.substr(0, 2);
        let valueEnd = timeString[1];
        let resEnd = valueEnd.substr(0, 2);

        const priceA = 10;
        const priceB = 20;
        const priceC = 30;

        let total = 0;
        //Objeto que contiene las propiedades necesarias para 
        //Logica de precio
        let item = {
            times: timeString,
            id: idDayPicker,
            price: price,
            getDate: parseInt(getDate)
        };

        if (resStart < price.valueA && resEnd <= price.valueB) {
            total = total + amount + priceA;
            setAmount(total);
            item.price = priceA;
        }
        else if (resStart < price.valueB && resEnd <= price.valueC) {
            total = total + amount + priceB;
            setAmount(total);
            item.price = priceB;
        }
        else if (resStart < price.valueC && resEnd <= price.valueD) {
            total = total + amount + priceC;
            setAmount(total);
            item.price = priceC;
        } else {
            total = total + priceA + priceB + priceC;
            setAmount(total);
            item.price = total;
        }

        const arrayData = dateTimeItems.concat();

        let { times } = item;

        const res = dateTimeItems.find(data => data.id === idDayPicker);

        if (res) {

            const arrayItems = dateTimeItems.map(items => {
                if (items.id === idDayPicker) {
                    return {
                        ...items,
                        times: times
                    }
                }
                return items;
            })
            setdateTimeItems(arrayItems);

        } else {
            arrayData.push(item);
            setdateTimeItems(arrayData);
        }

    }

    return (
        <div>
            <TimePicker.RangePicker
                onChange={onChange}
            />
        </div>
    )
}


