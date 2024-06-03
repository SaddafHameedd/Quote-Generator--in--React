import React, { useState, useEffect } from 'react';
import './RandomQuote.css';

function RandomQuote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "The only way to do great work is to love what you do",
    author: "Steve Jobs"
  });

  useEffect(() => {
    async function loadQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    }

    loadQuotes();
  }, []);

  const random = () => {
    if (quotes.length > 0) {
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(select);
    }
  };

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(",")[0]}`);
  };

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">- {quote.author.split(',')[0]}</div>
        <br />
        <div className="icons">
          <img src="rotate-right-solid.svg" alt="New Quote" onClick={random} className="icon" />
          <img src="x-twitter.svg" alt="Tweet" onClick={twitter} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
