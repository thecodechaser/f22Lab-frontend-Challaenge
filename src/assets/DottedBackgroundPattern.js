import React from "react";

const DottedBackgroundPattern = () => {
  return (
    <svg
      className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
      width={364}
      height={384}
      viewBox="0 0 364 384"
      fill="none"
    >
      <defs>
        <pattern
          id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} fill="currentColor" />
        </pattern>
      </defs>
      <rect
        width={364}
        height={384}
        fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
      />
    </svg>
  );
};

export default DottedBackgroundPattern;
