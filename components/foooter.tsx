import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 bg-black text-white flex flex-row flex-wrap items-start justify-between gap-6 md:gap-8">

                <div className="flex flex-col gap-3 text-xs md:text-sm px-0 md:px-4 max-w-md text-left text-gray-300">
                    <h2 className="text-2xl font-bold text-white">Company Info</h2>
                    <p className="leading-6">Lium GO specializes in B2B last mile delivery using electric vehicles (EVs). We prioritize efficiency and sustainability, revolutionizing logistics with eco-friendly solutions.</p>
                </div>

                <div className="flex flex-col gap-3 text-xs md:text-sm min-w-[160px]">
                    <h3 className="text-lg font-semibold text-white">About Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/about" className="hover:text-white transition-colors">Company</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 text-xs md:text-sm min-w-[160px]">
                    <h3 className="text-lg font-semibold text-white">Quick Info</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Pricing & Solutions</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">Team</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">News & Updates</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 bg-black text-white border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs md:text-sm">© 2025 Liumgo. All rights reserved.</p>
                <div className="flex flex-row gap-4 text-xs md:text-sm">
                    <Link href="/privacy" className="hover:text-white/80">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white/80">Terms of Use</Link>
                </div>
            </div>
        </footer>
    )
}