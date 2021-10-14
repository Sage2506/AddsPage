import { types } from "../types/types";

const initialState = {
    disabled: true
}

export const uiReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.btnDisabled:
            return {
                disabled: false
            }

        default:
            return state;
    }
}

