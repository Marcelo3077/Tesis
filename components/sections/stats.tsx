import { Reveal } from '@/components/ui/reveal'
import { STATS } from '@/lib/data'

export function Stats() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-brand-blue px-6 py-10 sm:px-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-brand-green-light sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/70">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
