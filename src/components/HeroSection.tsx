import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-[#E8F4F8] via-[#F0F8FB] to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Bagian Kiri - Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Temukan Kemudahan
              <br />
              <span className="text-gray-900">Bersama </span>
              <span className="bg-gradient-to-r from-[#043A53] to-[#8EBED4] bg-clip-text text-transparent">
                UB MAGER!
              </span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Segala jasa jadi satu tempat! Mulai dari antar jemput (anjem), 
              jastip, joki tugas, jasa curhat ada, jasa usir cicak juga ada, 
              jasa nemenin disaat kesepian juga ada, sampai hal absurd dan 
              random pun ada wkwk. Semua kebutuhan mahasiswa ada di{" "}
              <span className="font-semibold text-[#043A53]">UB MAGER</span>!
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/6285920539522?text=Halo%2C%20saya%20ingin%20memesan%20layanan%20UB%20MAGER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#043A53] to-[#74C1E4] text-white font-semibold text-lg py-3 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                ORDER NOW
              </a>
            </div>
          </div>

          {/* Bagian Kanan - Gambar */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/hero.png"
                alt="UB MAGER Hero"
                width={500}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;