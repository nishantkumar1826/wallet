"use client"

import { useState, useEffect } from "react"
import WalletConnection from "@/components/wallet-connection"
import Dashboard from "@/components/dashboard"

export default function Page() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if wallet was previously connected
    const savedAddress = localStorage.getItem("walletAddress")
    if (savedAddress) {
      setWalletAddress(savedAddress)
      setWalletConnected(true)
    }
  }, [])

  if (!mounted) {
    return <div className="w-full h-screen bg-background flex items-center justify-center">Loading...</div>
  }

  if (!walletConnected || !walletAddress) {
    return (
      <WalletConnection
        onConnect={(address) => {
          setWalletAddress(address)
          setWalletConnected(true)
          localStorage.setItem("walletAddress", address)
        }}
      />
    )
  }

  return (
    <Dashboard
      walletAddress={walletAddress}
      onDisconnect={() => {
        setWalletConnected(false)
        setWalletAddress(null)
        localStorage.removeItem("walletAddress")
      }}
    />
  )
}
