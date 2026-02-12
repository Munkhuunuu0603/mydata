"use client"

import { Phone, Mail, Users, DollarSign, MessageSquare } from "lucide-react"
import Link from "next/link"

export function TopBar() {
  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            70001921
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            info@nam.mn
          </span>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#" className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <Users className="h-3.5 w-3.5" />
            {"Гишүүнчлэл"}
          </Link>
          <Link href="#" className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <DollarSign className="h-3.5 w-3.5" />
            {"Санхүү"}
          </Link>
          <Link href="#" className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <MessageSquare className="h-3.5 w-3.5" />
            {"Санал хүсэлт"}
          </Link>
          <Link
            href="#"
            className="rounded bg-primary px-3 py-1 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            ENG
          </Link>
        </div>
      </div>
    </div>
  )
}
