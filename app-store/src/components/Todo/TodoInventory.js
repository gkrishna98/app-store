import React, { useContext } from "react";
import { TodoContext } from "../ContextApi/ContextApi";

function TodoInventory() {
  const { todos, handleEdit, handleComplete, handleDelete, setViewAll } =
    useContext(TodoContext);

  React.useEffect(() => {console.log(todos);}, [todos]);
  const editFromInventory = (item) =>{
    setViewAll(false)
    handleEdit(item)
  }

  return (
    <div className="flex flex-col w-fit h-fit bg-metalwhite p-6 display-block m-auto rounded-lg drop-shadow-2xl">
      <div className="flex justify-start cursor-pointer mb-2" onClick={()=>setViewAll(false)}>
        <i
          className="fa fa-chevron-circle-left text-metalBlack self-center mr-2"
          style={{ fontSize: "26px" }}
        ></i>
      </div>
      <div className=" grid grid-cols-3 gap-2 grid-rows-2` ">
        {todos?.map((item, index) => (
          <div
            key={index}
            className="p-2 border-metalYellow border-2 rounded-lg flex flex-col w-48 shadow-lg"
          >
            <div className="flex justify-between">
              <div className="flex text-xl font-semibold self-center">
                <i
                  className="fa fa-dot-circle-o text-metalBlack self-center mr-2"
                  style={{ fontSize: "16px" }}
                ></i>
                {item?.title}
              </div>
              <span className="self-center">
                <i
                  className={`${
                    item.completed
                      ? `fa fa-check-circle text-metalGreen`
                      : `fa  fa-exclamation-circle text-metalOrange
                `
                  } self-center mr-2`}
                  style={{ fontSize: "18px" }}
                ></i>
              </span>
            </div>
            <div className="text-metalBlack font-semibold text-md ml-5">
              {item.description}
            </div>
            <div className="justify-end" style={{ display: "flex" }}>
              <button
                className="m-1"
                style={{ padding: "2px" }}
                onClick={() => handleComplete(item)}
              >
                <i
                  className={
                    item.completed
                      ? `fa fa-check-circle text-metalGreen`
                      : `fa fa-check`
                  }
                ></i>
              </button>
              {!item.completed ? (
                <button
                  className="m-1"
                  style={{ padding: "2px" }}
                  onClick={() => editFromInventory(item)}
                >
                  <i className="fa fa-edit"></i>
                </button>
              ) : (
                ""
              )}

              <button
                className=""
                style={{ padding: "2px" }}
                onClick={() => handleDelete(item)}
              >
                <i className="fa fa-trash text-metalRed"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoInventory;
