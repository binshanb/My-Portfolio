import React from 'react'
import placeholder from '../assets/profile-placeholder.svg'
import portfolioPic from '../assets/portfolio-pic.jpeg'

export default function Hero() {
  return (
    <section id="hero" className="pt-6 pb-12">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Binshan B S</h1>
            <p className="mt-3 text-lg text-indigo-200">Software Developer — Full Stack (Django / React) · DevOps · AWS</p>

            <p className="mt-6 text-gray-300 max-w-xl">Motivated and results-driven Software Developer with hands-on experience in Full Stack Web Development, Backend Engineering, and DevOps Automation. Seeking to contribute to innovative projects in the UAE.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="btn-accent px-4 py-2 rounded-md shadow">Contact</a>
              <a href="#projects" className="px-4 py-2 border border-gray-700 rounded-md text-gray-200">Projects</a>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap text-sm text-gray-400">
              <span className="px-2 py-1 bg-white/3 rounded">Open to work</span>
              <span className="px-2 py-1 bg-white/3 rounded">Based in Dubai</span>
              <span className="px-2 py-1 bg-white/3 rounded">Immediate Availability</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden ring-2 ring-indigo-500/30 bg-gray-800">
              <img
                src={portfolioPic}
                alt="Profile"
                className="w-full h-full object-cover object-top block transform scale-105"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = placeholder }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
