"use client"

import { motion } from "framer-motion"
import { Thermometer, ShieldCheck, Construction, Leaf, Banknote, Layout } from "lucide-react"

const features = [
  {
    icon: <Thermometer className="size-7" />,
    title: "Thermal Insulation",
    description:
      "Advanced multi-layer insulation maintains optimal interior temperature while dramatically reducing energy costs.",
  },
  {
    icon: <ShieldCheck className="size-7" />,
    title: "Fire Resistance",
    description: "Certified fire-retardant materials and structural designs that prioritize inhabitant safety.",
  },
  {
    icon: <Construction className="size-7" />,
    title: "Structural Stability",
    description: "Engineering that exceeds local seismic and load-bearing requirements for long-term durability.",
  },
  {
    icon: <Leaf className="size-7" />,
    title: "Local Eco-Materials",
    description: "Sourced locally to reduce carbon footprint and support regional sustainable economies.",
  },
  {
    icon: <Banknote className="size-7" />,
    title: "Cost Efficiency",
    description: "Optimized construction methods and material usage to ensure long-term affordability.",
  },
  {
    icon: <Layout className="size-7" />,
    title: "Modular Design",
    description: "Flexible layouts that adapt to changing needs, extending the lifecycle of the building.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--eco-gold) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
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
          <h2 className="text-sm font-bold tracking-widest text-eco-gold uppercase mb-6">Core Innovations</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Built for Resilience and Comfort
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Our technology integrates sustainability into every structural component, ensuring a home that protects both
            people and the planet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-eco-green/50 hover:bg-card transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-eco-green/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-eco-gold/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="size-14 rounded-2xl bg-eco-green/10 flex items-center justify-center text-eco-green mb-6 group-hover:scale-110 group-hover:bg-eco-green group-hover:text-background transition-all duration-300 shadow-lg relative z-10">
                {feature.icon}
              </div>
              <h4 className="font-display text-2xl font-bold text-foreground mb-4 leading-snug relative z-10">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed font-light relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
