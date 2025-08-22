export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-black">Contact Us</h1>
        <p className="text-gray-700 mt-2">Send us a message and we&apos;ll get back to you as soon as possible.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Info + Form */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm md:text-base">
            <div className="p-4 border rounded-md">
              <h2 className="font-semibold">Address</h2>
              <p className="text-gray-700">3/27 Mandawali Block, A2 Saket Block, Delhi - 110092</p>
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="font-semibold">Phone & Email</h2>
              <p className="text-gray-700">+91 8882 540 885</p>
              <p className="text-gray-700">liumgo@gmail.com</p>
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="font-semibold">Working Hours</h2>
              <p className="text-gray-700">Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-gray-700">Saturday: 10:00 AM – 4:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input id="name" name="name" type="text" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
              <input id="phone" name="phone" type="tel" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="+91 ..." />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Tell us how we can help" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Map */}
        <div className="overflow-hidden rounded-md border h-80 md:h-full min-h-80">
          <iframe
            title="Liumgo Location"
            src="https://www.google.com/maps?q=Delhi%20110092&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}