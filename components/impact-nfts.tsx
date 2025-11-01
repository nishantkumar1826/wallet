"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

interface ImpactNFTsProps {
  walletAddress: string
}

export default function ImpactNFTs({ walletAddress }: ImpactNFTsProps) {
  const nfts = [
    {
      id: 1,
      name: "Amazon Rainforest Protection",
      category: "environmental",
      image: "🌳",
      verified: true,
      impact: "500 acres protected",
      tokenId: "#2451",
      date: "2024-10-15",
    },
    {
      id: 2,
      name: "Clean Water Initiative",
      category: "social",
      image: "💧",
      verified: true,
      impact: "10,000 people served",
      tokenId: "#2452",
      date: "2024-10-10",
    },
    {
      id: 3,
      name: "Solar Farm Construction",
      category: "environmental",
      image: "☀️",
      verified: true,
      impact: "500 MW capacity",
      tokenId: "#2453",
      date: "2024-09-28",
    },
    {
      id: 4,
      name: "Education For All",
      category: "social",
      image: "📚",
      verified: true,
      impact: "5,000 students",
      tokenId: "#2454",
      date: "2024-09-20",
    },
  ]

  const categoryColors = {
    environmental: "bg-green-100 text-green-800",
    social: "bg-blue-100 text-blue-800",
    economic: "bg-purple-100 text-purple-800",
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Your Impact NFT Collection</h2>
        <p className="text-muted-foreground">Verified NFTs demonstrating real-world impact</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <Card key={nft.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-secondary/50 h-48 flex items-center justify-center text-6xl">{nft.image}</div>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-lg">{nft.name}</CardTitle>
                  <CardDescription className="text-xs">{nft.tokenId}</CardDescription>
                </div>
                {nft.verified && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Badge className={categoryColors[nft.category as keyof typeof categoryColors]}>{nft.category}</Badge>
                <p className="text-sm font-medium">{nft.impact}</p>
                <p className="text-xs text-muted-foreground">Minted: {nft.date}</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Chain verified • Real-world audited</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
