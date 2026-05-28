"use client"

import { useTranslation } from "@/lib/i18n"
import { CabeceraSeccion } from "./compartidos/cabecera-seccion"
import { ScrollReveal } from "./compartidos/scroll-reveal"

const PERFIL = {
  enfoque:      "calidad sobre cantidad",
  idiomas:      ["español", "inglés"],
  zona_horaria: "UTC-3 · Argentina",
  modalidad:    "remoto",
  freelance:    true,
  respuesta:    "< 24 horas",
}

function Linea({ num, children }) {
  return (
    <div className="flex gap-4 group">
      <span className="w-5 shrink-0 text-right font-mono text-[11px] text-muted-foreground/30 select-none pt-0.5">
        {num}
      </span>
      <span className="font-mono text-xs sm:text-sm leading-relaxed">{children}</span>
    </div>
  )
}

function Clave({ children })  { return <span className="text-sky-400">{children}</span> }
function Valor({ children })  { return <span className="text-amber-300/90">{children}</span> }
function Str({ children })    { return <span className="text-emerald-400/90">"{children}"</span> }
function Comentario({ children }) { return <span className="text-muted-foreground/40 italic">{children}</span> }
function Punct({ children })  { return <span className="text-muted-foreground/60">{children}</span> }
function Kw({ children })     { return <span className="text-violet-400">{children}</span> }

export function SobreMi() {
  const { t } = useTranslation()
  const ts = t.sobreMi

  return (
    <section id="about" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">

        <ScrollReveal efecto="fade-up" className="mb-12 sm:mb-16">
          <CabeceraSeccion etiqueta={ts.tagline} titulo={ts.titulo} />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Bloque de código */}
          <ScrollReveal efecto="slide-left">
            <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden glass">

              {/* Barra de título */}
              <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-5 py-3.5">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <span className="ml-3 font-mono text-xs text-muted-foreground">about.js</span>
              </div>

              {/* Código */}
              <div className="p-5 sm:p-7 space-y-0.5">
                <Linea num="1"><Comentario>// cómo trabajo</Comentario></Linea>
                <Linea num="2"></Linea>
                <Linea num="3"><Kw>const</Kw> <Valor>perfil</Valor> <Punct>= {"{"}</Punct></Linea>
                <Linea num="4"><span className="pl-4"><Clave>enfoque</Clave><Punct>:     </Punct><Str>{PERFIL.enfoque}</Str><Punct>,</Punct></span></Linea>
                <Linea num="5"><span className="pl-4"><Clave>idiomas</Clave><Punct>:    </Punct><Punct>[</Punct><Str>español</Str><Punct>, </Punct><Str>inglés</Str><Punct>],</Punct></span></Linea>
                <Linea num="6"><span className="pl-4"><Clave>zona_horaria</Clave><Punct>: </Punct><Str>{PERFIL.zona_horaria}</Str><Punct>,</Punct></span></Linea>
                <Linea num="7"><span className="pl-4"><Clave>modalidad</Clave><Punct>:  </Punct><Str>{PERFIL.modalidad}</Str><Punct>,</Punct></span></Linea>
                <Linea num="8"><span className="pl-4"><Clave>freelance</Clave><Punct>:  </Punct><span className="text-emerald-400">{String(PERFIL.freelance)}</span><Punct>,</Punct></span></Linea>
                <Linea num="9"><span className="pl-4"><Clave>respuesta</Clave><Punct>:  </Punct><Str>{PERFIL.respuesta}</Str><Punct>,</Punct></span></Linea>
                <Linea num="10"><Punct>{"}"}</Punct></Linea>
                <Linea num="11"></Linea>
                <Linea num="13">
                  <Kw>export default</Kw> <Valor>perfil</Valor><Punct>;</Punct>
                </Linea>
              </div>
            </div>
          </ScrollReveal>

          {/* Descripción + stats */}
          <ScrollReveal efecto="slide-right" retraso={100}>
            <div className="space-y-8">

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {ts.descripcion}
              </p>

              {/* Focus items como comentarios de código */}
              <div className="rounded-xl border border-border/60 bg-card/30 p-5 space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">{ts.enfoque}</p>
                {ts.items.map((item, i) => (
                  <div key={item} className="flex gap-3 font-mono text-xs sm:text-sm text-muted-foreground">
                    <span className="text-primary/50 shrink-0">//</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
