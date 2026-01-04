import React, { useEffect, useMemo, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Disable custom cursor entirely on touch / reduced motion
  const disabled = useMemo(() => {
    if (typeof window === 'undefined') return true;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return coarse || noHover || reduce;
  }, []);

  useEffect(() => {
    if (disabled) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const onPointerOver = (e) => {
      const interactive = e.target?.closest?.(
        'a, button, .cursor-pointer, input, textarea, select, label'
      );
      if (interactive) setLinkHovered(true);
    };

    const onPointerOut = (e) => {
      const stillInteractive = e.relatedTarget?.closest?.(
        'a, button, .cursor-pointer, input, textarea, select, label'
      );
      if (!stillInteractive) setLinkHovered(false);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
    };
  }, [disabled]);

  if (disabled) return null;

  const cursorClasses = `
    custom-cursor
    fixed top-0 left-0 rounded-full pointer-events-none z-[9999]
    border-2 transition-all duration-300 ease-out hidden md:block
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${
      linkHovered
        ? 'w-[60px] h-[60px] bg-accent/15 border-accent/80 backdrop-blur-[4px]'
        : 'w-[30px] h-[30px] bg-transparent border-accent/50'
    }
  `;

  const dotClasses = `
    custom-dot
    fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[100000]
    hidden md:block
    ${hidden ? 'opacity-0' : 'opacity-100'}
  `;

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            clicked ? 0.8 : 1
          })`,
        }}
      />
      <div
        className={dotClasses}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;