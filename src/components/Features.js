import React from 'react';
import { Card, Title, Description } from './FeatureCardElements';

export default function Features(props) {
  return (
    <section className='p-8 text-center bg-neutral-gray flex flex-col gap-12'>
      <h2 className=' text-neutral-veryDarkViolet font-semibold text-xl'>Advanced Statistics</h2>
      <Description>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Description>
      <Card>
        <div>icon</div>
        <Title>Brand Recognition</Title>
        <Description>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </Description>
      </Card>
      <Card>
        <div>icon</div>
        <Title>Detailed Records</Title>
        <Description>
          Gain insighs into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </Description>
      </Card>
      <Card>
        <div>icon</div>
        <Title>Fully Customizable</Title>
        <Description>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </Description>
      </Card>
    </section>
  );
}
