import { types } from "../types/types";

const initialState = {
    list: [
        {
            id: 1,
            name: 'PantallaRio',
            title: '1 hora',
            service: '12 pm',
            state: false,
        },
        {
            id: 2,
            name: 'PantallaDos',
            title: '1 hora',
            service: '12 pm',
            state: false,
        }
    ],
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.statusCheckTrue:
            const stateTrue = state.list.find(list => list.id === action.payload);
            stateTrue.state = true;
            return {
                ...state,
                list: state.list
            }
        case types.statusCheckFalse:
            const stateFalse = state.list.find(list => list.id === action.payload);
            stateFalse.state = false;
            return {
                ...state,
                list: state.list
            }
        default:
            return state;
    }
}




