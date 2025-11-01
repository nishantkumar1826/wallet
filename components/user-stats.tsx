"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

interface UserStatsProps {
  walletAddress: string
}

export default function UserStats({ walletAddress }: UserStatsProps) {
  const impactData = [
    { month: "Jun", co2Offset: 200, communities: 1, projects: 2 },
    { month: "Jul", co2Offset: 450, communities: 2, projects: 4 },
    { month: "Aug", co2Offset: 800, communities: 3, projects: 6 },
    { month: "Sep", co2Offset: 1200, communities: 5, projects: 8 },
    { month: "Oct", co2Offset: 1800, communities: 7, projects: 10 },
    { month: "Nov", co2Offset: 2450, communities: 8, projects: 12 },
  ]

  const categoryBreakdown = [
    { category: "Environmental", value: 65, color: "#16a34a" },
    { category: "Social Impact", value: 25, color: "#2563eb" },
    { category: "Economic", value: 10, color: "#a855f7" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Your Impact Statistics</h2>
        <p className="text-muted-foreground">Detailed analytics of your verified contributions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Impact Growth Over Time</CardTitle>
            <CardDescription>CO₂ offset tracked monthly</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                  }}
                />
                <Line type="monotone" dataKey="co2Offset" stroke="var(--color-primary)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impact Category Breakdown</CardTitle>
            <CardDescription>Distribution of verified projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{ width: `${item.value}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Verification Timeline</CardTitle>
          <CardDescription>Latest verified impact milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { milestone: "Reached 2,000 CO₂ tons offset", date: "Nov 15, 2024", status: "verified" },
              { milestone: "Helped 8 different communities", date: "Nov 12, 2024", status: "verified" },
              { milestone: "Minted 12 Impact NFTs", date: "Nov 10, 2024", status: "verified" },
              { milestone: "1,000 CO₂ tons offset reached", date: "Oct 5, 2024", status: "verified" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-green-600 flex-shrink-0" />
                <div className="flex-grow">
                  <p className="font-medium">{item.milestone}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Verified</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
