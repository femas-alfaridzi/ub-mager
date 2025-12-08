'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Customer Hide',
      role: 'UB Student',
      avatar: '/testimonials/gambar1.jpg',
      quote: 'Sangat membantu sekali untuk mahasiswa yang butuh jasa antar jemput dan joki tugas. Pelayanan cepat dan terpercaya!'
    },
    {
      id: 2,
      name: 'Customer Hide',
      role: 'UB Student',
      avatar: '/testimonials/gambar2.png',
      quote: 'Terimakasih! Sangat suka dengan adanya UB Mager, sedia setiap saat ketika dibutuhkan '
    },
    {
      id: 3,
      name: 'Customer Hide',
      role: 'UB Student',
      avatar: '/testimonials/gambar3.jpg',
      quote: 'Layanan yang ditawarkan sangat beragam dan sesuai dengan kebutuhan mahasiswa. Sangat direkomendasikan!'
    },
    {
      id: 4,
      name: 'Customer Hide',
      role: 'UB Student',
      avatar: '/testimonials/gambar4.png',
      quote: 'Kadang minta bantuan random juga di approve si, suka banget dengan UB Mager'
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-900">
            We Believe people we trust
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="relative px-12">
          {/* Testimonial Cards Container with 3 visible cards */}
          <div className="relative h-[400px] overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out absolute w-full">
              {testimonials.map((testimonial, index) => {
                // Calculate position relative to current index
                const position = index - currentIndex;
                
                // Determine opacity and scale based on position
                let opacity = 0.3;
                let scale = 0.85;
                let zIndex = 0;
                let translateX = 0;
                
                if (position === 0) {
                  // Center card
                  opacity = 1;
                  scale = 1;
                  zIndex = 30;
                  translateX = 0;
                } else if (position === -1 || (position === testimonials.length - 1)) {
                  // Left card
                  opacity = 0.5;
                  scale = 0.9;
                  zIndex = 20;
                  translateX = -20;
                } else if (position === 1 || (position === -(testimonials.length - 1))) {
                  // Right card
                  opacity = 0.5;
                  scale = 0.9;
                  zIndex = 20;
                  translateX = 20;
                }

                return (
                  <div
                    key={testimonial.id}
                    className="absolute left-1/2 top-0 w-full max-w-2xl transition-all duration-500 ease-in-out"
                    style={{
                      transform: `translateX(calc(-50% + ${position * 100}% + ${translateX}px)) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                  >
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 h-[350px] flex flex-col">
                      {/* Quote Icon */}
                      <div className="text-yellow-400 text-5xl mb-4 leading-none">"</div>
                      
                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow overflow-hidden">
                        {testimonial.quote}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-40"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-40"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#043A53]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}