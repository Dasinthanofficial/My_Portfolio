import React from 'react';

const ContainerPanel = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative flex flex-col pt-5">
      <div className="fixed top-0 bottom-0 left-[max(0px,calc(50%-720px))] w-px bg-white/5 pointer-events-none" />
      <div className="fixed top-0 bottom-0 right-[max(0px,calc(50%-720px))] w-px bg-white/5 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ContainerPanel;