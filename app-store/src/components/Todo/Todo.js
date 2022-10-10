import React from "react";
import Form from "../Form";
import Header from "../Header";
import TodosList from "./TodosList";
import { TodoContext } from "../ContextApi/ContextApi";
import TodoInventory from "./TodoInventory";

const Inventory = [
  {
    id: "13747e44-301d-48e7-9029-c7e49dec0c9e",
    completed: false,
    description: "Afternoon marketing meeting...",
    title: "Meeting",
  },
  {
    id: "eadbdf43-263c-40cf-a343-d79cd25e0c63",
    completed: false,
    description: "Schedule project assignment",
    title: "Project",
  },
  {
    id: "572eaf98-3ebc-4321-bbca-6a6b849cfe7d",
    completed: true,
    description: "Review project submission",
    title: "Review",
  },
];

export default function Todo() {
  const [input, setInput] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [todos, setTodos] = React.useState(Inventory);
  const [editTodo, setEditTodo] = React.useState(null);
  const [viewAll, setViewAll] = React.useState(false);
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !todo.completed };
        }
        return item;
      })
    );
  };
  //edit-section
  const handleEdit = (todo) => {
    const findTodo = todos.find((item) => item.id === todo.id);
    setEditTodo(findTodo);
    setInput(todo.title);
    setDesc(todo.description);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        input,
        setViewAll,
        handleDelete,
        handleComplete,
        handleEdit,
      }}
    >
      <div className="h-screen bg-gradient-to-r from-primary via-primary to-primary ... flex justify-center p-8">
        {viewAll && todos.length ? (
          <TodoInventory />
        ) : (
          <div className="w-fit h-fit bg-mainBg p-8 display-block m-auto rounded-lg drop-shadow-xl">
            <div className="flex mb-4">
              <Header />
            </div>
            <div className=" mb-4">
              <Form
                input={input}
                setInput={setInput}
                desc={desc}
                setDesc={setDesc}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
              />
            </div>
            <div>
              <TodosList
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
                setInput={setInput}
              />
            </div>
          </div>
        )}
      </div>
    </TodoContext.Provider>
  );
}
