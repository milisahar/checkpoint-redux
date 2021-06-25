import { EDIT_Action } from "../ActionsTypes/ActionTypes";
import { ADD_TODO } from "../ActionsTypes/ActionTypes";
import { REMOVE_ACTION } from "../ActionsTypes/ActionTypes";
import { STATUS_ACTION } from "../ActionsTypes/ActionTypes"
export const editAction = (payload) => {
    return {
        type: EDIT_Action,
        payload,
    };
};

export const removeAction = (payload) => {
    return {
        type: REMOVE_ACTION,
        payload,
    };
};

export const statusAction = (payload) => {
    return {
        type: STATUS_ACTION,
        payload,
    }
}
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};


