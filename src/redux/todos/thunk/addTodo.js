import { added } from "../action";

const addTodo = (todoText) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "https://fake--json-server.herokuapp.com/todos",
      {
        method: "POST",
        body: JSON.stringify({
          text: todoText,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(added(todo.id, todo.text));
  };
};

export default addTodo;
