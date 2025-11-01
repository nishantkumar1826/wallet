export default function VerificationBadges() {
  const badges = [
    { icon: "🔒", title: "On-Chain Verified", desc: "All data immutably stored on blockchain" },
    { icon: "🌍", title: "GPS Authenticated", desc: "Location verified through satellite data" },
    { icon: "👥", title: "Community Consensus", desc: "Multi-signature validation required" },
    { icon: "📊", title: "Real-Time Metrics", desc: "Live impact tracking and reporting" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30" id="verification">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How Verification Works</h2>
          <p className="text-muted-foreground">Multiple layers of authentication ensure complete transparency</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card text-center hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{badge.icon}</div>
              <h3 className="font-bold text-foreground mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
