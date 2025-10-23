'use client';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 pt-32 diamond-plate relative overflow-hidden">
      {/* Industrial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="font-heavy text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-wider">
                OUR TEAM
              </h2>
              <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-8"></div>
            </div>
            <p className="font-tactical text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-bold tracking-wide">
              a cooperating network of professionals. a band of brothers
            </p>
          </div>

          {/* Team Image */}
          <div className="mb-20">
            <div className="relative steel-card wood-texture hover:shadow-2xl transition-all duration-500 border-4 border-gray-400 overflow-hidden">
              {/* Metal Background Pattern */}
              <div className="absolute inset-0 metal-texture opacity-20"></div>
              
              <div className="relative p-8">
                <div className="w-full max-w-4xl mx-auto">
                  <Image
                    src="/team.png"
                    alt="Legendary Hustlers Team"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover border-4 border-gray-500 shadow-lg"
                  />
                </div>
              </div>

              {/* Industrial Corner Details */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-yellow-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-yellow-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-yellow-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-yellow-400"></div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="steel-card wood-texture border-4 border-gray-400 p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="font-heavy text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-wider drop-shadow-lg">
                WHY CHOOSE
              </div>
              <div className="flex justify-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Legendary Hustlers"
                  width={300}
                  height={100}
                  className="h-12 w-auto drop-shadow-lg"
                />
              </div>
              <div className="font-heavy text-2xl md:text-3xl font-black text-gray-900 tracking-wider drop-shadow-lg">
                BECAUSE THIS IS WHY
              </div>
            </div>
            
            {/* GIF */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl border-4 border-yellow-400 shadow-lg overflow-hidden">
                <Image
                  src="/gif.gif"
                  alt="Why Choose Legendary Hustlers"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 