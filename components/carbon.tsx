"use client"
import { Leaf, Globe } from "lucide-react"

export default function Carbon() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
            {/* Animated headline */}
            <div className="overflow-hidden rounded-xl bg-purple-50 border border-purple-100">
                <div className="px-4 md:px-6 py-10 md:py-14">
                    <h1
                        className="animate-slide-x inline-block whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800 tracking-tight"
                    >
                        Over 30,000 deliveries every month • Travelled 200,000 kms without carbon footprint
                    </h1>
                </div>
            </div>

            {/* Subheading */}
            <div className="mt-8 space-y-2 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-purple-700">Reduce carbon emissions</h2>
                <h3 className="text-lg md:text-xl text-gray-600">Save the environment with sustainable last‑mile logistics</h3>
            </div>

            {/* Feature cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-lg border border-gray-200 bg-white p-6 flex items-start gap-4 shadow-sm">
                    <div className="p-2 rounded-md bg-green-100 text-green-700">
                        <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900">Electric-first delivery network</h4>
                        <p className="text-sm md:text-base text-gray-600 mt-1">
                            We prioritize EVs to minimize emissions across our delivery fleet while maintaining speed and reliability.
                        </p>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 flex items-start gap-4 shadow-sm">
                    <div className="p-2 rounded-md bg-blue-100 text-blue-700">
                        <Globe className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900">Measurable impact</h4>
                        <p className="text-sm md:text-base text-gray-600 mt-1">
                            Transparent metrics to track CO₂ savings and distance travelled without a carbon footprint.
                        </p>
                    </div>
                </div>
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-lg bg-gray-50 p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-700">30k+</div>
                    <div className="text-xs md:text-sm text-gray-600">Monthly Deliveries</div>
                </div>
                <div className="rounded-lg bg-gray-50 p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-700">200k+</div>
                    <div className="text-xs md:text-sm text-gray-600">Km Carbon-Free</div>
                </div>
                <div className="rounded-lg bg-gray-50 p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-700">95%</div>
                    <div className="text-xs md:text-sm text-gray-600">On-time Rate</div>
                </div>
                <div className="rounded-lg bg-gray-50 p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-700">24/7</div>
                    <div className="text-xs md:text-sm text-gray-600">Operations</div>
                </div>
            </div>

            {/* Scoped animation styles */}
            <style jsx>{`
                @keyframes slideX {
                    0% { transform: translateX(-30%); }
                    50% { transform: translateX(30%); }
                    100% { transform: translateX(-30%); }
                }
                .animate-slide-x {
                    animation: slideX 10s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}