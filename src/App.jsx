import React, { useEffect, useRef, useState } from 'react';
import Card from './components/Cards';
import { cardData } from './data.js'



const Home = () => {
  const scrollRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current && !isUserScrolling) {
        scrollRef.current.scrollBy({
          left: 1,
          behavior: 'smooth'
        });
      }
    }, 10);

    return () => clearInterval(scrollInterval);
  }, [isUserScrolling]);
  
  let scrollTimeout; 

  const handleScroll = () => {
    setIsUserScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => { 
      setIsUserScrolling(false);
    }, 0); 
  };
  return (
    <div className="bg-gray-950 w-full h-screen flex items-center justify-center overflow-x-auto p-4" ref={scrollRef} onScroll={handleScroll}>
     <div className="flex space-x-8 " style={{ minWidth: `${cardData.length * 60}px` }}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            type={card.type}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => <Home />;

export default App;
