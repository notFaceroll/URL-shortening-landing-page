import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import heroLogo from '../assets/illustration-working.svg';



export default function Header(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="flex flex-col justify-between max-w-screen-lg p-8 mx-auto sm:gap-8">
      <div className="relative flex items-center justify-between mb-10 sm:gap-5 md:gap-8">
        <span className="text-4xl font-semibold text-neutral-veryDarkViolet">
          Shortly
        </span>
        <nav className="items-center hidden sm:flex sm:flex-1">
          <ul className="flex gap-4 mr-auto md:gap-8 text-neutral-grayishViolet">
            <li>
              <a className="hover:text-primary-darkViolet" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-primary-darkViolet" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-primary-darkViolet" href="#">
                Resources
              </a>
            </li>
          </ul>
          <div>
            <button className="hover:text-primary-darkViolet text-neutral-grayishViolet">Login</button>
            <button className="px-6 py-2 ml-4 text-sm font-normal text-white rounded-full hover:bg-primary-cyanHover bg-primary-cyan">
              Sign Up
            </button>
          </div>
        </nav>
        <button onClick={toggleMenu} className="sm:hidden">
          <svg
            width="36"
            height="36"
            className="fill-neutral-grayishViolet"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </button>
        <AnimatePresence>
          {isVisible && (
            <motion.aside
              initial={{ scale: 1, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 1, y: 100, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 flex flex-col items-center w-full p-6 mt-2 text-white rounded-lg sm:hidden top-full bg-primary-darkViolet"
            >
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
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="overflow-hidden translate-x-4 sm:translate-x-0 sm:order-1">
          <img className='max-w-md sm:max-w-full' src={heroLogo} alt="" />
        </div>
        <div className="flex flex-col gap-8 sm:items-start">
          <h1 className="text-4xl font-bold text-center md:text-5xl text-neutral-veryDarkViolet sm:text-left md:leading-tight">
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
