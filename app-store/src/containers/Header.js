import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-4">
      <div className="flex justify-between">
        <div className="flex">
          <Link to="/" className="flex">
            <span className="w-10 h-10 mr-2">
              <img src={logo} alt="logo" className="w-12 h-12" />
            </span>
            <span className="text-xl font-bold text-metalBlack self-center">
              Shop
            </span>
          </Link>
        </div>
        <div className="flex justify-between text-lg font-semibold text-metalGray self-center">
          <Link to="/">
            <span className="flex justify-center mr-4 cursor-pointer px-6 py-0.5 bg-metalYellow text-metalBlack rounded-xl shadow-lg hover:bg-metalBlack hover:text-metalYellow">
              Home
            </span>
          </Link>
          <span className="mr-4 cursor-pointer px-6 py-0.5 bg-metalYellow text-metalBlack rounded-xl shadow-lg hover:bg-metalBlack hover:text-metalYellow">
            About
          </span>
          <Link to="/store">
            <span className="flex justify-center mr-4 cursor-pointer px-6 py-0.5 bg-metalYellow text-metalBlack rounded-xl shadow-lg hover:bg-metalBlack hover:text-metalYellow">
              Products
            </span>
          </Link>
          <span className="mr-4 cursor-pointer px-6 py-0.5 bg-metalYellow text-metalBlack rounded-xl shadow-lg hover:bg-metalBlack hover:text-metalYellow">
            Store
          </span>
          <span className="">
            <i
              className="fa fa-shopping-cart text-metalYellow self-center cursor-pointer rounded-full p-2 bg-metalBlack text-metalYellow hover:bg-metalYellow hover:text-metalBlack"
              style={{ fontSize: "16px" }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
