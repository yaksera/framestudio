// Static content. Works and FAQs are overridden by the Django API when it is reachable.
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const CATEGORIES = [
  { key: "all", label: "All Works" },
  { key: "weddings", label: "Weddings & Elopements" },
  { key: "portraits", label: "Fine Art Portraits" },
  { key: "editorial", label: "Editorial & Corporate" },
];

export const FALLBACK_WORKS = [
  { id: 1, title: "The Coastal Vows — Brittany Coast", description: "Documentary elopement on rugged cliffs • France", category: "weddings", image: "/images/coastal-vows.png" },
  { id: 2, title: "Minimalist Atelier / Director Series", description: "Fine art portrait series • London", category: "portraits", image: "/images/director-series.png" },
  { id: 3, title: "The Olive Grove Table — Puglia", description: "Long-table celebration at golden hour • Italy", category: "weddings", image: "/images/olive-grove.png" },
  { id: 4, title: "Pottery", description: "Studio studies of hands and clay • Florence", category: "portraits", image: "/images/pottery.png" },
  { id: 5, title: "Interior Home Design", description: "Architectural publication & foundation campaign • Basel", category: "editorial", image: "/images/interior.png" },
  { id: 6, title: "Studio Studies with Clara M.", description: "Architect at work, natural light • Paris", category: "editorial", image: "/images/clara-m.png" },
];

export const FALLBACK_FAQS = [
  { id: 1, question: "How much will my visit cost?", answer: "Commissions begin with a private conversation about your vision. Wedding and elopement collections, portrait sessions and editorial assignments are each quoted individually. Request the studio dossier for current rates." },
  { id: 2, question: "Do you travel for commissions?", answer: "Yes. We are based between Paris and London and are available globally, including Nepal, the USA and Turkey this season." },
  { id: 3, question: "How far ahead should I book?", answer: "Dates for 2025 / 2026 are filling steadily. We recommend reaching out as soon as you have a projected season or venue." },
  { id: 4, question: "What do I receive at handover?", answer: "An heirloom folio: individually graded digital images, analog lab scans and a bound physical edition." },
];

export const STEPS = [
  { n: "01", title: "Creative Alignment", text: "A quiet dialogue regarding your personal vision, aesthetic sensibilities, lighting conditions, and private priorities." },
  { n: "02", title: "Location & Light Scouting", text: "Analyzing natural architectural shadows, environmental angles, and solar patterns to map the day's optical potential." },
  { n: "03", title: "Documentary Immersion", text: "Unobtrusive observation during key moments paired with gentle, relaxed direction when editorial composition demands it." },
  { n: "04", title: "Handcrafted Grading", text: "Individual color-grading, analog lab negative development, and assembly of an heirloom physical and digital folio." },
];

export const NATURES = [
  { value: "wedding", label: "Wedding / Elopement" },
  { value: "portrait", label: "Portrait / Artist" },
  { value: "corporate", label: "Corporate / Editorial" },
];

export const PUBLICATIONS = ["Vogue Weddings", "Kinfolk", "Cereal Mag", "AD España"];
