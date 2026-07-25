'use client'

import { useState } from 'react'
import { translations } from '@/lib/translations'

export default function Contact() {
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const t = translations[language]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add email sending logic or form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-calm-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">{t.contact.title}</h1>
          <p className="text-xl text-calm-100">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-therapy-800">
                {language === 'en' ? 'Send a Message' : 'Bir Mesaj Gönder'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-calm-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-calm-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">{t.contact.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-calm-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">{t.contact.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-calm-600 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-calm-600 text-white py-3 rounded-lg font-semibold hover:bg-calm-700 transition"
                >
                  {t.contact.send}
                </button>
              </form>
              {submitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  {language === 'en'
                    ? 'Thank you! Your message has been sent.'
                    : 'Teşekkür ederim! Mesajınız gönderildi.'}
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-therapy-800">{t.contact.info}</h2>
              <div className="space-y-6">
                <div className="bg-calm-50 p-6 rounded-lg">
                  <h3 className="font-bold text-calm-700 mb-2">{t.contact.emailLabel}</h3>
                  <p className="text-gray-700">busraugurcan@gmail.com</p>
                </div>
                <div className="bg-calm-50 p-6 rounded-lg">
                  <h3 className="font-bold text-calm-700 mb-2">
                    {language === 'en' ? 'Office Hours' : 'Ofis Saatleri'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en'
                      ? 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By Appointment'
                      : 'Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: Randevuya Göre'}
                  </p>
                </div>
                <div className="bg-calm-50 p-6 rounded-lg">
                  <h3 className="font-bold text-calm-700 mb-2">
                    {language === 'en' ? 'Response Time' : 'Yanıt Süresi'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en'
                      ? 'I typically respond to inquiries within 24-48 hours.'
                      : 'Sorulara genellikle 24-48 saat içinde yanıt veriyorum.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
