import React from "react";
import F22Logo from "../assets/F22labsLogo.png";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  const OnClickHandler = () => {
    history.push("/signup");
  };
  return (
    <div
      className="bg-gray-800 h-screen  text-white flex flex-col items-center justify-center sm:justify-start xl:justify-start 2xl:justify-start cursor-pointer"
      onClick={OnClickHandler}
    >
      <img
        className="xl:h-5/6 2xl:h-auto cursor-pointer"
        src={F22Logo}
        alt="f22labs icon"
      />
      <h1 className="text-3xl md:text-5xl font-bold">
        F22Labs Frontend Challenge
      </h1>
      <a className="m-20 text-xl" href="/signup">
        Search for{" "}
        <span className="text-indigo-400 uppercase">
          &nbsp;&nbsp;# task&nbsp;&nbsp;
        </span>{" "}
        in codebase to start the challenge
      </a>
    </div>
  );
};

export default LandingPage;
