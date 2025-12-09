'use client';

import Link from "next/link";

const AboutPage = () => {
  const quoteText = `Hi, everyone! Kenalin, aku Femas Alfaridzi, mahasiswa Teknologi Informasi Universitas Brawijaya sekaligus founder dari WEB UB MAGER. Buatku, UB MAGER bukan sekadar platform kecil tempat cari cuan tambahan. 
  Di sini aku ngerjain banyak hal mulai dari antar jemput (anjem), jastip, joki tugas, sampai hal-hal absurd dan random yang cuma anak rantau yang paham. 
  Website ini adalah bentuk kecil dari usahaku buat mengabadikan setiap langkah di masa quarter life crisis. Sebuah pengingat bahwa nggak ada kesuksesan yang lahir dari zona nyaman.
Jadi, buat kamu yang lagi berjuang tanpa support, tetap berdiri di kaki sendiri, dan terus nyari alasan buat nggak nyerah,
maka ingatlah satu hal:
"Saat dunia memberimu seribu alasan untuk menyerah.
maka, temukanlah satu alasan untuk tetap melangkah."`;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 pb-6 flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center md:text-left">
              Meet Our Founder
            </h1>
          </div>

          {/* Quote Text - Flex-1 untuk push footer ke bawah */}
          <div className="flex-1 mb-8 min-h-[300px] md:min-h-0">
            <blockquote className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-justify">
                <span className="typewriter-text">{quoteText}</span>
              </blockquote>
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