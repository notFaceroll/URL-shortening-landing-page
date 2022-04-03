import React from 'react';
import { Card, Title, Description, Icon } from './FeatureCardElements';

export default function Features(props) {
  return (
    <section className="p-8 text-center bg-neutral-100 flex flex-col gap-12 -mt-10">
      <header className='my-4'>
        <h2 className=" text-neutral-veryDarkViolet font-semibold text-2xl mb-4">
          Advanced Statistics
        </h2>
        <Description>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Description>
      </header>
      <div className='flex flex-col gap-8 items-center after:absolute after:-bottom-2/3 z-0 after:h-1/2 after:w-1 after:bg-primary-cyan'>

      <Card>
        <Icon>icon</Icon>
        <Title>Brand Recognition</Title>
        <Description>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </Description>
      </Card>
      <Card>
        <Icon>icon</Icon>
        <Title>Detailed Records</Title>
        <Description>
          Gain insighs into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </Description>
      </Card>
      <Card>
        <Icon>icon</Icon>
        <Title>Fully Customizable</Title>
        <Description>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </Description>
      </Card>
      </div>
    </section>
  );
}
