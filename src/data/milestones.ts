export interface MilestoneField {
  label: string
  value: string
}

export interface TechIcon {
  icon: string
  color?: string
}

export interface Milestone {
  id: string
  date: string
  title: string
  description: string
  quote: string
  fields: MilestoneField[]
  icons: TechIcon[]
  featured?: boolean
}

export const milestones: Milestone[] = [
  {
    id: "excel-atento",
    date: "2007 – 2022",
    title: "Excel y manuales de calidad",
    description:
      "Toda mi reportería y análisis vivía en Excel, sostenido por manuales técnicos y el estándar COPC en Atento y Millicom/Tigo.",
    quote:
      "Aprendí a pensar en KPIs, causas raíz y ciclos de mejora, todo montado sobre Excel como única herramienta.",
    icons: [{ icon: "vscode-icons:file-type-excel" }],
    fields: [
      { label: "Lenguaje", value: "Escrito y oral" },
      {
        label: "Tipo de texto",
        value:
          "Manual técnico (Manual de Conductas Observables, estándar COPC) y explicación oral de supervisores",
      },
      {
        label: "Claridad",
        value:
          "Media. Los manuales formales eran claros, pero la norma COPC fue densa al inicio, con terminología que no entendí sin acompañamiento",
      },
      {
        label: "Impacto",
        value:
          "Esta fue la base analítica sobre la que después construí todo lo demás, y el punto de partida más humilde de mi stack técnico comparado con lo que uso hoy",
      },
    ],
  },
  {
    id: "fepade",
    date: "27 jun 2022",
    title: "Seminario Power BI — FEPADE",
    description:
      "Mi primer acercamiento formal a Power BI, presencial, y lo que me apasionó de esta tecnología.",
    quote: "Cuando algo me apasiona lo absorbo rápido y sin fricciones.",
    icons: [{ icon: "simple-icons:powerbi", color: "#f2c811" }],
    featured: true,
    fields: [
      { label: "Lenguaje", value: "Oral y audiovisual (seminario presencial con proyección)" },
      {
        label: "Tipo de texto",
        value:
          "Explicación oral en vivo guiada por un especialista senior de capacitación, apoyada en manuales técnicos estandarizados",
      },
      {
        label: "Claridad",
        value:
          "Muy alta. Me resultó fácil de seguir porque el tema me apasionó desde el inicio y ya venía con base previa de tutoriales de YouTube sobre DAX en Excel",
      },
      {
        label: "Impacto",
        value:
          "Fue mi primer acercamiento formal a Power BI. Cinco meses después profundizaría esto con el curso de Platzi, justo antes de entrar a Grupo Zablah",
      },
    ],
  },
  {
    id: "python-platzi",
    date: "Abr – May 2022",
    title: "Python, terminal y Jupyter",
    description:
      "Mi primer lenguaje de programación real, aprendido con Platzi en formato tutorial en video.",
    quote: "Descubrí que los datos se pueden transformar con código, no solo con Excel.",
    icons: [{ icon: "logos:python" }],
    fields: [
      { label: "Lenguaje", value: "Audiovisual y técnico" },
      {
        label: "Tipo de texto",
        value: "Tutorial en video con ejercicios prácticos y código comentado",
      },
      {
        label: "Claridad",
        value:
          "Media-alta. El formato audiovisual con ejemplos en vivo facilitó mucho más que leer documentación pura, pero la sintaxis y la terminal fueron un obstáculo real al inicio",
      },
      {
        label: "Impacto",
        value:
          "Fue mi primer lenguaje de programación real, y abrió la puerta a pensar en datos de forma distinta",
      },
    ],
  },
  {
    id: "poo",
    date: "Jun 2022",
    title: "Programación Orientada a Objetos",
    description:
      "La dificultad más alta de todo el recorrido: conceptos abstractos sin caso de negocio inmediato.",
    quote: "Me dio la lógica estructural que después reconocí en el modelado de datos.",
    icons: [{ icon: "mdi:cube-outline", color: "#8b8d94" }],
    fields: [
      { label: "Lenguaje", value: "Audiovisual y técnico" },
      { label: "Tipo de texto", value: "Tutorial en video y código comentado" },
      {
        label: "Claridad",
        value:
          "La más baja de todo el recorrido. Clases, objetos y herencia sin un caso de negocio inmediato me dificultó conectar la teoría con mi trabajo diario",
      },
      {
        label: "Impacto",
        value:
          "Aunque no lo uso a diario, reconocí después esta lógica en el modelado de datos, donde las tablas funcionan como objetos con atributos y relaciones",
      },
    ],
  },
  {
    id: "powerbi-platzi",
    date: "Nov 2022",
    title: "Power BI aplicado — Platzi",
    description: "El hito más determinante: coincidió literalmente con mi entrada a Grupo Zablah.",
    quote: "Pasé de la teoría a producción en cuestión de semanas.",
    icons: [{ icon: "simple-icons:dax", color: "#f2c811" }],
    fields: [
      { label: "Lenguaje", value: "Audiovisual y técnico" },
      {
        label: "Tipo de texto",
        value: "Tutorial en video, instrucciones paso a paso y documentación de referencia",
      },
      {
        label: "Claridad",
        value:
          "Alta. Cada concepto tenía un caso de negocio inmediato (ventas, inventario), lo que aceleró mi comprensión",
      },
      {
        label: "Impacto",
        value: "El hito más determinante de todos, ya que coincidió con mi ingreso a Grupo Zablah",
      },
    ],
  },
  {
    id: "dax-comunidad",
    date: "2023",
    title: "DAX avanzado y comunidad",
    description: "Autoaprendizaje y foros técnicos para resolver patrones complejos de modelado.",
    quote:
      "Sin explicaciones de otras personas, esos patrones me habrían tomado mucho más tiempo en entender.",
    icons: [
      { icon: "simple-icons:powerbi", color: "#f2c811" },
      { icon: "mdi:forum-outline", color: "#8b8d94" },
    ],
    fields: [
      {
        label: "Lenguaje",
        value: "Escrito y oral (foros, documentación oficial, intercambios con analistas)",
      },
      {
        label: "Tipo de texto",
        value:
          "Documentación técnica oficial, explicaciones de comunidad y código comentado en medidas DAX",
      },
      {
        label: "Claridad",
        value:
          "Variable. La documentación oficial es precisa pero fría; las explicaciones de otros usuarios con analogías me ayudaron mucho más",
      },
      {
        label: "Impacto",
        value:
          "Patrones como la cascada jerárquica de cuotas se volvieron entendibles gracias a la mediación de otras personas, no solo el manual",
      },
    ],
  },
  {
    id: "postgresql",
    date: "2025",
    title: "PostgreSQL aplicado a ciencia de datos",
    description: "Consolidé mi paso de usuario de BI a alguien que entiende la capa de datos completa.",
    quote: "Ya tenía base sólida de SQL Server, así que el traslado a PostgreSQL fue fluido.",
    icons: [{ icon: "logos:postgresql" }],
    fields: [
      { label: "Lenguaje", value: "Audiovisual y técnico" },
      { label: "Tipo de texto", value: "Tutorial en video y ejercicios con código SQL comentado" },
      {
        label: "Claridad",
        value:
          "Media a alta. La dificultad estuvo en particularidades de sintaxis y conceptos nuevos de modelado dimensional",
      },
      {
        label: "Impacto",
        value:
          "Consolidó mi paso de usuario de BI a alguien que entiende la capa de datos completa, no solo el reporte final",
      },
    ],
  },
  {
    id: "azure",
    date: "2025 – 2026",
    title: "Ingeniería de Datos y Azure",
    description: "Mi transición formal de analista BI hacia ingeniería de datos.",
    quote:
      "El formato de módulos cortos con validación inmediata redujo mucho la sensación de estar perdido.",
    icons: [{ icon: "logos:microsoft-azure" }],
    fields: [
      { label: "Lenguaje", value: "Audiovisual y escrito técnico" },
      {
        label: "Tipo de texto",
        value:
          "Tutorial en video (Platzi) y documentación oficial estructurada en módulos con badges (Microsoft Learn)",
      },
      {
        label: "Claridad",
        value:
          "Alta. Los quizzes y badges redujeron mucho la sensación de estar perdido que sí sentí con POO en 2022",
      },
      {
        label: "Impacto",
        value:
          "Marca mi transición formal hacia ingeniería de datos, el conocimiento que sostiene mi proyecto de laboratorio Proxmox actual",
      },
    ],
  },
]
