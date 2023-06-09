import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    //clean up
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return [width];
};

export default useWindowSize;
