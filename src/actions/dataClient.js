import { types } from "../types/types";

export const addDataClient = (data) => ({
    type: types.data,
    payload: data
})