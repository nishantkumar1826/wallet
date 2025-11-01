export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
          <span className="text-accent text-sm font-medium">Verified On-Chain Impact</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight mb-6 text-foreground">
          Know Your Impact is Making a Difference
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Every NFT represents verifiable environmental and social impact. Blockchain-backed proof of real-world change
          with transparent metrics and geographic verification.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition font-medium">
            Explore Projects
          </button>
          <button className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
