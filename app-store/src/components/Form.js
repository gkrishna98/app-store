import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({
  input,
  setInput,
  desc,
  setDesc,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) {
  const onInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };
  const onDescChange = (event) => {
    const value = event.target.value;
    setDesc(value);
  };

  const onFormSubmit = (event) => {
    if (!editTodo) {
      event.preventDefault();
      setTodos([...todos, { id: uuidv4(), title: input, description: desc, completed: false }]);
      setInput("");
      setDesc("");
    } else {
      event.preventDefault();
      updateTodo(input, desc, editTodo.id, editTodo.completed);
    }
  };
  const updateTodo = (title, description, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, description, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
    setInput("");
    setDesc("");

  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="mr-2 bg-gray rounded-lg border-2 border-metalGray p-1 focus:outline-none focus:border-primary focus:ring-primary  " 
          placeholder="Enter a todo..."
          value={input}
          onChange={onInputChange}
          required
        />
        <input
          type="text"
          className="mr-2 bg-gray rounded-lg border-2 border-metalGray p-1 focus:outline-none focus:border-primary focus:ring-primary  " 
          placeholder="Enter a description..."
          value={desc}
          onChange={onDescChange}
          required
        />
        <button className="bg-metalYellow py-0.5 px-3 rounded-lg font-semibold" type="submit">
          {editTodo ? "Update" : "Add"}
        </button>

      </form>
    </div>
  );
}
