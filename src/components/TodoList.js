import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    return !todo.completed;
    // const { status } = filters;
    // switch (status) {
    //   case "Incomplete":
    //     return !todo.completed;
    //   case "Complete":
    //     return todo.completed;

    //   default:
    //     return true;
    // }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    } else {
      return true;
    }
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[220px] overflow-y-auto">
      {/* <!-- todo --> */}
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
