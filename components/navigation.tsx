export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">◆</span>
            </div>
            <span className="font-bold text-foreground">ImpactProof</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#impact" className="text-muted-foreground hover:text-foreground transition">
              Projects
            </a>
            <a href="#verification" className="text-muted-foreground hover:text-foreground transition">
              Verify
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">
              About
            </a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition font-medium">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
