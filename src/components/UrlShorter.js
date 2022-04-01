import React from 'react';
import heroLogo from '../assets/illustration-working.svg';

export default function UrlShorter(props) {
  return (
    <main className="flex flex-col items-center p-6 gap-3">
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
        className="rounded-full bg-primary-cyan py-4 px-12 text-lg font-semibold text-white"
      >
        Get Started
      </button>
    </main>
  );
}
