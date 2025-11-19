import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Binshan B S — Built with React + Tailwind
      </footer>
    </div>
  )
}
