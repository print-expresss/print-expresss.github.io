// ============================================
// ÎNTRERUPĂTOARE PENTRU SECȚIUNI
// ============================================
const COMING_SOON_SERVICES = false; // Am dat drumul la servicii
const COMING_SOON_PRODUCTS = true;

// ============================================
// DATELE SITE-ULUI - PrintExpress
// ============================================

const SERVICE_CATEGORIES = [
    { 
        id: "printari", 
        title: "Printări", 
        shortDesc: "Listă de prețuri pentru printări (A4, A3, color etc).", 
        color: "gradient-1" 
    },
    { 
        id: "obiecte-personalizate", 
        title: "Obiecte personalizate", 
        shortDesc: "Brelocuri, căni, rame și cutii cu designul tău.", 
        color: "gradient-2" 
    },
    { id: "consiliere", title: "Consiliere și recomandări", shortDesc: "Echipa noastră te ajută să alegi produsul potrivit.", color: "gradient-3" },
    { id: "comenzi", title: "Comenzi și livrare", shortDesc: "Aducem orice produs la cerere, rapid și simplu.", color: "gradient-4" },
    { id: "cadouri", title: "Cadouri și ambalare", shortDesc: "Transformăm produsele în cadouri memorabile.", color: "gradient-5" },
    { id: "educationale", title: "Servicii educaționale", shortDesc: "Pachete școlare și consultanță.", color: "gradient-6" }
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
    // ... (restul serviciilor rămân neschimbate, dar le poți păstra așa cum le ai)
];

const PRODUCT_CATEGORIES = [
    { id: "carti", title: "Cărți", shortDesc: "Beletristică, dezvoltare personală, clasice.", color: "gradient-1" },
    { id: "papetarie", title: "Papetărie", shortDesc: "Caiete, agende, carnete și blocnotesuri.", color: "gradient-2" },
    { id: "pixuri", title: "Instrumente de scris", shortDesc: "Pixuri, creioane, markere și stilouri.", color: "gradient-3" },
    { id: "jucarii", title: "Jucării și jocuri", shortDesc: "Puzzle-uri, jocuri educative și de societate.", color: "gradient-4" },
    { id: "accesorii", title: "Accesorii", shortDesc: "Semne de carte, huse, lămpi.", color: "gradient-5" },
    { id: "personalizate", title: "Produse personalizate", shortDesc: "Brelocuri, căni, tricouri cu designul tău.", color: "gradient-6" }
];

const PRODUCTS = [
    // ... (rămân neschimbate)
];

// ============================================
// PRODUSE PERSONALIZABILE - CONFIGURATOR
// ============================================
const PERSONALIZABLE_PRODUCTS = [
    {
        id: "breloc",
        title: "Breloc personalizat",
        shortDesc: "Breloc cu imaginea ta, în diverse forme și mărimi.",
        basePrice: 25,
        shapes: [
            {
                id: "dreptunghiular",
                label: "Dreptunghiular",
                priceExtra: 0,
                layer: "front",
                baseImage: "images/products/breloc-dreptunghiular.png",
                coords: [150, 316, 441, 752],
                borderRadius: "4px"
            },
            {
                id: "rotund",
                label: "Rotund",
                priceExtra: 0,
                layer: "front",
                baseImage: "images/products/breloc-rotund.png",
                coords: [210, 190, 470, 450],
                borderRadius: "50%"
            },
            {
                id: "inima",
                label: "Inimă",
                priceExtra: 5,
                layer: "front",
                baseImage: "images/products/breloc-inima.png",
                coords: [130, 150, 270, 330], // Coordonatele tale perfecte
                borderRadius: "0",
                maskImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M50 90 C20 65 0 40 0 25 C0 10 10 0 25 0 C40 0 50 10 50 25 C50 10 60 0 75 0 C90 0 100 10 100 25 C100 40 80 65 50 90 Z%22/%3E%3C/svg%3E')"
            },
            {
                id: "patrat",
                label: "Pătrat",
                priceExtra: 3,
                layer: "front",
                baseImage: "images/products/breloc-patrat.png",
                coords: [314, 270, 852, 806],
                borderRadius: "6px"
            }
        ],
        sizes: [
            { id: "mic", label: "Mic (3 cm)", priceExtra: 0 },
            { id: "mediu", label: "Mediu (5 cm)", priceExtra: 5 },
            { id: "mare", label: "Mare (7 cm)", priceExtra: 10 }
        ],
        materials: [
            { id: "metal", label: "Metal", priceExtra: 0 },
            { id: "acrylic", label: "Acrilic", priceExtra: 3 },
            { id: "lemn", label: "Lemn", priceExtra: 7 }
        ]
    },
    {
        id: "cana",
        title: "Cană personalizată",
        shortDesc: "Cană ceramică cu imaginea ta preferată.",
        basePrice: 45,
        shapes: [
            {
                id: "clasica",
                label: "Clasică",
                priceExtra: 0,
                layer: "front",
                baseImage: "images/products/cana-clasica.png",
                coords: [150, 200, 350, 400],
                borderRadius: "4px"
            }
        ],
        sizes: [
            { id: "330", label: "330 ml", priceExtra: 0 },
            { id: "450", label: "450 ml", priceExtra: 8 }
        ],
        materials: [
            { id: "ceramica", label: "Ceramică", priceExtra: 0 },
            { id: "ceramica-premium", label: "Ceramică premium", priceExtra: 12 }
        ]
    },
    {
        id: "rama",
        title: "Ramă foto personalizată",
        shortDesc: "Ramă foto cu imaginea ta preferată.",
        basePrice: 35,
        shapes: [
            {
                id: "dreptunghiular",
                label: "Dreptunghiular",
                priceExtra: 0,
                layer: "front",
                baseImage: "images/products/rama-dreptunghiular.png",
                coords: [100, 100, 400, 300], // Ajustează tu
                borderRadius: "0"
            }
        ],
        sizes: [
            { id: "10x15", label: "10x15 cm", priceExtra: 0 },
            { id: "13x18", label: "13x18 cm", priceExtra: 10 }
        ],
        materials: [
            { id: "lemn", label: "Lemn", priceExtra: 0 },
            { id: "metal", label: "Metal", priceExtra: 5 }
        ]
    },
    {
        id: "cutie",
        title: "Cutie cadou personalizată",
        shortDesc: "Cutie cadou cu mesajul tău.",
        basePrice: 20,
        shapes: [
            {
                id: "patrata",
                label: "Pătrată",
                priceExtra: 0,
                layer: "front",
                baseImage: "images/products/cutie-patrata.png",
                coords: [50, 50, 250, 250], // Ajustează tu
                borderRadius: "4px"
            }
        ],
        sizes: [
            { id: "mica", label: "Mică (10x10 cm)", priceExtra: 0 },
            { id: "mare", label: "Mare (15x15 cm)", priceExtra: 5 }
        ],
        materials: [
            { id: "carton", label: "Carton", priceExtra: 0 },
            { id: "lemn", label: "Lemn", priceExtra: 15 }
        ]
    }
];

// ============================================
// FUNCȚII UTILITARE
// ============================================
function getServiceCategory(id) { return SERVICE_CATEGORIES.find(function (c) { return c.id === id; }); }
function getProductCategory(id) { return PRODUCT_CATEGORIES.find(function (c) { return c.id === id; }); }
function getServicesByCategory(id) { return SERVICES.filter(function (s) { return s.categoryId === id; }); }
function getProductsByCategory(id) { return PRODUCTS.filter(function (p) { return p.categoryId === id; }); }
function getPersonalizableProduct(id) { return PERSONALIZABLE_PRODUCTS.find(function (p) { return p.id === id; }); }
