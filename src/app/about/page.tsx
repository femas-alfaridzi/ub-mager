'use client';

import Link from "next/link";

const AboutPage = () => {
  const quoteText = `Segala jasa jadi satu tempat! Mulai dari antar jemput (anjem), jastip, joki tugas, jasa curhat ada, jasa usir cicak juga ada, jasa pemenin disaat kesepian juga ada, sampai hal absurd dan random pun ada wkwk. Semua kebutuhan mahasiswa ada di UB MAGER!`;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 pb-6 flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center md:text-left mb-4">
              Temukan Kemudahan Bersama UB
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#043A53] text-center md:text-left">
              MAGER!
            </h2>
          </div>

          {/* Quote Text - Flex-1 untuk push footer ke bawah */}
          <div className="flex-1 mb-8 min-h-[300px] md:min-h-0">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              {quoteText}
            </p>
          </div>

          {/* Footer - Fixed at bottom */}
          <div className="mt-auto">
            {/* Divider */}
            <div className="mb-6 border-t border-gray-300"></div>

            {/* Founder info and button */}
            <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-6">
              {/* Founder info */}
              <div className="text-center md:text-left">
                <p className="text-gray-900 font-semibold text-lg md:text-xl">
                  Femas Alfaridzi
                </p>
                <p className="text-gray-600 text-base md:text-lg">
                  Founder of UB MAGER WEB
                </p>
              </div>

              {/* Contact button */}
              <div>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#043A53] to-[#74C1E4] text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg inline-block"
                >
                  Touch Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .typewriter-text {
          word-wrap: break-word;
          line-height: 1.8;
          display: block;
          width: 100%;
        }
      `}</style>
    </main>
  );
};

// No typing animation — static text displayed inline

export default AboutPage;