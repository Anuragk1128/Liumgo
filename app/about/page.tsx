import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-black">About Liumgo</h1>
          <p className="text-gray-700 mt-3">
            We are building sustainable, tech-enabled logistics with an EV-first approach. Our teams
            thrive on reliability, safety, and customer delight.
          </p>
        </div>
        <Image src="/liumgovec.png" alt="Liumgo EV fleet" width={800} height={480} className="w-full h-auto rounded-md shadow-sm" />
      </div>

      {/* Team */}
      <h2 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Portrait of Shubham"
            width={256}
            height={256}
            className="rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Shubham</h3>
          <p className="text-gray-600">CEO</p>
          <p className="text-gray-600">shubham@liumgo.com</p>
          <p className="text-gray-600">+91 1234567890</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Portrait of Akash"
            width={256}
            height={256}
            className="rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Akash</h3>
          <p className="text-gray-600">Director</p>
          <p className="text-gray-600">akash@liumgo.com</p>
          <p className="text-gray-600">+91 1234567890</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Portrait of Latesh"
            width={256}
            height={256}
            className="rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Latesh</h3>
          <p className="text-gray-600">Operations</p>
          <p className="text-gray-600">latesh@liumgo.com</p>
          <p className="text-gray-600">+91 1234567890</p>
        </div>
      </div>

      <p className="text-gray-700 mt-8">
        We are a team of logistics professionals dedicated to providing top-notch logistics and transport
        solutions to our clients. Our team is passionate about delivering exceptional service and helping
        our clients achieve their goals.
      </p>
    </div>
  )
}