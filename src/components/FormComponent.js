/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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

         Done
    */
  }

  const regex = new RegExp(/^(?=.*[a-z]){2,}(?=.*[A-Z]){2,}(?=.*\d)/);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [render, setRender] = useState('Update');
  const [validation, setValidtion] = useState([{validate: true}, {validate: true}, {validate: true}])

  const navigateHome=()=> {
    if(validation[0].validate && validation[1].validate && validation[2].validate){
      navigate(`/home`)
    }
  }
  const handleSubmit=()=>{
    if(name.length>=5){
      validation[0].validate=true;
    } else {
      validation[0].validate=false;
    }
    if(email.includes("@") && email.includes(".")){
      validation[1].validate=true;
    } else {
      validation[1].validate=false;
    }
    if(regex.test(password)){
      validation[2].validate=true;
    } else {
      validation[2].validate=false;
    }
    if(render.localeCompare("Update")===0){
      setRender("Update1")
    } else {
      setRender("Update")
    }
    navigateHome();
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
          value={name} onChange={(e) => setName(e.target.value)}
        />
        {
          !validation[0].validate && (
            <div className="pl-2 py-3 form-error">Full Name should have min 5 characters</div>
          )
        }
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
         value={email} onChange={(e) => setEmail(e.target.value)}
        />
        {
          !validation[1].validate && (
        <div className="pl-2 py-3 form-error">Please enter valid email address</div>
          )}
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
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        {
          !validation[2].validate && (
        <div className="pl-2 py-3 form-error">Password should have atleast 2 uppercase letter, 2 lowercase letter & 1 number. (eg. F22Labs)</div>
          )}
      </div>

      <div>
        <button
        onClick={handleSubmit}
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
