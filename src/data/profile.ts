export const profile = {
  identity: {
    name: "Ny Avo Sarobidy Andriatsilavo",
    title: "Full-Stack Developer | AI & Machine Learning Engineer",
    location: "Tsimbazaza, Antananarivo, Madagascar",
    email: "nyavoandriatsilavo@gmail.com",
    phone: "+261 34 57 497 76",
    linkedin: "https://linkedin.com/in/nyavosarobidy",
    github: "https://github.com/NyAvoSarobidy",
    credly: "https://credly.com/users/ny-avo-sarobidy-andriatsilavo",
  },

  about:
    "Ingénieur ML / AI Engineer spécialisé dans la conception de solutions IA de bout en bout, du traitement des données au déploiement et monitoring des modèles sur Google Cloud. Expérience en développement Full Stack avec Next.js, React, Symfony et FastAPI, ainsi qu'en MLOps et automatisation IA.",

  experiences: [
    {
      company: "Clearmind-Analytics",
      location: "Antananarivo",
      role: "ML Engineer / Full-Stack Developer",
      period: "juil. 2025 → aujourd'hui",
      highlights: [
        "Conception d'une demo publique d'intelligence decisionnelle appliquee au secteur pharmaceutique.",
        "Systeme d'intelligence decisionnelle de bout en bout pour la gestion des stocks (descriptif, predictif, prescriptif), aligne avec le concept de jumeau numerique d'entreprise.",
        "Pipeline ML complet sur GCP : ingestion/transformation via BigQuery, entrainement et gestion des modeles avec Vertex AI et AutoML, monitoring en production avec detection de data drift et model drift.",
        "Application des competences visees par la certification Google Cloud Professional Machine Learning Engineer.",
      ],
      links: [
        { label: "Demo Supply Chain", url: "https://supply-chain.clearmind-analytics.com" },
      ],
    },
    {
      company: "Clearmind-Analytics - AthenaEvent",
      location: "Antananarivo",
      role: "Developpeur Front-End",
      period: "aout 2025 → aujourd'hui",
      highlights: [
        "Plateforme de billetterie et d'analytics : gestion des evenements, inscriptions, presence et scoring des leads.",
        "Vitrine B2B : integration pixel-perfect, UX/UI, responsive, SEO.",
        "Web App : dashboards, gestion d'evenements, formulaires d'inscription, rapports d'analytics (lead scoring, presence).",
        "Optimisation performance/accessibilite en collaboration avec les equipes Back-End et DevOps.",
      ],
      links: [
        { label: "athena-event.com", url: "https://athena-event.com" },
        { label: "app.athena-event.com", url: "https://app.athena-event.com/fr" },
      ],
    },
    {
      company: "Cabinet OrthoSto",
      location: "France (teletravail)",
      role: "Developpeur Front-End (Next.js)",
      period: "fevr. 2025 → aout 2025",
      highlights: [
        "Creation du site du cabinet et maintenance continue.",
      ],
      links: [
        { label: "www.orthosto.com", url: "https://www.orthosto.com" },
      ],
    },
    {
      company: "BNI Madagascar",
      location: "Antananarivo",
      role: "Charge de Projet Informatique (stage)",
      period: "oct. 2024 → avr. 2025",
      highlights: [
        "Direction du developpement de tableaux de bord Power BI pour l'analyse et le reporting RH.",
      ],
      links: [],
    },
    {
      company: "Star Madagascar",
      location: "Antananarivo",
      role: "Developpeur .NET Framework (stage)",
      period: "janv. 2024 → juil. 2024",
      highlights: [
        "Numerisation et deploiement du systeme de calcul du prix de revient des produits importes.",
        "Application d'entreprise en C# ASP.NET Framework, AngularJS, SQL Server.",
      ],
      links: [],
    },
    {
      company: "Direction Generale des Impots",
      location: "Antananarivo",
      role: "Developpeur Web (stage)",
      period: "mai 2023 → juil. 2023",
      highlights: [
        "Application web complete de suivi de taches et gestion de projets (Symfony 6.0).",
        "Authentification, affectation des taches, suivi de progres, reporting.",
      ],
      links: [],
    },
  ],

  skills: [
    {
      category: "Machine Learning & IA",
      items: ["Scikit-learn", "MLOps", "XGBoost", "Pandas", "Feature engineering"],
    },
    {
      category: "Donnees & DevOps",
      items: ["Power BI", "ETL", "pipelines CI/CD", "Git", "deploiement cloud"],
    },
    {
      category: "AI Automation",
      items: ["LLMs", "AI Agents", "Claude Code", "Hermes", "n8n"],
    },
    {
      category: "Developpement Full-Stack",
      items: ["Next.js", "Node.js", "Django", "Symfony 6.0", ".NET Framework"],
    },
    {
      category: "Google Cloud Platform",
      items: ["BigQuery", "Vertex AI", "AutoML"],
    },
    {
      category: "Langages",
      items: ["Python", "JavaScript", "PHP", "C#", "Java"],
    },
  ],

  languages: [
    { name: "Francais", level: "Langue maternelle" },
    {
      name: "Anglais",
      level: "B2 (TEFL & TESOL, nov. 2025 → avr. 2026)",
    },
  ],

  qualities: [
    "Dynamique et proactif",
    "Esprit d'equipe",
    "Gestion du temps",
    "Adaptabilite",
    "Creativite",
  ],

  projects: [
    {
      name: "Demo Supply Chain (Clearmind-Analytics)",
      url: "https://supply-chain.clearmind-analytics.com",
      description:
        "Intelligence decisionnelle pharmaceutique : descriptif, predictif et prescriptif sur un pipeline GCP (BigQuery, Vertex AI).",
      tags: ["Next.js", "Vertex AI", "BigQuery", "MLOps"],
      image: "/images/supply_chain.png",
    },
    {
      name: "AthenaEvent",
      url: "https://athena-event.com",
      description:
        "Plateforme de billetterie et d'analytics : evenements, inscriptions, presence et lead scoring.",
      tags: ["Next.js", "Dashboards", "SEO"],
      image: "/images/athena.png",
    },
    {
      name: "Site OrthoSto",
      url: "https://www.orthosto.com",
      description:
        "Site vitrine du cabinet OrthoSto, integration pixel-perfect et maintenance continue.",
      tags: ["Next.js", "UI/UX", "Responsive"],
      image: "/images/orthosto.png",
    },
    {
      name: "MadaHarvest",
      url: "https://madaharvest.vercel.app",
      description: "Application web autour de la production agricole malgache.",
      tags: ["React", "Vercel"],
      embed: true,
    },
    {
      name: "Assistant documentaire RAG",
      url: "https://apprentissage-laingchain-vemxzzyttesfcpcrkji84k.streamlit.app",
      description:
        "Assistant de recherche documentaire base sur une architecture RAG avec LangChain.",
      tags: ["LangChain", "RAG", "Streamlit"],
      
      image: "/images/rag.png",
    },
  ],

  education: [
    {
      degree: "TEFL & TESOL – English Language",
      institution: "MTTC, Antananarivo",
      period: "nov. 2025 → avr. 2026",
      detail: "Niveau B2",
    },
    {
      degree: "Master I Informatique – Developpement d'Applications",
      institution: "Universite FJKM Ravelojaona",
      period: "2024 → 2025",
    },
    {
      degree: "Licence Informatique – Developpement d'Applications",
      institution: "Universite FJKM Ravelojaona",
      period: "nov. 2022 → sept. 2023",
      detail: "Diplome 2023",
    },
  ],

  certifications: [
    {
      name: "Google Cloud — Professional Machine Learning Engineer (preparation)",
      date: "juil. 2025",
      url: "https://partner.skills.google/public_profiles/0a673abb-13dd-444f-b997-502eebed037e",
    },
    {
      name: "Intelligence Artificielle Appliquee au NLP",
      issuer: "Orange Digital Center",
    },
    {
      name: "Certificat Java",
      issuer: "CodinGame",
      url: "https://www.codingame.com/certification/E9VivXkEUwqQcYGlXH99pQ",
    },
  ],
};
