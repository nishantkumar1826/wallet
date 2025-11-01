"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface WalletConnectionProps {
  onConnect: (address: string) => void
}

export default function WalletConnection({ onConnect }: WalletConnectionProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      if (typeof window !== "undefined" && !window.ethereum) {
        setError("Please install MetaMask or another Web3 wallet to continue.")
        setIsConnecting(false)
        return
      }

      // Request wallet connection
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts && accounts.length > 0) {
        const address = accounts[0]
        console.log("[v0] Connected wallet:", address)
        onConnect(address)
      }
    } catch (err: any) {
      console.error("[v0] Wallet connection error:", err)
      if (err.code === 4001) {
        setError("You rejected the connection request.")
      } else {
        setError("Failed to connect wallet. Please try again.")
      }
      setIsConnecting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Proof of Impact</CardTitle>
          <CardDescription className="text-base mt-2">
            Connect your wallet to track and verify real-world impact through NFTs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4 text-sm">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                1
              </div>
              <div>
                <p className="font-semibold">Connect Your Wallet</p>
                <p className="text-muted-foreground">Use MetaMask, WalletConnect, or another Web3 wallet</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                2
              </div>
              <div>
                <p className="font-semibold">View Your Impact NFTs</p>
                <p className="text-muted-foreground">See all verified impact projects you own</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                3
              </div>
              <div>
                <p className="font-semibold">Track Real-World Impact</p>
                <p className="text-muted-foreground">Monitor environmental and social metrics</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          <Button onClick={connectWallet} disabled={isConnecting} size="lg" className="w-full">
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Your wallet address is stored locally and never shared with our servers.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
