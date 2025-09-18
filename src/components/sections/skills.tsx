'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 
        'Tailwind CSS', 'Framer Motion', 'Redux', 'Context API'
      ]
    },
    {
      title: 'Backend',
      skills: [
        '.NET Core', 'C#', 'Web API', 'Entity Framework', 'SQL Server', 
        'PostgreSQL', 'RESTful APIs', 'GraphQL', 'Microservices'
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        'Visual Studio', 'VS Code', 'Postman', 'Figma', 'Jira', 'Agile', 
        'Scrum', 'Clean Architecture', 'SOLID Principles'
      ]
    }
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
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
              Always Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and frameworks to stay current with 
              industry trends. Currently diving deeper into cloud-native architectures, 
              advanced React patterns, and performance optimization techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}