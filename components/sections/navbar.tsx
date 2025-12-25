"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Register", href: "#register" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-3 px-4" : "py-6 px-6",
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between transition-all duration-500 rounded-full",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border border-black/5 px-8 py-2.5 shadow-xl"
            : "bg-transparent px-0",
        )}
      >
        <motion.a
          href="#"
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative h-10 w-40 flex items-center group">
            <Image
              src="/images/1.png"
              alt="EcoHouse Logo"
              width={160}
              height={40}
              className="object-contain relative z-10"
            />
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-eco-gold transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eco-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          <Button
            className="rounded-full px-8 bg-black hover:bg-eco-green text-white font-bold shadow-lg transition-all duration-300 group h-11"
            asChild
          >
            <a href="#register">
              Join Waitlist
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2.5 text-foreground bg-card/50 backdrop-blur-sm border border-border rounded-full hover:bg-card transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[60] flex flex-col p-10 md:hidden"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-16">
              <div className="relative h-12 w-48">
                <Image src="/images/1.png" alt="EcoHouse Logo" fill className="object-contain" />
              </div>
              <button
                className="p-3 bg-card border border-border rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="size-8 text-foreground" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="font-display text-4xl font-bold text-foreground hover:text-eco-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Button
                  className="mt-12 w-full h-16 text-xl bg-eco-green text-background font-bold rounded-2xl shadow-xl shadow-eco-green/20"
                  asChild
                >
                  <a href="#register" onClick={() => setIsMobileMenuOpen(false)}>
                    Join Waitlist
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
