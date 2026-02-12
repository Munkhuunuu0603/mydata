"use client"

import { useEffect, useState, useRef } from "react"
import { Users, UserCheck, Building2, MapPin } from "lucide-react"

const stats = [
  { icon: UserCheck, value: 51, label: "УИХ-ын гишүүн", suffix: "" },
  { icon: Users, value: 276642, label: "Нийт гишүүд", suffix: "" },
  { icon: Building2, value: 64542, label: "Нийслэл", suffix: "" },
  { icon: MapPin, value: 206483, label: "Орон нутаг", suffix: "" },
]

function useCountUp(target: number, duration: number, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, shouldStart])

  return count
}

function StatCard({
  icon: Icon,
  value,
  label,
  shouldStart,
}: {
  icon: typeof Users
  value: number
  label: string
  suffix: string
  shouldStart: boolean
}) {
  const count = useCountUp(value, 2000, shouldStart)

  return (
    <div className="flex flex-col items-center gap-3 rounded-lg bg-background p-6 text-center shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <span className="text-3xl font-bold text-foreground md:text-4xl">
        {count.toLocaleString()}
      </span>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} shouldStart={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
