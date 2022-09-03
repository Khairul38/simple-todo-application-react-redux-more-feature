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

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

export const added = (todoId, todoText) => {
  return {
    type: ADDED,
    payload: {
      todoId,
      todoText,
    },
  };
};
export const updated = (todoId, todoText) => {
  return {
    type: UPDATED,
    payload: {
      todoId,
      todoText,
    },
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
