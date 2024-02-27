import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-4 md:px-12 lg:px-32 py-2 md:py-5">
      {children}
    </div>
  );
};

export default Container;
