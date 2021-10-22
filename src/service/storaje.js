let fileAdd = null
let selectedScreen = null
let selectedPlan = { id : -1}
let dailyAmount = null

const serviceData = {
  mensualPlan : {},
  dailyPlan : {
    selectedDays : []
  },
  screenSelected : {},

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
  selectedPlan = servicePlan
  serviceData.selectedPlan = servicePlan
}

export const getSelectedPlan = () => {
  return selectedPlan;
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
  var updateDate = selectedDays.find( selectedDate => selectedDate.stringDate === date.stringDate)
  updateDate = date
}