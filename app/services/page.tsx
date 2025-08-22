import Image from "next/image"

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-black">Our Services</h1>
        <p className="text-gray-700 mt-2 max-w-3xl mx-auto">
          We provide reliable, responsive, and sustainable logistics solutions across last-mile delivery,
          EV fleet operations, and tailored enterprise logistics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <Image src="/tataace.avif" alt="Last-mile Delivery" width={640} height={360} className="w-full h-44 md:h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Last-mile Delivery</h3>
            <p className="text-sm text-gray-600 mt-1">Fast and reliable doorstep deliveries with real-time tracking.</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <Image src="/euler.png" alt="EV Fleet Operations" width={640} height={360} className="w-full h-44 md:h-48 object-contain bg-gray-50" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">EV Fleet Operations</h3>
            <p className="text-sm text-gray-600 mt-1">Sustainable electric vehicles reducing costs and emissions.</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <Image src="/piaggio.jpg" alt="Three-Wheeler Cargo" width={640} height={360} className="w-full h-44 md:h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Three-Wheeler Cargo</h3>
            <p className="text-sm text-gray-600 mt-1">Efficient intra-city movement for small-to-medium loads.</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <Image src="/ashok.jpg" alt="Heavy-duty Partnerships" width={640} height={360} className="w-full h-44 md:h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Heavy-duty Partnerships</h3>
            <p className="text-sm text-gray-600 mt-1">Trusted OEM tie-ups for reliable, scalable operations.</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <Image src="/alti.jpg" alt="Route Optimization" width={640} height={360} className="w-full h-44 md:h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Route Optimization</h3>
            <p className="text-sm text-gray-600 mt-1">Smart routing to improve delivery time and reduce costs.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-gray-700">
        <h2 className="text-xl font-semibold">Why Liumgo</h2>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm md:text-base">
          <li>End-to-end visibility and SLAs you can trust</li>
          <li>Scalable ops backed by trained delivery partners</li>
          <li>Eco-friendly EV options for sustainable growth</li>
        </ul>
      </div>
    </div>
  )
}