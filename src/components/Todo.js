import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Cancel from "../assets/images/cancel.png";
import Edit from "../assets/images//edit.svg";
import Plus from "../assets/images/plus.svg";
// import { deleted } from "../redux/todos/action";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateTodo from "../redux/todos/thunk/updateTodo";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  const handleToggleChanged = (todoId, completed) => {
    dispatch(updateStatus(todoId, completed));
  };

  const handleColorChanged = (todoId, color) => {
    dispatch(updateColor(todoId, color));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo(id, input));
    setEdit(false);
    setInput("");
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed ? "border-green-500" : "border-gray-400"
        }`}
      >
        <input
          onChange={() => handleToggleChanged(id, completed)}
          checked={completed}
          type="checkbox"
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className="select-none flex-1">
        {edit ? (
          <form
            onSubmit={handleUpdate}
            className="flex items-center bg-gray-100 px-1 py- rounded"
          >
            <input
              autoFocus
              onChange={(e) => setInput(e.target.value)}
              defaultValue={text}
              type="text"
              placeholder="Type your todo"
              className="w-full px- py- border-none outline-none bg-gray-100"
            />
            <button
              type="submit"
              className={`appearance-none w-5 h-5 bg-[url('${Plus}')] bg-no-repeat bg-contain`}
            ></button>
          </form>
        ) : (
          <p>{text}</p>
        )}
      </div>

      <img
        onClick={() => {
          setEdit(true);
        }}
        src={Edit}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />

      <div
        onClick={() => handleColorChanged(id, "green")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "bg-green-500"
        }`}
      ></div>

      <div
        onClick={() => handleColorChanged(id, "yellow")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
      ></div>

      <div
        onClick={() => handleColorChanged(id, "red")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "bg-red-500"
        }`}
      ></div>

      <img
        onClick={() => handleDelete(id)}
        src={Cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
