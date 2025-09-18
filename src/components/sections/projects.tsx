'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'TeamPulseIq - Task Management Platform',
      description: 'A comprehensive team productivity and project management tool designed to enhance collaboration, task tracking, and workflow automation across internal teams.',
      features: [
        'Task and workflow management with drag-and-drop interface',
        'Real-time analytics dashboards powered by Python DBT',
        'Server-Sent Events (SSE) for instant notifications',
        'Role-based access control system',
        'Multi-tenant architecture for team customization',
        'Web Workers for performance optimization',
        'Recharts integration for data visualization'
      ],
      technologies: ['React', 'Next.js', 'Python DBT', 'Recharts', 'SSE', 'Web Workers'],
      status: 'In Development',
      github: '#',
      demo: '#'
    },
    {
      title: 'Electronic Medical Record (EMR) System',
      description: 'A comprehensive Electronic Medical Record tool for a leading healthcare provider in the United States, streamlining clinical workflows and improving patient care.',
      features: [
        'Seamless and responsive user experience with Next.js and Next UI',
        'Backend services using .NET Core Clean Architecture',
        'Azure DevOps for CI/CD and automated testing',
        'Secure authentication and robust validation mechanisms',
        'Reusable UI components for improved productivity',
        'Scalable and modular design patterns'
      ],
      technologies: ['Next.js', 'Next UI', '.NET Core', 'Azure DevOps', 'Clean Architecture'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      title: 'Practice Management System for Pet Clinic',
      description: 'A robust Practice Management System for veterinary clinics in the UK, enabling efficient management of appointments, patient records, and inventory for improved animal care.',
      features: [
        'Responsive interface using React for seamless navigation',
        'Backend services with .NET Core Web API',
        'PostgreSQL database design and optimization',
        'Role-based access control for data protection',
        'Real-time dashboards for appointment scheduling',
        'Patient monitoring and inventory management'
      ],
      technologies: ['React', '.NET Core Web API', 'PostgreSQL', 'Role-based Access Control'],
      status: 'Completed',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-black dark:text-white mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-black dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  className="flex items-center space-x-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              More Projects
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and contributing to open-source initiatives. 
              Check out my GitHub profile for more of my work and contributions.
            </p>
            <motion.a
              href="https://github.com/gvc19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
              <span>View All Projects</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}