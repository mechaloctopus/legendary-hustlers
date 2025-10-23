'use client';

import Image from 'next/image';

const HeroSection = () => {
  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPhotos = () => {
    const photosSection = document.getElementById('photos');
    if (photosSection) {
      photosSection.scrollIntoView({ behavior: 'smooth' });
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
              <p className="font-heavy text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-black leading-tight tracking-wide break-words">
                LEGENDARY HUSTLERS CREW LLC
              </p>
              <p className="font-tactical text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-bold tracking-wide mt-2">
                Insured by the day for any job
              </p>
              <p className="font-tactical text-sm sm:text-base md:text-lg text-gray-900 font-bold leading-tight tracking-wide mt-4">
                Did they quote you $50,000 and you&apos;re not able to afford that? Call us and we can save you money.
              </p>
            </div>

                      <div className="bg-gray-900 border-2 border-white p-3 sm:p-4 mb-12 max-w-4xl mx-auto">
              {/* Primary categories */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 text-center">
                <div className="bg-yellow-400 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">tree removal</div>
                <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">debris clean up</div>
                <div className="bg-red-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">handyman</div>
                <div className="bg-green-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">drywall</div>
                <div className="bg-blue-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">concrete</div>
                <div className="bg-purple-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">excavation</div>
                <div className="bg-yellow-500 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">hauling</div>
                <div className="bg-orange-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">junking</div>
                <div className="bg-red-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide break-words uppercase">repurposing</div>
              </div>

              {/* Expand level 1 */}
              <details className="mt-4">
                <summary className="font-tactical inline-block cursor-pointer select-none border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base tracking-wider bg-black/50">
                  more
                </summary>
                <div className="mt-3 steel-card wood-texture border-4 border-gray-400 p-3 sm:p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 text-center">
                    <div className="bg-yellow-400 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">custom art</div>
                    <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">japanese wood burning</div>
                    <div className="bg-red-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">ultra professional tattoos</div>
                    <div className="bg-green-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">upgrades</div>
                  </div>

                  {/* Expand level 2 */}
                  <details className="mt-4">
                    <summary className="font-tactical inline-block cursor-pointer select-none border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base tracking-wider bg-black/50">
                      more
                    </summary>
                    <div className="mt-3 steel-card wood-texture border-4 border-gray-400 p-3 sm:p-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 text-center">
                        <div className="bg-yellow-400 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">game development</div>
                        <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">web3 development of any kind</div>
                        <div className="bg-red-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">ios app development</div>
                        <div className="bg-green-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">computer science tutoring</div>
                      </div>

                      {/* Expand level 3 */}
                      <details className="mt-4">
                        <summary className="font-tactical inline-block cursor-pointer select-none border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base tracking-wider bg-black/50">
                          more
                        </summary>
                        <div className="mt-3 steel-card wood-texture border-4 border-gray-400 p-3 sm:p-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 text-center">
                            <div className="bg-yellow-400 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">sitcom development</div>
                            <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">custom clay sculptures</div>
                            <div className="bg-red-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">dance lessons</div>
                            <div className="bg-green-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">jam session therapy</div>
                          </div>

                          {/* Expand level 4 */}
                          <details className="mt-4">
                            <summary className="font-tactical inline-block cursor-pointer select-none border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base tracking-wider bg-black/50">
                              more
                            </summary>
                            <div className="mt-3 steel-card wood-texture border-4 border-gray-400 p-3 sm:p-4">
                              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 text-center">
                                <div className="bg-yellow-400 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">alpine lake management</div>
                                <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">wetland development</div>
                                <div className="bg-red-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">trout</div>
                              </div>

                              {/* Expand level 5 */}
                              <details className="mt-4">
                                <summary className="font-tactical inline-block cursor-pointer select-none border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base tracking-wider bg-black/50">
                                  more
                                </summary>
                                <div className="mt-3 steel-card wood-texture border-4 border-gray-400 p-3 sm:p-4">
                                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 text-center">
                                    <div className="bg-yellow-400 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">prototyping</div>
                                    <div className="bg-orange-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">research and development</div>
                                    <div className="bg-red-500 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">modeling</div>
                                    <div className="bg-green-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">data analysis</div>
                                    <div className="bg-blue-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">python programming</div>
                                    <div className="bg-purple-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">automation</div>
                                    <div className="bg-yellow-500 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">react apps</div>
                                    <div className="bg-orange-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">web development</div>
                                    <div className="bg-red-600 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">ai programming</div>
                                    <div className="bg-green-700 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">animation</div>
                                    <div className="bg-blue-700 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">claymation</div>
                                    <div className="bg-purple-700 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">documentary production</div>
                                    <div className="bg-yellow-600 text-black px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">stopmotion</div>
                                    <div className="bg-orange-700 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">typescript</div>
                                    <div className="bg-red-700 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">solidity</div>
                                    <div className="bg-green-800 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">vector databases</div>
                                    <div className="bg-blue-800 text-white px-2 sm:px-3 py-2 font-tactical font-bold text-xs sm:text-sm tracking-wide uppercase">three.js</div>
                                  </div>

                                  {/* Expand level 6 */}
                                  <details className="mt-4">
                                    <summary className="font-tactical inline-block cursor-pointer select-none border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base tracking-wider bg-black/50">
                                      more
                                    </summary>
                                    <div className="mt-3 bg-white border-4 border-gray-400 p-3 sm:p-4 text-left">
                                      <p className="font-tactical text-sm sm:text-base text-gray-900 font-bold leading-relaxed">
                                        lots of ideas for really nice projects but need more resources and ability to get a team on retainer salary and get bankrolled with our own research and development lab. many projects to invest in and put into production, pick one
                                      </p>
                                      <div className="mt-4 space-y-3">
                                        <div>
                                          <div className="text-yellow-600 font-heavy tracking-wider">chicken cowboys</div>
                                          <div className="text-gray-800 text-xs sm:text-sm font-tactical">a game about raising chickens feeding chickens, selling eggs, and then taking your chickens to the chicken rodeo for mini games .... complete need funding</div>
                                        </div>
                                        <div>
                                          <div className="text-yellow-600 font-heavy tracking-wider">abraxas</div>
                                          <div className="text-gray-800 text-xs sm:text-sm font-tactical">the ancient stellar calendar translated into a poker chess hybrid variant... complete need funding</div>
                                        </div>
                                        <div>
                                          <div className="text-yellow-600 font-heavy tracking-wider">project mq</div>
                                          <div className="text-gray-800 text-xs sm:text-sm font-tactical">this is a power house. i have a game that is so novel if i could launch it right it would change the world, it would be so helpful. complete but fractured in various elements, need funding</div>
                                        </div>
                                        <div>
                                          <div className="text-yellow-600 font-heavy tracking-wider">abraxa</div>
                                          <div className="text-gray-800 text-xs sm:text-sm font-tactical">a linguistics lexicon used to find connections and patterns in words across 28 languages programmatically, complete but need funding</div>
                                        </div>
                                        <div>
                                          <div className="text-yellow-600 font-heavy tracking-wider">oddpepes</div>
                                          <div className="text-gray-800 text-xs sm:text-sm font-tactical">a complete web3 ecosystem ready to launch, need lots of funding</div>
                                        </div>
                                      </div>

                                      {/* Expand level 7 (final) */}
                                      <details className="mt-4">
                                        <summary className="font-tactical inline-block cursor-pointer select-none border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-sm sm:text-base tracking-wider bg-black/50">
                                          more
                                        </summary>
                                        <div className="mt-3 bg-gray-900 border-2 border-white p-3 sm:p-4 text-center">
                                          <div className="text-white font-tactical text-sm sm:text-base">im available for anything custom no unethical requests please</div>
                                        </div>
                                      </details>
                                    </div>
                                  </details>
                                </div>
                              </details>
                            </div>
                          </details>
                        </div>
                      </details>
                    </div>
                  </details>
                </div>
              </details>
            </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
            <button
              onClick={() => scrollToNext()}
              className="btn-industrial font-tactical text-white px-6 sm:px-8 md:px-12 py-4 sm:py-6 font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 tracking-wider w-full sm:w-auto"
            >
              VIEW SERVICES
            </button>

            <button
              onClick={() => scrollToPhotos()}
              className="font-tactical border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 md:px-12 py-4 sm:py-6 font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 bg-black/50 tracking-wider w-full sm:w-auto"
            >
              SEE OUR PHOTOS
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