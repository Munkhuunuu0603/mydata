import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

const partyLinks = [
  { label: "Түүхэн товчоон", href: "#" },
  { label: "Бэлгэдэл", href: "#" },
  { label: "Намын үндсэн дүрэм", href: "#" },
]

const structureLinks = [
  { label: "Удирдах зөвлөл", href: "#" },
  { label: "Хяналтын ерөнхий хороо", href: "#" },
  { label: "Ажлын алба", href: "#" },
  { label: "УИХ-ын гишүүд", href: "#" },
]

const externalLinks = [
  { label: "Парламент", url: "parliament.mn" },
  { label: "Ерөнхийлөгч", url: "president.mn" },
  { label: "Засгийн газар", url: "zasag.mn" },
  { label: "Эрхзүйн сан", url: "legalinfo.mn" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & contact */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold">Nam.mn</span>
            </div>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                info@nam.mn
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                70001921
              </span>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {"Сүхбаатар дүүрэг, 6-р хороо, Бага тойруу, Улаанбаатар-11"}
              </span>
            </div>
          </div>

          {/* Party links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-background/50">
              {"Нам"}
            </h3>
            <ul className="flex flex-col gap-2">
              {partyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Structure links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-background/50">
              {"Бүтэц"}
            </h3>
            <ul className="flex flex-col gap-2">
              {structureLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-background/50">
              {"Холбоос"}
            </h3>
            <ul className="flex flex-col gap-2">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`https://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
          <p className="text-center text-xs text-background/50">
            {"Мэдээлэл хуулбарлах хориотой. Copyright \u00A9 2025. Монгол Ардын Нам"}
          </p>
        </div>
      </div>
    </footer>
  )
}
