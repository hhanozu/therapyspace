'use client'

import { useState } from 'react'
import { translations } from '@/lib/translations'

export default function About() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]

  return (
    <>
      {/* Hero */}
      <section className="bg-calm-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">{t.about.title}</h1>
          <p className="text-xl text-calm-100">{t.about.subtitle}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-therapy-800">Büşra Uğurcan</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.about.bio}</p>
          </div>

          {/* Credentials */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-therapy-800">
              {language === 'en' ? 'Credentials' : 'Sertifikalar'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.about.credentials.map((credential, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-6 h-6 bg-calm-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">{credential}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Therapeutic Approach */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-therapy-800">{t.about.approach}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.about.approaches.map((approach, idx) => (
                <div key={idx} className="bg-calm-50 p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold">{approach}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
