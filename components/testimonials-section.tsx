"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Г.ХАНДАРМАА",
    role: "МАН-ын дэргэдэх Ахмадын Холбооны тэргүүлэгч",
    text: "Монгол Ардын намын нийт гишүүд, олон мянган дэмжигчид, зүрх сэтгэлээсээ намаа дээдлэн хамтран зүтгэдэг намын ахмад гишүүд, найз нөхөд, дүү нартаа чин сэтгэлийн мэндийг хүргэе.",
  },
  {
    name: "Д.МӨНХДАЛАЙ",
    role: "Азийн топ модель, жүжигчин",
    text: "Монгол ардын нам бол удирдлагууд нь солигдож, гишүүд нь шинэчлэгдэж өөрчлөгдсөн ч тогтолцоо нь хэвээрээ байдаг улс төрийн институт буюу 100 жилийн түүхтэй нам юм.",
  },
  {
    name: "О.БААТАР",
    role: "Д.Сүхбаатар сурталчлагч, судлаач",
    text: "Найман настай байхдаа Амгаланд байрлах Жанжин клубыг сэргээн барих ажилд оролцож тоосго үүрч, чулуу зөөн, битон усанд явах зэрэгт гарын үзүүрт ажилласан.",
  },
  {
    name: "О.БАТНАЙРАМДАЛ",
    role: "Уул уурхай, хүнд үйлдвэрийн дэд сайд",
    text: 'Тэртээ 100 жилийн өмнө түүхэнд "анхны долоо" гэж алдаршсан идэр насны долоон залуу бүрэн эрхт, тусгаар Монгол улсыг бий болгохыг хүсэн мөрөөдөж, Монгол ардын намыг байгуулсан.',
  },
  {
    name: "С.ЛУВСАНГОМБО",
    role: "Монгол Ардын Намын ахмад гишүүн",
    text: "Монгол Ардын Нам үүсэн байгуулагдсан тэр үеэсээ өөрийн үйл ажиллагаагаа МУ-ын тусгаар тогтнолыг бататгах, эдийн засгаа эрчимтэй хөгжүүлэх зорилт тавьж ирсэн.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          {"Намын гишүүдийн санал сэтгэгдэл"}
        </h2>
        <div className="mb-10 h-1 w-16 bg-primary" />

        <div className="relative mx-auto max-w-3xl">
          <Quote className="mb-6 h-10 w-10 text-primary" />
          <blockquote className="mb-8 text-lg leading-relaxed text-background/80 md:text-xl">
            {t.text}
          </blockquote>
          <div className="mb-8">
            <p className="text-lg font-bold">{t.name}</p>
            <p className="text-sm text-background/60">{t.role}</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition-colors hover:bg-background/10"
              aria-label="Өмнөх"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-background/30"
                  }`}
                  aria-label={`Санал ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition-colors hover:bg-background/10"
              aria-label="Дараах"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
