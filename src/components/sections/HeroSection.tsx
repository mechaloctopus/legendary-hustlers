'use client';

import Image from 'next/image';

const HeroSection = () => {
  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center diamond-plate-dark overflow-hidden pt-20">
      {/* Industrial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      
      {/* Metal Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="steel-card wood-texture backdrop-blur-sm rounded-none border-4 border-gray-400 p-6 sm:p-8 md:p-12 shadow-2xl">
          <div className="mb-6 flex justify-center">
            <Image
              src="/gif2.gif"
              alt="Legendary Hustlers Animation"
              width={400}
              height={150}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
              unoptimized
            />
          </div>
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Legendary Hustlers"
              width={600}
              height={200}
              className="w-full max-w-2xl h-auto drop-shadow-2xl"
            />
          </div>

          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-8"></div>

                      <div className="bg-white border-4 border-gray-800 p-4 sm:p-6 mb-6 max-w-4xl mx-auto shadow-xl">
              <p className="font-tactical text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-900 font-bold leading-tight tracking-wide break-words">
                LICENSED AND INSURED TREE CARE & HANDYMAN SERVICES
              </p>
            </div>

                      <div className="bg-gray-900 border-2 border-white p-3 sm:p-4 mb-12 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="bg-yellow-400 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words">
                  TREE REMOVAL
                </div>
                <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words">
                  TRIMMING
                </div>
                <div className="bg-red-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words">
                  DEBRIS CLEANUP
                </div>
                <div className="bg-green-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words">
                  HANDYMAN
                </div>
              </div>
            </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
            <button
              onClick={() => scrollToNext()}
              className="btn-industrial font-tactical text-white px-6 sm:px-8 md:px-12 py-4 sm:py-6 font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 tracking-wider w-full sm:w-auto"
            >
              VIEW SERVICES
            </button>
            
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="font-tactical border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 md:px-12 py-4 sm:py-6 font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 bg-black/50 tracking-wider w-full sm:w-auto"
            >
              GET FREE QUOTE
            </button>
          </div>

          {/* Contact Info */}
                      <div className="bg-white border-4 border-gray-800 p-4 sm:p-6 shadow-xl">
              <div className="text-center mb-4">
                <div className="bg-gray-900 text-white px-3 sm:px-4 py-2 font-industrial text-lg sm:text-xl font-bold tracking-wider inline-block">
                  CONTACT INFO
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-3 sm:p-4 text-center">
                  <div className="text-yellow-400 font-tactical font-bold text-base sm:text-lg mb-2 tracking-wide">CALL</div>
                  <div className="text-white text-lg sm:text-xl font-bold tracking-wider break-words">(385) 590-4074</div>
                </div>
                <div className="bg-gray-900 p-3 sm:p-4 text-center">
                  <div className="text-yellow-400 font-tactical font-bold text-base sm:text-lg mb-2 tracking-wide">EMAIL</div>
                  <div className="text-white text-xs sm:text-sm font-bold break-all">office@legendaryhustlers.com</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 