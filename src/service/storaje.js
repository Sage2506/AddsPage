let fileAdd = null
let selectedScreen = null
let selectedPlan = { id : -1}
let dailyAmount = null

export const setLocalFileAdd = (file) => {
  fileAdd = file
}

export const getLocalFileAdd = () => {
  return fileAdd
}

export const setLocalScreen = (screen) => {
  selectedScreen = screen
}

export const getLocalScreen = () => {
  return selectedScreen
}

export const setSelectedPlan = (servicePlan) => {
  selectedPlan = servicePlan
}

export const getSelectedPlan = () => {
  return selectedPlan;
}

export const setDailyAmount = amount => {
  dailyAmount = amount
}

export const getDailyAmount = () => {
  return dailyAmount
}