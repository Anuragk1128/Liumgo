import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export type ClientItem = {
  name: string
  logoSrc?: string
  tagline?: string
  status?: "active" | "new" | "vip"
}

type ClientSectionProps = {
  heading?: string
  clients?: ClientItem[]
  className?: string
}

const defaultClients: ClientItem[] = [
  { name: "Amazon", logoSrc: "/amazon.png", tagline: "Retail & e‑commerce", status: "active" },
  { name: "Zomato", logoSrc: "/Zomato_logo.png", tagline: "Food supplies", status: "vip" },
  { name: "Flipkart", logoSrc: "/flipkart.png", tagline: "Cold chain", status: "active" },
  { name: "Tata1mg", logoSrc: "/tata1mg.png", tagline: "Healthcare logistics", status: "new" },
]

export default function Client({
  heading = "Meet Our Clients",
  clients = defaultClients,
  className = "",
}: ClientSectionProps) {
  return (
    <section className={`max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 ${className}`}>
      <div className="mb-6 md:mb-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-black">{heading}</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Brands that trust us to move what matters.</p>
      </div>

      <div className="overflow-x-auto md:overflow-visible -mx-4 px-4">
        <div className="flex gap-3 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {clients.map((c) => (
          <Card key={c.name} className="hover:shadow-md transition-shadow min-w-[260px] snap-start md:min-w-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-base md:text-lg font-semibold truncate">{c.name}</CardTitle>
                {c.status ? (
                  <Badge variant={c.status === "vip" ? "default" : "secondary"} className="text-[10px] px-2 py-0 md:text-xs md:px-2.5">
                    {c.status.toUpperCase()}
                  </Badge>
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Avatar className="h-10 w-10 md:h-12 md:w-12">
                {c.logoSrc ? <AvatarImage src={c.logoSrc} alt={`${c.name} logo`} /> : null}
                <AvatarFallback>{c.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="text-xs sm:text-sm text-gray-600 truncate">{c.tagline ?? "Logistics partner"}</div>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </section>
  )
}