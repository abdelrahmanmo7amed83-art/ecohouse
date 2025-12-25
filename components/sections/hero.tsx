"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--eco-green) 0%, transparent 70%)" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--eco-green) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--eco-gold) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm border border-black/5 px-5 py-2.5 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-eco-gold" />
              <span className="text-sm font-semibold text-black/60">Group 10127 Capstone Project</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 text-balance leading-[1.1]">
              Building{" "}
              <span className="text-eco-green relative inline-block">
                Sustainable
                <svg
                  className="absolute -bottom-3 left-0 w-full h-4"
                  viewBox="0 0 300 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M5 10 Q 75 5, 150 10 T 295 10"
                    stroke="var(--eco-gold)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                  />
                </svg>
              </span>
              <br />
              Homes for <span className="text-eco-gold">Tomorrow</span>
            </h1>

            <p className="text-xl text-black/60 mb-10 leading-relaxed text-pretty max-w-xl font-light">
              EcoHouse reimagines modern construction with eco-friendly materials, cutting-edge energy efficiency, and
              carbon-neutral design. Join us in creating homes that nurture both people and planet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-black hover:bg-eco-green text-white font-semibold group shadow-xl transition-all duration-300 h-14 px-8 text-base"
                asChild
              >
                <a href="#register">
                  Pre-Register Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black/10 hover:border-black text-black hover:bg-black/5 font-semibold h-14 px-8 text-base transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="#about">Explore Project</a>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "100%", label: "Carbon Neutral", icon: <TrendingUp className="w-4 h-4" /> },
                { value: "50%", label: "Energy Savings", icon: <TrendingUp className="w-4 h-4" /> },
                { value: "100%", label: "Eco Materials", icon: <TrendingUp className="w-4 h-4" /> },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="bg-white border border-black/5 rounded-2xl p-4 hover:border-eco-green/30 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center gap-1.5 mb-1.5 text-eco-green opacity-70 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-black font-display">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-black/60 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-1000"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-border/50 group">
              <Image
                src="https://i.ibb.co/hJX2QKKN/3d.png"
                alt="EcoHouse sustainable architecture concept"
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                className="absolute bottom-6 left-6 bg-card/80 backdrop-blur-md border border-border/50 p-5 rounded-2xl shadow-xl"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">
                  STEM 6th October
                </p>
                <p className="text-3xl font-bold text-eco-green font-display">Group #10127</p>
              </motion.div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-eco-gold/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
