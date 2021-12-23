import { createRef, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

export default function useVisibility(offset = 0, throttleMilliseconds = 500) {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const rect = currentElement.current.getBoundingClientRect();
    setIsVisible(rect.top + offset >= 0 && rect.bottom - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentElement];
}
