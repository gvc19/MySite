'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in building scalable applications using React, Next.js, .NET Core, 
              and cloud technologies.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With experience in healthcare technology, I've developed Electronic Medical Record (EMR) 
              systems and Practice Management Systems that improve patient care and streamline clinical workflows. 
              I'm passionate about creating solutions that make a real difference.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in clean code, scalable architecture, and continuous learning. When I'm not coding, 
              you can find me exploring new technologies, contributing to open-source projects, or sharing 
              knowledge with the developer community.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
              What I Do
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Full-stack web application development
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Healthcare technology solutions
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Cloud architecture and deployment
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Team collaboration and mentoring
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}