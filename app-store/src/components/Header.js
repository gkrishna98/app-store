import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="flex justify-center">
      <Link to="/" className="self-center">
        <i
          className="fa fa-chevron-circle-left text-metalBlack self-center mr-8 flex justify-start cursor-pointer"
          style={{ fontSize: "24px" }}
        ></i>
      </Link>

      <div className="text-metalwhite  ml-28 font-bold text-xl">Todo App</div>
    </div>
  );
}
