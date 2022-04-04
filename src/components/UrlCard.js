import React, { useState } from 'react';

export default function UrlCard({ urlToShorten, shortenedUrl }) {
  // should run the isCopied logic to this component
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortenedUrl);
  };
  return (
    <aside className="flex items-center p-6 border rounded-md bg-slate-600">
      <p>{urlToShorten}</p>
      <p className="ml-auto select-all text-primary-cyan">{shortenedUrl}</p>
      <button
        onClick={handleCopyText}
        className={`p-2 ml-4 text-white rounded-md  ${
          isCopied ? 'bg-primary-darkViolet' : 'bg-primary-cyan'
        }`}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </aside>
  );
}
