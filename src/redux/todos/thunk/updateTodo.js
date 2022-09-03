import { updated } from "../action";

const updateTodo = (todoId, todoText) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://fake--json-server.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: todoText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(updated(todo.id, todo.text));
  };
};

export default updateTodo;
