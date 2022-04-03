import React from 'react';
import heroLogo from '../assets/illustration-working.svg';

export default function UrlShorter(props) {
  return (
    <main className="p-6 grid grid-cols-1 auto-rows-min gap-16 max-w-screen-lg mx-auto">
      <div className='flex flex-col gap-8 sm:flex-row'>
        <div className='sm:order-1'>
          <img src={heroLogo} alt="" />
        </div>
        <div className='flex flex-col gap-8 sm:items-start'>
          <h1 className=" text-neutral-veryDarkViolet font-bold text-4xl text-center sm:text-left">
            More than just shorter links
          </h1>
          <p className="text-center sm:text-left text-neutral-grayishViolet">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            aria-label="Get Started"
            className="place-self-center sm:self-start rounded-full bg-primary-cyan py-4 px-12 text-lg font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row p-8 self-center gap-4 rounded-md bg-shortenMobile bg-contain bg-right bg-no-repeat bg-primary-darkViolet w-full'>
        <input className='rounded-md p-2 sm:flex-1' type='text' placeholder='Shorten a link here...'/>
        <button className='p-2 bg-primary-cyan rounded-md text-white'>Shorten It!</button>
      </div>
    </main>
  );
}
