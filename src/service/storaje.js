let fileAdd = null
let selectedScreen = null
let selectedPlan = { id : -1}

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