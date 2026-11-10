import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { SearchSection } from '@/components/sections/search-section'
import { Values } from '@/components/sections/values'
import { HowItWorks } from '@/components/sections/how-it-works'
import { FeaturedSpaces } from '@/components/sections/featured-spaces'
import { Business } from '@/components/sections/business'
import { Stats } from '@/components/sections/stats'
import { Pricing } from '@/components/sections/pricing'
import { Safety } from '@/components/sections/safety'
import { PilotForms } from '@/components/sections/pilot-forms'
import { Testimonials } from '@/components/sections/testimonials'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchSection />
        <Values />
        <HowItWorks />
        <FeaturedSpaces />
        <Business />
        <Stats />
        <Pricing />
        <Safety />
        <PilotForms />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
