import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="rounded-md p-6 my-6 z-10 bg-white text-center relative flex flex-col items-center gap-4 ">
      {children}
    </div>
  );
};

export const Title = ({ children }) => {
  return (
    <h3 className="font-semibold text-neutral-veryDarkViolet text-lg mt-8">
      {children}
    </h3>
  );
};

export const Description = ({ children }) => {
  return <p className=" text-neutral-grayishViolet text-sm">{children}</p>;
};

export const Icon = ({ children }) => {
  return (
    <div className="absolute -top-1/4 h-24 w-24 text-primary-cyan rounded-full bg-primary-darkViolet">
      {children}
    </div>
  );
};
