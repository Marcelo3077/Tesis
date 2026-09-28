import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { SearchSection } from '@/components/sections/search-section'
import { Values } from '@/components/sections/values'
import { HowItWorks } from '@/components/sections/how-it-works'
import { FeaturedSpaces } from '@/components/sections/featured-spaces'
import { Business } from '@/components/sections/business'
import { Stats } from '@/components/sections/stats'
import { HostSpace } from '@/components/sections/host-space'
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
        <HostSpace />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
