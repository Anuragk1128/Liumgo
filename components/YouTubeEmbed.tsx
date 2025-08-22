type YouTubeEmbedProps = {
  url: string // full YouTube URL
  title?: string
  className?: string
}

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1) || null
    }
    if (u.searchParams.has("v")) {
      return u.searchParams.get("v")
    }
    // Handle /embed/VIDEO_ID or /v/VIDEO_ID
    const parts = u.pathname.split("/")
    const idx = parts.findIndex((p) => p === "embed" || p === "v")
    if (idx !== -1 && parts[idx + 1]) return parts[idx + 1]
    return null
  } catch {
    return null
  }
}

export default function YouTubeEmbed({ url, title = "YouTube video", className = "" }: YouTubeEmbedProps) {
  const id = extractYouTubeId(url)
  if (!id) {
    return <div className={`text-red-600 ${className}`}>Invalid YouTube URL</div>
  }
  const src = `https://www.youtube.com/embed/${id}`
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  )
}
