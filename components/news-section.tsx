"use client"

import { useState } from "react"
import Image from "next/image"
import { CalendarDays, ArrowRight } from "lucide-react"

const categories = [
  "Бүгд",
  "Онцлох үйл явдал",
  "Цаг үе",
  "Ярилцлага",
  "Арга хэмжээ",
]

const newsItems = [
  {
    id: 1,
    category: "Онцлох үйл явдал",
    date: "2023/01/30",
    title: "Социал демократ Монголын эмэгтэйчүүдийн холбоог Х.Булганзаяа тэргүүлнэ",
    excerpt:
      "Монгол Ардын Намын дэргэдэх Эмэгтэйчүүдийн байгууллага болох Нийгмийн ардчилал Монголын эмэгтэйчүүдийн холбооны ээлжит бус Их хурал...",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    category: "Онцлох үйл явдал",
    date: "2023/01/30",
    title: "НАМЭХ-НЫ ЭЭЛЖИТ БУС ИХ ХУРАЛ ЭХЭЛЛЭЭ",
    excerpt:
      "Нийгмийн Ардчилал Монголын эмэгтэйчүүдийн холбоо /НАМЭХ/-ны ээлжит бус Их хурал өнөөдөр хуралдлаа...",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    category: "Цаг үе",
    date: "2022/12/30",
    title: "МАН-ын Бага хурлын II хуралдаан цахимаар хуралдаж байна",
    excerpt:
      "Өнөөдөр буюу арван хоёрдугаар сарын 30-ны өдөр МАН-ын Бага хурлын II хуралдаан цахим хэлбэрээр...",
    image: "/images/news-3.jpg",
  },
  {
    id: 4,
    category: "Арга хэмжээ",
    date: "2022/11/29",
    title: "МАН: Хойд бүсийн жендэрийн сургалтыг Дархан-Уул аймагт зохион байгууллаа",
    excerpt:
      "Монгол Ардын Нам 2022 оны 11 сарын 23, 24-ний өдрүүдэд Дархан-Уул аймагт Булган, Орхон, Дархан-Уул...",
    image: "/images/news-4.jpg",
  },
  {
    id: 5,
    category: "Арга хэмжээ",
    date: "2022/09/08",
    title: "МАН: ТУРК УЛСЫН ШУДАРГА ЁС, ХӨГЖЛИЙН НАМТАЙ ХАМТРАН АЖИЛЛАНА",
    excerpt:
      "Бүгд Найрамдах Турк Улсын эрх баригч Шударга ёс, хөгжлийн намын урилгаар Монгол Ардын Намын Улс төрийн...",
    image: "/images/news-5.jpg",
  },
  {
    id: 6,
    category: "Ярилцлага",
    date: "2022/09/16",
    title: "Цахим нам 2.0 төсөл хэрэгжиж байна",
    excerpt:
      "Монгол Ардын Нам 2017 онд болсон 28-р их хурлаараа харилцааны шинэ технологийг нэвтрүүлэх...",
    image: "/images/news-6.jpg",
  },
]

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("Бүгд")

  const filteredNews =
    activeCategory === "Бүгд"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory)

  return (
    <section id="news" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          {"Мэдээ, мэдээлэл"}
        </h2>
        <div className="mb-8 h-1 w-16 bg-primary" />

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <button className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  {"Дэлгэрэнгүй"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
