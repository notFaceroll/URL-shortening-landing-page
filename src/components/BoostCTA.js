import React from 'react'

export default function BoostCTA(props) {
  return (
    <section className='flex flex-col items-center justify-center w-full gap-5 p-8 bg-no-repeat bg-cover h-h-79 bg-boostMobile sm:bg-cover sm:bg-boostDesktop bg-primary-darkViolet'>
      <h2 className='text-2xl font-bold text-white'>Boost your links today</h2>
      <button className='px-12 py-4 text-lg font-semibold text-white rounded-full hover:bg-primary-cyanHover place-self-center bg-primary-cyan'>Get Started</button>
    </section>
  );
}
