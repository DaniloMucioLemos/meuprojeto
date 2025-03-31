'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    desc: string
    image: string
    tags: string[]
    icons: IconType[]
  }
  index: number
  inView: boolean
}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const FloatingIcons = ({ icons }: { icons: IconType[] }) => {
    return (
      <div className="absolute -top-4 -right-4 w-20 h-20 pointer-events-none">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              rotate: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              top: `${index * 10}px`,
              right: `${index * 10}px`
            }}
          >
            <Icon className="w-6 h-6 text-blue-400" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <Link href={`/portfolio/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-xl bg-dark-secondary border border-dark-border/50 cursor-pointer hover:border-dark-accent/50 transition-colors"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-dark-secondary/50 to-transparent"></div>
        </div>
        
        <div className="relative p-6">
          <FloatingIcons icons={project.icons} />
          
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
            {project.title}
          </h3>
          
          <p className="text-dark-text-secondary mb-4">
            {project.desc}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-dark-accent/20 text-dark-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
} 