'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/gvc19',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gagan-v-c-010650218/',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:gaganvc19@gmail.com',
      icon: Mail
    }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Gagan V C</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating meaningful digital experiences 
            and solving complex problems with clean, efficient code.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="border-t border-gray-800 dark:border-gray-900 pt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              © {currentYear} Gagan V C. Made with{' '}
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              and Next.js
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}