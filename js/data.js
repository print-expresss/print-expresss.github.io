// ============================================
// ÎNTRERUPĂTOARE PENTRU SECȚIUNI
// ============================================
const COMING_SOON_SERVICES = false;
const COMING_SOON_PRODUCTS = false; // Am setat pe false ca să apară produsele!

// ============================================
// DATELE SITE-ULUI - PrintExpress
// ============================================

const SERVICE_CATEGORIES = [
    { 
        id: "printari", 
        title: "Printări", 
        shortDesc: "Listă de prețuri pentru printări (A4, A3, color etc).", 
        color: "gradient-1",
        image: "images/printari-banner.jpg"
    },
    { 
        id: "obiecte-personalizate", 
        title: "Obiecte personalizate", 
        shortDesc: "Brelocuri, căni, rame și cutii cu designul tău.", 
        color: "gradient-2",
        image: "images/obiecte-banner.jpg"
    },
    { 
        id: "cadouri", 
        title: "Cadouri și ambalare", 
        shortDesc: "Transformăm produsele în cadouri memorabile.", 
        color: "gradient-3",
        image: "images/cadouri-banner.jpg"
    }
];

const SERVICES = [
    {
        id: "printari", categoryId: "printari",
        title: "Printări",
        shortDesc: "Listă de prețuri pentru printări.",
        longDesc: "Printăm documente, afișe, planșe și materiale promoționale la cele mai bune prețuri. Calitate superioară, livrare rapidă.",
        price: "Vezi lista", duration: "Variabil",
        features: ["Print color și alb-negru", "Formate A4, A3, A2", "Hârtie premium", "Reduceri pentru volume mari"],
        gallery: ["p1", "p2", "p3"]
    },
    {
        id: "obiecte-personalizate", categoryId: "obiecte-personalizate",
        title: "Obiecte personalizate",
        shortDesc: "Creează-ți propriul cadou.",
        longDesc: "Alege din gama noastră de obiecte personalizabile: brelocuri, căni, rame foto și cutii cadou. Încarcă imaginea ta și noi ne ocupăm de restul.",
        price: "De la 15 lei", duration: "1-3 zile",
        features: ["Brelocuri metalice și acrilice", "Căni ceramice", "Rame foto personalizate", "Cutii cadou elegante"],
        gallery: ["op1", "op2", "op3"]
    },
    {
        id: "cadouri", categoryId: "cadouri",
        title: "Cadouri și ambalare",
        shortDesc: "Ambalăm produsele cu hârtie de calitate.",
        longDesc: "Transformăm produsul tău într-un cadou memorabil. Hârtie premium, panglici și card personalizat.",
        price: "Gratuit la comenzi peste 100 lei", duration: "10-15 minute",
        features: ["Hârtie premium", "Panglici decorative", "Card personalizat", "Pentru orice ocazie"],
        gallery: ["cadou-1", "cadou-2", "cadou-3"]
    }
];

// ============================================
// CATEGORII PRODUSE (Structură Nouă)
// ============================================
const PRODUCT_CATEGORIES = [
    { id: "papetarie", title: "Papetărie", shortDesc: "Caiete, agende, carnete, blocnotesuri.", color: "gradient-1" },
    { id: "instrumente-scris", title: "Instrumente de scris", shortDesc: "Pixuri, stilouri, creioane, markere.", color: "gradient-2" },
    { id: "rechizite", title: "Rechizite școlare", shortDesc: "Caiete, instrumente geometrice, accesorii.", color: "gradient-3" },
    { id: "accesorii-birou", title: "Accesorii birou", shortDesc: "Suporturi, organizatoare, accesorii.", color: "gradient-4" },
    { id: "hartie", title: "Hârtie și produse conexe", shortDesc: "Hârtie copiator, post-it, blocnotesuri.", color: "gradient-5" }
];

// ============================================
// PRODUSE INDIVIDUALE (Bazat pe lista ta)
// ============================================
const PRODUCTS = [
    // --- CAIETE ---
    {
        id: "caiet-a4-48-file",
        categoryId: "papetarie",
        title: "Caiet A4 48 file",
        shortDesc: "Caiet A4, 48 file, dictando.",
        longDesc: "Caiet A4 cu 48 file, tip dictando. Coperta rezistentă, file albe de calitate superioară.",
        price: "3.50 lei",
        author: "PrintExpress",
        features: [
            "Format: A4",
            "Număr file: 48",
            "Tip: Dictando",
            "Gramaj hârtie: 80g/mp",
            "Copertă: Carton",
            "Utilizare: Școală, birou, notițe"
        ],
        gallery: ["caiet1", "caiet2", "caiet3"]
    },
    {
        id: "caiet-a5-48-file",
        categoryId: "papetarie",
        title: "Caiet A5 48 file",
        shortDesc: "Caiet A5, 48 file, dictando.",
        longDesc: "Caiet A5 cu 48 file, tip dictando. Ideal pentru notițe rapide.",
        price: "2.00 lei",
        author: "PrintExpress",
        features: [
            "Format: A5",
            "Număr file: 48",
            "Tip: Dictando",
            "Gramaj hârtie: 80g/mp",
            "Copertă: Carton",
            "Utilizare: Notițe, școală"
        ],
        gallery: ["caiet2", "caiet2", "caiet3"]
    },
    {
        id: "caiet-a5-80-file",
        categoryId: "papetarie",
        title: "Caiet A5 80 file",
        shortDesc: "Caiet A5, 80 file, dictando.",
        longDesc: "Caiet A5 cu 80 file, tip dictando. Mai multe pagini pentru mai multe notițe.",
        price: "2.50 lei",
        author: "PrintExpress",
        features: [
            "Format: A5",
            "Număr file: 80",
            "Tip: Dictando",
            "Gramaj hârtie: 80g/mp",
            "Copertă: Carton",
            "Utilizare: Școală, birou"
        ],
        gallery: ["caiet3", "caiet2", "caiet3"]
    },
    {
        id: "caiet-24-file",
        categoryId: "papetarie",
        title: "Caiet 24 file",
        shortDesc: "Caiet mic, 24 file, dictando.",
        longDesc: "Caiet mic, 24 file, tip dictando. Ideal pentru notițe scurte.",
        price: "1.00 lei",
        author: "PrintExpress",
        features: [
            "Format: Mic (A6)",
            "Număr file: 24",
            "Tip: Dictando",
            "Gramaj hârtie: 80g/mp",
            "Copertă: Carton",
            "Utilizare: Notițe rapide"
        ],
        gallery: ["caiet1", "caiet1", "caiet1"]
    },
    {
        id: "caiet-a4-80-file",
        categoryId: "papetarie",
        title: "Caiet A4 80 file",
        shortDesc: "Caiet A4, 80 file, matematică.",
        longDesc: "Caiet A4, 80 file, tip matematică. Ideal pentru exerciții și calcule.",
        price: "5.50 lei",
        author: "PrintExpress",
        features: [
            "Format: A4",
            "Număr file: 80",
            "Tip: Matematică (pătrățele)",
            "Gramaj hârtie: 80g/mp",
            "Copertă: Carton",
            "Utilizare: Matematică, științe exacte"
        ],
        gallery: ["caiet4", "caiet4", "caiet4"]
    },

    // --- INSTRUMENTE DE SCRIS ---
    {
        id: "pix-albastru",
        categoryId: "instrumente-scris",
        title: "Pix albastru",
        shortDesc: "Pix cu cerneală albastră, vârf 0.7mm.",
        longDesc: "Pix albastru cu cerneală fluidă, vârf de 0.7mm. Scriere fină și curată.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: [
            "Culoare: Albastru",
            "Vârf: 0.7mm",
            "Tip cerneală: Lichidă",
            "Brand: Diverse",
            "Utilizare: Scris zilnic"
        ],
        gallery: ["pix1", "pix2", "pix3"]
    },
    {
        id: "pix-rosu",
        categoryId: "instrumente-scris",
        title: "Pix roșu",
        shortDesc: "Pix cu cerneală roșie, vârf 0.7mm.",
        longDesc: "Pix roșu cu cerneală fluidă, vârf de 0.7mm. Ideal pentru corecturi.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: [
            "Culoare: Roșu",
            "Vârf: 0.7mm",
            "Tip cerneală: Lichidă",
            "Brand: Diverse",
            "Utilizare: Corecturi, notițe"
        ],
        gallery: ["pix2", "pix2", "pix2"]
    },
    {
        id: "stilou",
        categoryId: "instrumente-scris",
        title: "Stilou",
        shortDesc: "Stilou elegant, pentru scris rafinat.",
        longDesc: "Stilou din metal, cu design elegant. Ideal pentru semnături și cadouri.",
        price: "35.00 lei",
        author: "PrintExpress",
        features: [
            "Material: Metal",
            "Culoare: Argintiu",
            "Tip: Cu cerneală",
            "Brand: Premium",
            "Utilizare: Cadou, semnături"
        ],
        gallery: ["stilou1", "stilou2", "stilou3"]
    },
    {
        id: "marker-tabla",
        categoryId: "instrumente-scris",
        title: "Marker pentru tablă",
        shortDesc: "Marker pentru tablă, vârf rotund.",
        longDesc: "Marker pentru tablă, cu cerneală ștergabilă. Vârf rotund de 2mm.",
        price: "4.50 lei",
        author: "PrintExpress",
        features: [
            "Culoare: Negru/Albastru",
            "Vârf: Rotund 2mm",
            "Tip cerneală: Ștergabilă",
            "Brand: Diverse",
            "Utilizare: Tablă albă"
        ],
        gallery: ["marker1", "marker2", "marker3"]
    },

    // --- RECHIZITE ---
    {
        id: "set-rechizite-primar",
        categoryId: "rechizite",
        title: "Set rechizite ciclu primar",
        shortDesc: "Set complet pentru clasele I-IV.",
        longDesc: "Set complet de rechizite pentru elevii din ciclul primar: caiete, pixuri, creioane, culori, riglă, gumă și alte materiale.",
        price: "89.00 lei",
        author: "PrintExpress",
        features: [
            "Conținut: 20+ piese",
            "Include: Caiete, pixuri, creioane",
            "Include: Culori, riglă, gumă",
            "Ciclu: Primar (I-IV)",
            "Ambalaj: Cutie"
        ],
        gallery: ["set1", "set2", "set3"]
    },
    {
        id: "set-rechizite-gimnaziu",
        categoryId: "rechizite",
        title: "Set rechizite gimnaziu",
        shortDesc: "Set complet pentru clasele V-VIII.",
        longDesc: "Set de rechizite pentru gimnaziu: caiete specializate, instrumente geometrice, markere și materiale pentru toate materiile.",
        price: "129.00 lei",
        author: "PrintExpress",
        features: [
            "Conținut: 25+ piese",
            "Include: Caiete specializate",
            "Include: Instrumente geometrice",
            "Ciclu: Gimnaziu (V-VIII)",
            "Ambalaj: Cutie"
        ],
        gallery: ["set2", "set2", "set2"]
    },

    // --- ACCESORII BIROU ---
    {
        id: "suport-pixuri",
        categoryId: "accesorii-birou",
        title: "Suport pixuri",
        shortDesc: "Suport pentru pixuri și creioane.",
        longDesc: "Suport din metal pentru pixuri și creioane. Design elegant, ideal pentru birou.",
        price: "15.00 lei",
        author: "PrintExpress",
        features: [
            "Material: Metal",
            "Culoare: Negru",
            "Capacitate: 10+ pixuri",
            "Design: Elegant",
            "Utilizare: Birou"
        ],
        gallery: ["suport1", "suport2", "suport3"]
    },
    {
        id: "agenda-2024",
        categoryId: "accesorii-birou",
        title: "Agendă 2024",
        shortDesc: "Agendă de birou pentru anul 2024.",
        longDesc: "Agendă de birou cu coperți premium, pentru anul 2024. Include calendar și pagini pentru notițe.",
        price: "25.00 lei",
        author: "PrintExpress",
        features: [
            "An: 2024",
            "Format: A5",
            "Coperți: Piele ecologică",
            "Pagini: 200+",
            "Utilizare: Birou, organizare"
        ],
        gallery: ["agenda1", "agenda2", "agenda3"]
    },

    // --- HÂRTIE ---
    {
        id: "hartie-a4",
        categoryId: "hartie",
        title: "Hârtie A4",
        shortDesc: "Hârtie copiator A4, 80g/mp.",
        longDesc: "Hârtie copiator A4, 80g/mp, 500 coli. Calitate superioară pentru printare.",
        price: "25.00 lei",
        author: "PrintExpress",
        features: [
            "Format: A4",
            "Gramaj: 80g/mp",
            "Cantitate: 500 coli",
            "Culoare: Alb",
            "Utilizare: Printare, copiere"
        ],
        gallery: ["hartie1", "hartie2", "hartie3"]
    },
    {
        id: "post-it",
        categoryId: "hartie",
        title: "Post-it",
        shortDesc: "Blocnotes adeziv, 76x76mm.",
        longDesc: "Blocnotes adeziv pentru notițe rapide. Se lipește ușor și se îndepărtează fără urme.",
        price: "5.00 lei",
        author: "PrintExpress",
        features: [
            "Dimensiune: 76x76mm",
            "Culoare: Galben",
            "Cantitate: 100 file",
            "Adeziv: Refolosibil",
            "Utilizare: Notițe rapide"
        ],
        gallery: ["postit1", "postit2", "postit3"]
    }
];

// ============================================
// PRODUSE PERSONALIZABILE - CONFIGURATOR
// ============================================
const PERSONALIZABLE_PRODUCTS = [
    // ... (rămân neschimbate)
];
