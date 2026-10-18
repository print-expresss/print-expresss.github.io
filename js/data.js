// ============================================
// ÎNTRERUPĂTOARE PENTRU SECȚIUNI
// Schimbă în "false" când vrei să activezi secțiunea!
// ============================================
const COMING_SOON_SERVICES = false; // Serviciile sunt active
const COMING_SOON_PRODUCTS = true;  // Produsele sunt în lucru ("Va urma")

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

const PRODUCT_CATEGORIES = [
    { id: "carti", title: "Cărți", shortDesc: "Beletristică, dezvoltare personală, clasice.", color: "gradient-1" },
    { id: "papetarie", title: "Papetărie", shortDesc: "Caiete, agende, carnete și blocnotesuri.", color: "gradient-2" },
    { id: "pixuri", title: "Instrumente de scris", shortDesc: "Pixuri, creioane, markere și stilouri.", color: "gradient-3" },
    { id: "jucarii", title: "Jucării și jocuri", shortDesc: "Puzzle-uri, jocuri educative și de societate.", color: "gradient-4" },
    { id: "accesorii", title: "Accesorii", shortDesc: "Semne de carte, huse, lămpi.", color: "gradient-5" },
    { id: "personalizate", title: "Produse personalizate", shortDesc: "Brelocuri, căni, tricouri cu designul tău.", color: "gradient-6" }
];

const PRODUCTS = [
    { id: "roman-contemporan", categoryId: "carti", title: "Roman contemporan", shortDesc: "Bestselleruri internaționale.", longDesc: "Selecție de romane contemporane de la autori români și internaționali.", price: "De la 39 lei", author: "Autori variați", features: ["Bestselleruri", "Autori premiați", "Noutăți", "Reduceri seturi"], gallery: ["r1", "r2", "r3"] },
    { id: "dezvoltare-personala", categoryId: "carti", title: "Dezvoltare personală", shortDesc: "Ghiduri pentru succes.", longDesc: "Cărți care te ajută să îți îmbunătățești viața.", price: "De la 45 lei", author: "Autori internaționali", features: ["Bestselleruri", "Ghiduri practice", "Exerciții", "Autori recunoscuți"], gallery: ["d1", "d2", "d3"] },
    { id: "literatura-clasica", categoryId: "carti", title: "Literatură clasică", shortDesc: "Capodopere universale.", longDesc: "Ediții de calitate ale marilor clasici.", price: "De la 29 lei", author: "Clasici", features: ["Ediții îngrijite", "Traduceri recente", "Colecții", "Format elegant"], gallery: ["c1", "c2", "c3"] },
    { id: "carti-copii", categoryId: "carti", title: "Cărți pentru copii", shortDesc: "Povești și cărți educative.", longDesc: "Cărți ilustrate și materiale educative pentru copii.", price: "De la 19 lei", author: "Autori copii", features: ["Ilustrații colorate", "Povești clasice", "Educative", "Grupe vârstă"], gallery: ["cc1", "cc2", "cc3"] },
    { id: "caiete", categoryId: "papetarie", title: "Caiete", shortDesc: "Pentru școală și birou.", longDesc: "Caiete cu linii, pătrățele, dictando. Formate A4, A5, A6.", price: "De la 4 lei", author: "Diverse branduri", features: ["A4, A5, A6", "Linii, pătrățele", "Coperți rezistente", "Modele variate"], gallery: ["ca1", "ca2", "ca3"] },
    { id: "agende", categoryId: "papetarie", title: "Agende și carnete", shortDesc: "Elegante pentru notițe.", longDesc: "Agende de birou, buzunar și carnete.", price: "De la 25 lei", author: "Diverse branduri", features: ["Coperți premium", "Formate variate", "Modele elegante", "Ideal cadou"], gallery: ["ag1", "ag2", "ag3"] },
    { id: "blocnotesuri", categoryId: "papetarie", title: "Blocnotesuri", shortDesc: "Pentru birou și notițe.", longDesc: "Blocnotesuri cu spirală, cu lipici sau simple.", price: "De la 8 lei", author: "Diverse branduri", features: ["Formate variate", "Spirală/lipici", "Hârtie calitate", "Prețuri accesibile"], gallery: ["b1", "b2", "b3"] },
    { id: "pixuri", categoryId: "pixuri", title: "Pixuri", shortDesc: "De calitate pentru scris zilnic.", longDesc: "Pixuri cu cerneală fluidă, pentru scris zilnic.", price: "De la 3 lei", author: "Diverse branduri", features: ["Cerneală fluidă", "Vârf 0.7/1.0mm", "Seturi economice", "Individual"], gallery: ["p1", "p2", "p3"] },
    { id: "stilouri", categoryId: "pixuri", title: "Stilouri", shortDesc: "Elegante pentru scris rafinat.", longDesc: "Stilouri din metal sau plastic de calitate.", price: "De la 35 lei", author: "Branduri premium", features: ["Materiale calitate", "Design elegant", "Ideal cadou", "Rezerve"], gallery: ["s1", "s2", "s3"] },
    { id: "markere", categoryId: "pixuri", title: "Markere", shortDesc: "Colorate pentru notițe.", longDesc: "Markere pentru tablă, evidențiatoare și permanente.", price: "De la 5 lei", author: "Diverse branduri", features: ["Seturi colorate", "Rezistente", "Orice suprafață", "Seturi"], gallery: ["m1", "m2", "m3"] },
    { id: "puzzle", categoryId: "jucarii", title: "Puzzle-uri", shortDesc: "Pentru copii și adulți.", longDesc: "Puzzle-uri cu tematici variate, de la 24 la 1000 piese.", price: "De la 19 lei", author: "Diverse branduri", features: ["24-1000 piese", "Tematici variate", "Calitate premium", "Pentru familie"], gallery: ["pz1", "pz2", "pz3"] },
    { id: "jocuri-societate", categoryId: "jucarii", title: "Jocuri de societate", shortDesc: "Pentru familie și prieteni.", longDesc: "Jocuri pentru toate vârstele.", price: "De la 45 lei", author: "Diverse branduri", features: ["Toate vârstele", "Educative", "Distractive", "Ideal cadou"], gallery: ["j1", "j2", "j3"] },
    { id: "jucarii-lemn", categoryId: "jucarii", title: "Jucării din lemn", shortDesc: "Educative din lemn natural.", longDesc: "Jucării sigure pentru copii mici.", price: "De la 35 lei", author: "Branduri eco", features: ["Lemn natural", "Vopsele sigure", "Dezvoltă creativitatea", "Rezistente"], gallery: ["l1", "l2", "l3"] },
    { id: "semne-carte", categoryId: "accesorii", title: "Semne de carte", shortDesc: "Artistice și practice.", longDesc: "Semne de carte din carton, magnetice, metalice.", price: "De la 5 lei", author: "Artizanal", features: ["Modele variate", "Materiale calitate", "Ideal cadou", "Handmade"], gallery: ["sc1", "sc2", "sc3"] },
    { id: "lampi-lectura", categoryId: "accesorii", title: "Lămpi de lectură", shortDesc: "Portabile pentru orice condiții.", longDesc: "Lămpi LED portabile pentru citit seara.", price: "De la 29 lei", author: "Branduri electro", features: ["LED economic", "Portabile", "USB/baterii", "Lumină reglabilă"], gallery: ["ll1", "ll2", "ll3"] },
    { id: "huse-carti", categoryId: "accesorii", title: "Huse pentru cărți", shortDesc: "Protecție elegantă.", longDesc: "Huse din material textil sau piele ecologică.", price: "De la 25 lei", author: "Diverse branduri", features: ["Materiale durabile", "Dimensiuni variate", "Modele elegante", "Protecție"], gallery: ["h1", "h2", "h3"] },
    { id: "breloc-personalizat", categoryId: "personalizate", title: "Breloc personalizat", shortDesc: "Cu imaginea ta preferată.", longDesc: "Breloc personalizat cu imaginea ta, în diverse forme și materiale.", price: "De la 25 lei", author: "Personalizat", features: ["Forme variate", "Materiale premium", "Cu imaginea ta", "Ideal cadou"], gallery: ["bp1", "bp2", "bp3"] },
    { id: "cana-personalizata", categoryId: "personalizate", title: "Cană personalizată", shortDesc: "Cu designul tău.", longDesc: "Cană ceramică cu imaginea ta preferată.", price: "De la 45 lei", author: "Personalizat", features: ["Ceramică premium", "Culori multiple", "Cu imaginea ta", "Ideal cadou"], gallery: ["cp1", "cp2", "cp3"] },
    { id: "tricou-personalizat", categoryId: "personalizate", title: "Tricou personalizat", shortDesc: "Cu designul tău.", longDesc: "Tricou din bumbac cu designul tău preferat.", price: "De la 69 lei", author: "Personalizat", features: ["Bumbac 100%", "Mărimi S-XXL", "Cu designul tău", "Ideal cadou"], gallery: ["tp1", "tp2", "tp3"] }
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
                coords: [130, 150, 270, 330],
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
                coords: [100, 100, 400, 300],
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
                coords: [50, 50, 250, 250],
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
