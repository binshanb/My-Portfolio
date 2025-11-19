import React from 'react'

const Role = ({title, org, period, bullets}) => (
  <div className="mb-4">
    <div className="flex items-baseline justify-between">
      <h4 className="font-semibold">{title}</h4>
      <span className="text-sm text-gray-400">{period}</span>
    </div>
    <div className="text-sm text-gray-200">{org}</div>
    <ul className="mt-2 list-disc list-inside text-sm text-gray-200">
      {bullets.map((b,i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
)

export default function Experience(){
  const roles = [
   
    { title: 'Software Developer – Python', org: 'Easy BIS, India', period: '2024 - 2025', bullets: ['Built and maintained web applications using Django and PostgreSQL','Improved backend API efficiency and implemented RESTful endpoints.']},
    { title: 'Full Stack Developer – Python', org: 'Brototype, India', period: '2023 - 2024', bullets: ['Built full-stack projects with Django REST Framework and React','Collaborated in Agile teams for feature development and deployment.']},
    { title: 'IT Developer', org: 'Abuljadayel Company, Saudi Arabia', period: '2017 - 2022', bullets: ['Developed enterprise applications and business management systems.','Collaborated with international teams to deliver scalable solutions.']},
    { title: 'Backend Support', org: 'Intelenet Global Services, India', period: '2015 - 2017', bullets: ['Provided backend support for enterprise applications; diagnosed and resolved production issues to minimize downtime.','Maintained databases and backend services (PostgreSQL/MySQL), ensuring data integrity and reliable operation.']},
  ]

  return (
    <section id="experience" className="py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-6">
          {roles.map(r => (
            <div key={r.title} className="card-glow p-4 rounded-lg">
              <Role {...r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
