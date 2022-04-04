import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import heroLogo from '../assets/illustration-working.svg';
import UrlCard from './UrlCard';
import axios from 'axios';

export default function UrlShorter(props) {
  const [url, setUrl] = useState('');
  const [requestedActions, setRequestedActions] = useState([]);
  const baseUrl = 'https://api.shrtco.de/v2/shorten?url=';

  // requestedAction will be an object as it follows
  // requestedAction = {
  // urlToShorten: string,
  // shortenedUrl: string,
  // isCopied: boolean };
  // the array of objects should be mapped over
  // and rendered if its lenght > 0

  const userInputHandler = ({ target: { value } }) => {
    setUrl(value);
    console.log(url);
  };

  const handleFetch = () => {
    axios.get(baseUrl + url).then((response) => {
      setRequestedActions([
        ...requestedActions,
        {
          urlToShorten: response.data.result.original_link,
          shortenedUrl: response.data.result.full_short_link,
        },
      ]);
    });
    setUrl('');
  };

  return (
    <main className="grid max-w-screen-lg grid-cols-1 gap-16 p-8 mx-auto auto-rows-min">
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="sm:order-1">
          <img src={heroLogo} alt="" />
        </div>
        <div className="flex flex-col gap-8 sm:items-start">
          <h1 className="text-4xl font-bold text-center text-neutral-veryDarkViolet sm:text-left">
            More than just shorter links
          </h1>
          <p className="text-center sm:text-left text-neutral-grayishViolet">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            aria-label="Get Started"
            className="px-12 py-4 text-lg font-semibold text-white rounded-full place-self-center sm:self-start bg-primary-cyan"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-col self-center w-full gap-4 p-8 bg-right bg-no-repeat bg-contain rounded-md sm:flex-row bg-shortenMobile bg-primary-darkViolet">
        <input
          className="p-2 rounded-md sm:flex-1"
          type="text"
          placeholder="Shorten a link here..."
          onChange={userInputHandler}
          value={url}
        />
        <button
          onClick={handleFetch}
          className="p-2 text-white rounded-md bg-primary-cyan"
        >
          Shorten It!
        </button>
      </div>
      <div>
        {requestedActions.map((item, index) => (
          <UrlCard
            key={index}
            urlToShorten={item.urlToShorten}
            shortenedUrl={item.shortenedUrl}
          />
        ))}
      </div>
    </main>
  );
}
