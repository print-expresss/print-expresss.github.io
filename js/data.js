const COMING_SOON_SERVICES = false;
const COMING_SOON_PRODUCTS = false;

const SERVICE_CATEGORIES = [
    { id: "printari", title: "Printări", shortDesc: "Listă de prețuri pentru printări (A4, A3, color etc).", color: "gradient-1", image: "images/printari-banner.jpg" },
    { id: "obiecte-personalizate", title: "Obiecte personalizate", shortDesc: "Brelocuri, căni, rame și cutii cu designul tău.", color: "gradient-2", image: "images/obiecte-banner.jpg" },
    { id: "cadouri", title: "Cadouri și ambalare", shortDesc: "Transformăm produsele în cadouri memorabile.", color: "gradient-3", image: "images/cadouri-banner.jpg" }
];

const SERVICES = [
    { id: "printari", categoryId: "printari", title: "Printări", shortDesc: "Listă de prețuri pentru printări.", longDesc: "Printăm documente, afișe, planșe și materiale promoționale la cele mai bune prețuri. Calitate superioară, livrare rapidă.", price: "Vezi lista", duration: "Variabil", features: ["Print color și alb-negru", "Formate A4, A3, A2", "Hârtie premium", "Reduceri pentru volume mari"], gallery: ["p1", "p2", "p3"] },
    { id: "obiecte-personalizate", categoryId: "obiecte-personalizate", title: "Obiecte personalizate", shortDesc: "Creează-ți propriul cadou.", longDesc: "Alege din gama noastră de obiecte personalizabile: brelocuri, căni, rame foto și cutii cadou. Încarcă imaginea ta și noi ne ocupăm de restul.", price: "De la 15 lei", duration: "1-3 zile", features: ["Brelocuri metalice și acrilice", "Căni ceramice", "Rame foto personalizate", "Cutii cadou elegante"], gallery: ["op1", "op2", "op3"] },
    { id: "cadouri", categoryId: "cadouri", title: "Cadouri și ambalare", shortDesc: "Ambalăm produsele cu hârtie de calitate.", longDesc: "Transformăm produsul tău într-un cadou memorabil. Hârtie premium, panglici și card personalizat.", price: "Gratuit la comenzi peste 100 lei", duration: "10-15 minute", features: ["Hârtie premium", "Panglici decorative", "Card personalizat", "Pentru orice ocazie"], gallery: ["cadou-1", "cadou-2", "cadou-3"] }
];

const PRODUCT_CATEGORIES = [
    { id: "caiete", title: "Caiete", shortDesc: "Caiete dictando, matematică, de la NEBO și altele.", color: "gradient-1", image: "images/banner-caiete.jpg" },
    { id: "pixuri", title: "Pixuri și stilouri", shortDesc: "Pixuri, stilouri, rezerve și markere.", color: "gradient-2", image: "images/banner-pixuri.jpg" },
    { id: "carti", title: "Cărți", shortDesc: "Beletristică, dezvoltare personală, cărți pentru copii.", color: "gradient-3", image: "images/banner-carti.jpg" },
    { id: "rechizite", title: "Rechizite școlare", shortDesc: "Seturi complete pentru fiecare ciclu școlar.", color: "gradient-4", image: "images/banner-rechizite.jpg" },
    { id: "accesorii-birou", title: "Accesorii birou", shortDesc: "Suporturi, organizatoare, agende.", color: "gradient-5", image: "images/banner-accesorii.jpg" }
];

const PRODUCTS = [
    // --- CAIETE ---
    {
        id: "caiet-a5-48-file",
        categoryId: "caiete",
        title: "Caiet NEBO A5 48 file",
        shortDesc: "Caiet A5, 48 file, dictando, 65-70 g/mp.",
        longDesc: "Caiet A5 cu 48 file, tip dictando, 65-70 g/mp. Coperta rezistentă, file albe de calitate superioară.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 48", "Tip: Dictando", "Gramaj hârtie: 65-70g/mp", "Copertă: Carton", "Utilizare: Școală, birou, notițe"],
        images: ["images/products/caiet-a5-48-file-1.jpg", "images/products/caiet-a5-48-file-2.jpg", "images/products/caiet-a5-48-file-3.jpg"]
    },
    {
        id: "caiet-a4-48-file",
        categoryId: "caiete",
        title: "Caiet A4 48 file",
        shortDesc: "Caiet A4, 48 file, dictando.",
        longDesc: "Caiet A4 cu 48 file, tip dictando. Ideal pentru notițe rapide.",
        price: "2.00 lei",
        author: "PrintExpress",
        features: ["Format: A4", "Număr file: 48", "Tip: Dictando", "Gramaj hârtie: 80g/mp", "Copertă: Carton", "Utilizare: Notițe, școală"],
        images: ["images/products/caiet-a4-48-file-1.jpg", "images/products/caiet-a4-48-file-2.jpg", "images/products/caiet-a4-48-file-3.jpg"]
    },
    {
        id: "caiet-a5-80-file",
        categoryId: "caiete",
        title: "Caiet A5 80 file",
        shortDesc: "Caiet A5, 80 file, dictando.",
        longDesc: "Caiet A5 cu 80 file, tip dictando. Mai multe pagini pentru mai multe notițe.",
        price: "2.50 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 80", "Tip: Dictando", "Gramaj hârtie: 80g/mp", "Copertă: Carton", "Utilizare: Școală, birou"],
        images: ["images/products/caiet-a5-80-file-1.jpg", "images/products/caiet-a5-80-file-2.jpg", "images/products/caiet-a5-80-file-3.jpg"]
    },
    {
        id: "caiet-24-file",
        categoryId: "caiete",
        title: "Caiet 24 file",
        shortDesc: "Caiet mic, 24 file, dictando.",
        longDesc: "Caiet mic, 24 file, tip dictando. Ideal pentru notițe scurte.",
        price: "1.00 lei",
        author: "PrintExpress",
        features: ["Format: Mic (A6)", "Număr file: 24", "Tip: Dictando", "Gramaj hârtie: 80g/mp", "Copertă: Carton", "Utilizare: Notițe rapide"],
        images: ["images/products/caiet-24-file-1.jpg", "images/products/caiet-24-file-2.jpg", "images/products/caiet-24-file-3.jpg"]
    },
    {
        id: "caiet-a4-80-file",
        categoryId: "caiete",
        title: "Caiet A4 80 file",
        shortDesc: "Caiet A4, 80 file, matematică.",
        longDesc: "Caiet A4, 80 file, tip matematică. Ideal pentru exerciții și calcule.",
        price: "5.50 lei",
        author: "PrintExpress",
        features: ["Format: A4", "Număr file: 80", "Tip: Matematică (pătrățele)", "Gramaj hârtie: 80g/mp", "Copertă: Carton", "Utilizare: Matematică, științe exacte"],
        images: ["images/products/caiet-a4-80-file-1.jpg", "images/products/caiet-a4-80-file-2.jpg", "images/products/caiet-a4-80-file-3.jpg"]
    },

    // --- PIXURI ---
    {
        id: "pix-albastru",
        categoryId: "pixuri",
        title: "Pix albastru",
        shortDesc: "Pix cu cerneală albastră, vârf 0.7mm.",
        longDesc: "Pix albastru cu cerneală fluidă, vârf de 0.7mm. Scriere fină și curată.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: ["Culoare: Albastru", "Vârf: 0.7mm", "Tip cerneală: Lichidă", "Brand: Diverse", "Utilizare: Scris zilnic"],
        images: ["images/products/pix-albastru-1.jpg", "images/products/pix-albastru-2.jpg", "images/products/pix-albastru-3.jpg"]
    },
    {
        id: "pix-rosu",
        categoryId: "pixuri",
        title: "Pix roșu",
        shortDesc: "Pix cu cerneală roșie, vârf 0.7mm.",
        longDesc: "Pix roșu cu cerneală fluidă, vârf de 0.7mm. Ideal pentru corecturi.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: ["Culoare: Roșu", "Vârf: 0.7mm", "Tip cerneală: Lichidă", "Brand: Diverse", "Utilizare: Corecturi, notițe"],
        images: ["images/products/pix-rosu-1.jpg", "images/products/pix-rosu-2.jpg", "images/products/pix-rosu-3.jpg"]
    },
    {
        id: "stilou",
        categoryId: "pixuri",
        title: "Stilou",
        shortDesc: "Stilou elegant, pentru scris rafinat.",
        longDesc: "Stilou din metal, cu design elegant. Ideal pentru semnături și cadouri.",
        price: "35.00 lei",
        author: "PrintExpress",
        features: ["Material: Metal", "Culoare: Argintiu", "Tip: Cu cerneală", "Brand: Premium", "Utilizare: Cadou, semnături"],
        images: ["images/products/stilou-1.jpg", "images/products/stilou-2.jpg", "images/products/stilou-3.jpg"]
    },
    {
        id: "marker-tabla",
        categoryId: "pixuri",
        title: "Marker pentru tablă",
        shortDesc: "Marker pentru tablă, vârf rotund.",
        longDesc: "Marker pentru tablă, cu cerneală ștergabilă. Vârf rotund de 2mm.",
        price: "4.50 lei",
        author: "PrintExpress",
        features: ["Culoare: Negru/Albastru", "Vârf: Rotund 2mm", "Tip cerneală: Ștergabilă", "Brand: Diverse", "Utilizare: Tablă albă"],
        images: ["images/products/marker-tabla-1.jpg", "images/products/marker-tabla-2.jpg", "images/products/marker-tabla-3.jpg"]
    },

    // --- CĂRȚI ---
    {
        id: "roman-contemporan",
        categoryId: "carti",
        title: "Roman contemporan",
        shortDesc: "Bestselleruri internaționale.",
        longDesc: "Selecție de romane contemporane de la autori români și internaționali.",
        price: "39.00 lei",
        author: "Autori variați",
        features: ["Bestselleruri", "Autori premiați", "Noutăți editoriale", "Reduceri la seturi"],
        images: ["images/products/roman-contemporan-1.jpg", "images/products/roman-contemporan-2.jpg", "images/products/roman-contemporan-3.jpg"]
    },
    {
        id: "dezvoltare-personala",
        categoryId: "carti",
        title: "Dezvoltare personală",
        shortDesc: "Ghiduri pentru succes.",
        longDesc: "Cărți care te ajută să îți îmbunătățești viața.",
        price: "45.00 lei",
        author: "Autori internaționali",
        features: ["Bestselleruri", "Ghiduri practice", "Exerciții", "Autori recunoscuți"],
        images: ["images/products/dezvoltare-personala-1.jpg", "images/products/dezvoltare-personala-2.jpg", "images/products/dezvoltare-personala-3.jpg"]
    },
    {
        id: "literatura-clasica",
        categoryId: "carti",
        title: "Literatură clasică",
        shortDesc: "Capodopere universale.",
        longDesc: "Ediții de calitate ale marilor clasici.",
        price: "29.00 lei",
        author: "Clasici",
        features: ["Ediții îngrijite", "Traduceri recente", "Colecții", "Format elegant"],
        images: ["images/products/literatura-clasica-1.jpg", "images/products/literatura-clasica-2.jpg", "images/products/literatura-clasica-3.jpg"]
    },
    {
        id: "carti-copii",
        categoryId: "carti",
        title: "Cărți pentru copii",
        shortDesc: "Povești și cărți educative.",
        longDesc: "Cărți ilustrate și materiale educative pentru copii.",
        price: "19.00 lei",
        author: "Autori copii",
        features: ["Ilustrații colorate", "Povești clasice", "Educative", "Grupe vârstă"],
        images: ["images/products/carti-copii-1.jpg", "images/products/carti-copii-2.jpg", "images/products/carti-copii-3.jpg"]
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
        features: ["Conținut: 20+ piese", "Include: Caiete, pixuri, creioane", "Include: Culori, riglă, gumă", "Ciclu: Primar (I-IV)", "Ambalaj: Cutie"],
        images: ["images/products/set-rechizite-primar-1.jpg", "images/products/set-rechizite-primar-2.jpg", "images/products/set-rechizite-primar-3.jpg"]
    },
    {
        id: "set-rechizite-gimnaziu",
        categoryId: "rechizite",
        title: "Set rechizite gimnaziu",
        shortDesc: "Set complet pentru clasele V-VIII.",
        longDesc: "Set de rechizite pentru gimnaziu: caiete specializate, instrumente geometrice, markere și materiale pentru toate materiile.",
        price: "129.00 lei",
        author: "PrintExpress",
        features: ["Conținut: 25+ piese", "Include: Caiete specializate", "Include: Instrumente geometrice", "Ciclu: Gimnaziu (V-VIII)", "Ambalaj: Cutie"],
        images: ["images/products/set-rechizite-gimnaziu-1.jpg", "images/products/set-rechizite-gimnaziu-2.jpg", "images/products/set-rechizite-gimnaziu-3.jpg"]
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
        features: ["Material: Metal", "Culoare: Negru", "Capacitate: 10+ pixuri", "Design: Elegant", "Utilizare: Birou"],
        images: ["images/products/suport-pixuri-1.jpg", "images/products/suport-pixuri-2.jpg", "images/products/suport-pixuri-3.jpg"]
    },
    {
        id: "agenda-2024",
        categoryId: "accesorii-birou",
        title: "Agendă 2024",
        shortDesc: "Agendă de birou pentru anul 2024.",
        longDesc: "Agendă de birou cu coperți premium, pentru anul 2024. Include calendar și pagini pentru notițe.",
        price: "25.00 lei",
        author: "PrintExpress",
        features: ["An: 2024", "Format: A5", "Coperți: Piele ecologică", "Pagini: 200+", "Utilizare: Birou, organizare"],
        images: ["images/products/agenda-2024-1.jpg", "images/products/agenda-2024-2.jpg", "images/products/agenda-2024-3.jpg"]
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
        features: ["Format: A4", "Gramaj: 80g/mp", "Cantitate: 500 coli", "Culoare: Alb", "Utilizare: Printare, copiere"],
        images: ["images/products/hartie-a4-1.jpg", "images/products/hartie-a4-2.jpg", "images/products/hartie-a4-3.jpg"]
    },
    {
        id: "post-it",
        categoryId: "hartie",
        title: "Post-it",
        shortDesc: "Blocnotes adeziv, 76x76mm.",
        longDesc: "Blocnotes adeziv pentru notițe rapide. Se lipește ușor și se îndepărtează fără urme.",
        price: "5.00 lei",
        author: "PrintExpress",
        features: ["Dimensiune: 76x76mm", "Culoare: Galben", "Cantitate: 100 file", "Adeziv: Refolosibil", "Utilizare: Notițe rapide"],
        images: ["images/products/post-it-1.jpg", "images/products/post-it-2.jpg", "images/products/post-it-3.jpg"]
    }
];

const PERSONALIZABLE_PRODUCTS = [
    { id: "breloc", title: "Breloc personalizat", shortDesc: "Breloc cu imaginea ta, în diverse forme și mărimi.", basePrice: 25, shapes: [ { id: "dreptunghiular", label: "Dreptunghiular", priceExtra: 0, layer: "front", baseImage: "images/products/breloc-dreptunghiular.png", coords: [150, 316, 441, 752], borderRadius: "4px" }, { id: "rotund", label: "Rotund", priceExtra: 0, layer: "front", baseImage: "images/products/breloc-rotund.png", coords: [210, 190, 470, 450], borderRadius: "50%" }, { id: "inima", label: "Inimă", priceExtra: 5, layer: "front", baseImage: "images/products/breloc-inima.png", coords: [130, 150, 270, 330], borderRadius: "0", maskImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M50 90 C20 65 0 40 0 25 C0 10 10 0 25 0 C40 0 50 10 50 25 C50 10 60 0 75 0 C90 0 100 10 100 25 C100 40 80 65 50 90 Z%22/%3E%3C/svg%3E')" }, { id: "patrat", label: "Pătrat", priceExtra: 3, layer: "front", baseImage: "images/products/breloc-patrat.png", coords: [314, 270, 852, 806], borderRadius: "6px" } ], sizes: [ { id: "mic", label: "Mic (3 cm)", priceExtra: 0 }, { id: "mediu", label: "Mediu (5 cm)", priceExtra: 5 }, { id: "mare", label: "Mare (7 cm)", priceExtra: 10 } ], materials: [ { id: "metal", label: "Metal", priceExtra: 0 }, { id: "acrylic", label: "Acrilic", priceExtra: 3 }, { id: "lemn", label: "Lemn", priceExtra: 7 } ] },
    { id: "cana", title: "Cană personalizată", shortDesc: "Cană ceramică cu imaginea ta preferată.", basePrice: 45, shapes: [ { id: "clasica", label: "Clasică", priceExtra: 0, layer: "front", baseImage: "images/products/cana-clasica.png", coords: [150, 200, 350, 400], borderRadius: "4px" } ], sizes: [ { id: "330", label: "330 ml", priceExtra: 0 }, { id: "450", label: "450 ml", priceExtra: 8 } ], materials: [ { id: "ceramica", label: "Ceramică", priceExtra: 0 }, { id: "ceramica-premium", label: "Ceramică premium", priceExtra: 12 } ] },
    { id: "rama", title: "Ramă foto personalizată", shortDesc: "Ramă foto cu imaginea ta preferată.", basePrice: 35, shapes: [ { id: "dreptunghiular", label: "Dreptunghiular", priceExtra: 0, layer: "front", baseImage: "images/products/rama-dreptunghiular.png", coords: [100, 100, 400, 300], borderRadius: "0" } ], sizes: [ { id: "10x15", label: "10x15 cm", priceExtra: 0 }, { id: "13x18", label: "13x18 cm", priceExtra: 10 } ], materials: [ { id: "lemn", label: "Lemn", priceExtra: 0 }, { id: "metal", label: "Metal", priceExtra: 5 } ] },
    { id: "cutie", title: "Cutie cadou personalizată", shortDesc: "Cutie cadou cu mesajul tău.", basePrice: 20, shapes: [ { id: "patrata", label: "Pătrată", priceExtra: 0, layer: "front", baseImage: "images/products/cutie-patrata.png", coords: [50, 50, 250, 250], borderRadius: "4px" } ], sizes: [ { id: "mica", label: "Mică (10x10 cm)", priceExtra: 0 }, { id: "mare", label: "Mare (15x15 cm)", priceExtra: 5 } ], materials: [ { id: "carton", label: "Carton", priceExtra: 0 }, { id: "lemn", label: "Lemn", priceExtra: 15 } ] }
];

function getServiceCategory(id) { return SERVICE_CATEGORIES.find(function (c) { return c.id === id; }); }
function getProductCategory(id) { return PRODUCT_CATEGORIES.find(function (c) { return c.id === id; }); }
function getServicesByCategory(id) { return SERVICES.filter(function (s) { return s.categoryId === id; }); }
function getProductsByCategory(id) { return PRODUCTS.filter(function (p) { return p.categoryId === id; }); }
function getPersonalizableProduct(id) { return PERSONALIZABLE_PRODUCTS.find(function (p) { return p.id === id; }); }
