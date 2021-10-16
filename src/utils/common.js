export const currencyFormat = (num) => {
  if(num !== undefined && num !== null && num !== ''){
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  } else {
    return '$0.00'
  }
}

