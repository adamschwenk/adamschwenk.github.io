"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowDown, Mail, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import { motion, useScroll, useTransform } from "framer-motion"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="relative bg-background">
      {/* Hero Section with Parallax */}
      <div ref={targetRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <div className="relative h-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0014%20%282%29.JPG-edo9ktUL0fofcRWPGutmu7oIP1MNbP.jpeg"
              alt="Adam Schwenk in front of the Millennium Falcon"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900"></div>
          </div>
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">Adam Schwenk</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-200">Product Manager</h2>
            <p className="text-lg md:text-xl mb-8 text-zinc-300 max-w-2xl mx-auto">
              Data-focused product leader with 10+ years of experience creating and launching consumer-facing mobile
              applications across startups and Fortune 500 companies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-white text-zinc-900 hover:bg-zinc-200 text-lg px-8 py-6">
                <a
                  href="/Adam_Schwenk_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70">
          <Link href="#about" className="flex flex-col items-center hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={24} className="animate-bounce" />
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.
