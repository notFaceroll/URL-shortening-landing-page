import React from 'react';

export const NavHeading = ({ children }) => {
  return <h4 className="font-semibold text-md">{children}</h4>;
};

export const NavBlock = ({ children }) => {
  return <div className="flex flex-col items-center gap-2 my-2 sm:my-0">{children}</div>;
};

export const FooterItem = ({ children }) => {
  return <li className="my-2 font-light  text-neutral-grayishViolet hover:text-primary-cyan hover:cursor-pointer">{children}</li>;
};
