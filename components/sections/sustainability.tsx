"use client"

import { motion } from "framer-motion"
import { Zap, Building2, RecycleIcon, Leaf, Award } from "lucide-react"

const sdgs = [
  {
    number: "7",
    title: "Affordable and Clean Energy",
    description:
      "Renewable energy integration and efficient power consumption systems reduce dependency on fossil fuels.",
    icon: <Zap className="size-6" />,
    color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
  },
  {
    number: "11",
    title: "Sustainable Cities and Communities",
    description:
      "Modular, scalable architecture supports resilient urban development and accessible housing for growing populations.",
    icon: <Building2 className="size-6" />,
    color: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
  },
  {
    number: "12",
    title: "Responsible Consumption and Production",
    description:
      "Locally-sourced, recycled materials minimize waste and promote circular economy principles in construction.",
    icon: <RecycleIcon className="size-6" />,
    color: "from-amber-500/20 to-amber-600/20 border-amber-500/30",
  },
]

const metrics = [
  { label: "CO2 Reduction", value: "65%", sublabel: "vs. traditional homes" },
  { label: "Energy Savings", value: "50%", sublabel: "annual consumption" },
  { label: "Recycled Materials", value: "85%", sublabel: "construction content" },
  { label: "Passive Cooling", value: "100%", sublabel: "without any mechanical cooling" }
]

export function Sustainability() {
  return (
    <section className="py-32 bg-gradient-to-br from-eco-green-dark via-eco-green to-eco-green-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="absolute -top-40 -right-40 size-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--eco-gold) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-eco-gold/20 backdrop-blur-sm border border-eco-gold/30 px-5 py-2.5 rounded-full mb-8">
            <Award className="size-4 text-eco-gold" />
            <span className="text-sm font-semibold text-eco-gold">UN Sustainable Development Goals</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Aligned with Global Sustainability Goals
          </h2>
          <p className="text-xl text-white/80 leading-relaxed font-light">
            EcoHouse directly contributes to the United Nations Sustainable Development Goals, creating measurable
            impact for our planet and communities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`bg-gradient-to-br ${sdg.color} backdrop-blur-sm border rounded-3xl p-8 hover:scale-105 transition-all duration-300 group shadow-2xl hover:shadow-eco-gold/20`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-eco-green transition-all duration-300">
                  {sdg.icon}
                </div>
                <div className="font-display text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                  {sdg.number}
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 leading-tight">{sdg.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm font-light">{sdg.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 text-eco-gold mb-4">
              <Leaf className="size-6" />
              <h3 className="font-display text-3xl font-bold">Environmental Impact Metrics</h3>
            </div>
            <p className="text-white/70 text-lg font-light">
              Quantifiable results from our sustainable design approach
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold mb-2 font-display bg-gradient-to-br from-white to-eco-gold bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-white/60 font-light">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
