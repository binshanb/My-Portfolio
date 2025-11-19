import React from 'react'

const Skill = ({name}) => (
  <li className="px-3 py-1 bg-white/3 rounded-md text-sm">{name}</li>
)

export default function About(){
  const groups = [
    { title: 'Programming Languages', items: ['Python','JavaScript','Java','PHP','C'] },
    { title: 'Front-End / Web', items: ['HTML5','CSS3','React','Bootstrap','Tailwind CSS','Figma'] },
    { title: 'Frameworks & Libraries', items: ['Django','Django REST Framework','Django Channels','Redux'] },
    { title: 'Databases', items: ['PostgreSQL','MongoDB','Redis'] },
    { title: 'DevOps & Cloud', items: ['AWS (EC2, S3)','Nginx','Gunicorn','Docker','CI/CD','Certbot'] },
    { title: 'Tools', items: ['Git','GitHub','Postman','WordPress','Scriptcase'] },
    { title: 'APIs & Integrations', items: ['JWT','Razorpay','Twilio','WebSocket','REST API Development'] },
    { title: 'Data Analysis', items: ['NumPy','Pandas','Matplotlib'] },
    { title: 'Other Skills', items: ['Data Structures & Algorithms','Agile/Scrum','System Integration'] }
  ]

  return (
    <section id="about" className="py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-gray-200 max-w-xl">Experienced Software Developer with expertise in Django, React, AWS and building production-ready apps. I focus on delivering reliable, maintainable systems and enjoy automating infrastructure and developer workflows.</p>

        <h3 className="mt-6 font-medium">Technical Skills</h3>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(g => (
            <div key={g.title}>
              <h4 className="font-semibold mb-2">{g.title}</h4>
              <ul className="flex flex-wrap gap-2">
                {g.items.map(i => <Skill key={i} name={i} />)}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-8">
          <h3 className="font-medium">Education</h3>
          <div className="mt-3">
            <h4 className="font-semibold">Diploma in Computer Engineering</h4>
            <p className="text-sm text-gray-300">Government Polytechnic College, Attingal — 2012–2015</p>
            <p className="text-sm text-gray-400">CGPA: 6.75</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-6">
          <h3 className="font-medium">Certifications</h3>
          <ul className="mt-2 text-gray-200 list-inside list-disc">
            <li>Python Full Stack Development — Brototype</li>
            <li>Certified Agile Scrum Master (CASM) — HRD University</li>
          </ul>
        </div>

        {/* Key Achievements */}
        <div className="mt-6">
          <h3 className="font-medium">Key Achievements</h3>
          <ul className="mt-2 text-gray-200 list-inside list-disc space-y-1">
            <li>Built and deployed 5+ full-stack web applications hosted on AWS (see Projects for links).</li>
            <li>Integrated real-time communication using Django Channels and Redis to enable live updates.</li>
            <li>Improved API performance through optimized queries and caching strategies.</li>
            <li>Automated deployments with Nginx and Gunicorn and CI/CD pipelines, achieving 99.9% uptime.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
