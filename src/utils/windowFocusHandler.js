import { useEffect } from 'react';

const WindowFocusHandler = ({ onFocus, onBlur }) =>
  useEffect(() => {
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  });

export default WindowFocusHandler;
