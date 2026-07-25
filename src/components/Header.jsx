'use client'

import { useState } from 'react'
import Link from 'next/link'
import { translations } from '@/lib/translations'

export default function Header({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en')
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-calm-700">
          TherapySpace
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-calm-700 transition">
            {t.nav.home}
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-calm-700 transition">
            {t.nav.about}
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-calm-700 transition">
            {t.nav.services}
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-calm-700 transition">
            {t.nav.contact}
          </Link>
        </div>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-calm-100 text-calm-700 rounded hover:bg-calm-200 transition text-sm font-semibold"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-calm-700">
            {t.nav.home}
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-calm-700">
            {t.nav.about}
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-calm-700">
            {t.nav.services}
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-calm-700">
            {t.nav.contact}
          </Link>
        </div>
      )}
    </header>
  )
}
