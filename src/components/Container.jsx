import React from "react";

const Container = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`
        mx-auto 
        w-full 
        px-5 
        xl:px-0 
        xl:w-[calc(100%-500px)] 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
