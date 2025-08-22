import Image from "next/image"
import Link from "next/link"

export type HeroSectionProps = {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  imageSrc?: string
}

export default function HeroSection({
  title = "Fast • Safe • Reliable",
  subtitle = "Premium logistics and transport solutions across the city.",
  ctaText = "Get a Quote",
  ctaHref = "/contact",
  imageSrc = "/liumgovec.png",
}: HeroSectionProps) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 px-4 md:px-8 py-8 md:py-12">
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-black">{title}</h1>
          <p className="text-sm md:text-base text-black">{subtitle}</p>
          <div className="flex justify-center md:justify-start">
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-full bg-purple-700 text-white px-5 py-2 text-sm md:text-base hover:bg-purple-600 transition-colors"
            >
              {ctaText}
              <span className="ml-2">▶</span>
            </Link>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end w-full max-w-xl">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={imageSrc}
              alt="Hero image"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 600px"
              className="object-contain animate-inward"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
