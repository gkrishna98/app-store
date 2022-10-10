import React from "react";
import { Link } from "react-router-dom";

export default function DirectoryHeader() {
  return (
    <div className="flex justify-center">
      <Link to="/" className="self-center">
        <i
          className="fa fa-chevron-circle-left text-metalBlack self-center mr-7 flex justify-start cursor-pointer"
          style={{ fontSize: "24px" }}
        ></i>
      </Link>
      <div className="font-bold text-xl self-center">Contact Directory</div>
    </div>
  );
}
