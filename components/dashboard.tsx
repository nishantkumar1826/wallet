"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, Zap, Trees, Heart } from "lucide-react"
import ImpactNFTs from "./impact-nfts"
import UserStats from "./user-stats"

interface DashboardProps {
  walletAddress: string
  onDisconnect: () => void
}

export default function Dashboard({ walletAddress, onDisconnect }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "nfts" | "stats">("overview")

  const shortAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Impact Dashboard</h1>
            <p className="text-sm text-muted-foreground">Wallet: {shortAddress}</p>
          </div>
          <Button variant="outline" onClick={onDisconnect} className="gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Disconnect
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8 border-b border-border">
          {[
            { id: "overview", label: "Overview", icon: Zap },
            { id: "nfts", label: "My Impact NFTs", icon: Trees },
            { id: "stats", label: "Statistics", icon: Heart },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Impact NFTs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground mt-1">NFTs owned</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">CO₂ Offset</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2,450</div>
                  <p className="text-xs text-muted-foreground mt-1">tons offset</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Communities Helped</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground mt-1">projects supported</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Impact Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$45K</div>
                  <p className="text-xs text-muted-foreground mt-1">estimated</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Impact Journey</CardTitle>
                <CardDescription>Track your verified contributions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "2 days ago", action: "Minted 3 Environmental NFTs", value: "+750 CO₂ offset" },
                    { date: "1 week ago", action: "Verified Social Impact Project", value: "+2 communities" },
                    { date: "2 weeks ago", action: "Minted Climate Action NFT", value: "+1,200 CO₂ offset" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">{item.action}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "nfts" && <ImpactNFTs walletAddress={walletAddress} />}

        {activeTab === "stats" && <UserStats walletAddress={walletAddress} />}
      </main>
    </div>
  )
}
