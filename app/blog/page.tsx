import Image from "next/image"

export default function Blog() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-black"> Inside Stories</h1>
            <p>Electic vehicle (EV) technology is revolutionizing the logistics and transportation industry, offering a sustainable and efficient alternative to traditional diesel-powered vehicles. EVs emit zero tailpipe pollutants, reducing air pollution and greenhouse gas emissions, making them an eco-friendly choice for last-mile delivery.</p>
            
            <Image
              src="/liumgovec.png"
              alt="Liumgo electric vehicle illustration"
              width={800}
              height={450}
              className="w-full h-auto"
            />
            <div className="flex flex-row gap-3 text-xs md:text-sm px-0 md:px-4 max-w-md text-left ">
            <h2>News & Updates</h2>
            <p>Stay updated with the latest news and updates from Liumgo.</p>
            </div>
        </div>
    )
}