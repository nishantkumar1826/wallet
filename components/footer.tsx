export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">◆</span>
              </div>
              <span className="font-bold text-foreground">ImpactProof</span>
            </div>
            <p className="text-sm text-muted-foreground">Verifying real-world impact through blockchain.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  NFTs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Verify Impact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 ImpactProof. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition">
              Discord
            </a>
            <a href="#" className="hover:text-foreground transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
