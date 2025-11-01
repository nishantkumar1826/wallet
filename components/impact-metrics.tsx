export default function ImpactMetrics() {
  const metrics = [
    { label: "Impact NFTs Minted", value: "2.4M", color: "bg-accent" },
    { label: "Tons CO2 Offset", value: "186K", color: "bg-primary" },
    { label: "Active Projects", value: "429", color: "bg-accent" },
    { label: "Verified Locations", value: "87", color: "bg-primary" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div
                className={`w-20 h-20 rounded-full ${metric.color} flex items-center justify-center mx-auto mb-4 opacity-80`}
              >
                <span className="text-2xl font-bold text-white">{metric.value.split(" ")[0][0]}</span>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
