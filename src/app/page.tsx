import {
  project,
  modes,
  goals,
  steps,
  techStack,
  members,
  supervisors,
  researchGroup,
} from "@/data/team";

const nav = [
  { href: "#projekt", label: "Projekt" },
  { href: "#postup", label: "Postup" },
  { href: "#technologie", label: "Technológie" },
  { href: "#tim", label: "Tím" },
  { href: "#vedenie", label: "Vedenie" },
];

function initials(name: string) {
  return name
    .replace("Bc. ", "")
    .split(" ")
    .map((p) => p[0])
    .join("");
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigácia */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-bold text-teal-700">
            {project.name}{" "}
            <span className="font-normal text-slate-500">· {project.team}</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-teal-700">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-700 to-sky-800 text-white">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="text-sm uppercase tracking-widest text-teal-100">
              Tímový projekt · {project.faculty} · {project.academicYear}
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-3 text-xl text-teal-50">{project.topic}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projekt"
                className="rounded-lg bg-white px-5 py-2.5 font-medium text-teal-800 hover:bg-teal-50"
              >
                O projekte
              </a>
              <a
                href="#tim"
                className="rounded-lg border border-white/40 px-5 py-2.5 font-medium hover:bg-white/10"
              >
                Náš tím
              </a>
            </div>
          </div>
        </section>

        {/* Projekt */}
        <Section
          id="projekt"
          title="Na čom pracujeme"
          subtitle="AI asistent s dvoma režimami – pre lekára a pre pacienta."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {modes.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold">Ciele prototypu</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-700 marker:text-teal-600">
            {goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-red-700">
            <span className="font-semibold">Dôležité:</span>{" "}
            {project.disclaimer}
          </p>
        </Section>

        {/* Postup */}
        <div className="bg-white">
          <Section id="postup" title="Ako postupujeme">
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>
          </Section>
        </div>

        {/* Technológie */}
        <Section
          id="technologie"
          title="Technológie a knižnice"
          subtitle="Frameworky a nástroje, ktoré v projekte používame."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {techStack.map((t) => (
              <div
                key={t.category}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-semibold text-teal-700">{t.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tím */}
        <div className="bg-white">
          <Section
            id="tim"
            title="Členovia tímu"
            subtitle="Sedem študentov inžinierskeho štúdia FIIT STU."
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-600 font-semibold text-white">
                    {initials(m.name)}
                  </div>
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-sm text-slate-500">{m.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Vedenie */}
        <Section
          id="vedenie"
          title="Vedenie a výskumná skupina"
          subtitle="Ľudia a pracoviská, ktoré za projektom stoja."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {supervisors.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm uppercase tracking-wide text-teal-700">
                  {s.role}
                </p>
                <p className="mt-2 text-lg font-semibold">{s.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <p className="text-sm uppercase tracking-wide text-sky-700">
                Výskumná skupina
              </p>
              <p className="mt-2 font-semibold">{researchGroup.name}</p>
              <p className="mt-1 text-sm text-slate-600">
                {researchGroup.institute}
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <p className="text-sm uppercase tracking-wide text-sky-700">
                Akademický partner
              </p>
              <p className="mt-2 font-semibold">{researchGroup.partner}</p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>
            © {project.academicYear} {project.name} · {project.team} ·{" "}
            {project.university}
          </p>
          <a href={`mailto:${project.contact}`} className="hover:text-teal-700">
            {project.contact}
          </a>
        </div>
      </footer>
    </>
  );
}
