'use client'

import { useState } from 'react'
import { translations } from '@/lib/translations'

export default function Services() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]

  return (
    <>
      {/* Hero */}
      <section className="bg-calm-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">{t.services.title}</h1>
          <p className="text-xl text-calm-100">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {t.services.items.map((service, idx) => (
              <div key={idx} className="bg-calm-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4 text-calm-700">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Specialties */}
          <div className="bg-therapy-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-therapy-800">{t.services.specialties}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.services.specialtyList.map((specialty, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-calm-600 rounded-full mr-3"></span>
                  <span className="text-gray-800">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
