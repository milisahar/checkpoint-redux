import { ADD_TODO } from "../ActionsTypes/ActionTypes";
import { EDIT_Action } from "../ActionsTypes/ActionTypes"
import { REMOVE_ACTION } from "../ActionsTypes/ActionTypes"
import { STATUS_ACTION } from "../ActionsTypes/ActionTypes"
const initialState = {
  todoList: [
    { text: "My first todo", id: "0", isDone: false },
    { text: "My second todo", id: "1", isDone: false },
    { text: "My third todo", id: "2", isDone: false },
  ],
};
export const Todoreducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,

        todoList: [...state.todoList, action.payload],
      };
    case EDIT_Action:
      return {

        ...state,

        todoList: state.todoList.map((el) => (el.id === action.payload.id ? { ...el, text: action.payload.text } : el))

      }
    case REMOVE_ACTION:
      return {

        ...state,
        todoList: state.todoList.filter(el => el.id !== action.payload)
      }

    case STATUS_ACTION:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        )
      };

    default: return state;

  }

};