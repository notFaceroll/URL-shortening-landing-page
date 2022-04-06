import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function UrlCard({ urlToShorten, shortenedUrl }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortenedUrl);
  };
  return (
    <motion.aside
      initial={{ scale: 1, y: '-50px', opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 1, y: '-50px', opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col p-4 my-4 overflow-hidden bg-white rounded-md sm:flex-row sm:items-center"
    >
      <p className="pb-2 truncate border-b sm:border-0 sm:pb-0">
        {urlToShorten}
      </p>
      <p className="py-2 select-all sm:ml-auto sm:pl-2 text-primary-cyan">
        {shortenedUrl}
      </p>
      <button
        onClick={handleCopyText}
        className={`px-4 py-2 hover:opacity-70 sm:ml-4 text-white rounded-md text-xs ${
          isCopied ? 'bg-primary-darkViolet' : 'bg-primary-cyan'
        }`}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </motion.aside>
  );
}
