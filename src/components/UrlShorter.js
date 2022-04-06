import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import UrlCard from './UrlCard';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

export default function UrlShorter(props) {
  const [url, setUrl] = useState('');
  const baseUrl = 'https://api.shrtco.de/v2/shorten?url=';
  const [links, setLinks] = useLocalStorage('shortenedLinks', []);

  const userInputHandler = ({ target: { value } }) => {
    setUrl(value);
  };

  const handleFetch = (event) => {
    event.preventDefault();
    axios
      .get(baseUrl + url)
      .then((response) => {
        setLinks([
          ...links,
          {
            urlToShorten: response.data.result.original_link,
            shortenedUrl: response.data.result.full_short_link,
          },
        ]);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    setUrl('');
  };

  const clearLinks = () => {
    setLinks([]);
    setUrl('');
  };

  return (
    <main className="relative bg-neutral-100">
      <div className="flex flex-col max-w-screen-lg gap-8 p-8 mx-auto">
        <div className="w-full p-8 bg-right bg-no-repeat bg-contain rounded-md bg-shortenMobile sm:bg-shortenDesktop sm:bg-cover bg-primary-darkViolet">
          <form
            className="box-content flex flex-col self-center gap-4 sm:flex-row"
            onSubmit={handleFetch}
          >
            <input
              className="box-content p-2 rounded-md sm:flex-1 focus:outline-primary-cyan focus:outline invalid:focus:outline-red-600"
              type="url"
              placeholder="Shorten a link here..."
              pattern="https://.*"
              onChange={userInputHandler}
              value={url}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 text-sm text-white rounded-md bg-primary-cyan hover:bg-primary-cyanHover"
            >
              Shorten It!
            </button>
          </form>
        </div>
        <div>
          {links.length > 0 && (
            <button
              className="px-6 py-2 text-sm text-white rounded-md bg-primary-cyan hover:bg-primary-cyanHover"
              onClick={clearLinks}
            >
              Clear List
            </button>
          )}
          <AnimatePresence>
            {links.map((item, index) => (
              <UrlCard
                key={index}
                urlToShorten={item.urlToShorten}
                shortenedUrl={item.shortenedUrl}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
