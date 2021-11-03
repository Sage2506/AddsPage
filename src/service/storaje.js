let fileAdd = null
let selectedScreen = null
let dailyAmount = null

const serviceData = {
  mensualPlan : { id: -1},
  dailyPlan : {
    selectedDays : []
  },
  screenSelected : {},
  clientData : {}

}

export const setLocalFileAdd = (file) => {
  fileAdd = file
}

export const getLocalFileAdd = () => {
  return fileAdd
}

export const setLocalScreen = (screen) => {
  selectedScreen = screen
  serviceData.screenSelected = screen
}

export const getLocalScreen = () => {
  return selectedScreen
}

export const setSelectedPlan = (servicePlan) => {
  serviceData.mensualPlan = servicePlan
}

export const getSelectedPlan = () => {
  return serviceData.mensualPlan
}

export const setDailyAmount = amount => {
  dailyAmount = amount
  serviceData.dailyPlan = amount
}

export const getDailyAmount = () => {
  return dailyAmount
}

export const addSelectedDate = date => {
  serviceData.dailyPlan.selectedDays.push(date)
}

export const getSelectedDates = () =>{
  return serviceData.dailyPlan.selectedDays;
}

export const removeSelectedDate = date => {
  let { selectedDays } = serviceData.dailyPlan
  serviceData.dailyPlan.selectedDays = selectedDays.filter( selectedDate => selectedDate.stringDate !== date)
}

export const alterDateHours = date => {
  let { selectedDays } = serviceData.dailyPlan
  var updateDate = selectedDays.findIndex( selectedDate => selectedDate.stringDate === date.stringDate)
  serviceData.dailyPlan.selectedDays[updateDate] = date
}

export const setClient = client => {
  serviceData.clientData = client
}

export const getClient = () => {
  return serviceData.clientData
}