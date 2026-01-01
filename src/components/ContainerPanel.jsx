import React from 'react';

const ContainerPanel = ({ children }) => {
    return (
        <div className="w-full max-w-[1440px] mx-auto relative flex flex-col pt-5">
            
            {/* Left Decorative Line */}
            {/* Uses calc() to stay pinned to the edge of the content container or screen edge */}
            <div className="fixed top-0 bottom-0 left-[max(0px,calc(50%-720px))] w-px bg-white/5 pointer-events-none" />
            
            {/* Right Decorative Line */}
            <div className="fixed top-0 bottom-0 right-[max(0px,calc(50%-720px))] w-px bg-white/5 pointer-events-none" />

            {/* Main Content Wrapper */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default ContainerPanel;