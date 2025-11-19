import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-4 z-40">
      <div className="container-max nav-glass rounded-xl flex items-center justify-between px-6 py-3">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-white">Binshan B S</a>
        <nav className="space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
