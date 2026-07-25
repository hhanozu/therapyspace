'use client'

import { useState } from 'react'
import { translations } from '@/lib/translations'
import Link from 'next/link'

export default function Home() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-calm-600 to-calm-700 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.home.title}</h1>
          <p className="text-xl mb-8 text-calm-100">{t.home.subtitle}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-calm-700 px-8 py-3 rounded-lg font-semibold hover:bg-calm-50 transition shadow-lg"
          >
            {t.home.cta}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-therapy-800">
            {language === 'en' ? 'Why Choose TherapySpace?' : 'Neden TherapySpace\'i Seçmelisiniz?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                en: 'Evidence-Based Approach',
                tr: 'Kanıta Dayalı Yaklaşım',
                descEn: 'All therapy methods are scientifically proven and tailored to your needs.',
                descTr: 'Tüm terapi yöntemleri bilimsel olarak kanıtlanmış ve ihtiyaçlarınıza uyarlanmıştır.',
              },
              {
                en: 'Safe & Confidential',
                tr: 'Güvenli ve Gizli',
                descEn: 'Your privacy is our priority. Complete confidentiality is guaranteed.',
                descTr: 'Gizliliğiniz bizim önceliğimizdir. Tam gizlilik garantisini veriyoruz.',
              },
              {
                en: 'Compassionate Care',
                tr: 'Şefkatli Bakım',
                descEn: 'Experience professional support with warmth and empathy.',
                descTr: 'Sıcaklık ve empati ile profesyonel destek alın.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-calm-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-calm-700">
                  {language === 'en' ? feature.en : feature.tr}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' ? feature.descEn : feature.descTr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-calm-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Ready to Begin Your Journey?' : 'Yolculuğunuza Başlamaya Hazır mısınız?'}
          </h2>
          <p className="text-lg mb-8 text-calm-100">
            {language === 'en'
              ? 'Take the first step towards better mental health today.'
              : 'Bugün daha iyi ruh sağlığı için ilk adımı atın.'}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-calm-700 px-8 py-3 rounded-lg font-semibold hover:bg-calm-50 transition"
          >
            {t.home.cta}
          </Link>
        </div>
      </section>
    </>
  )
}
