import React from "react";

export default function DirectoryForm({
  formSubmit,
  onNameChange,
  onEmailChange,
  name,
  mailId,
  addContact,
  isEdit,
  editContact,
}) {
  return (
    <form onSubmit={formSubmit}>
      <div className="flex flex-col">
        <div className="flex flex-col justify-between">
          <span className="self-start font-semibold text-metalGray">Name</span>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={onNameChange}
            className="p-2 rounded-lg border border-2 border-metalGray text-sm font-semibold w-full"
            required
          />
        </div>
        <div className="flex flex-col mt-4 justify-between">
          <span className="self-start font-semibold text-metalGray">Email</span>
          <input
            type="text"
            placeholder="Enter your mail Id"
            value={mailId}
            onChange={onEmailChange}
            className="p-2 rounded-lg border border-2 border-metalGray text-sm font-semibold w-full"
            required
          />
        </div>
        <div className="flex justify-end mt-4 ">
          <button
            type="submit"
            className="px-2 py-1 font-semibold text-sm bg-metalYellow rounded-lg"
          >
            {isEdit ? "Edit Contact" : "Add Contact"}
          </button>
        </div>
      </div>
    </form>
  );
}
