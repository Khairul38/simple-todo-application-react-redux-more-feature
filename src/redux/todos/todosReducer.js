import {
  LOADED,
  ADDED,
  UPDATED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
} from "./actionTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: action.payload.todoId,
          text: action.payload.todoText,
          completed: false,
        },
      ];
    case UPDATED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            text: action.payload.todoText,
          };
        } else {
          return todo;
        }
      });

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color: color,
          };
        } else {
          return todo;
        }
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todosReducer;
