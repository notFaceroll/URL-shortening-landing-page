import React from 'react';

export const Card = ({ children }) => {
  return <div className="rounded-md p-6 my-6 bg-white text-center">{children}</div>;
};

export const Title = ({ children }) => {
  return (
    <h3 className="font-semibold text-neutral-veryDarkViolet text-lg">
      {children}
    </h3>
  );
};

export const Description = ({ children }) => {
  return <p className=" text-neutral-grayishViolet text-sm">{children}</p>;
};
