import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Problems } from "@/components/sections/problems"
import { Features } from "@/components/sections/features"
import { Sustainability } from "@/components/sections/sustainability"
import { Pricing } from "@/components/sections/pricing"
import { PreRegistration } from "@/components/sections/pre-registration"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Problems />
      <Features />
      <Sustainability />
      <Pricing />
      <PreRegistration />
      <Footer />
    </main>
  )
}
