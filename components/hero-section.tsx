import { Shield, Scale, HeartHandshake } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Эрх чөлөө",
    description:
      "Эрх чөлөө гэж хүн бүр эрх чөлөөгөө эдлэх, сонголт хийх боломжоор хангагдаж, хүний эрх, эрх чөлөөнд дур зоргоор халдахаас хамгаалагдаж, эрх, үүрэг, хариуцлагын нэгдэл бий болсон байхыг",
  },
  {
    icon: Scale,
    title: "Шударга ёс",
    description:
      "Шударга ёс гэж хүн бүрд сайхан амьдрах тэгш боломжийг олгож, нийгмийн нөөцийг шударга хуваарилахыг",
  },
  {
    icon: HeartHandshake,
    title: "Эв санааны нэгдэл",
    description:
      "Эв санааны нэгдэл гэж хүн бүр харилцан хариуцлага хүлээж, бие биенээ дэмжин, нийгмийн сайн сайхны төлөө хамтран ажиллахыг",
  },
]

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero background */}
      <div className="relative h-[520px] overflow-hidden md:h-[600px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Монгол Ардын Нам"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-background md:text-6xl">
            {"Монгол Ардын Нам"}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-background/80 md:text-xl">
            {"Эрх чөлөө, Шударга ёс, Эв санааны нэгдэл"}
          </p>
        </div>
      </div>

      {/* Values cards */}
      <div className="mx-auto -mt-20 max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="relative overflow-hidden rounded-lg border border-border bg-background p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
