import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, searchTerm, getResults } = useResultContext();
  const location = useLocation();

  if (isLoading) return <Loading />;
  console.log({results});
  console.log(location.pathname);
 
  switch (location.pathname) {
    case '/search':
      return 'search';
    case '/video':
      return 'video';
    case '/images':
      return 'images';
    case '/news':
      return 'news';
  
    default:
      return 'default';
  }
}
