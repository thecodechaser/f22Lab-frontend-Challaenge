import React from "react";

import TopNavBar from "../components/TopNavBar";
import PageInfo from "../components/PageInfo";
import SignUpBox from "../components/SignUpBox";

import DottedBackgroundPattern from "../assets/DottedBackgroundPattern";

const Signup = () => {
  return (
    <div className="lg:h-screen relative bg-gray-800 overflow-hidden ">
      <div
        className="hidden overflow-hidden sm:block sm:absolute sm:inset-0"
        aria-hidden="true"
      >
        <DottedBackgroundPattern />
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <TopNavBar />
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <PageInfo />
              </div>

              {/* //Signup  */}
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <SignUpBox />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Signup;
