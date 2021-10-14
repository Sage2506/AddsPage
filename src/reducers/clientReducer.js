import { types } from "../types/types";

const initialState = {
    dataClient: []
};

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addDataClient:
            return {
                ...state,
                dataClient: state.dataClient
            }
        default:
            return state;
    }
}
