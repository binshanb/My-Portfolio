import React from 'react'
import extremeImg from '../assets/extreme.png'
import maxtickImg from '../assets/maxtick.png'

const ProjectCard = ({title, desc, links}) => (
  <div className="p-4 bg-white/3 rounded-lg">
    <h4 className="font-semibold">{title}</h4>
    <p className="text-sm text-gray-200 mt-2">{desc}</p>
    <div className="mt-3 flex gap-2">
      {links.map(l => (
        <a key={l.label} href={l.href} className="text-xs px-2 py-1 border rounded text-indigo-300">{l.label}</a>
      ))}
    </div>
  </div>
)

export default function Projects(){
  const projects = [
    {
      title: 'Extreme – Hotel Booking Application',
      img: extremeImg,
      desc: 'Django REST Framework, React, Redis, Django Channels, AWS — real-time room availability and booking.',
      links: [{label:'Live', href:'https://extremestays.online/'},{label:'Backend', href:'https://github.com/binshanb/HotelBookingbackend'},{label:'Frontend', href:'https://github.com/binshanb/HotelBookingfrontend'}]
    },
    {
      title: 'Maxtick – E-commerce Store',
      img: maxtickImg,
      desc: 'Django, PostgreSQL, AWS, Razorpay — full featured e-commerce with payments and admin panel.',
      links: [{label:'Live', href:'https://maxticktime.online'},{label:'Source', href:'https://github.com/binshanb/MaxTick-Ecommerce-Project'}]
    }
  ]

  return (
    <section id="projects" className="py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
        <p className="text-gray-300 mt-2">Selected projects with live demos and source links.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.title} className="card-glow p-4 rounded-lg">
              <div className="-mx-4 -mt-4 rounded-t-lg overflow-hidden bg-black/5">
                <img src={p.img} alt={p.title} className="w-full h-56 md:h-44 object-cover block transform scale-105" />
              </div>
              <h4 className="font-semibold mt-4 text-white">{p.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.links.map(l => (
                  <a key={l.label} href={l.href} className="text-xs px-2 py-1 border rounded text-indigo-200 hover:bg-white/5">{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
