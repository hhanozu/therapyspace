'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState('en')

  return (
    <html lang={language}>
      <head>
        <title>TherapySpace - Professional Mental Health Support</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional therapy and counseling services with evidence-based approaches" />
      </head>
      <body>
        <Header language={language} setLanguage={setLanguage} />
        <main>{children}</main>
        <Footer language={language} />
      </body>
    </html>
  )
}
