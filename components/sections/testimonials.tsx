"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, Wind, Leaf, Shield, MessageSquarePlus, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const defaultTestimonials = [
  {
    id: "default-1",
    name: "Abdullah Elkholy",
    avatar: "AE",
    rating: 5,
    text: "The EcoHouse design demonstrates exceptional engineering. The passive cooling system reduces energy consumption by 40%, while the structural integrity easily withstands high wind loads and static pressures. This is sustainable architecture at its finest.",
    highlight: "Passive Cooling Excellence",
    isDefault: true
  },
  {
    id: "default-2",
    name: "Hady Amin",
    avatar: "HA",
    rating: 5,
    text: "Working with the EcoHouse project has been inspiring. The integration of Rihan trees and sustainable materials creates a perfect harmony with nature. It's not just a house—it's a blueprint for the future of sustainable living.",
    highlight: "Sustainable Innovation",
    isDefault: true
  },
  {
    id: "default-3",
    name: "Omar Hesham",
    avatar: "OH",
    rating: 5,
    text: "The construction quality and attention to detail in the EcoHouse project exceed industry standards. The thermal insulation and fire-resistant materials ensure long-term durability, while the design allows for efficient building processes.",
    highlight: "Superior Construction Quality",
    isDefault: true
  },
  {
    id: "default-4",
    name: "Hazem Ashraf",
    avatar: "HA",
    rating: 5,
    text: "The EcoHouse's energy efficiency is remarkable. The passive design combined with optimal orientation reduces reliance on active cooling by up to 60%. It's a perfect example of how smart design can drastically cut energy costs and carbon footprint.",
    highlight: "Energy Efficiency Pioneer",
    isDefault: true
  },
  {
    id: "default-5",
    name: "Abdelrahman Abdelrazek",
    avatar: "AA",
    rating: 5,
    text: "This project sets a new standard for climate-responsive architecture. The wind resistance capabilities and load-bearing design ensure safety without compromising sustainability. It's engineered to last generations while protecting our planet.",
    highlight: "Climate-Responsive Design",
    isDefault: true
  }
]

export function Testimonials() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    rating: 5
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const itemsPerPage = 3

  // Load testimonials from storage on mount
  useEffect(() => {
    const loadTestimonials = async () => {
      if (typeof window === 'undefined' || !window.storage) return
      
      try {
        const stored = await window.storage.list("testimonial:", true)
        if (stored && stored.keys && stored.keys.length > 0) {
          const userTestimonials = []
          for (const key of stored.keys) {
            try {
              const result = await window.storage.get(key, true)
              if (result && result.value) {
                userTestimonials.push(JSON.parse(result.value))
              }
            } catch (err) {
              console.log("Error loading testimonial:", err)
            }
          }
          if (userTestimonials.length > 0) {
            setTestimonials([...defaultTestimonials, ...userTestimonials])
          }
        }
      } catch (error) {
        console.log("No stored testimonials found:", error)
      }
    }
    loadTestimonials()
  }, [])

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerPage)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 10000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerPage)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerPage)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newTestimonial = {
      id: `user-${Date.now()}`,
      name: formData.name,
      avatar: formData.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2),
      rating: formData.rating,
      text: formData.text,
      highlight: "Community Member",
      isDefault: false
    }

    try {
      // Store with shared=true so it's accessible to all users
      window.storage.set(`testimonial:${newTestimonial.id}`, JSON.stringify(newTestimonial), true)
        .then(() => {
          setTestimonials([...testimonials, newTestimonial])
          setFormData({ name: "", text: "", rating: 5 })
          setShowForm(false)
          setIsSubmitting(false)
        })
        .catch((error) => {
          console.error("Storage error:", error)
          alert("Failed to save testimonial. Please try again.")
          setIsSubmitting(false)
        })
    } catch (error) {
      console.error("Failed to save testimonial:", error)
      alert("Failed to save testimonial. Please try again.")
      setIsSubmitting(false)
    }
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">Trusted by Experts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Experts Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from professionals who've experienced the innovation and sustainability of EcoHouse
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <Wind className="w-6 h-6" />, label: "Wind Resistant", value: "100%" },
            { icon: <Leaf className="w-6 h-6" />, label: "Sustainable", value: "100%" },
            { icon: <Shield className="w-6 h-6" />, label: "Static Load Safe", value: "100%" },
            { icon: <Star className="w-6 h-6" />, label: "Expert Rating", value: "5.0" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-emerald-600 mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8"
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="popLayout">
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
                  >
                    <div className="group relative h-full">
                      <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 text-emerald-100 group-hover:text-emerald-200 transition-colors">
                          <Quote className="w-12 h-12" />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Highlight Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full mb-4">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="text-xs font-semibold text-emerald-700">{testimonial.highlight}</span>
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 leading-relaxed mb-6 relative z-10 min-h-[120px]">
                          "{testimonial.text}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{testimonial.name}</div>
                          </div>
                        </div>

                        {!testimonial.isDefault && (
                          <div className="absolute top-3 left-3">
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                              New
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          {testimonials.length > itemsPerPage && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-emerald-600 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-emerald-600 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {testimonials.length > itemsPerPage && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? "w-8 bg-emerald-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Add Testimonial Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
          >
            <MessageSquarePlus className="w-5 h-5 mr-2" />
            Share Your Experience
          </Button>
        </motion.div>

        {/* Testimonial Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Share Your Testimonial</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Testimonial
                    </label>
                    <textarea
                      required
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                      placeholder="Share your experience with the EcoHouse project..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= formData.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      onClick={() => setShowForm(false)}
                      variant="outline"
                      className="flex-1 py-3 rounded-xl"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.name || !formData.text}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Testimonial"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
