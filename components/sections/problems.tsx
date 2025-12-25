"use client"

import { motion } from "framer-motion"
import { Flame, CloudRain, Zap, Home } from "lucide-react"

const problems = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Energy Inefficiency",
    description:
      "Traditional buildings account for nearly 40% of global energy consumption due to poor insulation and dated systems.",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Fire Vulnerability",
    description:
      "Many modern housing materials are susceptible to fire, posing significant risks to inhabitants and the environment.",
  },
  {
    icon: <CloudRain className="w-8 h-8" />,
    title: "Climate Impact",
    description:
      "The construction industry is one of the largest contributors to carbon emissions and waste worldwide.",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Housing Scarcity",
    description:
      "Rising costs make sustainable housing a luxury rather than a standard, leaving millions without quality shelter.",
  },
]

export function Problems() {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-eco-gold uppercase mb-6 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-eco-gold" />
            Challenges We Address
            <span className="w-12 h-px bg-eco-gold" />
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Rethinking Modern Construction
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Current housing models are struggling to keep up with environmental demands and safety standards. EcoHouse
            addresses these core issues with innovative design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border hover:border-eco-gold/50 hover:bg-card transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-eco-green/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="size-16 rounded-2xl bg-eco-green/10 flex items-center justify-center text-eco-green mb-6 group-hover:bg-eco-green group-hover:text-background group-hover:scale-110 transition-all duration-300 shadow-lg">
                {problem.icon}
              </div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4 leading-snug">{problem.title}</h4>
              <p className="text-muted-foreground leading-relaxed font-light">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
