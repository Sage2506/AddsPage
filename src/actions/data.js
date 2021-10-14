import { types } from "../types/types";

export const dataSave = (data) => ({
    type: types.dataSave,
    payload: data
})

export const dataDelete = (id) => ({
    type: types.dataDelete,
    payload: id
})

export const statusCheckTrue = (id) => ({
    type: types.statusCheckTrue,
    payload: id
})

export const statusCheckFalse = (id) => ({
    type: types.statusCheckFalse,
    payload: id
})





