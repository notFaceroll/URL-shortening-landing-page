import React, { useState } from 'react';
import heroLogo from '../assets/illustration-working.svg';

export default function Header(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return (
    <header className="flex flex-col justify-between max-w-screen-lg p-8 mx-auto sm:gap-8">
      <div className="relative flex items-center justify-between mb-10 sm:gap-8">
        <span className="text-4xl font-semibold text-neutral-veryDarkViolet">
          Shortly
        </span>
        <nav className="items-center hidden sm:flex sm:flex-1">
          <ul className="flex gap-6 mr-auto text-neutral-grayishViolet">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
          <div>
            <button className="text-neutral-grayishViolet">Login</button>
            <button className="px-6 py-2 ml-8 text-sm font-normal text-white rounded-full bg-primary-cyan">
              Sign Up
            </button>
          </div>
        </nav>
        <button onClick={toggleMenu} className="sm:hidden">
          Menu
        </button>
        {isVisible && (
          <aside className="absolute flex flex-col items-center w-full p-6 mt-2 text-white rounded-lg sm:hidden top-full bg-primary-darkViolet">
            <ul className="flex flex-col w-full gap-6 pb-6 text-center border-b">
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
            </ul>
            <div className="flex flex-col w-full gap-4 pt-6 pb-2">
              <button className="text-white">Login</button>
              <button className="px-6 py-2 text-sm font-normal text-white rounded-full bg-primary-cyan">
                Sign Up
              </button>
            </div>
          </aside>
        )}
      </div>

      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="sm:order-1">
          <img src={heroLogo} alt="" />
        </div>
        <div className="flex flex-col gap-8 sm:items-start">
          <h1 className="text-4xl font-bold text-center md:text-5xl text-neutral-veryDarkViolet sm:text-left">
            More than just shorter links
          </h1>
          <p className="text-center sm:text-left text-neutral-grayishViolet">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            aria-label="Get Started"
            className="px-12 py-4 text-lg font-semibold text-white rounded-full hover:opacity-50 place-self-center sm:self-start bg-primary-cyan"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
