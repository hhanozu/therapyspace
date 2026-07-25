'use client'

import { translations } from '@/lib/translations'

export default function Footer({ language }) {
  const t = translations[language]

  return (
    <footer className="bg-therapy-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">TherapySpace</h3>
            <p className="text-gray-300 text-sm">
              {language === 'en' 
                ? 'Professional mental health support for your healing journey.'
                : 'İyileşme yolculuğunuz için profesyonel ruh sağlığı desteği.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              {language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-white transition">{t.nav.home}</a></li>
              <li><a href="/about" className="hover:text-white transition">{t.nav.about}</a></li>
              <li><a href="/services" className="hover:text-white transition">{t.nav.services}</a></li>
              <li><a href="/contact" className="hover:text-white transition">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">{t.contact.info}</h3>
            <p className="text-gray-300 text-sm mb-2">
              <strong>{t.contact.emailLabel}:</strong> busraugurcan@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
