import React, { useEffect, useState } from 'react';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';


const Card = ({ image, title, type, tags }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    
    <div className=" w-64 h-[450px] flex-shrink-0  bg-emerald-100  rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 ml-20 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]   border-slate-50">
      {!isLoaded && <div className="animate-pulse bg-gray-300 w-full h-full absolute"></div>}
      <img
        src={image}
        alt={title}
        onLoad={() => setIsLoaded(false)}
        className={`w-full h-[4/5] object-cover   p-4  {isLoaded ? 'block' : 'hidden'} `}
      />
      <div className="p-2 mt-[-10px]">
        <h2 className="text-xl text-emerald-900 font-bold ml-2">{title}</h2>
        <p className="text-green-600 ml-2">{type}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="space-x-2">
            {tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded cursor-pointer  hover:bg-blue-400 ">
                {tag} 
              </span>
            ))}
          </div>
          <div className="flex space-x-1">
            <FaRegBookmark className="cursor-pointer" />
            <FaShareAlt className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
