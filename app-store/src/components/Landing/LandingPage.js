import React from "react";
import {Link} from "react-router-dom";
import LogoIcon from "../../favicon.png";

function LandingPage() {
  return (
    <div className="h-screen bg-primary flex">
      <div className="display-block m-auto rounded-lg ">
        <div className="flex-col">
          <div className="mb-4 flex justify-center">
          <span className="w-10 h-10 mr-2">
            <img src={LogoIcon} alt="logo" className="w-16 h-11" />
          </span>
            <h1 className="text-3xl text-metalwhite font-bold">APP STORE</h1>
          </div>
          <div className="flex">
            <Link to="/todo">
            <div className="flex flex-col p-6 w-32 bg-metalYellow rounded-lg cursor-pointer drop-shadow-2xl mr-4 transform transition-all hover:scale-110">
              <i
                className="fa fa-check-circle-o self-center text-gray"
                style={{ fontSize: "26px" }}
              ></i>
              <span className="font-semibold text-lg self-center">Todo</span>
            </div>
            </Link>
            <Link to="/directory">
            <div className="flex flex-col p-6 w-32 bg-metalYellow rounded-lg cursor-pointer drop-shadow-2xl mr-4 transform transition-all hover:scale-110">
              <i
                className="fa fa-address-book self-center text-gray"
                style={{ fontSize: "26px" }}
              ></i>
              <span className="font-semibold text-lg self-center">Directory</span>
            </div>
            </Link>
            <Link to="/store">
            <div className="flex flex-col p-6 w-32 bg-metalYellow rounded-lg cursor-pointer drop-shadow-2xl transform transition-all hover:scale-110">
              <i
                className="fa fa-shopping-bag self-center text-gray"
                style={{ fontSize: "26px" }}
              ></i>
              <span className="font-semibold text-lg self-center">Shop</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
