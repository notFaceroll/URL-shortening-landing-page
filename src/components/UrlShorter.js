import React from 'react';
import heroLogo from '../assets/illustration-working.svg';

export default function UrlShorter(props) {
  return (
    <main className="p-6 grid grid-cols-1 auto-rows-min gap-16 border">
      <div className='flex flex-col gap-8'>
        <div>
          <img src={heroLogo} alt="" />
        </div>
        <h1 className=" text-neutral-veryDarkViolet font-bold text-4xl text-center">
          More than just shorter links
        </h1>
        <p className="text-center text-neutral-grayishViolet">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          aria-label="Get Started"
          className="place-self-center rounded-full bg-primary-cyan py-4 px-12 text-lg font-semibold text-white"
        >
          Get Started
        </button>
      </div>
      <div className='flex flex-col p-5 self-center gap-4 rounded-md bg-slate-600 w-full'>
        <input className='rounded-md p-2' type='text' placeholder='Shorten a link here...'/>
        <button className='p-2 bg-primary-cyan rounded-md text-white'>Shorten It!</button>
      </div>
    </main>
  );
}
