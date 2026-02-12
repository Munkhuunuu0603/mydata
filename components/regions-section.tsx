import { MapPin } from "lucide-react"

const regions = [
  "Нийслэлийн намын хороо",
  "Архангай аймгийн намын хороо",
  "Баян-Өлгий аймгийн намын хороо",
  "Баянхонгор аймгийн намын хороо",
  "Булган аймгийн намын хороо",
  "Говь-Алтай аймгийн намын хороо",
  "Говьсүмбэр аймгийн намын хороо",
  "Дархан-Уул аймгийн намын хороо",
  "Дорноговь аймгийн намын хороо",
  "Дорнод аймгийн намын хороо",
  "Дундговь аймгийн намын хороо",
  "Завхан аймгийн намын хороо",
  "Орхон аймгийн намын хороо",
  "Өвөрхангай аймгийн намын хороо",
  "Өмнөговь аймгийн намын хороо",
  "Сүхбаатар аймгийн намын хороо",
  "Сэлэнгэ аймгийн намын хороо",
  "Төв аймгийн намын хороо",
  "Увс аймгийн намын хороо",
  "Ховд аймгийн намын хороо",
  "Хөвсгөл аймгийн намын хороо",
  "Хэнтий аймгийн намын хороо",
]

export function RegionsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          {"Аймаг, дүүргийн намын хороод"}
        </h2>
        <div className="mb-10 h-1 w-16 bg-primary" />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {regions.map((region) => (
            <button
              key={region}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-left text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {region}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
