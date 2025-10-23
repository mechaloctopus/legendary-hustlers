'use client';

import { TreePine, Wrench, Truck } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: <TreePine className="w-10 h-10" />,
      title: "TREE SERVICES",
      description: "Tree removal, trimming, pruning, and stump grinding",
      gradient: "from-green-600 to-green-800"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "DEBRIS REMOVAL",
      description: "Storm cleanup, yard waste removal, and hauling services",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "HANDYMAN SERVICES",
      description: "General repairs, maintenance, and property improvements",
      gradient: "from-yellow-600 to-orange-600"
    }
  ];

  const turfImages = ['/turf/1.jpg', '/turf/2.jpg', '/turf/3.jpg', '/turf/4.jpg', '/turf/5.jpg'];
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) {
        setCurrent((prev) => (prev + 1) % turfImages.length);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);


  return (
    <section id="services" className="py-24 pt-32 diamond-plate relative">
      {/* Industrial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
                      <h2 className="font-heavy text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-wider">
            OUR SERVICES
          </h2>
            <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-8"></div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-start">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative steel-card wood-texture hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-400 overflow-hidden"
                >
                  {/* Metal Background Pattern */}
                  <div className="absolute inset-0 metal-texture opacity-30"></div>
                  {/* Icon Container */}
                  <div className="relative p-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${service.gradient} border-4 border-gray-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                      {service.icon}
                    </div>
                    {/* Content */}
                    <div className="text-center relative">
                      <div className="bg-white p-4 border-2 border-gray-800 mb-4">
                        <h3 className="font-heavy text-2xl font-black text-gray-900 group-hover:text-gray-700 transition-colors duration-300 tracking-wider">
                          {service.title}
                        </h3>
                      </div>
                      <div className="bg-gray-900 p-4 border-2 border-white">
                        <p className="font-tactical text-white leading-relaxed text-lg font-semibold">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Industrial Corner Details */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-yellow-400"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-yellow-400"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-yellow-400"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-yellow-400"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div
              className="group steel-card wood-texture border-4 border-gray-400 p-4 shadow-xl"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              onTouchCancel={() => setPaused(false)}
            >
              <div className="text-center mb-4">
                <div className="bg-black/70 border border-yellow-400 p-2 mb-2 inline-block w-full text-center">
                  <div className="font-heavy text-lg md:text-xl font-black text-yellow-400 tracking-wider">
                    a few photos of our recent turf installation in progress
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border-4 border-gray-500 bg-black">
                <div className="relative aspect-[4/5]">
                  {turfImages.map((src, idx) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Turf installation photo ${idx + 1}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className={`absolute inset-0 object-cover transition-opacity duration-700 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {turfImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2.5 h-2.5 rounded-full ${current === idx ? 'bg-yellow-400' : 'bg-gray-400/60'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="text-center text-xs text-gray-700 mt-2">
                (Auto-scrolls; touch/hover to pause)
              </div>
            </div>
          </div>
        </div>      </div>
    </section>
  );
};

export default ServicesSection;