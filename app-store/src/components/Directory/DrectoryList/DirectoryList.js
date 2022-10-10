import React from "react";
import user from "../../../images.png"

export default function DirectoryList({ contacts, removeContact, enableEdit }) {
  return (
    <div className="bg-mainBg p-4 rounded-lg">
      <div className="flex flex-col">
        <div>
          {contacts.length ? (
            contacts?.map((item) => (
              <div className="flex justify-between m-2" key={item.id}>
                <div className="flex">
                  <div className="mr-2">
                    <img src={user} alt="user" className="w-10 h-10 rounded-full"/>
                  </div>
                  <div className="flex flex-col font-semibold text-md self-center">
                    <span className="font-semibold text-md ">{item?.name}</span>
                    <span className="font-normal text-xs ">{item?.email}</span>
                  </div>
                </div>

                <div className="" style={{ display: "flex" }}>
                  {!item.completed ? (
                    <button
                      className="m-1"
                      style={{ padding: "2px" }}
                      onClick={() => enableEdit(item)}
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                  ) : (
                    ""
                  )}

                  <button
                    className=""
                    style={{ padding: "2px" }}
                    onClick={() => removeContact(item)}
                  >
                    <i className="fa fa-trash text-metalRed"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center mt-4">
              <span className="text-md font-normal text-metalBlack self-center">
                Add new contacts!!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
