"use client"

export default function ProjectMap() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Global Impact Network</h2>
            <p className="text-muted-foreground mb-6">
              Verified projects across 87 countries with real-time location tracking and community validation. Every
              marker represents authenticated environmental impact.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent">📍</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Real-Time Tracking</div>
                  <div className="text-sm text-muted-foreground">Live location verification</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Community Verified</div>
                  <div className="text-sm text-muted-foreground">Multi-signature validation</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 h-80 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden relative">
            <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "var(--muted)", stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: "var(--primary)", stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              <rect width="800" height="400" fill="url(#mapGrad)" />
              <circle cx="150" cy="120" r="3" fill="#10b981" opacity="0.8" />
              <circle cx="320" cy="180" r="4" fill="#f59e0b" opacity="0.8" />
              <circle cx="500" cy="160" r="3" fill="#3b82f6" opacity="0.8" />
              <circle cx="650" cy="240" r="3" fill="#10b981" opacity="0.8" />
              <circle cx="200" cy="280" r="3" fill="#f59e0b" opacity="0.8" />
              <text x="400" y="350" textAnchor="middle" className="text-xs fill-current opacity-50">
                87 Verified Locations • 186K Tons CO₂ Offset
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
