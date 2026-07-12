import { useState } from "react"
import { Icon } from "@iconify/react"
import { milestones } from "@/data/milestones"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function MilestoneRow({
  milestone,
  side,
  stagger,
}: {
  milestone: (typeof milestones)[number]
  side: "left" | "right"
  stagger: boolean
}) {
  const [open, setOpen] = useState(false)
  const isLeft = side === "left"

  return (
    <div
      className={cn(
        "relative flex mb-1.5",
        isLeft ? "justify-start" : "justify-end",
        stagger && "mt-6"
      )}
    >
      {/* Nodo central */}
      <div
        className={cn(
          "absolute left-1/2 top-2 -translate-x-1/2 w-[13px] h-[13px] rounded-full border-[3px] border-background z-10 max-md:left-[14px] max-md:translate-x-0",
          milestone.featured
            ? "bg-accent shadow-[0_0_0_1px_var(--accent)]"
            : "bg-[#9a9ca3] shadow-[0_0_0_1px_var(--line)]"
        )}
      />
      {/* Conector */}
      <div
        className={cn(
          "absolute top-[13px] h-px w-[calc(var(--gap)-7px)] max-md:hidden",
          isLeft
            ? "left-[calc(50%-var(--gap))] bg-gradient-to-r from-transparent to-[var(--line)]"
            : "left-[calc(50%+7px)] bg-gradient-to-l from-transparent to-[var(--line)]"
        )}
      />

      <div
        className={cn(
          "w-[calc(50%-var(--gap))] max-md:w-[calc(100%-46px)] max-md:ml-[46px]",
          isLeft ? "text-right max-md:text-left" : "text-left"
        )}
      >
        <span
          className={cn(
            "inline-flex items-center gap-1.5 font-display font-bold text-[11px] tracking-wide px-3 py-1.5 rounded-full text-white mb-2.5",
            milestone.featured ? "bg-accent" : "bg-[#9a9ca3]"
          )}
        >
          {milestone.date}
        </span>

        <div
          className={cn(
            "flex items-center gap-2",
            isLeft ? "justify-end max-md:flex-row-reverse max-md:justify-start" : "justify-start"
          )}
        >
          {isLeft ? (
            <>
              <h3 className="font-display font-bold text-lg tracking-tight">{milestone.title}</h3>
              <IconRow icons={milestone.icons} />
            </>
          ) : (
            <>
              <IconRow icons={milestone.icons} />
              <h3 className="font-display font-bold text-lg tracking-tight">{milestone.title}</h3>
            </>
          )}
        </div>

        <p className="text-[13.5px] text-muted-foreground leading-relaxed mt-2">
          {milestone.description}
        </p>

        <Button
          size="sm"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "mt-3 font-display text-[11px] font-bold tracking-wide uppercase",
            open
              ? "bg-accent text-white hover:bg-accent"
              : "bg-accent/10 text-accent hover:bg-accent/15 border border-accent/20"
          )}
        >
          <span
            className="inline-block transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
          {open ? "Ver menos" : "Ver más"}
        </Button>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-in-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "mt-4 p-5 rounded-2xl bg-card border border-border transition-all duration-300",
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1.5"
              )}
            >
              <p
                className={cn(
                  "font-display font-semibold text-[14.5px] leading-relaxed mb-4 border-accent max-md:!text-left max-md:border-l-[3px] max-md:border-r-0 max-md:pl-3 max-md:pr-0",
                  isLeft ? "border-r-[3px] pr-3 text-right" : "border-l-[3px] pl-3 text-left"
                )}
              >
                {milestone.quote}
              </p>
              <div
                className={cn(
                  "grid grid-cols-2 gap-x-5 gap-y-3 max-md:!text-left",
                  isLeft && "text-right"
                )}
              >
                {milestone.fields.map((f) => (
                  <div key={f.label}>
                    <div className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                      {f.label}
                    </div>
                    <div className="text-[12.5px] leading-snug">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IconRow({ icons }: { icons: { icon: string; color?: string }[] }) {
  return (
    <span className="flex items-center gap-1.5 shrink-0">
      {icons.map((ic) => (
        <Icon key={ic.icon} icon={ic.icon} width={18} height={18} color={ic.color} />
      ))}
    </span>
  )
}

export function Timeline() {
  return (
    <div className="relative">
      {/* Fondo animado sutil */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-[52vw] h-[52vw] -top-[14%] -left-[12%] rounded-full bg-accent/[0.07] blur-[110px] animate-blob-1" />
        <div className="absolute w-[46vw] h-[46vw] -bottom-[16%] -right-[10%] rounded-full bg-[#7c8aa8]/[0.08] blur-[110px] animate-blob-2" />
      </div>

      <div className="max-w-[680px] mx-auto text-center mb-16 px-6">
        <div className="font-display font-bold text-[11.5px] tracking-[0.18em] uppercase text-accent mb-3.5">
          Historia técnica
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl uppercase leading-[1.06] tracking-tight">
          Momentos que me formaron
        </h1>
      </div>

      <div
        className="relative max-w-[980px] mx-auto px-6"
        style={{ ["--gap" as string]: "46px" }}
      >
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 max-md:left-[14px] max-md:translate-x-0" />

        {milestones.map((m, i) => (
          <MilestoneRow
            key={m.id}
            milestone={m}
            side={i % 2 === 0 ? "left" : "right"}
            stagger={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}
