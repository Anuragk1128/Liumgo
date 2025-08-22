import YouTubeEmbed from "@/components/YouTubeEmbed"

type VideoSectionProps = {
  url?: string
  title?: string
  heading?: string
  className?: string
}

export default function VideoSection({ url = "https://www.youtube.com/watch?v=4JUPcWk_Tas", title = "Video", heading, className = "" }: VideoSectionProps) {
  return (
    <section className={`max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 ${className}`}>
      {heading ? (
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 md:mb-6">{heading}</h2>
      ) : null}
      <YouTubeEmbed url={url} title={title} />
    </section>
  )
}
