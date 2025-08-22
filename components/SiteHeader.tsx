import { MapPin, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="relative">
      {/* Top orange section */}
      <div className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="w-4 h-4" />
            <span className="truncate">3/27 Mandawali Block, A2 Saket Block, Delhi - 110092</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <Phone className="w-4 h-4" />
            <span className="truncate">Make a call : +91 8882 540 885</span>
          </div>
        </div>
      </div>

      {/* Bottom purple section with consistent background */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-8 py-4 md:py-2 px-4 md:px-8">
          {/* Logo inside the purple bar */}
          <Link href="/" aria-label="Liumgo home" className="flex items-center gap-3">
            <Image
              src="/liumgologo.png"
              alt="Liumgo logo"
              width={160}
              height={80}
              sizes="(max-width: 768px) 120px, 160px"
              priority
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 md:space-x-8 text-sm md:text-base overflow-x-auto">
            <a href="/" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap">
              HOME
            </a>
            <a href="about" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap">
              ABOUT US
            </a>
            <div className="relative group">
              <a href="services" className="hover:text-orange-300 transition-colors font-medium flex items-center gap-1 whitespace-nowrap">
                SERVICES
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <a href="/blog" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap">
              BLOG
            </a>
            
          </nav>

          {/* Contact button */}
          <Button
            asChild
            variant="secondary"
            className="bg-white text-purple-700 hover:bg-gray-100 font-medium px-3 py-0.5 md:px-5 md:py-1.5 rounded-full text-sm md:text-base"
          >
            <Link href="/contact" className="flex items-center">
              CONTACT US
              <span className="ml-2">▶</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

