import React from 'react';
import { Card, Title, Description, Icon } from './FeatureCardElements';
import FirstIcon from '../assets/icon-brand-recognition.svg';
import SecondIcon from '../assets/icon-detailed-records.svg';
import ThirdIcon from '../assets/icon-fully-customizable.svg';

export default function Features(props) {
  return (
    <section className="-mt-10 text-center bg-neutral-100">
      <div className='flex flex-col max-w-screen-lg gap-12 p-8 mx-auto'>
        <header className="my-4">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-veryDarkViolet">
            Advanced Statistics
          </h2>
          <Description>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Description>
        </header>
        <div className="relative z-0 flex flex-col items-center gap-8 after:absolute sm:after:bottom-1/2 sm:after:z-0 sm:after:h-1 after:h-full after:w-1 sm:after:w-full after:bg-primary-cyan sm:h-80 sm:flex-row ">
          <Card>
            <Icon icon={FirstIcon} />
            <Title>Brand Recognition</Title>
            <Description>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.
            </Description>
          </Card>
          <Card>
            <Icon icon={SecondIcon} />
            <Title>Detailed Records</Title>
            <Description>
              Gain insighs into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.
            </Description>
          </Card>
          <Card>
            <Icon icon={ThirdIcon} />
            <Title>Fully Customizable</Title>
            <Description>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Description>
          </Card>
        </div>
      </div>
    </section>
  );
}
