import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { LanguageProvider } from '@/contexts/LanguageContext'
import FontProvider from '@/components/FontProvider'
import WhatsAppButton from '@/components/WhatsAppButton'

import Index from './pages/Index'
import CreditHealth from './pages/Activities'
import Policies from './pages/Policies'
import Impact from './pages/Projects'
import Clients from './pages/Clients'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Equipments from './pages/Equipments'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <FontProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <WhatsAppButton />

            <BrowserRouter basename="/">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/activities" element={<CreditHealth />} />
                <Route path="/projects" element={<Impact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/equipments" element={<Equipments />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </FontProvider>
      </LanguageProvider>
    </QueryClientProvider>
  )
}

export default App
