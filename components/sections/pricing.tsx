"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, GraduationCap, Home, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Academic Prototype",
    icon: <GraduationCap className="size-8" />,
    priceUSD: "$8,000 – $10,000",
    priceEGP: "400,000 – 500,000 EGP",
    audience: "Universities & Research Institutions",
    description: "Educational purpose with simplified construction for testing and learning.",
    features: [
      "Educational purpose",
      "Limited scale & simplified construction",
      "Non-profit research usage",
      "No long-term occupancy requirements",
      "Affordable for universities",
      "Focused on testing & learning",
    ],
    recommended: false,
    benefits: ["Affordable for universities", "Focused on testing & learning"],
  },
  {
    name: "Residential EcoHouse",
    icon: <Home className="size-8" />,
    priceUSD: "$38,000 – $45,000",
    priceEGP: "1.2 – 1.4 million EGP",
    audience: "Individual Homeowners",
    description: "Complete sustainable living solution with long-term energy savings.",
    features: [
      "Complete EcoHouse system",
      "Added green areas with Rihan trees",
      "Thermal insulation & fire resistance",
      "Climate-optimized design",
      "Long-term energy savings",
      "Fully customized",
    ],
    recommended: true,
    benefits: ["Balanced price for private buyers", "Best value for daily living"],
  },
  {
    name: "Organizations & Institutions",
    icon: <Building2 className="size-8" />,
    priceUSD: "$48,000 – $55,000",
    priceEGP: "1.5 – 1.7 million EGP per unit",
    audience: "Governments, NGOs, Developers, Smart Cities",
    description: "Scalable engineering for public use with institutional standards.",
    features: [
      "Compliance with institutional standards",
      "Enhanced fire & safety regulations",
      "Scalability engineering & documentation",
      "Project management & quality assurance",
      "Custom layouts & infrastructure integration",
    ],
    recommended: false,
    benefits: ["Higher reliability & accountability", "Built for long-term public use", "Strong ESG & SDG alignment"],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
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
          <h2 className="text-sm font-bold tracking-widest text-eco-green uppercase mb-6">Investment Options</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-black mb-6 leading-tight text-balance">
            Transparent Pricing for <span className="text-eco-gold">Sustainable Future</span>
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Choose the right EcoHouse model for your needs. All prices are estimates and can be customized based on your
            specific requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative p-10 rounded-3xl border ${
                plan.recommended
                  ? "border-eco-green/30 shadow-xl bg-white scale-105"
                  : "border-black/5 shadow-sm bg-white"
              } flex flex-col hover:scale-105 transition-all duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-eco-green text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-widest shadow-lg">
                  <Sparkles className="size-3.5" />
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`inline-flex items-center justify-center size-16 rounded-2xl mb-6 ${
                    plan.recommended ? "bg-eco-green/10 text-eco-green" : "bg-black/5 text-black"
                  }`}
                >
                  {plan.icon}
                </div>
                <h4 className="font-display text-2xl font-bold text-black mb-2">{plan.name}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-4">
                  {plan.audience}
                </p>
                <div className="mb-4">
                  <span className="font-display text-4xl font-bold text-eco-green">{plan.priceUSD}</span>
                  <p className="text-sm text-black/50 mt-1">≈ {plan.priceEGP}</p>
                </div>
                <p className="text-sm text-black/60 leading-relaxed font-light">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div
                      className={`size-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.recommended ? "bg-eco-green/10 text-eco-green" : "bg-black/5 text-black/60"
                      }`}
                    >
                      <Check className="size-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-black/70 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.benefits && (
                <div className="mb-8 p-4 bg-black/5 border border-black/5 rounded-2xl">
                  <p className="text-xs font-bold text-eco-gold uppercase tracking-wider mb-2">Key Benefits:</p>
                  <ul className="space-y-1">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="text-xs text-black/60">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                className={`w-full h-14 rounded-2xl font-semibold transition-all duration-300 ${
                  plan.recommended
                    ? "bg-black hover:bg-eco-green text-white shadow-lg"
                    : "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
                }`}
                asChild
              >
                <a href="#register">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            All prices are estimates and subject to customization based on site conditions, materials selection, and
            specific requirements. Contact us for a detailed quote tailored to your project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
