"use client"

interface ImpactGalleryProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function ImpactGallery({ selectedCategory, onCategoryChange }: ImpactGalleryProps) {
  const categories = ["environmental", "social", "climate", "community"]

  const projects = [
    { id: 1, name: "Amazon Reforestation", impact: "45K trees planted", category: "environmental", nfts: 1240 },
    {
      id: 2,
      name: "Ocean Cleanup Initiative",
      impact: "12 tons plastic removed",
      category: "environmental",
      nfts: 856,
    },
    { id: 3, name: "Community Education Hub", impact: "5,000 students trained", category: "social", nfts: 2340 },
    { id: 4, name: "Renewable Energy Project", impact: "50 MW capacity added", category: "climate", nfts: 1890 },
    { id: 5, name: "Local Water Systems", impact: "120K people with clean water", category: "community", nfts: 3100 },
    { id: 6, name: "Wildlife Protection Zone", impact: "500K acres preserved", category: "environmental", nfts: 2780 },
  ]

  const filtered = projects.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="impact">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Impact Projects</h2>
          <p className="text-muted-foreground mb-8">NFT-verified projects making real-world difference</p>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-border bg-card hover:shadow-lg transition overflow-hidden group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">◆</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition">
                    {project.name}
                  </h3>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
                    {project.nfts.toLocaleString()}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.impact}</p>
                <div className="flex gap-2 pt-4 border-t border-border">
                  <button className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition">
                    View NFTs
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg text-sm font-medium border border-border text-foreground hover:bg-muted transition">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
