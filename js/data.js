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
    { id: "caiete", title: "Caiete", shortDesc: "Caiete dictando, matematică, de la NEBO, Herlitz și altele.", color: "gradient-1", image: "images/banner-caiete.jpg" },
    { id: "pixuri", title: "Pixuri și stilouri", shortDesc: "Pixuri, stilouri, rezerve, markere și highlighters.", color: "gradient-2", image: "images/banner-pixuri.jpg" },
    { id: "creioane", title: "Creioane", shortDesc: "Creioane colorate, cerate, mecanice și seturi pentru desen.", color: "gradient-3", image: "images/banner-creioane.jpg" },
    { id: "carioci", title: "Carioci și Markere", shortDesc: "Carioci pentru copii, markere permanente și pentru tablă.", color: "gradient-4", image: "images/banner-carioci.jpg" },
    { id: "vopsele", title: "Acuarele și Vopsele", shortDesc: "Acuarele, vopsele tempera, guașă și acrilice pentru artă.", color: "gradient-5", image: "images/banner-vopsele.jpg" },
    { id: "carti", title: "Cărți și auxiliare", shortDesc: "Cărți de colorat, ghicitori, materiale educaționale.", color: "gradient-6", image: "images/banner-carti.jpg" },
    { id: "rechizite", title: "Rechizite școlare", shortDesc: "Seturi complete, rigle, lipici, plastilină.", color: "gradient-7", image: "images/banner-rechizite.jpg" },
    { id: "accesorii-birou", title: "Accesorii birou", shortDesc: "Suporturi, organizatoare, albume foto, agende.", color: "gradient-8", image: "images/banner-accesorii.jpg" },
    { id: "tehnologie", title: "Tehnologie și Accesorii", shortDesc: "Încărcătoare, cabluri, memorii USB și gadgeturi.", color: "gradient-9", image: "images/banner-tehnologie.jpg" }
];

const PRODUCTS = [
    // --- CAIETE ---
    {
        id: "caiet-a5-48-file-dictando",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A5, 48 file, dictando, 65-70 g/mp.",
        longDesc: "Caiet A5 cu 48 file, tip dictando, 65-70 g/mp. Coperta rezistentă, file albe de calitate superioară.",
        price: "2.00 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 48", "Tip: Dictando", "Gramaj hârtie: 65-70g/mp", "Copertă: Carton", "Utilizare: Școală, birou, notițe"],
        images: ["images/products/caiete/caiet-a5-48-file-dictando-1.jpg", "images/products/caiete/caiet-a5-48-file-dictando-2.jpg"]
    },
    {
        id: "caiet-a5-48-file-mate",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A5, 48 file, mate, 65-70 g/mp.",
        longDesc: "Caiet A5 cu 48 file, tip mate, 65-70 g/mp. Coperta rezistentă, file albe de calitate superioară.",
        price: "2.00 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 48", "Tip: Mate", "Gramaj hârtie: 65-70g/mp", "Copertă: Carton Laminat", "Utilizare: Școală, birou, notițe"],
        images: ["images/products/caiete/caiet-a5-48-file-mate-1.jpg"]
    },
    {
        id: "caietm-a4-80-file-s1",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A4, 80 file, matematica.",
        longDesc: "Caiet A4 cu 80 file, tip matematica, cu spirala. Ideal pentru notițe detaliate.",
        price: "8.00 lei",
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
        price: "2.00 lei",
        author: "PrintExpress",
        features: ["Format: A5", "Număr file: 48", "Tip: Velin", "Gramaj hârtie: 80g/mp", "Copertă: Carton", "Utilizare: Școală, birou"],
        images: ["images/products/caiete/caietv-a5-48-file-1.jpg"]
    },
    {
        id: "caiet-a4-48-file-aritmetica",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A4, 48 file, matematica.",
        longDesc: "Caiet format A4, 48 file, tip matematica.",
        price: "5.00 lei",
        author: "Herlitz",
        features: ["Format: A4", "Număr file: 48", "Tip: Matematica", "Gramaj hârtie: 80g/mp", "Copertă: Polipropilena(plastic)"],
        images: ["images/products/caiete/caiet-a4-48-file-aritmetica.jpeg"]
    },
    {
        id: "caiet-a4-48-file-dictando",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A4, 48 file, dictando.",
        longDesc: "Caiet format A4, 48 file, tip dictando.",
        price: "5.00 lei",
        author: "Herlitz",
        features: ["Format: A4", "Număr file: 48", "Tip: Dictando", "Gramaj hârtie: 80g/mp", "Copertă: Polipropilena(plastic)"],
        images: ["images/products/caiete/caiet-a4-48-file-dictando.jpg"]
    },
    {
        id: "caiet-mic-muzica",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet pentru note muzicale, format mic.",
        longDesc: "Caiet special pentru educație muzicală, format mic, cu portative.",
        price: "3.00 lei",
        author: "Herlitz",
        features: ["Format: Mic", "Tip: Muzică (portative)", "Copertă: Carton", "Utilizare: Ora de muzică"],
        images: ["images/products/caiete/caiet-muzica-mic.jpg"]
    },
    {
        id: "caiet-a4-80-file-velin",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A4, 80 file, velin.",
        longDesc: "Caiet A4, 80 file, velin, copertă din policarbonat.",
        price: "10.00 lei",
        author: "Herlitz",
        features: ["Format: A4", "Număr file: 80", "Tip: Velin", "Copertă: Plastic", "Utilizare: Note, proiecte"],
        images: ["images/products/caiete/caiet-a4-80-file-velin.jpg"]
    },
    {
        id: "caiet-a4-60-file-dictando",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A4, 60 file, dictando.",
        longDesc: "Caiet format A4, 60 file, dictando, copertă design diverse modele.",
        price: "7.00 lei",
        author: "Herlitz",
        features: ["Format: A4", "Număr file: 60", "Tip: Dictando", "Modele: Diverse", "Copertă: Carton"],
        images: ["images/products/caiete/caiet-a4-60-file-dictando.jpg"]
    },
    {
        id: "caiet-biologie-geografie",
        categoryId: "caiete",
        title: " ",
        shortDesc: "Caiet A4 specializat.",
        longDesc: "Caiet A4 cu file speciale pentru biologie/geografie.",
        price: "6.00 lei",
        author: "Herlitz",
        features: ["Format: A4", "Număr file: 48", "Tip: Biologie/Geografie", "Copertă: Carton"],
        images: ["images/products/caiete/caiet-biologie-geografie.jpg"]
    },

    // --- CREIOANE ---
    {
        id: "creioane-bic",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set creioane colorate BIC.",
        longDesc: "Set de creioane colorate de la BIC, cu culori vii și intense, ideale pentru desen și colorat.",
        price: "18.00 lei",
        author: "BIC",
        features: ["Brand: BIC", "Culori: 12", "Tip: Creioane colorate"],
        images: ["images/products/creioane/bic.png"]
    },
    {
        id: "creioane-bic-kids",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate BIC Kids.",
        longDesc: "Creioanele BIC Kids oferă culori vii și intense. Mina moale este ușor de aplicat pe hârtie, iar tăietura specială a lemnului previne ruperea minei.",
        price: "20.00 lei",
        author: "BIC",
        features: ["Brand: BIC Kids", "Culori: 12", "Mină: Moale", "Culori: Vii și intense"],
        images: ["images/products/creioane/bic-kids.jpg", "images/products/creioane/bic-kids2.jpg"]
    },
    {
        id: "creioane-carioca-tita",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate rezistente la cădere.",
        longDesc: "Creioanele Carioca Tita sunt cunoscute pentru mina lor rezistentă la cădere (anti-break) și culorile strălucitoare. Vârful de 3mm le face ușor de ascuțit.",
        price: "18.00 lei",
        author: "Carioca",
        features: ["Brand: Carioca", "Culori: 12", "Rezistent la cădere", "Grosime mină: 3mm"],
        images: ["images/products/creioane/carioca-tita.jpg"]
    },
    {
        id: "creioane-daco-cc312t",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate cu ascuțitoare.",
        longDesc: "Setul Daco conține 12 creioane colorate cu secțiune triunghiulară (ergonomice) și mine foarte moi, rezistente la rupere. Include un ascuțitoare gratuit.",
        price: "10.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Culori: 12", "Formă: Triunghiulară", "Mină: Moale și rezistentă", "Bonus: Ascuțitoare inclusă"],
        images: ["images/products/creioane/daco-cc312t.jpg"]
    },
    {
        id: "creioane-herlitz-bicolor",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane bidirecționale (24 culori).",
        longDesc: "Creioane premium Herlitz cu vârf dublu, oferind 24 de culori în doar 12 creioane. Mina de 4mm, rotundă și rezistentă, ideală pentru tehnică mixtă.",
        price: "20.00 lei",
        author: "Herlitz",
        features: ["Brand: Herlitz", "Bucăți: 12", "Culori: 24 (bicolore)", "Mină: 4mm", "Tip: Rotund"],
        images: ["images/products/creioane/herlitz-bicolor.jpg"]
    },
    {
        id: "creioane-herlitz-ultrasoft",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane cu mină ultra moale.",
        longDesc: "Creioane Herlitz cu mină ultra-soft de 3.3mm pentru o acoperire rapidă și uniformă. Formă triunghiulară pentru o prindere corectă, rezistente la rupere.",
        price: "25.00 lei",
        author: "Herlitz",
        features: ["Brand: Herlitz", "Culori: 12", "Mină: Ultra Soft (3.3mm)", "Formă: Triunghiulară", "Rezistent la rupere"],
        images: ["images/products/creioane/herlitz-ultrasoft.png"]
    },
    {
        id: "creioane-maped-color-peps-monster",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate.",
        longDesc: "Creioanele Color'Peps vin cu un design extrem de atractiv pentru copii, cu monstruleți simpatici pe corpul creionului. Culori vii, mine rezistente.",
        price: "20.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Culori: 12", "Design: Monstruleți", "Mină: Rezistentă"],
        images: ["images/products/creioane/maped-color-peps-monster.jpg"]
    },
    {
        id: "creioane-maped-color-peps-strong",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate cu mină rezistentă.",
        longDesc: "Creioane special create pentru a fi rezistente la rupere, ideale pentru copiii care apasă tare. Culori intense și acoperire bună.",
        price: "20.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Culori: 12", "Tip: Strong", "Mină: Rezistentă la rupere"],
        images: ["images/products/creioane/maped-color-peps-strong.jpg"]
    },
    {
        id: "creioane-maped-harry-potter",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate, ediție Harry Potter.",
        longDesc: "Set de 12 creioane colorate Maped cu tematică Harry Potter. Culori intense și o copertă pe care o poți decupa și păstra.",
        price: "16.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Culori: 12", "Tematică: Harry Potter", "Include: Activitate pe ambalaj"],
        images: ["images/products/creioane/maped-harrypotter.jpg"]
    },
    {
        id: "creioane-maped-color-peps-oops",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate cu mină ștersabilă.",
        longDesc: "Creioanele Color'Peps Ôops! de la Maped sunt ideale pentru copii datorită minei ștersabile care permite corectarea ușoară a greșelilor. Vârful rezistent și culorile vii le fac perfecte pentru desen.",
        price: "22.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Culori: 12", "Tip: Ștersabile", "Mină: Rezistentă", "Vârf: Învelit"],
        images: ["images/products/creioane/mated-color-peps-oops.jpg"]
    },
    {
        id: "creioane-milan-1",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate Milan.",
        longDesc: "Creioane colorate de calitate superioară de la Milan. Mina moale și rezistentă, disponibilă în culori vii, cu corp hexagonal.",
        price: "20.00 lei",
        author: "Milan",
        features: ["Brand: Milan", "Culori: 12", "Formă: Hexagonală", "Mină: Moale"],
        images: ["images/products/creioane/milan-1.jpg"]
    },
    {
        id: "creioane-maped-acvatic",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate.",
        longDesc: "Creioanele Maped vin cu un design extrem de atractiv pentru copii, cu animalute simpatice pe corpul creionului. Culori vii, mine rezistente.",
        price: "18.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Culori: 12", "Design: Acvatic", "Mină: Rezistentă"],
        images: ["images/products/creioane/maped-acvatic.jpg"]
    },
    {
        id: "creioane-milla-metalic",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set creioane colorate cu efect metalic.",
        longDesc: "Creioane colorate cu miez special pentru efect metalic. Perfecte pentru a adăuga accente strălucitoare lucrărilor de artă.",
        price: "17.00 lei",
        author: "Milla",
        features: ["Brand: Milla", "Tip: Metalice", "Efect: Strălucitor"],
        images: ["images/products/creioane/milla-metallic.jpg"]
    },
    {
        id: "creioane-milla-pastel",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set creioane colorate cu tonuri pastelate.",
        longDesc: "Creioane colorate de înaltă calitate cu tonuri pastelate moi, ideale pentru tehnici de desen fine și colorat delicat.",
        price: "17.00 lei",
        author: "Milla",
        features: ["Brand: Milla", "Tip: Pastel", "Mină: Moale"],
        images: ["images/products/creioane/milla-pastel.jpg"]
    },
    {
        id: "creioane-pelikan-bicolor",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane cu vârf dublu.",
        longDesc: "Creioane Pelikan Bicolor cu vârf dublu pentru 24 de culori. Mina moale și rezistentă, includ 2 culori metalice. Certificat FSC.",
        price: "20.00 lei",
        author: "Pelikan",
        features: ["Brand: Pelikan", "Bucăți: 12", "Culori: 24", "Mină: Moale", "Extra: 2 culori metalice"],
        images: ["images/products/creioane/pelikan-bicolor.jpg"]
    },
    {
        id: "creioane-pelikan-2",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Set 12 creioane colorate pelikan.",
        longDesc: "Creioane colorate de calitate superioară de la Pelikan. Mina moale și rezistentă, disponibilă în culori vii, cu corp hexagonal.",
        price: "20.00 lei",
        author: "Pelikan",
        features: ["Brand: Pelikan", "Culori: 12", "Formă: Hexagonală", "Diametru mină: 3mm"],
        images: ["images/products/creioane/pelikan2.jpg"]
    },
    {
        id: "creioane-cerate-1",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Creioane cerate Maped.",
        longDesc: "Creioane cerate pentru desen și colorat.",
        price: "15.00 lei",
        author: "Maped",
        features: ["Tip: Cerate"],
        images: ["images/products/creioane/maped-creioane-cerate.jpg"]
    },
    {
        id: "creioane-cerate-2",
        categoryId: "creioane",
        title: " ",
        shortDesc: "Creioane cerate.",
        longDesc: "Creioane cerate pentru desen și colorat.",
        price: "18.00 lei",
        author: "Carioca",
        features: ["Tip: Cerate"],
        images: ["images/products/creioane/carioca-creion-cerat.jpg"]
    },

    // --- CARIOCI ȘI MARKERE ---
    {
        id: "carioci-bic",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Set carioci BIC.",
        longDesc: "Carioci de calitate superioară de la BIC, ideale pentru desen și colorat.",
        price: "22.00 lei",
        author: "BIC",
        features: ["Brand: BIC", "Tip: Carioci"],
        images: ["images/products/carioci/bic-carioci.jpg"]
    },
    {
        id: "carioci-carioca-joy",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Set carioci Carioca Joy.",
        longDesc: "Carioci Carioca Joy, culori vii, ideale pentru copii.",
        price: "16.00 lei",
        author: "Carioca",
        features: ["Brand: Carioca", "Tip: Carioci"],
        images: ["images/products/carioci/carioca-joy.jpg"]
    },
    {
        id: "carioci-milan",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Set carioci Milan.",
        longDesc: "Carioci de calitate superioară de la Milan.",
        price: "20.00 lei",
        author: "Milan",
        features: ["Brand: Milan", "Tip: Carioci"],
        images: ["images/products/carioci/carioci-milan.jpg"]
    },
    {
        id: "carioci-daco-bi",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Set carioci Daco bicolore.",
        longDesc: "Carioci Daco cu vârf dublu.",
        price: "25.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Tip: Bicolore"],
        images: ["images/products/carioci/daco-carioci-bi.jpg"]
    },
    {
        id: "carioci-daco-unicolora",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Carioci Daco unicolore.",
        longDesc: "Carioci Daco într-o singură culoare.",
        price: "15.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Tip: Unicolore"],
        images: ["images/products/carioci/daco-unicolora.jpg"]
    },
    {
        id: "carioci-jumbo-felt-pens",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Carioci Jumbo Felt Pens.",
        longDesc: "Carioci cu vârf gros, ideale pentru copii mici.",
        price: "20.00 lei",
        author: "PrintExpress",
        features: ["Tip: Jumbo", "Carioci"],
        images: ["images/products/carioci/jumbo-felt-pens.jpg"]
    },
    {
        id: "carioci-maped-color-peps",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Carioci Maped Color'Peps.",
        longDesc: "Carioci Maped Color'Peps, culori intense.",
        price: "15.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Tip: Carioci"],
        images: ["images/products/carioci/maped-carioci-color-peps.jpg"]
    },
    {
        id: "set-maped-creioane-carioci",
        categoryId: "carioci",
        title: " ",
        shortDesc: "Set Maped creioane și carioci.",
        longDesc: "Set mixt de la Maped conținând creioane colorate și carioci.",
        price: "30.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Conținut: Creioane și Carioci"],
        images: ["images/products/carioci/maped-creioane-si-carioci.jpg"]
    },

    // --- ACUARELE ȘI VOPSELE ---
    {
        id: "vopsea-pelikan-opaque-12",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set vopsea opacă Pelikan, 12 culori, include pensulă.",
        longDesc: "Setul de vopsea opacă (Deckfarbkasten) Pelikan oferă 12 culori vibrante, ideale pentru tehnicile de pictură școlară. Include o pensulă de calitate.",
        price: "45.00 lei",
        author: "Pelikan",
        features: ["Brand: Pelikan", "Culori: 12", "Tip: Opacă/Gouache", "Include: Pensulă", "Origine: Made in Germany"],
        images: ["images/products/acuarele/pelikan1.jpg"]
    },
    {
        id: "acuarele-pelikan-12",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set acuarele Pelikan, 12 culori, include pensulă.",
        longDesc: "Acuarele Pelikan cu 12 culori intense, ușor de amestecat. Cutia include o pensulă pentru aplicare.",
        price: "30.00 lei",
        author: "Pelikan",
        features: ["Brand: Pelikan", "Culori: 12", "Tip: Acuarelă", "Include: Pensulă"],
        images: ["images/products/acuarele/pelikan2.jpg"]
    },
    {
        id: "acuarele-carioca-12",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set acuarele Carioca Acquarell, 12 culori.",
        longDesc: "Set de acuarele Carioca cu 12 pastile rotunde de 30mm, formulă îmbunătățită. Include o pensulă.",
        price: "20.00 lei",
        author: "Carioca",
        features: ["Brand: Carioca", "Culori: 12", "Diametru pastile: 30mm", "Include: Pensulă", "Formulă: Îmbunătățită"],
        images: ["images/products/acuarele/carioca1.jpg"]
    },
    {
        id: "vopsea-tempera-12-culori",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set vopsea tempera 12 culori, 30ml.",
        longDesc: "Set de vopsea tempera cu 12 culori, ambalate în recipiente de 30ml. Ideale pentru proiecte școlare.",
        price: "25.00 lei",
        author: "PrintExpress",
        features: ["Culori: 12", "Volum: 30ml", "Tip: Tempera"],
        images: ["images/products/acuarele/oiar.jpg"]
    },
    {
        id: "acuarele-ecada-12",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set acuarele Ecada, 12 culori, include pensulă.",
        longDesc: "Set de acuarele Ecada cu 12 culori, ideal pentru elevi. Cutia include o pensulă de lemn.",
        price: "12.00 lei",
        author: "Ecada",
        features: ["Brand: Ecada", "Culori: 12", "Tip: Acuarelă", "Include: Pensulă"],
        images: ["images/products/acuarele/ecada1.jpg"]
    },
    {
        id: "vopsea-tempera-tuburi",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set vopsea tempera în tuburi, calitate superioară.",
        longDesc: "Vopsea tempera ambalată în tuburi, ideală pentru pictură pe diverse suprafețe. Culori vii și acoperire bună.",
        price: "30.00 lei",
        author: "PrintExpress",
        features: ["Tip: Tempera", "Ambalare: Tuburi", "Calitate: Superioară"],
        images: ["images/products/acuarele/milla1.jpg"]
    },
    {
        id: "acuarele-daco-28",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set acuarele Daco, 28 culori.",
        longDesc: "Setul complet de acuarele Daco conține 28 de culori (AR280) cu pastile de 28mm. Cutia robustă include o pensulă.",
        price: "35.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Culori: 28", "Diametru pastile: 28mm", "Include: Pensulă", "Model: AR280"],
        images: ["images/products/acuarele/daco1.jpg"]
    },
    {
        id: "vopsea-acrilica-daco-12",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set vopsea acrilică Daco, 12 culori.",
        longDesc: "Set de 12 culori acrilice Daco (CU312) în tuburi. Acoperire excelentă, uscare rapidă, ideale pentru pânză și alte materiale.",
        price: "30.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Culori: 12", "Tip: Acrilic", "Model: CU312"],
        images: ["images/products/acuarele/daco2.jpg"]
    },
    {
        id: "vopsea-guasa-daco-12",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Set vopsea guașă Daco Brilia, 12 culori.",
        longDesc: "Culori guașă Daco Brilia (CU220) în 12 nuanțe, ambalate în recipiente de 20ml. Vopsea lavabilă, non-toxică, cu acoperire excelentă.",
        price: "35.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Culori: 12", "Tip: Guașă", "Volum: 20ml", "Model: CU220"],
        images: ["images/products/acuarele/daco3.jpg"]
    },
    {
        id: "vopsea-tempera-daco-250ml",
        categoryId: "vopsele",
        title: " ",
        shortDesc: "Vopsea tempera Daco, 250ml, culoarea negru.",
        longDesc: "Vopsea tempera lichidă Daco, într-un flacon de 250ml. Culoarea Negru (Lamp Black), ideală pentru completarea seturilor de pictură.",
        price: "15.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Volum: 250ml", "Tip: Tempera lichidă", "Culoare: Negru (Lamp Black)"],
        images: ["images/products/acuarele/daco4.jpg"]
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
    },
    {
        id: "album-foto-daco",
        categoryId: "accesorii-birou",
        title: " ",
        shortDesc: "Album foto pentru amintiri.",
        longDesc: "Album foto Daco, diverse dimensiuni și modele.",
        price: "45.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Tip: Album foto", "Dimensiuni: 10x15 / 13x18 / 15x20"],
        images: ["images/products/birotica/album-foto-daco.jpg"]
    },
    {
        id: "set-curatare-ecran",
        categoryId: "accesorii-birou",
        title: " ",
        shortDesc: "Spray + microfibră pentru ecrane.",
        longDesc: "Set complet pentru curățarea ecranelor (laptop, telefon, TV).",
        price: "15.00 lei",
        author: "Daco",
        features: ["Conținut: Spray + lavetă microfibră", "Utilizare: Ecrane, ochelari"],
        images: ["images/products/birotica/set-curatare-ecran.jpg"]
    },
    {
        id: "suport-hartie-birou",
        categoryId: "accesorii-birou",
        title: " ",
        shortDesc: "Suport pentru hârtie A4.",
        longDesc: "Suport din plastic pentru organizarea hârtiilor A4 pe birou.",
        price: "10.00 lei",
        author: "PrintExpress",
        features: ["Material: Plastic", "Format: A4", "Utilizare: Organizare birou"],
        images: ["images/products/birotica/suport-hartie-birou.jpg"]
    },

    // --- TEHNOLOGIE ȘI ACCESORII ---
    {
        id: "tehnologie-accharger-1",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Încărcător auto dual USB-A + USB-C cu Power Delivery.",
        longDesc: "Încărcător auto Cellara cu porturi USB-A și USB-C, suportă Power Delivery (20W) și încărcare rapidă 3A.",
        price: "35.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Porturi: USB-A + USB-C", "PD Function: 20W", "Output USB A: 3A"],
        images: ["images/products/technologie/accharger-1.jpg"]
    },
    {
        id: "tehnologie-achcharger2",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Încărcător rețea 20W USB-C cu cablu Type-C la iPhone.",
        longDesc: "Set încărcător Cellara 20W cu tehnologie GaN, dimensiuni compacte și încărcare rapidă. Include cablu Type-C la iPhone.",
        price: "45.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Putere: 20W", "Tehnologie: GaN", "Conector: Type-C", "Include: Cablu Type-C to iPh"],
        images: ["images/products/technologie/achcharger2.jpg"]
    },
    {
        id: "tehnologie-accharger3",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Încărcător rețea 25W USB-C cu cablu Type-C la Type-C.",
        longDesc: "Set încărcător Cellara 25W cu tehnologie GaN. Include cablu Type-C la Type-C pentru încărcare rapidă.",
        price: "50.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Putere: 25W", "Tehnologie: GaN", "Conector: Type-C", "Include: Cablu Type-C to Type-C"],
        images: ["images/products/technologie/accharger3.jpg"]
    },
    {
        id: "tehnologie-accharger4",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Încărcător rețea 25W cu porturi USB-C și USB-A.",
        longDesc: "Încărcător Cellara de 25W cu tehnologie GaN, prevăzut cu port USB-C (PD) și USB-A (3A).",
        price: "40.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Putere: 25W", "Porturi: USB-C + USB-A", "Tehnologie: GaN", "Output USB A: 3A"],
        images: ["images/products/technologie/accharger4.jpg"]
    },
    {
        id: "tehnologie-achcharger5",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Încărcător rețea 20W USB-C compact.",
        longDesc: "Încărcător Cellara 20W cu port USB-C, tehnologie GaN pentru dimensiuni reduse și încărcare rapidă.",
        price: "30.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Putere: 20W", "Port: USB-C", "Tehnologie: GaN"],
        images: ["images/products/technologie/achcharger5.jpg"]
    },
    {
        id: "tehnologie-achcharger6",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Încărcător rețea 2.4A cu port USB-A.",
        longDesc: "Încărcător Cellara cu port USB-A, curent de încărcare de 2.4A, ideal pentru încărcare rapidă.",
        price: "20.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Curent: 2.4A", "Port: USB-A"],
        images: ["images/products/technologie/achcharger6.jpg"]
    },
    {
        id: "tehnologie-achcharger7",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Încărcător rețea Mobik 20W USB-C.",
        longDesc: "Încărcător Mobik de 20W cu port USB-C, design compact și încărcare rapidă.",
        price: "25.00 lei",
        author: "Mobik",
        features: ["Brand: Mobik", "Putere: 20W", "Port: USB-C"],
        images: ["images/products/technologie/achcharger7.jpg"]
    },
    {
        id: "tehnologie-daracable",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Cablu de date Mobik Type-C.",
        longDesc: "Cablu de date și încărcare Mobik cu conectoare Type-C.",
        price: "40.00 lei",
        author: "Mobik",
        features: ["Brand: Mobik", "Tip: Data Cable", "Conector: Type-C"],
        images: ["images/products/technologie/daracable.jpg"]
    },
    {
        id: "tehnologie-datacable-1m-black",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Cablu de date Type-C la Type-C, negru, 1m.",
        longDesc: "Cablu de date și încărcare Cellara Type-C la Type-C, lungime 1m, culoare neagră.",
        price: "39.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Conectori: Type-C to Type-C", "Lungime: 1m", "Culoare: Negru"],
        images: ["images/products/technologie/datacable-1m-black.jpg"]
    },
    {
        id: "tehnologie-datacable-1m-c-to-ip",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Cablu de date Type-C la iPhone, alb, 1m.",
        longDesc: "Cablu de date și încărcare Cellara Type-C la iPhone, lungime 1m, culoare albă.",
        price: "79.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Conectori: Type-C to iPh", "Lungime: 1m", "Culoare: Alb"],
        images: ["images/products/technologie/datacable-1m-c-to-ip.jpg"]
    },
    {
        id: "tehnologie-datacable-1m-white",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Cablu de date Type-C la Type-C, alb, 1m.",
        longDesc: "Cablu de date și încărcare Cellara Type-C la Type-C, lungime 1m, culoare albă, curent 3A.",
        price: "39.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Conectori: Type-C to Type-C", "Lungime: 1m", "Culoare: Alb", "Amperaj: 3A"],
        images: ["images/products/technologie/datacable-1m-white.jpg"]
    },
    {
        id: "tehnologie-datacable-2m-white",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Cablu de date Type-C la Type-C, alb, 2m.",
        longDesc: "Cablu de date și încărcare Cellara Type-C la Type-C, lungime 2m, culoare albă, curent 3A.",
        price: "45.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Conectori: Type-C to Type-C", "Lungime: 2m", "Culoare: Alb", "Amperaj: 3A"],
        images: ["images/products/technologie/datacable-2m-white.jpg"]
    },
    {
        id: "tehnologie-earphones-jack",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Căști cu fir Cellara, jack 3.5mm.",
        longDesc: "Căști Cellara cu sunet stereo de calitate, mufă jack de 3.5mm, design ergonomic și control volum.",
        price: "39.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Sunet: Stereo", "Mufă: 3.5mm Jack", "Culori: Diverse"],
        images: ["images/products/technologie/earphones-jack.jpg"]
    },
    {
        id: "tehnologie-35-jack-to-jack",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Cablu audio 3.5mm Jack la 3.5mm Jack, 1m.",
        longDesc: "Cablu audio Cellara 3.5mm la 3.5mm, lungime 1m, pentru transmisie Hi-Fi.",
        price: "29.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Conectori: 3.5mm to 3.5mm", "Lungime: 1m", "Calitate: Hi-Fi"],
        images: ["images/products/technologie/35-jack-to-jack.jpg"]
    },
    {
        id: "tehnologie-flashdrive-16gb",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Memory Stick USB 2.0, 16GB, carcasă aluminiu.",
        longDesc: "Memorie USB Platine de 16GB cu mufă USB 2.0 și carcasă din aluminiu. Potrivit pentru notebook, PC și Car Hi-Fi.",
        price: "45.00 lei",
        author: "Platine",
        features: ["Brand: Platine", "Capacitate: 16GB", "Interfață: USB 2.0", "Material: Aluminiu"],
        images: ["images/products/technologie/flashdrive-16gb.jpg"]
    },
    {
        id: "tehnologie-flashdrive-32gb",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Memory Stick USB 2.0, 32GB, carcasă aluminiu.",
        longDesc: "Memorie USB Platine de 32GB cu mufă USB 2.0 și carcasă din aluminiu. Potrivit pentru notebook, PC și Car Hi-Fi.",
        price: "55.00 lei",
        author: "Platine",
        features: ["Brand: Platine", "Capacitate: 32GB", "Interfață: USB 2.0", "Material: Aluminiu"],
        images: ["images/products/technologie/flashdrive-32gb.jpg"]
    },
    {
        id: "tehnologie-pen-10-in-1",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Set pix multifuncțional 10 în 1.",
        longDesc: "Pix multifuncțional Mobik cu 10 utilizări: lanternă LED, riglă, stylus, șurubelniță, deschizător de sticle și altele.",
        price: "65.00 lei",
        author: "Mobik",
        features: ["Brand: Mobik", "Tip: 10-in-1", "Funcții: LED, Riglă, Stylus, Șurubelniță, Deschizător"],
        images: ["images/products/technologie/pen-10-in-1.jpg"]
    },
    {
        id: "tehnologie-pen-6-in-1",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Set pix multifuncțional 6 în 1.",
        longDesc: "Pix multifuncțional Mobik cu 6 utilizări: stylus, nivel cu bulă, riglă, vârf de șurubelniță. Include 3 rezerve de cerneală.",
        price: "50.00 lei",
        author: "Mobik",
        features: ["Brand: Mobik", "Tip: 6-in-1", "Funcții: Stylus, Nivel, Riglă, Șurubelniță", "Include: 3 rezerve"],
        images: ["images/products/technologie/pen-6-in-1.jpg"]
    },
    {
        id: "tehnologie-portable-speaker",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Boxă portabilă Bluetooth, rezistentă la apă IPX5.",
        longDesc: "Boxă portabilă Mobik cu conectivitate wireless, sunet HD, rezistentă la apă (IPX5) și baterie de lungă durată.",
        price: "65.00 lei",
        author: "Mobik",
        features: ["Brand: Mobik", "Conectivitate: Wireless/Bluetooth", "Rezistență: IPX5 (Waterproof)", "Sunet: HD"],
        images: ["images/products/technologie/portable-speaker.jpg"]
    },
    {
        id: "tehnologie-powerbank-10kmah",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Baterie externă 10000 mAh cu afișaj LED.",
        longDesc: "Power bank Mobik cu capacitate de 10000 mAh, ieșire PD, cabluri multiple integrate, afișaj LED și încărcare rapidă.",
        price: "100.00 lei",
        author: "Mobik",
        features: ["Brand: Mobik", "Capacitate: 10000 mAh", "Ieșire: PD Output", "Extra: Afișaj LED", "Extra: Cabluri multiple"],
        images: ["images/products/technologie/powerbank-10kmah.jpg"]
    },
    {
        id: "tehnologie-wireless-headset",
        categoryId: "tehnologie",
        title: " ",
        shortDesc: "Căști wireless Soundrex cu încărcare în carcasă.",
        longDesc: "Căști wireless Cellara Soundrex cu chip de înaltă calitate, operare cu un singur buton, carcasă de încărcare și design confortabil.",
        price: "129.00 lei",
        author: "Cellara",
        features: ["Brand: Cellara", "Model: Soundrex", "Tip: Wireless", "Extra: Carcasă încărcare", "Operare: One-Button"],
        images: ["images/products/technologie/wireless-headset.jpg"]
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
