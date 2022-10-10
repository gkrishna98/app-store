import React ,{useContext}from "react";
import { TodoContext } from "../ContextApi/ContextApi";

export default function TodosList({ todos, setTodos, setEditTodo, setInput }) {
  const { setViewAll, handleEdit, handleComplete, handleDelete } = useContext(TodoContext);
 
  return (
    <div className="bg-silver p-2 rounded-lg">
      <div className="flex justify-center">
        <span className="font-semibold self-center text-sm">Today</span>
      </div>
      {todos?.length ? (
        todos.map((todo) => (
          <div className="flex justify-between m-1" key={todo.id}>
            <div className="font-semibold text-md self-center">
              {todo.title}
            </div>
            <div className="" style={{ display: "flex" }}>
              <button
                className="m-1"
                style={{ padding: "2px" }}
                onClick={() => handleComplete(todo)}
              >
                <i
                  className={
                    todo.completed
                      ? `fa fa-check-circle text-metalGreen`
                      : `fa fa-check`
                  }
                ></i>
              </button>
              {!todo.completed ? (
                <button
                  className="m-1"
                  style={{ padding: "2px" }}
                  onClick={() => handleEdit(todo)}
                >
                  <i className="fa fa-edit"></i>
                </button>
              ) : (
                ""
              )}

              <button
                className=""
                style={{ padding: "2px" }}
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash text-metalRed"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center mt-4">
          <span className="text-xs font-noraml text-metalBlack self-center">
            Add some todo things for today!!
          </span>
        </div>
      )}
      <div className="flex justify-end mt-4">
        <div className="flex justify-center cursor-pointer" onClick={()=>setViewAll(todos.length ? true : false)}>
          <span className="text-xs font-normal text-metalBlack self-center">
            View All
          </span>
          <i
            className="fa fa-external-link text-xs self-center ml-2"
            style={{ fontSize: "12px" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
