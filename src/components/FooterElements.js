import React from 'react';

export const NavHeading = ({ children }) => {
  return <h4 className="text-md font-semibold">{children}</h4>;
};

export const NavBlock = ({ children }) => {
  return <div className="flex flex-col gap-2 items-center my-2">{children}</div>;
};

export const FooterItem = ({ children }) => {
  return <li className=" text-neutral-grayishViolet font-light hover:text-primary-cyan hover:cursor-pointer my-2">{children}</li>;
};
