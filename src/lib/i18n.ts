export type Lang = 'en' | 'nl'

type ServiceItems = Record<string, { name: string; fallback: string }>

interface Translations {
  nav: { about: string; services: string; ourWork: string; projects: string; contact: string; reviews: string; contactUs: string; infohub: string }
  hero: { tag: string; h1a: string; h1b: string; h1c: string; desc: string; seeWork: string; getQuote: string; statProjects: string; statYears: string; statSatisfaction: string; badge: string; trustBadge: string; headlineA: string; headlineB: string; sub: string; quoteCta: string; processCta: string; whatsappCta: string }
  ticker: Array<{ label: string; accent: boolean }>
  services: { tag: string; heading: string; headingTeal: string; learnMore: string; items: ServiceItems }
  about: { tag: string; heading: string; headingPre: string; headingTeal: string; quals: string[]; yearsLabel: string[]; projectsLabel: string[] }
  process: { tag: string; heading: string; headingTeal: string; steps: Array<{ num: string; title: string; desc: string }> }
  werkwijze: {
    headingA: string
    headingB: string
    headingAccent: string
    sub: string
    steps: Array<{ step: string; title: string; icon: 'send' | 'chat' | 'cal' | 'tool' }>
  }
  benefits: {
    headingA: string
    headingAccent: string
    headingB: string
    sub: string
    items: Array<{ icon: 'clock' | 'phone' | 'shield' | 'timer'; title: string; text: string }>
  }
  gallery: { tag: string; heading: string; viewAll: string; specialtyLabel: string; specialtyText: string; ctaLabel: string }
  projectsPage: {
    tag: string
    heading: string
    headingTeal: string
    empty: string
    backToHome: string
    viewProject: string
    images: string
    allProjects: string
  }
  testimonials: { tag: string; heading: string; headingTeal: string; sub: string }
  overOns: { headingA: string; headingAccent: string; headingB: string; principles: Array<{ title: string; text: string }> }
  faq: { heading: string; items: Array<{ q: string; a: string }> }
  contact: { tag: string; h1: string; h2: string; h3: string; labels: Record<string, string> }
  contactCards: {
    quote: string
    heading: string
    sub: string
    cards: Array<{ icon: 'wa' | 'phone' | 'doc' | 'mail'; title: string; text: string; btn: string }>
  }
  contactForm: { nameLbl: string; namePh: string; phoneLbl: string; phonePh: string; emailLbl: string; emailPh: string; serviceLbl: string; servicePh: string; messageLbl: string; messagePh: string; send: string; sending: string; successTitle: string; successMsg: string }
  footer: { links: Array<{ label: string; href: string }>; pagesLabel: string; copy: string }
  chat: {
    tag: string
    heading: string
    headingTeal: string
    sub: string
    cta: string
    senderName: string
    bubbles: Array<{ variant: 'note' | 'msg'; side: 'left' | 'right'; icon?: 'doc' | 'wa' | 'cal'; title?: string; text: string }>
  }
}

export const t: Record<Lang, Translations> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      ourWork: 'Our Work',
      projects: 'Projects',
      contact: 'Contact',
      reviews: 'Reviews',
      contactUs: 'Contact Us',
      infohub: 'Infohub',
    },
    hero: {
      tag: 'Renovation & Decoration Specialists',
      h1a: 'We Build',
      h1b: 'Spaces',
      h1c: 'That Last.',
      desc: 'Gypsum work, interior decoration, painting, and full house restoration — delivered with craftsmanship that speaks for itself.',
      seeWork: 'See Our Work',
      getQuote: 'Get a Quote',
      statProjects: 'Projects Done',
      statYears: 'Years Active',
      statSatisfaction: 'Satisfaction',
      badge: 'Premium Renovation Work',
      trustBadge:  'Over 200 projects completed across the Netherlands',
      headlineA:   'Flawless plastering.',
      headlineB:   'Clear agreements.',
      sub:         'With every quote you know exactly where you stand — price, planning and approach, all clearly on the table.',
      quoteCta:    'Request a quote',
      processCta:  'Our process',
      whatsappCta: 'Urgent job? Contact us directly on WhatsApp',
    },
    ticker: [
      { label: 'Gypsum Work',        accent: true  },
      { label: 'Interior Decoration', accent: false },
      { label: 'Painting',            accent: true  },
      { label: 'House Restoration',   accent: false },
      { label: 'Ceiling Plaster',     accent: true  },
      { label: 'Wall Finishing',      accent: false },
      { label: 'Full Renovation',     accent: true  },
      { label: 'Quality Guaranteed',  accent: false },
    ],
    services: {
      tag: 'What We Do',
      heading: 'Our',
      headingTeal: 'Services',
      learnMore: 'Learn More →',
      items: {
        service_bouw: { name: 'Building & Construction', fallback: 'We do not just build walls; we realize your ambitions. We execute and manage construction projects of all kinds (residential, commercial, and industrial), adhering to the highest international technical standards. We combine the latest technologies with the best materials to guarantee durability and long life.' },
        service_afwerking: { name: 'Finishing & Decoration', fallback: 'We give spaces life and identity. We transform empty spaces into vibrant works of art through carefully crafted interior and exterior finishes. We pay attention to the smallest details to offer you spaces that combine luxury, comfort, and functionality.' },
      },
    },
    about: {
      tag: 'About LAMAR',
      heading: "We Don't Just Renovate.",
      headingPre: 'We',
      headingTeal: 'Transform.',
      quals: ['Gypsum & Plaster', 'Interior Decoration', 'Painting & Finishing', 'House Restoration', 'On-Time Delivery', 'Quality Guaranteed'],
      yearsLabel: ['Years of', 'Experience'],
      projectsLabel: ['Projects', 'Completed'],
    },
    process: {
      tag: 'Our Approach',
      heading: 'How We',
      headingTeal: 'Work',
      steps: [
        { num: '01', title: 'Free Consultation', desc: 'We visit your space, listen to your vision, and assess exactly what needs to be done — no obligation, no pressure.' },
        { num: '02', title: 'Clear Quote',        desc: 'You receive a detailed, transparent quote within 48 hours. No hidden costs, no surprises — just an honest breakdown of the work.' },
        { num: '03', title: 'We Get to Work',     desc: 'Our team arrives on schedule, works cleanly and efficiently, and keeps you informed throughout every stage of the project.' },
        { num: '04', title: 'Final Handover',     desc: "We do a walkthrough together, make sure everything meets your expectations, and only leave when you're fully satisfied." },
      ],
    },
    werkwijze: {
      headingA: 'A fresh approach',
      headingB: 'Old-school',
      headingAccent: 'craftsmanship',
      sub: 'This is how we work — clear, skilled and without detours.',
      steps: [
        { step: 'Step 1', title: 'Quote request',       icon: 'send' },
        { step: 'Step 2', title: 'Intake conversation', icon: 'chat' },
        { step: 'Step 3', title: 'Scheduling',          icon: 'cal'  },
        { step: 'Step 4', title: 'Execution',           icon: 'tool' },
      ],
    },
    benefits: {
      headingA: 'Why choose',
      headingAccent: 'LAMAR',
      headingB: 'Stukadoor en Onderhoud',
      sub: "Because half-done work isn't in our vocabulary. We deliver craftsmanship you can build on.",
      items: [
        { icon: 'clock',  title: 'Sorted in no time', text: 'In minutes you know exactly where you stand — clear, no fine print.' },
        { icon: 'phone',  title: 'Always close by',   text: 'You talk to real people. No phone menus.' },
        { icon: 'shield', title: 'Peace of mind',     text: 'We stand behind every project. Guaranteed, because trust is built.' },
        { icon: 'timer',  title: 'Rush job?',         text: 'We move fast — even when it had to be done yesterday.' },
      ],
    },
    gallery: {
      tag: 'Portfolio',
      heading: 'Our Work',
      viewAll: 'View All Projects →',
      specialtyLabel: 'Our Specialty',
      specialtyText: 'Precision Gypsum & Bespoke Decoration',
      ctaLabel: 'Ready to start your project?',
    },
    projectsPage: {
      tag: 'Our Portfolio',
      heading: 'Completed',
      headingTeal: 'Projects',
      empty: 'No projects yet. Check back soon.',
      backToHome: '← Back to Home',
      viewProject: 'View Project',
      images: 'photos',
      allProjects: '← All Projects',
    },
    testimonials: {
      tag: 'Client Reviews',
      heading: 'What Our',
      headingTeal: 'Clients Say',
      sub: 'We do more than finish walls — we build trust. You hear it from our clients across the Netherlands.',
    },
    overOns: {
      headingA: 'This is who',
      headingAccent: 'we',
      headingB: 'are',
      principles: [
        { title: 'Walls with character', text: "We don't just finish smooth — we give every space character." },
        { title: 'Craftsmanship that connects', text: 'Layer by layer, hand by hand, we build quality together.' },
        { title: 'An eye for perfection', text: "We do what we're truly good at, and you see it in the detail." },
        { title: 'Quality speaks for itself', text: 'No empty promises — just a sharp, lasting result.' },
      ],
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        { q: 'How can I request a service from you?', a: 'We aim to provide ultimate comfort to our clients. You can easily request our services by contacting our customer support via direct call or WhatsApp.' },
        { q: 'Where does the company work and what is the scope of its projects?', a: 'Currently we operate in the Netherlands, and we will begin our expansion to other European countries in the near future.' },
        { q: 'Do you provide full supervision on projects?', a: 'Yes, all projects are executed under the supervision of specialized teams to guarantee the highest standards of quality and precision.' },
        { q: 'How can I contact you and request a quote?', a: 'You can contact us via phone, email, or WhatsApp.' },
        { q: 'Do you offer innovative design solutions that suit client needs?', a: 'Yes, we rely on a specialized team that provides modern and integrated designs that combine functional beauty with the client\'s requirements.' },
        { q: 'Do you observe safety standards during execution?', a: 'We apply safety systems and adhere to all regulations and standards to guarantee a safe working environment and high execution quality.' },
        { q: 'Does the company offer guarantees on the executed works?', a: 'Yes, we provide certified guarantees on executed works depending on the project type and nature, covering execution quality and structural safety, along with a full post-delivery service.' },
        { q: 'How are disputes or observations handled during execution?', a: 'We focus on transparency and cooperation. Observations are studied professionally, discussed with the client, and addressed with the best solutions to ensure complete satisfaction.' },
      ],
    },
    contactCards: {
      quote: 'Plaster is not just a coat. It is a signature — and we set it with care.',
      heading: 'What can we do for you today?',
      sub: 'Trust starts with contact — let us take that first step together.',
      cards: [
        { icon: 'wa',    title: 'WhatsApp',       text: 'Quick chat? Send us a message. We reply faster than the plaster dries.', btn: 'Chat now' },
        { icon: 'phone', title: 'Call',            text: 'Prefer a personal touch? Pick up the phone, we are happy to help.',       btn: 'Call us'  },
        { icon: 'doc',   title: 'Request a quote', text: 'Want clarity? In a few minutes you know exactly where you stand.',         btn: 'Request'  },
        { icon: 'mail',  title: 'Mail',            text: 'Prefer to type? Send us a message by email, we reply quickly.',           btn: 'Mail now' },
      ],
    },
    contact: {
      tag: 'Get in Touch',
      h1: "LET'S BUILD",
      h2: 'SOMETHING',
      h3: 'GREAT.',
      labels: {
        contact_phone:    'Phone',
        contact_whatsapp: 'WhatsApp',
        contact_email:    'Email',
        contact_location: 'Location',
        contact_hours:    'Working Hours',
      },
    },
    contactForm: {
      nameLbl: 'Your Name',        namePh: 'Jan de Vries',
      phoneLbl: 'Phone Number',    phonePh: '+31 00 000 0000',
      emailLbl: 'Email Address',   emailPh: 'jan@example.com',
      serviceLbl: 'Service Needed', servicePh: 'Gypsum, Decoration, Painting…',
      messageLbl: 'Tell Us About Your Project', messagePh: 'Describe your space and what you have in mind…',
      send: 'Send Message', sending: 'Sending…',
      successTitle: 'Message Sent!',
      successMsg: "Thank you for reaching out. We'll be in touch within 24 hours.",
    },
    footer: {
      links: [
        { label: 'Home',     href: '/'         },
        { label: 'About',    href: '/over-ons' },
        { label: 'Infohub',  href: '/infohub'  },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact',  href: '/contact'  },
      ],
      pagesLabel: 'Pages',
      copy: '© 2025 LAMAR Renovation & Decoration. All rights reserved.',
    },
    chat: {
      tag: 'How it works',
      heading: 'All arranged via',
      headingTeal: 'WhatsApp',
      sub: 'No complicated forms or long waits. Send us a message, get a clear quote, and we schedule the job neatly.',
      cta: 'Start on WhatsApp',
      senderName: 'LAMAR Stukadoor',
      bubbles: [
        { variant: 'note', side: 'left',  icon: 'doc', title: 'Quote request',    text: 'Your quote, straight in the app' },
        { variant: 'msg',  side: 'left',                                           text: 'Here is your quote, attached 📎' },
        { variant: 'msg',  side: 'left',                                           text: 'Quote 2026-142' },
        { variant: 'note', side: 'left',  icon: 'cal', title: 'Planning',         text: 'Which date suits you?' },
        { variant: 'msg',  side: 'left',                                           text: 'December 12th is booked! ✅' },
        { variant: 'note', side: 'right', icon: 'wa',  title: 'WhatsApp contact', text: 'Updates, planning and questions?' },
        { variant: 'msg',  side: 'right',                                          text: "We're on our way! 🚐" },
        { variant: 'msg',  side: 'right',                                          text: 'You can come by for the handover 🔑' },
      ],
    },
  },

  nl: {
    nav: {
      about: 'Over ons',
      services: 'Diensten',
      ourWork: 'Ons werk',
      projects: 'Projecten',
      contact: 'Contact',
      reviews: 'Reviews',
      contactUs: 'Neem contact op',
      infohub: 'Infohub',
    },
    hero: {
      tag: 'Renovatie & Decoratie Specialisten',
      h1a: 'Wij bouwen',
      h1b: 'ruimtes',
      h1c: 'die blijven.',
      desc: 'Gipswerk, interieurafwerking, schilderwerk en volledige woningrenovatie — geleverd met vakmanschap dat voor zich spreekt.',
      seeWork: 'Bekijk ons werk',
      getQuote: 'Offerte aanvragen',
      statProjects: 'Projecten',
      statYears: 'Jaar actief',
      statSatisfaction: 'Tevredenheid',
      badge: 'Vakkundig renovatiewerk',
      trustBadge:  'Meer dan 200 projecten voltooid in Nederland',
      headlineA:   'Strak stucwerk.',
      headlineB:   'Heldere afspraken.',
      sub:         'Bij elke offerte weet u precies waar u aan toe bent — prijs, planning en aanpak, allemaal helder op tafel.',
      quoteCta:    'Offerte aanvragen',
      processCta:  'Onze werkwijze',
      whatsappCta: 'Spoedklus? Direct contact via WhatsApp',
    },
    ticker: [
      { label: 'Gipswerk',               accent: true  },
      { label: 'Interieurafwerking',      accent: false },
      { label: 'Schilderwerk',            accent: true  },
      { label: 'Woningrenovatie',         accent: false },
      { label: 'Plafondstucwerk',         accent: true  },
      { label: 'Muurafwerking',           accent: false },
      { label: 'Volledige renovatie',     accent: true  },
      { label: 'Kwaliteit gegarandeerd',  accent: false },
    ],
    services: {
      tag: 'Wat wij doen',
      heading: 'Onze',
      headingTeal: 'Diensten',
      learnMore: 'Meer info →',
      items: {
        service_bouw: { name: 'Bouw en constructie', fallback: 'Wij bouwen niet zomaar muren; wij realiseren uw ambities. Wij realiseren en beheren bouwprojecten van alle soorten (residentieel, commercieel en industrieel), waarbij wij ons houden aan de hoogste internationale technische normen. Wij combineren de nieuwste bouwtechnologieën met de beste materialen om de duurzaamheid en lange levensduur van onze projecten te garanderen, zodat ze generaties lang meegaan.' },
        service_afwerking: { name: 'Afwerking en decoratie', fallback: 'Wij geven ruimtes leven en identiteit. Wij transformeren lege ruimtes in levendige kunstwerken door middel van zorgvuldig vervaardigde interieur- en exterieurafwerkingen. Wij besteden aandacht aan de kleinste details en gebruiken de beste materialen om u ruimtes te bieden die luxe, comfort en functionaliteit combineren en uw aspiraties waarmaken.' },
      },
    },
    about: {
      tag: 'Over LAMAR',
      heading: 'Wij renoveren niet alleen.',
      headingPre: 'Wij',
      headingTeal: 'Transformeren.',
      quals: ['Gips & stucwerk', 'Interieurafwerking', 'Schilderwerk & afwerking', 'Woningrenovatie', 'Op tijd geleverd', 'Kwaliteit gegarandeerd'],
      yearsLabel: ['Jaar', 'Ervaring'],
      projectsLabel: ['Projecten', 'Voltooid'],
    },
    process: {
      tag: 'Onze aanpak',
      heading: 'Hoe wij',
      headingTeal: 'Werken',
      steps: [
        { num: '01', title: 'Gratis kennismaking', desc: 'We komen langs, luisteren naar uw wensen en kijken samen wat er nodig is — geheel vrijblijvend en zonder verplichtingen.' },
        { num: '02', title: 'Duidelijke offerte',  desc: 'Binnen 48 uur ontvangt u een heldere, gedetailleerde offerte. Geen verborgen kosten, geen verrassingen — gewoon een eerlijk overzicht van het werk.' },
        { num: '03', title: 'Aan de slag',         desc: 'Ons team werkt op de afgesproken tijd, ruimt netjes op na elk werkdag en houdt u tijdens het hele project goed op de hoogte.' },
        { num: '04', title: 'Oplevering',          desc: 'We lopen samen het werk na, zorgen dat alles naar wens is, en vertrekken pas als u volledig tevreden bent met het resultaat.' },
      ],
    },
    werkwijze: {
      headingA: 'Frisse aanpak',
      headingB: 'Ouderwets',
      headingAccent: 'vakmanschap',
      sub: 'Zo gaan wij te werk — helder, vakkundig en zonder omwegen.',
      steps: [
        { step: 'Stap 1', title: 'Offerte aanvraag', icon: 'send' },
        { step: 'Stap 2', title: 'Intakegesprek',    icon: 'chat' },
        { step: 'Stap 3', title: 'Inplannen',         icon: 'cal'  },
        { step: 'Stap 4', title: 'Uitvoering',        icon: 'tool' },
      ],
    },
    benefits: {
      headingA: 'Daarom',
      headingAccent: 'LAMAR',
      headingB: 'Stukadoor en Onderhoud',
      sub: 'Omdat half werk niet in ons woordenboek staat. Wij leveren vakwerk waar u op kunt bouwen.',
      items: [
        { icon: 'clock',  title: 'Binnen no time geregeld', text: 'In een paar minuten weet u waar u aan toe bent — helder en zonder kleine lettertjes.' },
        { icon: 'phone',  title: 'Altijd dichtbij',         text: "U praat gewoon met échte mensen. Geen keuzemenu's." },
        { icon: 'shield', title: 'Zeker van uw zaak',       text: 'Wij staan achter elk project. Garantie, omdat vertrouwen gebouwd wordt.' },
        { icon: 'timer',  title: 'Haastklus?',              text: 'Wij schakelen snel — zelfs als het gisteren al klaar moest zijn.' },
      ],
    },
    gallery: {
      tag: 'Portfolio',
      heading: 'Ons werk',
      viewAll: 'Alle projecten bekijken →',
      specialtyLabel: 'Onze specialiteit',
      specialtyText: 'Nauwkeurig gipswerk & maatwerkdecoratie',
      ctaLabel: 'Klaar om uw project te starten?',
    },
    projectsPage: {
      tag: 'Ons portfolio',
      heading: 'Voltooide',
      headingTeal: 'Projecten',
      empty: 'Nog geen projecten. Kom snel terug.',
      backToHome: '← Terug naar home',
      viewProject: 'Bekijk project',
      images: "foto's",
      allProjects: '← Alle projecten',
    },
    testimonials: {
      tag: 'Klantbeoordelingen',
      heading: 'Wat onze',
      headingTeal: 'Klanten zeggen',
      sub: 'Wij doen meer dan muren afwerken — wij bouwen vertrouwen. Dat hoort u terug bij onze klanten door heel Nederland.',
    },
    overOns: {
      headingA: 'Dit is wie',
      headingAccent: 'wij',
      headingB: 'zijn',
      principles: [
        { title: 'Muren met karakter', text: 'Wij leveren niet zomaar strak werk — wij geven elke ruimte karakter.' },
        { title: 'Vakmanschap dat verbindt', text: 'Laag voor laag, hand voor hand bouwen wij samen aan kwaliteit.' },
        { title: 'Oog voor perfectie', text: 'Wij doen waar we echt goed in zijn, en dat ziet u terug in het detail.' },
        { title: 'Kwaliteit spreekt voor zich', text: 'Geen loze beloftes — alleen een strak en duurzaam resultaat.' },
      ],
    },
    contact: {
      tag: 'Neem contact op',
      h1: 'LATEN WE',
      h2: 'SAMEN IETS',
      h3: 'MOOIS BOUWEN.',
      labels: {
        contact_phone:    'Telefoon',
        contact_whatsapp: 'WhatsApp',
        contact_email:    'E-mail',
        contact_location: 'Locatie',
        contact_hours:    'Werktijden',
      },
    },
    contactForm: {
      nameLbl: 'Uw naam',            namePh: 'Jan de Vries',
      phoneLbl: 'Telefoonnummer',    phonePh: '+31 00 000 0000',
      emailLbl: 'E-mailadres',       emailPh: 'jan@voorbeeld.nl',
      serviceLbl: 'Gewenste dienst', servicePh: 'Gipswerk, decoratie, schilderwerk…',
      messageLbl: 'Vertel ons over uw project', messagePh: 'Beschrijf uw ruimte en wat u in gedachten heeft…',
      send: 'Bericht versturen', sending: 'Versturen…',
      successTitle: 'Bericht verzonden!',
      successMsg: 'Bedankt voor uw bericht. We nemen binnen 24 uur contact met u op.',
    },
    footer: {
      links: [
        { label: 'Home',      href: '/'         },
        { label: 'Over ons',  href: '/over-ons' },
        { label: 'Diensten',  href: '/#diensten' },
        { label: 'Projecten', href: '/projecten' },
        { label: 'Veelgestelde vragen', href: '/faq' },
        { label: 'Contact',   href: '/contact'  },
      ],
      pagesLabel: "Pagina's",
      copy: '© 2025 LAMAR Stukadoor en Onderhoud. Alle rechten voorbehouden.',
    },
    faq: {
      heading: 'Veel gestelde vragen',
      items: [
        { q: 'Hoe kan ik een dienst bij u aanvragen?', a: 'Wij streven naar maximaal comfort voor onze klanten. U kunt eenvoudig een dienst aanvragen via onze klantenservice via directe telefonische oproep of via WhatsApp.' },
        { q: 'Waar is het bedrijf actief en wat is het bereik van haar projecten?', a: 'Momenteel zijn wij actief in Nederland. We zullen onze uitbreiding naar andere Europese landen in de nabije toekomst starten.' },
        { q: 'Biedt u volledig toezicht op de projecten?', a: 'Ja, alle projecten worden uitgevoerd onder toezicht van gespecialiseerde teams om de hoogste kwaliteits- en precisienormen te garanderen.' },
        { q: 'Hoe kan ik contact met u opnemen en een offerte aanvragen?', a: 'U kunt contact met ons opnemen via telefoon, e-mail of WhatsApp.' },
        { q: 'Biedt u innovatieve ontwerpoplossingen die passen bij de behoeften van de klant?', a: 'Ja, we werken met een gespecialiseerd team dat moderne en geïntegreerde ontwerpen levert die functionele schoonheid combineren met de specifieke behoeften van de klant.' },
        { q: 'Houdt u rekening met veiligheidsnormen tijdens de uitvoering?', a: 'Ja, we passen veiligheidssystemen toe en houden ons aan alle voorschriften en normen om een veilige werkomgeving en een hoge uitvoeringskwaliteit te garanderen.' },
        { q: 'Biedt het bedrijf garantie op de uitgevoerde werkzaamheden?', a: 'Ja, wij bieden gecertificeerde garanties op de uitgevoerde werkzaamheden, afhankelijk van het type en de aard van het project. Dit omvat de kwaliteit van de uitvoering en de structurele veiligheid, inclusief een volledige service na oplevering.' },
        { q: 'Hoe wordt er omgegaan met eventuele opmerkingen of geschillen tijdens de uitvoering?', a: 'Wij hechten veel waarde aan transparantie en samenwerking. Opmerkingen worden professioneel geanalyseerd, met de klant besproken en opgelost met de beste oplossingen om volledige klanttevredenheid te garanderen.' },
      ],
    },
    contactCards: {
      quote: 'Stucwerk is geen laagje. Het is een handtekening — en wij zetten hem met zorg.',
      heading: 'Wat kunnen wij vandaag voor u doen?',
      sub: 'Vertrouwen begint bij contact — laten we die eerste stap samen zetten.',
      cards: [
        { icon: 'wa',    title: 'WhatsApp',        text: 'Snel schakelen? Stuur ons een appje. Wij reageren sneller dan de stuc droogt.',     btn: 'Chat nu'  },
        { icon: 'phone', title: 'Bellen',           text: 'Liever persoonlijk contact? Pak de telefoon, wij staan u graag te woord.',          btn: 'Bel ons'  },
        { icon: 'doc',   title: 'Offerte aanvraag', text: 'Zin in duidelijkheid? Binnen een paar minuten weet u waar u aan toe bent.',         btn: 'Vraag aan'},
        { icon: 'mail',  title: 'Mail',             text: 'Liever rustig typen? Stuur ons een bericht via mail, wij reageren snel.',           btn: 'Mail nu'  },
      ],
    },
    chat: {
      tag: 'Zo werkt het',
      heading: 'Alles geregeld via',
      headingTeal: 'WhatsApp',
      sub: 'Geen ingewikkelde formulieren of lang wachten. Stuur ons een bericht, ontvang een heldere offerte en wij plannen de klus netjes in.',
      cta: 'Start via WhatsApp',
      senderName: 'LAMAR Stukadoor',
      bubbles: [
        { variant: 'note', side: 'left',  icon: 'doc', title: 'Offerte aanvraag',  text: 'Uw offerte, direct in de app' },
        { variant: 'msg',  side: 'left',                                            text: 'Hierbij stuur ik u de offerte in de bijlage 📎' },
        { variant: 'msg',  side: 'left',                                            text: 'Offerte 2026-142' },
        { variant: 'note', side: 'left',  icon: 'cal', title: 'Planning',          text: 'Welke datum komt u uit?' },
        { variant: 'msg',  side: 'left',                                            text: '12 december staat genoteerd! ✅' },
        { variant: 'note', side: 'right', icon: 'wa',  title: 'WhatsApp contact',  text: 'Updates, planning en vragen?' },
        { variant: 'msg',  side: 'right',                                           text: 'We zijn onderweg! 🚐' },
        { variant: 'msg',  side: 'right',                                           text: 'U kunt langs komen voor de oplevering 🔑' },
      ],
    },
  },
}
