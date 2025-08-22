import HomePageContent from "@/components/HomePageContent"
import Client from "@/components/client"
import DeliverPartner from "@/components/deliver-partner"

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-8">
      <Client />
      <HomePageContent />
      <DeliverPartner />
    </main>
  )
}