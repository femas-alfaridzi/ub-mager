'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS using environment variable (fallback to placeholder)
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'kN9ULeWVy1ZzyW794'; // replace with your public key or set env
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Kirim email menggunakan EmailJS (service/template IDs from env with fallback)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_66fy7fp';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_26tvjro';

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: process.env.NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL || 'femasalfaridzi17@gmail.com', // Email penerima (set via env on Vercel)
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Tidak diberikan',
          subject: formData.subject,
          message: formData.message,
        }
      );
      
      console.log('Email sent successfully');
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      description: 'Universitas Brawijaya, Malang',
      detail: 'Jl. Veteran, Malang, Jawa Timur 65145'
    },
    {
      icon: '📞',
      title: 'Telephone',
      description: '+62 859-2053-9522',
      detail: 'Contact us during business hours'
    },
    {
      icon: '📧',
      title: 'Email',
      description: 'femasalfaridzi17@gmail.com',
      detail: 'We are ready to assist your inquiries'
    },
    
  ];

  const socialLinks = [
    { name: 'Instagram', color: 'from-[#f58529] via-[#dd2a7b] to-[#8134af]', url: 'https://instagram.com/femasalfrdzi' },
    { name: 'WhatsApp', color: 'from-[#25D366] to-[#128C7E]', url: 'https://wa.me/6285920539522' },
  ];

  const faqs = [
    {
      question: 'Berapa lama waktu respons dari tim?',
      answer: 'Biasanya kami merespons dalam waktu kurang dari 1 jam pada jam kerja.'
    },
    {
      question: 'Apakah bisa memesan jasa di malam hari?',
      answer: 'Ya, kami buka 24/7! Tinggal hubungi kami melalui WhatsApp atau aplikasi.'
    },
    {
      question: 'Apakah ada biaya tambahan?',
      answer: 'Harga yang ditawarkan sudah termasuk semua biaya. Tidak ada biaya tersembunyi.'
    },
    {
      question: 'Bagaimana jika ada masalah dengan jasa yang dipesan?',
      answer: 'Hubungi tim support kami dan kami akan menyelesaikan masalah dengan cepat.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F8] via-white to-[#F0F8FB]">
      {/* Header Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or need help? Don&apos;t hesitate to contact the UB MAGER team. We are ready to help you 24/7!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-4">
            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="rounded-3xl p-[2px] bg-gradient-to-br from-[#043A53]/60 via-[#74C1E4]/40 to-[#BFEBFF]/20 group hover:scale-[1.01] transition-all duration-300 animate-shadow-glow"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-2xl hover:shadow-[0_10px_30px_rgba(4,58,83,0.12)] transition-shadow duration-300 border border-gray-100">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-base font-semibold text-[#043A53] mb-1">{info.description}</p>
                    <p className="text-sm text-gray-500">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl p-[2px] bg-gradient-to-br from-[#043A53]/50 via-[#74C1E4]/30 to-[#BFEBFF]/15">
              <div className="bg-white rounded-2xl shadow-2xl hover:shadow-[0_15px_40px_rgba(4,58,83,0.15)] transition-shadow duration-300 p-6 sm:p-8 lg:p-10 border border-gray-50">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Kirim Pesan</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#043A53] focus:ring-2 focus:ring-[#043A53]/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#043A53] focus:ring-2 focus:ring-[#043A53]/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 812-3456-7890"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#043A53] focus:ring-2 focus:ring-[#043A53]/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subjek
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#043A53] focus:ring-2 focus:ring-[#043A53]/20 transition-all duration-300 bg-white text-gray-900"
                    >
                      <option value="">Pilih subjek pertanyaan</option>
                      <option value="general">Pertanyaan Umum</option>
                      <option value="complaint">Keluhan/Feedback</option>
                      <option value="partnership">Kemitraan</option>
                      <option value="service">Masalah Layanan</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tulis pesan Anda di sini..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#043A53] focus:ring-2 focus:ring-[#043A53]/20 transition-all duration-300 resize-none text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#043A53] to-[#74C1E4] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 font-semibold text-center">
                    ✓ Pesan Anda berhasil dikirim! Terima kasih telah menghubungi kami.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 font-semibold text-center">
                    ✗ Gagal mengirim pesan. Silakan coba lagi.
                  </div>
                )}
              </form>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Follow Us on Social Media
          </h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${social.color} rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer`}
                aria-label={social.name}
              >
                <div className="mb-4 inline-block group-hover:scale-105 transition-transform duration-300">
                  {social.name === 'Instagram' ? (
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                      alt="Instagram logo"
                      width={56}
                      height={56}
                      className="rounded-lg"
                    />
                  ) : social.name === 'WhatsApp' ? (
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/100px-WhatsApp.svg.png"
                      alt="WhatsApp logo"
                      width={56}
                      height={56}
                      className="rounded-lg"
                    />
                  ) : (
                    <div className="text-5xl mb-4 inline-block">{social.name}</div>
                  )}
                </div>
                <h3 className="text-xl font-bold">{social.name}</h3>
                <p className="text-sm opacity-90 mt-2">Contact us here</p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-100 mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-start gap-3">
                  <span className="text-2xl text-[#043A53] flex-shrink-0">❓</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 ml-11 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-white p-6 sm:p-8 border-b border-gray-100">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
              Find Us at This Location
            </h2>
          </div>
          <div className="h-96 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2360543895684!2d112.74521572346923!3d-7.952436892069216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881a46e0001b1%3A0x540d90c271605b0!2sUniversitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1701234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shadow-glow-rotate {
          0% {
            box-shadow: 0 0 20px rgba(4, 58, 83, 0.3), 0 0 40px rgba(116, 193, 228, 0.2);
          }
          25% {
            box-shadow: 20px 0 30px rgba(116, 193, 228, 0.25), 0 0 40px rgba(4, 58, 83, 0.2);
          }
          50% {
            box-shadow: 0 20px 30px rgba(116, 193, 228, 0.3), 0 0 40px rgba(4, 58, 83, 0.15);
          }
          75% {
            box-shadow: -20px 0 30px rgba(116, 193, 228, 0.25), 0 0 40px rgba(4, 58, 83, 0.2);
          }
          100% {
            box-shadow: 0 0 20px rgba(4, 58, 83, 0.3), 0 0 40px rgba(116, 193, 228, 0.2);
          }
        }

        :global(.animate-shadow-glow) {
          animation: shadow-glow-rotate 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}