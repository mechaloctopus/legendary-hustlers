'use client';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] bg-yellow-600 text-white px-4 py-2 rounded-md font-bold transition-all duration-200 hover:bg-yellow-700"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink; 