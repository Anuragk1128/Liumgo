import Image from "next/image"

export default function Blog() {
  const posts = [
    {
      title: "EVs powering last-mile efficiency",
      excerpt:
        "How electric vehicles are cutting delivery costs and improving reliability across Indian metros.",
      img: "/liumgovec.png",
    },
    {
      title: "Partner success: Amazon & Flipkart",
      excerpt:
        "Scaling festive season ops with robust SLAs and trained delivery partners.",
      img: "/amazon.png",
    },
    {
      title: "Food delivery logistics at scale",
      excerpt: "Optimizing peak-hour routes for Zomato and major Q-commerce brands.",
      img: "/Zomato_logo.png",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-black">Inside Stories</h1>
        <p className="text-gray-700 mt-2 max-w-3xl mx-auto">
          Electric mobility and modern logistics—insights, updates, and stories from the Liumgo network.
        </p>
      </div>

      <Image
        src="/liumgovec.png"
        alt="Liumgo electric vehicle illustration"
        width={1200}
        height={600}
        className="w-full h-auto rounded-md shadow-sm"
        priority
      />

      {/* Featured posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {posts.map((p) => (
          <article key={p.title} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative w-full h-40 md:h-48 bg-gray-50">
              <Image src={p.img} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}