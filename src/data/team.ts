// Všetok obsah stránky je na jednom mieste – stačí upraviť tento súbor.

export const project = {
  name: "AI Health",
  team: "Tím 28",
  topic: "Inteligentné zdravotníctvo: Výskum a vývoj AI pre lepšiu starostlivosť",
  university: "Slovenská technická univerzita v Bratislave",
  faculty: "Fakulta informatiky a informačných technológií (FIIT STU)",
  academicYear: "2026/2027",
  contact: "xduchona@stuba.sk",
  summary:
    "Vyvíjame webového AI asistenta pre stomatológiu a ortodonciu. Lekárovi pomáha so zobrazením a automatizovanou analýzou 2D/3D snímok, pacientovi ponúka prirodzenú komunikáciu s interaktívnym 3D avatarom.",
  disclaimer:
    "Výstupy systému slúžia ako podporné informácie – nie ako samostatná diagnóza ani náhrada rozhodnutia lekára.",
};

export const modes = [
  {
    title: "Pre lekára",
    icon: "🩺",
    text: "Zobrazenie a základná automatizovaná analýza 2D/3D údajov (RTG, CBCT a intraorálne skeny). Systém identifikuje vybrané anatomické štruktúry a prehľadne vizualizuje výsledky segmentácie.",
  },
  {
    title: "Pre pacienta",
    icon: "💬",
    text: "Jednoduchá komunikácia s AI avatarom a orientačné spracovanie fotografie chrupu s vysvetlením všeobecných informácií o ústnom zdraví.",
  },
];

export const goals = [
  "Webové rozhranie na nahratie a vizualizáciu medicínskych snímok",
  "Integrácia AI modelu na segmentáciu / identifikáciu zubných štruktúr",
  "Interaktívny 3D avatar s textovou alebo hlasovou komunikáciou",
  "Zabezpečenie prístupu, ochrana údajov a dohľadateľnosť výsledkov",
];

export const steps = [
  {
    title: "Príprava dát",
    text: "Výber anotovaných datasetov (3DTeethSeg, ToothFairy), predspracovanie a návrh referenčných testov.",
  },
  {
    title: "AI analýza",
    text: "Experimentálne overenie segmentačných modelov (U-Net / nnU-Net) a vyhodnotenie presnosti (Dice, F1).",
  },
  {
    title: "Integrácia",
    text: "Webová aplikácia s backendom pre interakciu a samostatnou službou pre AI analýzu.",
  },
  {
    title: "Avatar a overenie",
    text: "3D avatar s hlasom v prehliadači, následné testovanie funkčnosti, použiteľnosti a bezpečnosti.",
  },
];

export const techStack = [
  {
    category: "AI & analýza obrazu",
    items: ["Python", "PyTorch", "MONAI", "U-Net / nnU-Net"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js / Express", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    category: "Avatar & streaming",
    items: [
      "Unreal Engine 5.7",
      "MetaHuman",
      "NeuroSync",
      "Pixel Streaming / WebRTC",
      "OpenAI Realtime API",
    ],
  },
];

export const members = [
  { name: "Bc. Dávid Vach", program: "Inteligentné softvérové systémy" },
  { name: "Bc. Alex Duchoň", program: "Inteligentné softvérové systémy" },
  { name: "Bc. Krištof Kmeť", program: "Inteligentné softvérové systémy" },
  { name: "Bc. Tomáš Horan", program: "Inteligentné softvérové systémy" },
  { name: "Bc. Tomáš Matovič", program: "Informačná bezpečnosť" },
  { name: "Bc. Štefan Kučerák", program: "Informačná bezpečnosť" },
  { name: "Bc. Július Škrabák", program: "Informačná bezpečnosť" },
];

export const supervisors = [
  {
    name: "doc. Ing. Fedor Lehocki, PhD., MPH",
    role: "Vedúci tímu",
  },
  {
    name: "doc. Ing. Eduard Kuric, PhD.",
    role: "Spoluvedúci tímu",
  },
];

// TODO: overiť presný názov výskumnej skupiny
export const researchGroup = {
  name: "Laboratórium zdravotníckej informatiky",
  institute:
    "Ústav informatiky, informačných systémov a softvérového inžinierstva (ÚISI), FIIT STU",
  partner: "Lekárska fakulta Univerzity Komenského (LF UK)",
};
