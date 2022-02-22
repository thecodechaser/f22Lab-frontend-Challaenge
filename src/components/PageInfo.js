import React from "react";

import { ChevronRightIcon } from "@heroicons/react/solid";

const PageInfo = () => {
  return (
    <div>
      <a
        href="#"
        className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
      >
        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
          We're hiring
        </span>
        <ChevronRightIcon
          className="ml-2 w-5 h-5 text-gray-500"
          aria-hidden="true"
        />
      </a>
      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
        <span className="md:block">Nulla aliqua ad non </span>{" "}
        <span className="text-indigo-400 md:block">
          Vestibulum vehicula elementum
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua
        ad ad non deserunt sunt.
      </p>
      <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
        Used by
      </p>
      <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
        {/* 
        
        # TASK

        Points: 1
        
          1. Align all the icons horizontally as shown in screenshots

          Done 

         */}
        <div className="pageinfo-icons">
          <div className="">
            <img
              className="h-9 sm:h-10"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="flex justify-center px-1">
            <img
              className="h-9 sm:h-10"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
          <div className="flex justify-center px-1">
            <img
              className="h-9 sm:h-10"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
