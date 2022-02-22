/* eslint-disable no-lone-blocks */
import React from "react";

const FormComponent = () => {
  {
    /* 
        # TASK

        Points: 6

        1. Validate all the fields respectively.
            a. Full Name should have min 5 characters
            b. Email validation for email field
            c. Password should have atleast 2 uppercase letter, 2 lowercase letter & 1 number. (eg. F22Labs)
        2. Show error messages below every field.
        3. Validate only on form submit.
        4. On successful data input navigate the user to /home route. 

         
    */
  }
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="fullName" className="sr-only">
          Full Name
        </label>

        <input
          placeholder="Full name"
          id="fullName"
          name="fullName"
          type="text"
          className="-mt-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="pl-2 py-3 "></div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>

        <input
          placeholder="Email Address"
          id="email"
          name="email"
          type="email"
          className="-mt-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="pl-2 py-3 "></div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          className="-mt-2 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="pl-2 py-3 "></div>
      </div>

      <div>
        <button
          type="button"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create your account
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
