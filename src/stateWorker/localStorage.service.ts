import { InitialStateModel } from "./appStateSlice";

export const addToStorage = (state: InitialStateModel) => {
    localStorage.setItem('initialState', JSON.stringify(state));
};
export const getFromStorage = () => {
    const dataFromStorage = localStorage.getItem('initialState');
    return dataFromStorage ? JSON.parse(dataFromStorage) as InitialStateModel : {lists: [], filter: []};
};
