"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Send, Sparkles } from "lucide-react"

export function PreRegistration() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section
      id="register"
      className="py-32 bg-gradient-to-br from-eco-green-dark via-eco-green to-eco-green-dark relative overflow-hidden"
    >
      <motion.div
        className="absolute -top-40 -left-40 size-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--eco-gold) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="bg-card/95 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 shadow-2xl border border-border/50">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-eco-green/10 border border-eco-green/20 px-5 py-2.5 rounded-full mb-6">
              <Sparkles className="size-4 text-eco-green" />
              <span className="text-sm font-semibold text-eco-green">Early Access</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Join the Future of Housing
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Secure your spot for early access to the EcoHouse prototype and project updates from Group 10127.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                className="space-y-6"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="h-14 border-border bg-background/50 backdrop-blur-sm focus:border-eco-green text-foreground placeholder:text-muted-foreground rounded-xl"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-14 border-border bg-background/50 backdrop-blur-sm focus:border-eco-green text-foreground placeholder:text-muted-foreground rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="interest" className="text-sm font-semibold text-foreground">
                    Interest Type
                  </Label>
                  <select
                    id="interest"
                    required
                    className="flex h-14 w-full items-center justify-between rounded-xl border border-border bg-background/50 backdrop-blur-sm px-4 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-eco-green disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                  >
                    <option value="">Select your interest...</option>
                    <option value="student">Student / Researcher</option>
                    <option value="investor">Potential Investor</option>
                    <option value="partner">Academic Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-16 bg-gradient-to-r from-eco-green to-eco-green-light hover:from-eco-green-light hover:to-eco-green text-background font-bold text-lg rounded-2xl transition-all hover:shadow-2xl hover:shadow-eco-green/30 disabled:opacity-70"
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <span className="flex items-center gap-2.5">
                      Submit Pre-Registration <Send className="size-5" />
                    </span>
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="inline-flex items-center justify-center size-24 rounded-full bg-eco-green/10 text-eco-green mb-8 shadow-xl shadow-eco-green/20">
                  <CheckCircle2 className="size-14" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-4xl font-bold text-foreground mb-4">Thank You!</h3>
                <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed font-light">
                  Your registration for Group 10127&apos;s EcoHouse project has been received. We&apos;ll be in touch
                  with exciting updates soon.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="border-2 border-eco-green text-eco-green hover:bg-eco-green/5 h-12 px-8 rounded-xl font-semibold"
                >
                  Register Another Interest
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
