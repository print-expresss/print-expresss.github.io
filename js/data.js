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
        id: "caiet-a5-48-file-dictando",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A5, 48 file, dictando, 65-70 g/mp.",
        longDesc: "Caiet A5 cu 48 file, tip dictando, 65-70 g/mp. Coperta rezistentă, file albe de calitate superioară.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 48", "Tip: Dictando", "Gramaj hârtie: 65-70g/mp", "Copertă: Carton", "Utilizare: Școală, birou, notițe"],
        images: ["images/products/caiete/caiet-a5-48-file-1.jpg", "images/products/caiete/caiet-a5-48-file-2.jpg", "images/products/caiete/caiet-a5-48-file-3.jpg"]
    },
    {
        id: "caiet-a5-48-file-mate",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A5, 48 file, mate, 65-70 g/mp.",
        longDesc: "Caiet A5 cu 48 file, tip mate, 65-70 g/mp. Coperta rezistentă, file albe de calitate superioară.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 48", "Tip: Mate", "Gramaj hârtie: 65-70g/mp", "Copertă: Carton Laminat", "Utilizare: Școală, birou, notițe"],
        images: ["images/products/caiete/caietm-a5-48-file-1.jpg"]
    },
    {
        id: "caietm-a4-80-file-s1",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A4, 80 file, matematica.",
        longDesc: "Caiet A4 cu 48 file, tip dictando. Ideal pentru notițe rapide.",
        price: "7.00 lei",
        author: "PrintExpress",
        features: ["Format: A4", "Număr file: 80", "Tip: Matematica cu spirala", "Gramaj hârtie: 80g/mp", "Copertă: Carton", "Utilizare: Notițe, școală"],
        images: ["images/products/caiete/caietm-a4-80-file-s1.jpeg", "images/products/caiete/caietm-a4-80-file-s2.jpeg"]
    },
    {
        id: "caiet-a5-48-file",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A5, 48 file, velin.",
        longDesc: "Caiet A5 cu 48 file, tip velin. Mai multe pagini pentru mai multe notițe.",
        price: "1.50 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 48", "Tip: Velin", "Gramaj hârtie: 80g/mp", "Copertă: Carton", "Utilizare: Școală, birou"],
        images: ["images/products/caiete/caietv-a5-48-file-1.jpg"]
    },
    {
        id: "caiet-a4-48-file-aritmetica",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet mic, 48 file, aritmetica.",
        longDesc: "Caiet mic, 48 file, tip aritmetica.",
        price: "2.00 lei",
        author: "PrintExpress",
        features: ["Format: Mic (A5)", "Număr file:48", "Tip: Matematica", "Gramaj hârtie: 80g/mp", "Copertă: Polipropilena(plastic)"],
        images: ["images/products/caiete/caiet-a5-48-file-aritmetica.jpeg"]
    },

    // --- PIXURI ---
    {
        id: "pix-albastru",
        categoryId: "pixuri",
        title: "",
        shortDesc: "Pix semigel retractabil, albastru, vârf 0.7mm.",
        longDesc: "Pix albastru cu cerneală fluidă, vârf de 0.7mm. Scriere fină și curată.",
        price: "5 lei",
        author: "PrintExpress",
        features: ["Culoare: Albastru", "Vârf: 0.7mm", "Tip cerneală: semigel", "Brand: Faber Castell", "Utilizare: Scris zilnic"],
        images: ["images/products/pixuri/pix-albastru-1.jpg"]
    },
    {
        id: "highligher-pelikan",
        categoryId: "pixuri",
        title: " ",
        shortDesc: "Highlighter Pelikan",
        longDesc: "Highlighter Pelikan, cu 3 moduri de scriere diferita datorita varfului special",
        price: "4.00 lei",
        author: "PrintExpress",
        features: ["Culoare: Roz/Galben/Oranj/Verde/Albatru/Rosu", "Tip cerneală: Lichidă, Reincarcabil", "Brand: Pelikan", "Utilizare: Evidentiere text"],
        images: ["images/products/pixuri/highlighter-pelikan-1.jpg"]
    },
    {
        id: "pix-frixion",
        categoryId: "pixuri",
        title: " ",
        shortDesc: "Pix Frixion Fineliner, diverse culori",
        longDesc: "Pix Frixion cu stergere prin frecare.",
        price: "12.00 lei",
        author: "PrintExpress",
        features: ["Dimensiune scriere: 0.45mm", "Culoare: Diverse", "Tip: Cu cerneală", "Brand: Frixion", "Utilizare: Scriere zilnica"],
        images: ["images/products/pixuri/pix-frixion-1.jpg", "images/products/pixuri/pix-frixion-2.jpg", "images/products/pixuri/pix-frixion-3.jpg", "images/products/pixuri/pix-frixion-4.jpg", "images/products/pixuri/pix-frixion-5.jpg"]
    },
    {
        id: "marker-tabla",
        categoryId: "pixuri",
        title: " ",
        shortDesc: "Marker pentru tablă, vârf rotund(F) sau ascutit(M).",
        longDesc: "Marker pentru tablă, cu cerneală ștergabilă. Vârf rotund(F) sau ascutit(M).",
        price: "5.50 lei",
        author: "PrintExpress",
        features: ["Culoare: Negru/Albastru/Rosu/Verde", "Vârf: Rotund(F)/Ascutit(M)", "Tip cerneală: Ștergabilă", "Brand: Pelikan", "Utilizare: Tablă albă"],
        images: ["images/products/pixuri/marker-tabla-pelikan-1.jpg"]
    },

    // --- CĂRȚI ---
    {
        id: "carti-copii",
        categoryId: "carti",
        title: " ",
        shortDesc: "Carte de colorat cu ghicitori",
        longDesc: "Carte educativa de colorat cu ghicitori",
        price: "19.00 lei",
        author: "Gama",
        features: ["Ilustrații colorate", "Povești clasice", "Educative", "Grupe vârstă"],
        images: ["images/products/carti/carte-de-colorat-ghicitori.jpg"]
    },

    // --- RECHIZITE ---
    {
        id: "set-rechizite-primar",
        categoryId: "rechizite",
        title: " ",
        shortDesc: "Set complet pentru clasele I-IV.",
        longDesc: "Set complet de rechizite pentru elevii din ciclul primar: caiete, pixuri, creioane, culori, riglă, gumă și alte materiale.",
        price: "89.00 lei",
        author: "PrintExpress",
        features: ["Conținut: 20+ piese", "Include: Caiete, pixuri, creioane", "Include: Culori, riglă, gumă", "Ciclu: Primar (I-IV)", "Ambalaj: Cutie"],
        images: ["images/products/rechizite/set-rechizite-1.jpg"]
    },
    {
        id: "set-rechizite-gimnaziu",
        categoryId: "rechizite",
        title: " ",
        shortDesc: "Set complet pentru clasele V-VIII.",
        longDesc: "Set de rechizite pentru gimnaziu: caiete specializate, instrumente geometrice, markere și materiale pentru toate materiile.",
        price: "129.00 lei",
        author: "PrintExpress",
        features: ["Conținut: 25+ piese", "Include: Caiete specializate", "Include: Instrumente geometrice", "Ciclu: Gimnaziu (V-VIII)", "Ambalaj: Cutie"],
        images: ["images/products/rechizite/set-rechizite-2.jpg"]
    },

    // --- ACCESORII BIROU ---
    {
        id: "suport-pixuri",
        categoryId: "accesorii-birou",
        title: " ",
        shortDesc: "Suport pentru pixuri și creioane.",
        longDesc: "Suport din metal pentru pixuri și creioane. Design elegant, ideal pentru birou.",
        price: "15.00 lei",
        author: "PrintExpress",
        features: ["Material: Metal", "Culoare: Negru", "Capacitate: 10+ pixuri", "Design: Elegant", "Utilizare: Birou"],
        images: ["images/products/birotica/suport-pixuri-birou-1.jpg"]
    },
    {
        id: "suport-telefon",
        categoryId: "accesorii-birou",
        title: " ",
        shortDesc: "Suport telefon",
        longDesc: "Suport de telefon metalic, modern",
        price: "25.00 lei",
        author: "PrintExpress",
        features: ["Material: Metal", "Utilizare: Telefon, organizare"],
        images: ["images/products/birotica/suport-telefon-1.jpg"]
    }
];

const PERSONALIZABLE_PRODUCTS = [
    { id: "breloc", title: "Breloc personalizat", shortDesc: "Breloc cu imaginea ta, în diverse forme și mărimi.", basePrice: 25, shapes: [ { id: "dreptunghiular", label: "Dreptunghiular", priceExtra: 0, layer: "front", baseImage: "images/products/breloc-dreptunghiular.png", coords: [150, 316, 441, 752], borderRadius: "4px" }, { id: "rotund", label: "Rotund", priceExtra: 0, layer: "front", baseImage: "images/products/breloc-rotund.png", coords: [210, 190, 470, 450], borderRadius: "50%" }, { id: "inima", label: "Inimă", priceExtra: 5, layer: "front", baseImage: "images/products/breloc-inima.png", coords: [130, 150, 270, 330], borderRadius: "0", maskImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M50 90 C20 65 0 40 0 25 C0 10 10 0 25 0 C40 0 50 10 50 25 C50 10 60 0 75 0 C90 0 100 10 100 25 C100 40 80 65 50 90 Z%22/%3E%3C/svg%3E')" }, { id: "patrat", label: "Pătrat", priceExtra: 3, layer: "front", baseImage: "images/products/breloc-patrat.png", coords: [314, 270, 852, 806], borderRadius: "6px" } ], sizes: [ { id: "mic", label: "Mic (3 cm)", priceExtra: 0 }, { id: "mediu", label: "Mediu (5 cm)", priceExtra: 5 }, { id: "mare", label: "Mare (7 cm)", priceExtra: 10 } ], materials: [ { id: "metal", label: "Metal", priceExtra: 0 }, { id: "acrylic", label: "Acrilic", priceExtra: 3 }, { id: "lemn", label: "Lemn", priceExtra: 7 } ] },
    { id: "cana", title: "Cană personalizată", shortDesc: "Cană ceramică cu imaginea ta preferată.", basePrice: 45, shapes: [ { id: "clasica", label: "Clasică", priceExtra: 0, layer: "front", baseImage: "images/products/cana-clasica.png", coords: [150, 200, 350, 400], borderRadius: "4px" } ], sizes: [ { id: "330", label: "330 ml", priceExtra: 0 }, { id: "450", label: "450 ml", priceExtra: 8 } ], materials: [ { id: "ceramica", label: "Ceramică", priceExtra: 0 }, { id: "ceramica-premium", label: "Ceramică premium", priceExtra: 12 } ] },
    { id: "rama", title: "Ramă foto personalizată", shortDesc: "Ramă foto cu imaginea ta preferată.", basePrice: 35, shapes: [ { id: "dreptunghiular", label: "Dreptunghiular", priceExtra: 0, layer: "front", baseImage: "images/products/rama-dreptunghiular.png", coords: [100, 100, 400, 300], borderRadius: "0" } ], sizes: [ { id: "10x15", label: "10x15 cm", priceExtra: 0 }, { id: "13x18", label: "13x18 cm", priceExtra: 10 } ], materials: [ { id: "lemn", label: "Lemn", priceExtra: 0 }, { id: "metal", label: "Metal", priceExtra: 5 } ] },
    { id: "cutie", title: "Cutie cadou personalizată", shortDesc: "Cutie cadou cu mesajul tău.", basePrice: 20, shapes: [ { id: "patrata", label: "Pătrată", priceExtra: 0, layer: "front", baseImage: "images/products/cutie-patrata.png", coords: [50, 50, 250, 250], borderRadius: "4px" } ], sizes: [ { id: "mica", label: "Mică (10x10 cm)", priceExtra: 0 }, { id: "mare", label: "Mare (15x15 cm)", priceExtra: 5 } ], materials: [ { id: "carton", label: "Carton", priceExtra: 0 }, { id: "lemn", label: "Lemn", priceExtra: 15 } ] }
];

const GALLERY_IMAGES = [
    "images/galerie/1.jpg",
    "images/galerie/2.jpg",
    "images/galerie/3.jpg"
];

function getServiceCategory(id) { return SERVICE_CATEGORIES.find(function (c) { return c.id === id; }); }
function getProductCategory(id) { return PRODUCT_CATEGORIES.find(function (c) { return c.id === id; }); }
function getServicesByCategory(id) { return SERVICES.filter(function (s) { return s.categoryId === id; }); }
function getProductsByCategory(id) { return PRODUCTS.filter(function (p) { return p.categoryId === id; }); }
function getPersonalizableProduct(id) { return PERSONALIZABLE_PRODUCTS.find(function (p) { return p.id === id; }); }
