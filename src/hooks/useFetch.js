import React, { useState } from 'react';

const baseUrl = 'https://api.shrtco.de/v2/shorten?url=';

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  setLoading('loading...');
  setData(null);
  setError(null);

  const fetch = async (url) => {
    const result = await fetch(baseUrl + url);
    const json = await result.json();
    console.log(json);
    setData(json);
  };

  return fetch;
}

export default useFetch;
