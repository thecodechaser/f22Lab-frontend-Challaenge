import React from "react";
import FormComponent from "../components/FormComponent";

const SignUpBox = () => {
  return (
    <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
      <div className="px-4 py-8 sm:px-10">
        <div>
          <p className="text-xl font-bold text-gray-700">Sign Up</p>
        </div>

        <div className="mt-2 relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500"></span>
          </div>
        </div>

        <div className="mt-7">
          <FormComponent />
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
        <p className="text-xs leading-5 text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" className="font-medium text-gray-900 hover:underline">
            Terms
          </a>
          ,{" "}
          <a href="#" className="font-medium text-gray-900 hover:underline">
            Data Policy
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-gray-900 hover:underline">
            Cookies Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUpBox;
