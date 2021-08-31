import { useState, useEffect } from 'react';

const useInitialState = (API) => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error(err));
  }, []);

  return videos;
};

export default useInitialState;

