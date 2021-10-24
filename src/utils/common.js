export const currencyFormat = (num) => {
  if (num !== undefined && num !== null && num !== '') {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  } else {
    return '$0.00'
  }
}

export const calculateDailyServiceTotals = (dailyData) => {
  const price = {
    valueA: 50,
    valueB: 75
  }
  let lowHours = 0, highHours = 0
  dailyData.forEach(dayConfig => {
    const { startHour, endHour } = dayConfig
    if (endHour <= 16) {
      // calculando horas bajo
      lowHours += endHour - startHour
    } else if (startHour >= 16) {
      // calculando horas sobre
      highHours = endHour - startHour
    } else {
      lowHours += 16 - startHour
      highHours += endHour - 16
    }
  });
  const minTotal = lowHours * price.valueA, maxTotal = highHours * price.valueB
  const totalHours = lowHours + highHours;
  const total = maxTotal + minTotal
  return { total, minTotal, maxTotal, totalHours, lowHours, highHours }
}
