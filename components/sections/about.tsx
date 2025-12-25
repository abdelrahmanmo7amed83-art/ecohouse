"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, MapPin, Hash, Target, Eye } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Abdelrahman Mohamed",
    email: "Abdelrahman.1025090@stemoctober.moe.edu.eg",
    role: "Researcher & Graphic Designer",
    image: "/photo.png",
  },
  {
    name: "Abdullah Mohamed",
    email: "Abdullah.1025094@stemoctober.moe.edu.eg",
    role: "Researcher and Engineer",
    image: "/portrait-of-abdullah.jpg",
  },
  {
    name: "Adnan Amr",
    email: "Adnan.1025095@stemoctober.moe.edu.eg",
    role: "Researcher and Engineer",
    image: "/portrait-of-adnan.jpg",
  },
  {
    name: "Hamza Ali",
    email: "Hamza.1025090@stemoctober.moe.edu.eg",
    role: "Researcher & Engineer",
    image: "/portrait-of-hamza.jpg",
  },
  {
    name: "David Maher",
    email: "David.1025078@stemoctober.moe.edu.eg",
    role: "Researcher and Engineer",
    image: "/portrait-of-david.jpg",
  },
]

export function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap gap-4 mb-16 text-sm justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 bg-white border border-black/5 px-5 py-3 rounded-full shadow-sm"
          >
            <MapPin className="size-4 text-eco-green" />
            <span className="font-medium text-black/70">STEM High School for Boys - 6th of October</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2.5 bg-white border border-black/5 px-5 py-3 rounded-full shadow-sm"
          >
            <Hash className="size-4 text-eco-gold" />
            <span className="font-medium text-black/70">Group No. 10127</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-eco-green uppercase mb-6 flex items-center gap-2">
              <span className="w-12 h-px bg-eco-green" />
              Our Project
            </h2>
            <h3 className="font-display text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              EcoHouse
              <br />
              <span className="text-eco-gold">Capstone Project</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
              EcoHouse is an innovative architectural endeavor focused on redefining the standards of sustainable
              living. As a flagship Capstone Project, we bridge the gap between advanced engineering and environmental
              stewardship.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Our mission is to design housing solutions that are not only energy-efficient but also resilient,
              affordable, and deeply integrated with their natural surroundings.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-eco-green/10 text-eco-green mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-display text-2xl font-bold text-black mb-3">Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To create carbon-neutral housing accessible to everyone through innovative design and sustainable
                practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-eco-gold/10 text-eco-gold mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-display text-2xl font-bold text-black mb-3">Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                A world where architecture and nature coexist in perfect harmony, inspiring future generations.
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-eco-green uppercase mb-6">Meet The Team</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
              The EcoHouse <span className="text-eco-gold">Innovators</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Five passionate students from STEM High School for Boys - 6th of October, united by a shared vision for
              sustainable architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="border border-black/5 bg-white hover:border-eco-green/30 transition-all duration-300 overflow-hidden group h-full shadow-sm hover:shadow-md">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-eco-green to-eco-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <CardHeader className="flex flex-col items-center text-center gap-4 p-8">
                    <div className="relative size-24 rounded-full overflow-hidden border-2 border-black/5 group-hover:border-eco-green/30 transition-all duration-300 shadow-sm">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-display font-bold text-black">{member.name}</CardTitle>
                      <CardDescription className="flex flex-col gap-2">
                        <span className="text-eco-green font-semibold text-sm tracking-wide">{member.role}</span>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center gap-1.5 hover:text-eco-green transition-colors text-xs font-medium group/email"
                        >
                          <Mail className="size-3.5 group-hover/email:scale-110 transition-transform" />
                          <span className="truncate max-w-[180px]">{member.email.split("@")[0]}@...</span>
                        </a>
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
