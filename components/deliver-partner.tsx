"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export type Partner = {
  name: string
  logoSrc: string
}

type DeliverPartnerProps = {
  heading?: string
  partners?: Partner[]
  className?: string
}

const defaultPartners: Partner[] = [
  { name: "Tata Ace", logoSrc: "/tataace.avif" },
  { name: "Bajaj", logoSrc: "/Bajaj-Auto-Logo.jpg" },
  { name: "Piaggio Ape", logoSrc: "/piaggio.jpg" },
  { name: "Euler", logoSrc: "/euler.png" },
  { name: "Ashok Leyland", logoSrc: "/ashok.jpg" },
  { name: "Alti", logoSrc: "/alti.jpg" },
]

export default function DeliverPartner({
  heading = "Our Vehicle Partners",
  partners = defaultPartners,
  className = "",
}: DeliverPartnerProps) {
  
  return (
    <section className={`max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 ${className}`}>
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black">{heading}</h2>
        <p className="text-black mt-2 text-sm md:text-base">
          Trusted delivery partners powering our logistics network.
        </p>
      </div>

      <Carousel
        className="w-full"
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
        ]}
      >
        <CarouselContent>
          {partners.map((p) => (
            <CarouselItem
              key={p.name}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/5"
            >
              <Card className="h-full">
                <CardContent className="flex h-24 md:h-32 items-center justify-center p-3 md:p-4">
                  <div className="relative w-full h-full max-h-24">
                    <Image
                      src={p.logoSrc}
                      alt={`${p.name} logo`}
                      fill
                      sizes="(max-width: 768px) 120px, 200px"
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="mt-2 text-center text-xs md:text-sm text-black">{p.name}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex" />
        <CarouselNext className="hidden md:inline-flex" />
      </Carousel>
    </section>
  )
}