import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4 p-6 my-6 text-center bg-white rounded-md sm:items-start sm:text-left sm:first-of-type:self-start sm:last-of-type:self-end last-of-type:mb-0 sm:last-of-type:mb-6">
      {children}
    </div>
  );
};

export const Title = ({ children }) => {
  return (
    <h3 className="mt-8 text-lg font-semibold text-neutral-veryDarkViolet">
      {children}
    </h3>
  );
};

export const TitleDescription = ({children}) => {
  return (<p className='mx-auto text-xs text-neutral-grayishViolet sm:w-1/2'>{children}</p>)
}

export const Description = ({ children }) => {
  return <p className="text-xs text-neutral-grayishViolet">{children}</p>;
};

export const Icon = ({ icon }) => {
  return (
    <div className="absolute flex items-center justify-center w-24 h-24 rounded-full sm:w-20 sm:h-20 sm:left-10 -top-1/4 text-primary-cyan bg-primary-darkViolet">
      <img className='block max-w-full' src={icon} alt="" />
    </div>
  );
};
