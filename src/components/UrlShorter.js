import React, { useState } from 'react';
import UrlCard from './UrlCard';
import axios from 'axios';

export default function UrlShorter(props) {
  const [url, setUrl] = useState('');
  const [requestedActions, setRequestedActions] = useState([]);
  const baseUrl = 'https://api.shrtco.de/v2/shorten?url=';

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
    <main className="relative bg-neutral-100">
      <div className="flex flex-col max-w-screen-lg gap-8 p-8 mx-auto">
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
      </div>
    </main>
  );
}
