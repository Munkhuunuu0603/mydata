"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { label: "Эхлэл", href: "#" },
  {
    label: "Бүтэц",
    href: "#",
    children: [
      { label: "Удирдах зөвлөл", href: "#" },
      { label: "Хяналтын ерөнхий хороо", href: "#" },
      { label: "Ажлын алба", href: "#" },
      { label: "УИХ-ын гишүүд", href: "#" },
    ],
  },
  {
    label: "Нам",
    href: "#",
    children: [
      { label: "Түүхэн товчоон", href: "#" },
      { label: "Үзэл баримтлал", href: "#" },
      { label: "Бэлгэдэл", href: "#" },
      { label: "Намын үндсэн дүрэм", href: "#" },
    ],
  },
  {
    label: "Мэдээ",
    href: "#news",
    children: [
      { label: "Онцлох үйл явдал", href: "#news" },
      { label: "Цаг үе", href: "#news" },
      { label: "Ярилцлага", href: "#news" },
      { label: "Арга хэмжээ", href: "#news" },
    ],
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">Nam.mn</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-48 rounded-md border border-border bg-background py-1 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={mobileOpen ? "Цэс хаах" : "Цэс нээх"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-1.5 text-sm text-muted-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
