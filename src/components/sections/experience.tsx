'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Xcudify Solutions Pvt Ltd.',
      position: 'Full Stack Developer',
      location: 'Jan 2024 - Present',
      description: 'Developing comprehensive team productivity and project management tools to enhance collaboration, task tracking, and workflow automation across internal teams.',
      achievements: [
        'Designed and developed task and workflow management features using React and Python DBT',
        'Implemented multi-tenant architectures for independent team customization',
        'Integrated Recharts for intuitive data visualization and analytics dashboards',
        'Enabled Server-Sent Events (SSE) for real-time notifications',
        'Developed role-based access control system for secure feature access'
      ],
      technologies: ['React', 'Python DBT', 'Recharts', 'SSE', 'Multi-tenant Architecture']
    }
  ]

  const education = [
    {
      title: 'Bachelor of Engineering',
      institution: 'University BDT College of Engineering',
      location: 'Davanagere',
      period: '2019 - 2023',
      description: 'Completed Bachelor of Engineering with focus on computer science and software development.'
    }
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-8">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {exp.position}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {exp.title}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-black dark:text-white mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                    {edu.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {edu.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}