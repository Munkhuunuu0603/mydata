import { ArrowRight, Monitor, ShieldCheck, Users } from "lucide-react"

const projects = [
  {
    icon: Monitor,
    title: "Цахим нам 2.0",
    description:
      "Монгол Ардын Нам 2017 онд болсон 28-р их хурлаараа харилцааны шинэ технологийг нэвтрүүлэх зорилт тавьсан.",
  },
  {
    icon: ShieldCheck,
    title: "Хүний эрхийн манлайлагч 30,000",
    description:
      'Монгол Ардын Намын 30 дугаар Их Хурлын 11 дүгээр тогтоолын 3 дахь хэсэгт "Хүний эрх хамгаалагч" хөтөлбөрийг хэрэгжүүлэх.',
  },
  {
    icon: Users,
    title: '"Оролцъё, төлөөлье" жендэрийн эрх тэгш байдал',
    description:
      "Шийдвэр гаргах түвшинд жендэрийн тэгш байдлын талаарх ойлголт, мэдлэгийг дээшлүүлэх зорилготой.",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          {"Хэрэгжүүлж буй төсөл, хөтөлбөрүүд"}
        </h2>
        <div className="mb-10 h-1 w-16 bg-primary" />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <button className="mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                {"Дэлгэрэнгүй"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
