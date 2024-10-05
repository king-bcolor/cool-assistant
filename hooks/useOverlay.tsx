import { useState, useEffect, useCallback, type CSSProperties, useRef } from 'react';

export const useOverlay = () => {
  const [isActive, setIsActive] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({ display: 'none' });
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({ display: 'none' });
  const targetInfoRef = useRef<string>('');

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey && e.altKey && e.key === 'a') {
      setIsActive(true);
    }
  }, []);

  const handleKeyUp = useCallback((e) => {
    if (e.key === 'Control' || e.key === 'Alt') {
      
      setIsActive(false);
      setMenuStyle(prev => ({ ...prev, display: 'none' }));
      setOverlayStyle(prev => ({ ...prev, display: 'none' }));
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isActive) return;
    const target = e.target;
    if (target.id === 'overlay') return;
    const rect = target.getBoundingClientRect();
    setOverlayStyle({
      display: 'block',
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      top: `${rect.top}px`,
      left: `${rect.left}px`,
    });
  }, [isActive]);

  const handleClick = useCallback((e) => {
    if (!isActive) return;
    e.preventDefault();
    e.stopPropagation();

    
    const target = e.target;
    if (target.id === 'overlay'|| (target.tagName as string).toLocaleLowerCase()  === 'plasmo-csui') return;
    setOverlayStyle(prev => ({ ...prev, display: 'none' }));
    targetInfoRef.current = target.innerHTML;
    setMenuStyle({
      display: 'block',
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
    });
  }, [isActive]);

  const handleOutsideClick = useCallback((e) => {
    if (!e.target.closest('#menu')) {
      // setMenuStyle(prev => ({ ...prev, display: 'none' }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown,{ capture: true, passive: false });
    document.addEventListener('keyup', handleKeyUp,{ capture: true, passive: false });
    document.addEventListener('mousemove', handleMouseMove,{ capture: true, passive: false });
    document.addEventListener('click', handleClick,{ capture: true, passive: false });
    // document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown,{ capture: true, });
      document.removeEventListener('keyup', handleKeyUp,{ capture: true,  });
      document.removeEventListener('mousemove', handleMouseMove,{ capture: true,  });
      document.removeEventListener('click', handleClick,{ capture: true,  });
      // document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleKeyDown, handleKeyUp, handleMouseMove, handleClick, handleOutsideClick]);

  return { overlayStyle, menuStyle, targetInfo:targetInfoRef.current };
};