'use client';

import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'JOKI TUGAS',
      description: 'Kami Menyediakan layanan Joki Tugas yang dapat membantu meringankan beban Anda',
      image: '/services/joki-tugas.png',
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      id: 2,
      title: 'JASA TITIP',
      description: 'Kami Menyediakan layanan Jasa Titip mulai dari beli makanan, minuman, jasa antar barang, jasa jemput barang, dan jasa lainnya.',
      image: '/services/jasa-titip.png',
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      id: 3,
      title: 'ANTAR JEMPUT',
      description: 'Kami Menyediakan layanan Antar jemput yang fleksibel, murah daripada ojek online ups, dan tentunya drivernya ramah sesam mahasiswa wkwk.',
      image: '/services/antar-jemput.png',
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    }
  ];

  const handleOrderNow = () => {
    // Nomor WhatsApp UB MAGER
    const phoneNumber = '6285920539522';
    const message = encodeURIComponent('Halo, saya ingin memesan layanan UB MAGER');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#043A53] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-center mb-16 gap-8 md:gap-40">
          {/* Left Side - Title */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              OUR
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#F0B73F] to-[#FBFBFB] bg-clip-text text-transparent">
              SERVICES
            </h2>
          </div>
          
          {/* Right Side - Description */}
          <div className="text-white text-base md:text-lg space-y-2 text-center md:text-left">
            <p className="text-justify md:text-left">Kami menyediakan berbagai layanan yang Anda butuhkan</p>
            <p className="text-justify md:text-left mt-6">Apasi yang engga ada di UB MAGER</p>
            <p className="text-justify md:text-left">24 Jam Always Available wkwk</p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 h-[450px]`}
            >
              <div className="p-8 flex flex-col h-full">
                {/* Service Image */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-30 h-30">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className={`text-xl font-bold ${service.textColor} mb-3`}>
                  {service.title}
                </h3>
                
                {/* Divider */}
                <div className="w-full h-1 bg-yellow-400 mb-4"></div>

                {/* Service Description */}
                <p className={`${service.textColor} text-sm leading-relaxed mb-6 text-justify`}>
                  {service.description}
                </p>

                {/* Order Button */}
                <div className="flex justify-center mt-auto">
                  <button
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-[#043A53] to-[#BFEBFF] hover:from-[#032d40] hover:to-[#a8d9f0] text-white font-semibold py-2 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}