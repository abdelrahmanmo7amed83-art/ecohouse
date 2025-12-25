"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Hash, Instagram, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-eco-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 text-2xl font-bold text-foreground mb-8">
              <div className="relative size-12">
                <Image src="/logo-eco.png" alt="EcoHouse Logo" fill className="object-contain" />
              </div>
              <span className="font-display">EcoHouse</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-10 font-light text-pretty">
              Revolutionizing the architecture industry with sustainable, resilient, and affordable housing solutions. A
              flagship Capstone Project by Group 10127.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold text-foreground mb-8">Project</h4>
            <ul className="space-y-4">
              {["Overview", "The Team", "Our Vision", "Research"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-eco-green transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-eco-green transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold text-foreground mb-8">Resources</h4>
            <ul className="space-y-4">
              {["Documentation", "Sustainability Goals", "Material Science", "Safety Standards"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-eco-green transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-eco-green transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold text-foreground mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-eco-gold/10 flex items-center justify-center text-eco-gold shrink-0 group-hover:bg-eco-gold group-hover:text-background transition-all duration-300">
                  <MapPin className="size-5" />
                </div>
                <span className="text-muted-foreground text-sm font-light leading-snug">
                  STEM High School for Boys
                  <br />
                  6th of October
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="size-10 rounded-xl bg-eco-green/10 flex items-center justify-center text-eco-green shrink-0 group-hover:bg-eco-green group-hover:text-background transition-all duration-300">
                  <Hash className="size-5" />
                </div>
                <span className="text-muted-foreground text-sm font-light tracking-wide">Group No. 10127</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="size-10 rounded-xl bg-eco-green/10 flex items-center justify-center text-eco-green shrink-0 group-hover:bg-eco-green group-hover:text-background transition-all duration-300">
                  <Mail className="size-5" />
                </div>
                <a
                  href="mailto:abdelrahman.1025090@stemoctober.moe.edu.eg"
                  className="text-muted-foreground hover:text-eco-green transition-colors text-xs font-medium truncate flex items-center gap-1"
                >
                  Contact Email
                  <ArrowUpRight className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground font-light italic">
            © 2025 EcoHouse Project - Group 10127. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
