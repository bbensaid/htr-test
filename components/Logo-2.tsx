import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4 flex h-24 w-20 flex-col items-center justify-center rounded-md bg-black p-2">
        <span className="text-4xl font-bold text-white">HTR</span>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <div
            className="text-2xl font-bold leading-[0.8] text-black"
            style={{
              fontSize: '2rem',
              letterSpacing: '0.05em',
            }}
          >
            HEALTH
          </div>
          <div
            className="text-2xl font-bold leading-[0.8] text-black"
            style={{
              fontSize: '2rem',
              letterSpacing: '0.05em',
            }}
          >
            TRANSFORMATION
          </div>
        </div>
        <div className="relative mt-2 flex items-center justify-center">
          <div
            className="absolute left-0 top-1/2 w-full border-t border-black"
            style={{
              transform: 'translateY(-50%)',
            }}
          ></div>
          <div className="z-10 bg-white px-2">
            <div className="rounded-md bg-black px-3 py-1">
              <span className="text-sm font-bold text-white">
                DECODING THE VALUE TRANSITION
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
