export type ServiceData = {
  slug: string;
  title: string;
  price: string;
  intro: string;
  whatIsIt: {
    title: string;
    text: string;
    image: string;
  };
  benefits: Array<{ title: string; desc: string }>;
  whyLamar: string[];
  gallery: string[];
  faq: Array<{ q: string; a: string }>;
};

export const servicesData: ServiceData[] = [
  {
    slug: 'sausklaar-stucwerk',
    title: 'Sausklaar Stucwerk',
    price: 'Vanaf €16 m²',
    intro: 'Een gestucte muur die geschikt is voor afwerking met verf heet sausklaar. Sausklaar stucwerk, ook wel bekend als glad stucwerk, zorgt voor een strakke en egale wand die uitstekend geschikt is voor verdere afwerking met verf.',
    whatIsIt: {
      title: 'Wat is Sausklaar Stucwerk?',
      text: 'Bij sausklaar stucwerk maken wij uw wand recht, na meermaals sponsen en afmessen krijgt u een gladde/strakke muur als eindresultaat. Uw sausklare muren zijn nu geschikt voor het handmatig laten rollen of het laten latex spuiten met muurverf in elke gewenste kleur. Sausklaar stucwerk is de meest populaire afwerking in Nederland.',
      image: '/images/Sausklaar-Stucwerk-1.webp'
    },
    benefits: [
      { title: 'Perfecte Ondergrond', desc: 'Ideale basis voor schilderwerk of latex spuiten.' },
      { title: 'Strak & Egaal', desc: 'Geen oneffenheden of zichtbare naden.' },
      { title: 'Meest Populair', desc: 'De populairste afwerking in Nederland.' },
      { title: 'Klaar voor Verf', desc: 'Direct geschikt voor elke gewenste muurverf.' }
    ],
    whyLamar: [
      'Jarenlange ervaring in hoogwaardig stucwerk.',
      'Gebruik van de beste en meest duurzame materialen.',
      'Persoonlijk advies en perfecte afwerking, elke keer weer.'
    ],
    gallery: [
      '/images/Sausklaar-Stucwerk-1.webp',
      '/images/goeiefoto1.jpg'
    ],
    faq: [
      { q: 'Hoelang duurt het drogen van sausklaar stucwerk?', a: 'Gemiddeld duurt dit 1 tot 2 weken, afhankelijk van de laagdikte en ventilatie.' },
      { q: 'Kan ik er direct overheen schilderen?', a: 'Nee, het stucwerk moet eerst goed droog zijn voordat u kunt schilderen. Dit duurt gemiddeld 1 tot 2 weken.' },
      { q: 'Wat is het verschil met dunpleister?', a: 'Sausklaar stucwerk is dikker en bedoeld om oneffen muren weer recht te maken, dunpleister is alleen voor gladde, nieuwbouw muren.' }
    ]
  },
  {
    slug: 'stucwerk',
    title: 'Stucwerk',
    price: 'Vanaf €16 m²',
    intro: 'Stucwerk is de perfecte basis voor een strak en naadloos interieur. Wij zorgen voor gladde muren en plafonds die klaar zijn voor elke gewenste afwerking.',
    whatIsIt: {
      title: 'Wat is stucwerk?',
      text: 'Stucwerk is het aanbrengen van een pleisterlaag op muren en plafonds. Dit kan dienen als onderlaag voor behang of verf, of als een decoratieve eindafwerking. Het zorgt voor een strakke, egale en duurzame basis voor uw interieur.',
      image: '/images/projects/424484019_758696049058698_5228169096728962049_nfull.jpg'
    },
    benefits: [
      { title: 'Naadloos Resultaat', desc: 'Geen zichtbare naden of oneffenheden.' },
      { title: 'Waardevermeerdering', desc: 'Een strak interieur verhoogt de waarde van uw woning.' },
      { title: 'Isolerend', desc: 'Stucwerk kan bijdragen aan brandveiligheid en isolatie.' },
      { title: 'Veelzijdig', desc: 'Geschikt voor vrijwel elke ondergrond en ruimte.' }
    ],
    whyLamar: [
      'Jarenlange ervaring in hoogwaardig stucwerk.',
      'Gebruik van de beste en meest duurzame materialen.',
      'Persoonlijk advies en perfecte afwerking, elke keer weer.'
    ],
    gallery: [
      '/images/projects/424484019_758696049058698_5228169096728962049_nfull.jpg',
      '/images/projects/430061772_333445143012904_9061525014604183814_nfull.jpg'
    ],
    faq: [
      { q: 'Hoelang duurt het drogen van stucwerk?', a: 'Gemiddeld duurt dit 1 tot 2 weken, afhankelijk van de laagdikte en ventilatie.' },
      { q: 'Is stucwerk geschikt voor badkamers?', a: 'Ja, we gebruiken hiervoor speciaal waterwerend stucwerk.' },
      { q: 'Wat is het verschil met dunpleister?', a: 'Stucwerk is dikker en bedoeld om oneffen muren weer recht te maken, dunpleister is alleen voor gladde, nieuwbouw muren.' }
    ]
  },
  {
    slug: 'dunpleister',
    title: 'Dunpleister',
    price: 'Vanaf €12 m²',
    intro: 'Dunpleister is de ideale en voordelige keuze voor nieuwbouwwoningen met behangklaar opgeleverde muren.',
    whatIsIt: {
      title: 'Wat is dunpleister?',
      text: 'Dunpleister is een dunne laag pleisterwerk die wordt aangebracht op relatief vlakke ondergronden zoals beton of gipsblokken in nieuwbouwwoningen. Omdat de laag erg dun is, droogt het snel en is het een efficiënte manier om muren sausklaar te maken.',
      image: '/images/projects/438829756_798925164965209_7740383433861504538_nfull.jpg'
    },
    benefits: [
      { title: 'Snel Drogen', desc: 'De dunne laag droogt in enkele dagen.' },
      { title: 'Kostenbesparend', desc: 'Minder materiaal en arbeid nodig dan traditioneel stucwerk.' },
      { title: 'Strakke Afwerking', desc: 'Perfect glad en klaar om te schilderen of spuiten.' },
      { title: 'Ideaal voor Nieuwbouw', desc: 'Speciaal ontwikkeld voor behangklare muren.' }
    ],
    whyLamar: [
      'Gespecialiseerd in nieuwbouwprojecten.',
      'Snel schakelen dankzij korte droogtijden.',
      'Garantie op een spiegelglad eindresultaat.'
    ],
    gallery: [
      '/images/projects/438829756_798925164965209_7740383433861504538_nfull.jpg',
      '/images/projects/409089609_870919337831295_3429288127286573085_nfull.jpg'
    ],
    faq: [
      { q: 'Kan dunpleister op alle muren?', a: 'Nee, het is alleen geschikt voor muren die al redelijk vlak zijn, zoals in nieuwbouwwoningen.' },
      { q: 'Hoelang moet dunpleister drogen?', a: 'Meestal tussen de 2 en 5 dagen.' },
      { q: 'Is het te combineren met latex spuiten?', a: 'Ja, dunpleisteren en vervolgens latex spuiten is de populairste combinatie voor nieuwbouw.' }
    ]
  },
  {
    slug: 'reparatiewerk',
    title: 'Reparatiewerk',
    price: 'Vanaf €250',
    intro: 'Heeft u scheuren of gaten in uw stucwerk? Wij herstellen uw muren en plafonds vakkundig zodat de schade onzichtbaar wordt.',
    whatIsIt: {
      title: 'Wat is reparatiewerk?',
      text: 'Bij reparatiewerk herstellen we beschadigingen zoals scheuren, gaten of loslatend stucwerk. Of het nu komt door waterschade, boren of zetting van het huis, wij zorgen dat de muur weer strak is en naadloos aansluit op de rest van de wand.',
      image: '/images/Reparatiewerk.webp'
    },
    benefits: [
      { title: 'Onzichtbaar Herstel', desc: 'Wij zorgen dat de reparatie naadloos overloopt in de bestaande muur.' },
      { title: 'Kleine en Grote Klussen', desc: 'Van een klein gaatje tot grote vochtplekken.' },
      { title: 'Snel Geholpen', desc: 'Reparaties kunnen vaak op korte termijn worden ingepland.' },
      { title: 'Voorkomt Erger', desc: 'Tijdig scheuren herstellen voorkomt dat het stucwerk verder loslaat.' }
    ],
    whyLamar: [
      'Vakkundige inspectie van de schade.',
      'Eerlijk advies over de beste oplossing.',
      'Gebruik van de juiste reparatiematerialen.'
    ],
    gallery: [
      '/images/Reparatiewerk.webp',
      '/images/projects/400003198_868406317927333_7803728622075592502_nfull.jpg'
    ],
    faq: [
      { q: 'Zijn de gerepareerde plekken na het schilderen nog zichtbaar?', a: 'Nee, wij zorgen voor een gladde en naadloze afwerking, zodat na het schilderen niets meer te zien is.' },
      { q: 'Komen jullie ook voor één klein scheurtje?', a: 'Ja, we hanteren wel een starttarief voor kleine klussen.' },
      { q: 'Repareren jullie ook waterschade?', a: 'Ja, zodra de lekkage verholpen is en de muur droog is, kunnen we dit herstellen.' }
    ]
  },
  {
    slug: 'schilderwerk',
    title: 'Schilderwerk',
    price: 'Vanaf €11 m²',
    intro: 'Kwalitatief schilderwerk voor binnen, voor een frisse en beschermde uitstraling van uw woning.',
    whatIsIt: {
      title: 'Wat is ons schilderwerk?',
      text: 'Binnenschilderwerk omvat het vakkundig schilderen van muren en plafonds met de roller of kwast. Wij gebruiken hoogwaardige verf die niet alleen mooi dekt, maar ook langdurig beschermt en afwasbaar is waar nodig.',
      image: '/images/Schilderwerk.png'
    },
    benefits: [
      { title: 'Direct Resultaat', desc: 'Een frisse nieuwe kleur transformeert direct de ruimte.' },
      { title: 'Hoge Kwaliteit Verf', desc: 'Wij gebruiken professionele, goed dekkende en duurzame verven.' },
      { title: 'Nauwkeurige Afwerking', desc: 'Strakke lijnen tussen muren en plafond.' },
      { title: 'Schoon Werk', desc: 'Alles wordt netjes afgeplakt en we laten de werkplek schoon achter.' }
    ],
    whyLamar: [
      'Zorgvuldige voorbereiding van de ondergrond.',
      'Ruime keuze in kleuren en glansgraden.',
      'Vaste prijsafspraken vooraf.'
    ],
    gallery: [
      '/images/Schilderwerk.png',
      '/images/projects/403986247_856225502664888_3712274798935327116_nfull.jpg'
    ],
    faq: [
      { q: 'Moet de ruimte leeg zijn?', a: 'Het liefst wel. Grote meubels kunnen we naar het midden schuiven en afdekken.' },
      { q: 'Welke merken verf gebruiken jullie?', a: 'Wij werken uitsluitend met professionele merken zoals Sigma en Sikkens.' },
      { q: 'Is schilderen over donkere kleuren mogelijk?', a: 'Ja, we gebruiken goed dekkende primers en meerdere lagen indien nodig.' }
    ]
  },
  {
    slug: 'latex-spuiten',
    title: 'Latex spuiten',
    price: 'Vanaf €11 m²',
    intro: 'De snelste en strakste manier om uw muren en plafonds van een nieuwe kleur te voorzien. Zonder banen of strepen.',
    whatIsIt: {
      title: 'Wat is latex spuiten?',
      text: 'Bij latex spuiten brengen we de verf aan met een professionele spuitmachine in plaats van een roller. Dit zorgt voor een 100% streeploos en egaal resultaat in een fractie van de tijd. Ideaal voor grote oppervlaktes en nieuwbouwwoningen.',
      image: '/images/worker-painting-wall-with-spray-gun-white-color.jpg'
    },
    benefits: [
      { title: 'Streeploos', desc: 'Gegarandeerd geen banen of aanzetten zichtbaar.' },
      { title: 'Tijdbesparend', desc: 'Grote oppervlaktes worden in één dag gespoten.' },
      { title: 'Egale Dekking', desc: 'Perfect dekkend, zelfs op lastige ondergronden.' },
      { title: 'Voordelig', desc: 'Door de snelheid is spuiten vaak goedkoper dan rollen.' }
    ],
    whyLamar: [
      'Uitgebreid afplakken zit bij de prijs inbegrepen.',
      'Gebruik van professionele spuitapparatuur.',
      'Ervaring met zowel bewoonde als onbewoonde woningen.'
    ],
    gallery: [
      '/images/worker-painting-wall-with-spray-gun-white-color.jpg',
      '/images/projects/409481422_1251288162206261_4668112953640508655_nfull.jpg'
    ],
    faq: [
      { q: 'Wat is het verschil met normaal schilderen?', a: 'Spuiten is sneller en geeft een streeploos, gladder resultaat. Wel vergt het meer afplakwerk.' },
      { q: 'Plakken jullie alles af?', a: 'Ja, wij plakken ramen, deuren, kozijnen en vloeren zorgvuldig af.' },
      { q: 'Is latex spuiten mogelijk in een bewoond huis?', a: 'Ja, al heeft een lege woning de voorkeur i.v.m. de ruimte en nevel.' }
    ]
  },
  {
    slug: 'schilderwerk-hout',
    title: 'Schilderwerk (hout)',
    price: 'Prijs per object',
    intro: 'Kozijnen, deuren, trappen en ander houtwerk perfect strak in de lak.',
    whatIsIt: {
      title: 'Wat houdt houtschilderwerk in?',
      text: 'Houtwerk in huis zoals deuren, kozijnen, plinten en trappen hebben veel te verduren. Wij schuren, repareren en lakken dit houtwerk zodat het weer jarenlang beschermd is en uw woning een verzorgde, luxe uitstraling krijgt.',
      image: '/images/Schilderwerk-hout-plp4mdw67wcc6hhyc6r04fx2qo9kksx471r8dzzlzk.jpg'
    },
    benefits: [
      { title: 'Lange Levensduur', desc: 'Goede lak beschermt hout tegen slijtage en vocht.' },
      { title: 'Luxe Uitstraling', desc: 'Strak gelakt houtwerk maakt uw interieur helemaal af.' },
      { title: 'Krasvast', desc: 'Wij gebruiken slijt- en krasvaste lakken voor deuren en trappen.' },
      { title: 'Gedetailleerd', desc: 'Zorgvuldig kitten en plamuren voor een perfect eindresultaat.' }
    ],
    whyLamar: [
      'Grondige voorbereiding: schuren, ontvetten, plamuren.',
      'Gebruik van de beste krasvaste watergedragen lakken.',
      'Oog voor detail, zelfs bij lastige hoekjes en randen.'
    ],
    gallery: [
      '/images/Schilderwerk-hout-plp4mdw67wcc6hhyc6r04fx2qo9kksx471r8dzzlzk.jpg'
    ],
    faq: [
      { q: 'Gebruiken jullie verf op waterbasis?', a: 'Ja, voor binnenschilderwerk zijn wij verplicht en gebruiken we lakken op waterbasis. Deze vergelen niet en ruiken amper.' },
      { q: 'Moet ik zelf deuren demonteren?', a: 'Nee, wij halen deuren eruit indien nodig en monteren ze na afloop weer af.' },
      { q: 'Lakken jullie ook trappen?', a: 'Jazeker, we gebruiken hiervoor speciale, extreem slijtvaste trappenlak.' }
    ]
  }
];
