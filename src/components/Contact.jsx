import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-4 text-gray-200">
          <p className="flex gap-2 items-center">📞 <span>+971 56 656 9605</span></p>
          <p className="flex gap-2 items-center mt-1">📞 <span>+91 9544815797</span></p>
          <p className="flex gap-2 items-center mt-1">✉️ <a href="mailto:binshanb77@gmail.com" className="underline">binshanb77@gmail.com</a></p>
          <p className="mt-3">🔗 LinkedIn: <a href="https://www.linkedin.com/in/binshan-b-s-349960267/" className="underline">binshan-b-s</a></p>
        </div>
      </div>
    </section>
  )
}
