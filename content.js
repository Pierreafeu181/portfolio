// Tout le contenu du site est ici : modifie les textes, le reste se met à jour tout seul.
// Textes rédigés à partir du CV : à relire et à adapter à ta voix.
window.CONTENT = {
  name: "Baptiste Puiferrat",
  email: "Baptiste.puiferrat@essec.edu",
  linkedin: "https://www.linkedin.com/in/baptiste-puiferrat",
  github: "https://github.com/Pierreafeu181",
  cvPdf: "assets/cv-baptiste-puiferrat.pdf",
  avatar: "assets/avatar.png", // remplace par assets/avatar.gif quand l'animation sera prête

  hero: {
    eyebrow: "ESSEC · IMT Atlantique · Paris-Saclay",
    place: "Paris, FR",
    role: "Data × Produit",
    intro:
      "Ingénieur data, en route vers l'ESSEC. Chez Pretto, j'ai participé, avec l'équipe Data, à la mise en production d'un agent IA qui propose des ajustements de taux. Chez Sharpstone, j'ai accompagné 20 startups sur leur financement. Je fonde AST Inge : 250+ élèves, incubée à l'ESSEC. Je construis des systèmes qui tiennent : des chiffres fiables, des outils simples, des décisions prises vite.",
  },

  about: {
    title: "Data × Produit",
    paragraphs: [
      "Ingénieur IMT Atlantique, passé par une double licence maths-physique à Paris-Saclay, aujourd'hui en Master in Management à l'ESSEC. Je travaille là où les chiffres rencontrent la décision : data en fintech, financement de startups, produits.",
      "Mon atout n'est pas une compétence isolée, c'est la combinaison. Je comprends un système avec les chiffres, puis je construis ce qui manque. Si quelque chose doit exister, je le fais exister : un dashboard, une automatisation, une plateforme.",
    ],
    strengths: [
      {
        t: "Produit",
        d: "Chez Pretto, j'ai travaillé avec les équipes Produit, Tech et Data. Par exemple sur un agent IA qui lit les messages des courtiers et propose des ajustements de taux, mis en production avec l'équipe Data.",
      },
      {
        t: "Entreprendre",
        d: "J'ai fondé AST Inge, une plateforme d'entraînement aux concours d'écoles d'ingénieurs (QCM, annales, examens blancs chronométrés), aujourd'hui incubée et accélérée à l'ESSEC.",
      },
      {
        t: "Autonomie",
        d: "J'ai créé en autonomie une carte interactive de l'ancienneté des grilles bancaires. Je l'ai pitchée au CPO, puis l'équipe Data l'a intégrée.",
      },
    ],
    beyond: {
      title: "Hors du bureau",
      text: "Quand je ne construis pas des produits, je suis sur un terrain de handball (10 ans de compétition), sur une planche de surf ou en trek. J'ai aussi présidé le club « Cuisine et Cultures ».",
    },
    principles: [
      "Les chiffres informent, le jugement décide",
      "Livrer d'abord, itérer ensuite",
      "Comprendre le système avant de l'optimiser",
      "Si ça doit exister, on le fait exister",
    ],
  },

  education: [
    {
      school: "ESSEC",
      url: "https://www.essec.edu/fr/",
      degree: "Programme Grande École",
      detail: "Master in Management : Chaire Leading Scale, Track Entrepreneuriat.",
      place: "Paris",
      dates: "09/2026 – 08/2028",
    },
    {
      school: "IMT Atlantique",
      url: "https://www.imt-atlantique.fr/fr",
      degree: "Cycle ingénieur (fusion de Télécom Bretagne et des Mines de Nantes)",
      detail: "Data science · Machine learning et deep learning · Intelligence artificielle · Stratégie d'entreprise",
      place: "Brest",
      dates: "09/2022 – 08/2026",
    },
    {
      school: "Université Paris-Saclay",
      url: "https://www.universite-paris-saclay.fr/",
      degree: "Double licence Mathématiques-Physique",
      detail: "Admission en école d'ingénieurs sur concours GEI",
      place: "Versailles",
      dates: "09/2019 – 08/2022",
    },
  ],

  experiences: [
    {
      company: "Pretto",
      url: "https://www.pretto.fr/",
      kind: "Fintech immobilier · Série C · +1 Md€ financés/an",
      role: "Operations & Data Analyst",
      type: "Stage de 6 mois",
      place: "Paris",
      dates: "03/2026 – 08/2026",
      highlight: "Agent IA en prod, en équipe",
      summary: "Suivi du pôle bancaire par la data, projets avec les équipes Sales, Produit, Tech et Data.",
      bullets: [
        "Pilotage de la performance du pôle bancaire via analyses data (SQL, BigQuery, Looker Studio, Metabase) et KPIs décisionnels, améliorant l'efficacité du pôle.",
        "Déploiement de projets stratégiques transverses avec Sales, Produit, Tech et Data.",
        "Automatisations no-code et tableaux de bord pour la restitution hebdomadaire présentée au COMEX.",
        "Création autonome d'une carte interactive de l'ancienneté des grilles bancaires par département, pitchée au CPO puis intégrée par l'équipe Data.",
        "Collaboration avec l'équipe Data pour la mise en production d'un agent IA analysant les messages courtiers pour suggérer des ajustements de taux et ouvrir des pull requests validées.",
      ],
      tags: ["SQL", "BigQuery", "Looker Studio", "Metabase", "No-code", "Agent IA"],
    },
    {
      company: "Sharpstone",
      url: "https://www.sharpstone.fr/",
      kind: "Fonds d'investissement pre-seed · Cabinet en financement de l'innovation",
      role: "Conseil en stratégie et financement",
      type: "Stage de 6 mois",
      place: "Paris",
      dates: "03/2025 – 08/2025",
      highlight: "20 startups accompagnées",
      summary: "Modèles financiers, business plans et dossiers de financement public.",
      bullets: [
        "Accompagnement de 20 startups early-stage dans la définition de leurs stratégies de croissance et de financement.",
        "Construction de modèles financiers et de prévisionnels pour appuyer des levées de fonds (plusieurs M€).",
        "Analyse de business plans et identification des leviers de création de valeur.",
        "Structuration de roadmaps opérationnelles adaptées aux attentes des investisseurs.",
        "Rédaction de dossiers de financement public (CIR, CII, BFT, BFTE) et préparation d'argumentaires investisseurs.",
      ],
      tags: ["Modélisation financière", "Levée de fonds", "CIR / CII", "Business plans"],
    },
    {
      company: "Forvis Mazars",
      url: "https://www.forvismazars.com/",
      kind: "Cabinet de conseil",
      role: "Auditeur financier",
      type: "Stage de 6 mois",
      place: "Paris",
      dates: "09/2024 – 02/2025",
      highlight: "8 dossiers consolidés",
      summary: "Comptes consolidés et revues analytiques.",
      bullets: [
        "Examen approfondi d'états financiers consolidés sur 8 dossiers et détection des risques majeurs.",
        "Évaluation des processus internes et compréhension opérationnelle de différents secteurs.",
        "Réalisation de revues analytiques et validation de la fiabilité des données comptables.",
      ],
      tags: ["États consolidés", "Revues analytiques"],
    },
    {
      company: "Junior Atlantique",
      url: "https://junior-atlantique.fr/",
      kind: "Junior entreprise d'IMT Atlantique",
      role: "Head of Sales",
      type: "Engagement associatif",
      place: "Brest",
      dates: "01/2023 – 01/2024",
      highlight: "+40 % de CA",
      summary: "Équipe de 8 personnes, 20 nouveaux clients, 60 k€ de CA géré.",
      bullets: [
        "Encadrement d'une équipe de 8 collaborateurs, suivi des KPI commerciaux et optimisation des performances.",
        "Gestion d'un CA global de 60 k€, dont 20 k€ générés directement, suivi du pipeline et du taux de conversion.",
        "Développement de partenariats stratégiques et acquisition de 20 nouveaux clients, générant une croissance de 40 % du CA.",
      ],
      tags: ["Management", "Vente B2B", "Pipeline", "Partenariats"],
    },
  ],

  projects: [
    {
      name: "AST Inge",
      url: "https://astinge.fr/",
      status: "EN COURS",
      role: "Fondateur",
      pitch: "Plateforme d'entraînement aux concours d'écoles d'ingénieurs.",
      body: "QCM, annales et examens blancs chronométrés, avec génération de CV et de lettres de motivation par IA. Incubé et accéléré à l'ESSEC.",
      stats: [
        ["250+", "élèves"],
        ["ESSEC", "incubée et accélérée"],
      ],
      tags: ["EdTech", "IA", "Incubé ESSEC"],
    },
    {
      name: "Vérif'Pol",
      url: "https://github.com/Pierreafeu181/Hackathon_factcheck-politique",
      status: "HACKATHON",
      role: "Projet d'équipe · 3 heures",
      pitch: "Fact-checking des affirmations politiques, comparées aux données officielles.",
      body: "Une extension Chrome repère les chiffres avancés dans une vidéo, un article ou un podcast, les compare aux séries INSEE et DARES, puis affiche un verdict sourcé. Le LLM extrait et rédige, le code tranche.",
      stats: [["10/10", "benchmark interne"]],
      tags: ["Hackathon", "IA", "Open data", "GitHub"],
    },
  ],

  skills: {
    langues: ["Français (langue natale)", "Anglais (C1) · IELTS 7/9", "Espagnol (B2)"],
    outils: ["Python", "SQL", "Ruby", "Power BI", "Notion", "Cursor", "Claude Code", "Dust", "Semrush", "Zapier", "Pack Office"],
    interets: ["Entrepreneuriat", "Sport", "Sciences", "Voyages", "Cuisine"],
  },
};
