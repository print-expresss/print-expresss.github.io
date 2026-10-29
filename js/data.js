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
    { id: "salut", title: "Salut", shortDesc: "Caiete dictando, matematică, de la NEBO, Herlitz și altele.", color: "gradient-1", image: "images/banner-caiete.jpg" },
    { id: "pixuri", title: "Pixuri și stilouri", shortDesc: "Pixuri, stilouri, rezerve, markere și highlighters.", color: "gradient-2", image: "images/banner-pixuri.jpg" },
    { id: "creioane", title: "Creioane", shortDesc: "Creioane colorate, cerate, mecanice și seturi pentru desen.", color: "gradient-3", image: "images/banner-creioane.jpg" },
    { id: "carti", title: "Cărți și auxiliare", shortDesc: "Cărți de colorat, ghicitori, materiale educaționale.", color: "gradient-4", image: "images/banner-carti.jpg" },
    { id: "rechizite", title: "Rechizite școlare", shortDesc: "Seturi complete, rigle, lipici, plastilină.", color: "gradient-5", image: "images/banner-rechizite.jpg" },
    { id: "accesorii-birou", title: "Accesorii birou", shortDesc: "Suporturi, organizatoare, albume foto, agende.", color: "gradient-6", image: "images/banner-accesorii.jpg" }
];

const PRODUCTS = [
    // --- CAIETE ---
    {
        id: "caiet-a5-48-file-dictando",
        categoryId: "caiete",
        title: "Caiet A5 48 file Dictando",
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
        title: "Caiet A5 48 file Matematică",
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
        title: "Caiet A4 80 file Matematică (Spirală)",
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
        title: "Caiet A5 48 file Velin",
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
        title: "Caiet A4 48 file Matematică",
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
        title: "Caiet A4 48 file Dictando",
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
        title: "Caiet Muzică (format mic)",
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
        title: "Caiet A4 80 file Velin",
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
        title: "Caiet A4 60 file Dictando",
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
        title: "Caiet Biologie/Geografie A4",
        shortDesc: "Caiet A4 specializat.",
        longDesc: "Caiet A4 cu file speciale pentru biologie/geografie.",
        price: "6.00 lei",
        author: "Herlitz",
        features: ["Format: A4", "Număr file: 48", "Tip: Biologie/Geografie", "Copertă: Carton"],
        images: ["images/products/caiete/caiet-biologie-geografie.jpg"]
    },

    /*
    {
        id: "pix-albastru",
        categoryId: "pixuri",
        title: "Pix semigel albastru",
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
        title: "Highlighter Pelikan",
        shortDesc: "Highlighter Pelikan",
        longDesc: "Highlighter Pelikan, cu 3 moduri de scriere diferita datorita varfului special",
        price: "4.00 lei",
        author: "Pelikan",
        features: ["Culoare: Roz/Galben/Oranj/Verde/Albatru/Rosu", "Tip cerneală: Lichidă, Reincarcabil", "Brand: Pelikan", "Utilizare: Evidentiere text"],
        images: ["images/products/pixuri/highlighter-pelikan-1.jpg"]
    },
    {
        id: "pix-frixion",
        categoryId: "pixuri",
        title: "Pix Frixion Fineliner",
        shortDesc: "Pix Frixion Fineliner, diverse culori",
        longDesc: "Pix Frixion cu stergere prin frecare.",
        price: "12.00 lei",
        author: "Pilot",
        features: ["Dimensiune scriere: 0.45mm", "Culoare: Diverse", "Tip: Cu cerneală", "Brand: Frixion", "Utilizare: Scriere zilnica"],
        images: ["images/products/pixuri/pix-frixion-1.jpg", "images/products/pixuri/pix-frixion-2.jpg"]
    },
    {
        id: "marker-tabla",
        categoryId: "pixuri",
        title: "Marker pentru tablă",
        shortDesc: "Marker pentru tablă, vârf rotund(F) sau ascutit(M).",
        longDesc: "Marker pentru tablă, cu cerneală ștergabilă. Vârf rotund(F) sau ascutit(M).",
        price: "5.50 lei",
        author: "Pelikan",
        features: ["Culoare: Negru/Albastru/Rosu/Verde", "Vârf: Rotund(F)/Ascutit(M)", "Tip cerneală: Ștergabilă", "Brand: Pelikan", "Utilizare: Tablă albă"],
        images: ["images/products/pixuri/marker-tabla-pelikan-1.jpg"]
    },
    {
        id: "pix-pelikan-albastru",
        categoryId: "pixuri",
        title: "Pix Pelikan albastru",
        shortDesc: "Pix cu bilă Pelikan, albastru.",
        longDesc: "Pix clasic cu bilă de la Pelikan, scriere fluida.",
        price: "3.50 lei",
        author: "Pelikan",
        features: ["Culoare: Albastru", "Brand: Pelikan", "Tip: Cu bilă", "Utilizare: Scris zilnic"],
        images: ["images/products/pixuri/pix-pelikan-albastru.jpg"]
    },
    {
        id: "pix-erichkrause",
        categoryId: "pixuri",
        title: "Pix ErichKrause",
        shortDesc: "Pix ErichKrause, diverse culori.",
        longDesc: "Pix de calitate superioară ErichKrause.",
        price: "3.00 lei",
        author: "ErichKrause",
        features: ["Culoare: Albastru/Negru/Rosu/Verde", "Brand: ErichKrause", "Tip: Cu bilă"],
        images: ["images/products/pixuri/pix-erichkrause.jpg"]
    },
    {
        id: "pix-triball",
        categoryId: "pixuri",
        title: "Pix Triball (Pensan)",
        shortDesc: "Pix cu 3 culori.",
        longDesc: "Pix multifuncțional cu 3 culori, brand Pensan.",
        price: "8.00 lei",
        author: "Pensan",
        features: ["Culori: Albastru, Negru, Rosu", "Brand: Pensan", "Tip: Multicolor"],
        images: ["images/products/pixuri/pix-triball-pensan.jpg"]
    },
    {
        id: "pix-set-8-culori",
        categoryId: "pixuri",
        title: "Set 8 Pixuri Colorate (Pensan)",
        shortDesc: "Set 8 pixuri colorate, vârf 1.0mm.",
        longDesc: "Set de 8 pixuri cu gel colorate, ideale pentru desen și notițe.",
        price: "3.00 lei",
        author: "Pensan",
        features: ["Conținut: 8 pixuri", "Culori: Asortate", "Vârf: 1.0mm", "Brand: Pensan"],
        images: ["images/products/pixuri/pix-set-8-culori-pensan.jpg"]
    },
    {
        id: "stilou-daco",
        categoryId: "pixuri",
        title: "Stilou Daco",
        shortDesc: "Stilou rezervă cu cerneală ștergabilă.",
        longDesc: "Stilou Daco, include rezerve. Cerneală ștergabilă.",
        price: "15.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Tip: Stilou", "Cerneală: Ștergabilă", "Include: Rezerve"],
        images: ["images/products/pixuri/stilou-daco.jpg"]
    },
    {
        id: "pix-stersabil-you-and-me",
        categoryId: "pixuri",
        title: "Pix ștersabil 'you & me'",
        shortDesc: "Pix cu cerneală ștergabilă, diverse modele.",
        longDesc: "Pix cu cerneală ștergabilă prin frecare, modele simpatice 'you & me'.",
        price: "10.00 lei",
        author: "Daco",
        features: ["Tip: Ștergabil", "Modele: 'you & me'", "Culori: Albastru, Negru, Roșu"],
        images: ["images/products/pixuri/pix-stersabil-you-and-me.jpg"]
    },
    {
        id: "marker-permanent",
        categoryId: "pixuri",
        title: "Marker Permanent",
        shortDesc: "Marker permanent pentru CD/DVD sau alte suprafețe.",
        longDesc: "Marker permanent cu vârf fin, rezistent la apă.",
        price: "6.00 lei",
        author: "Daco",
        features: ["Tip: Permanent", "Utilizare: CD/DVD, Plastic, Metal", "Culori: Negru, Albastru, Roșu"],
        images: ["images/products/pixuri/marker-permanent.jpg"]
    },
    {
        id: "creion-mecanic-maped",
        categoryId: "pixuri",
        title: "Creion mecanic Maped",
        shortDesc: "Creion mecanic cu mină 0.5mm/0.7mm.",
        longDesc: "Creion mecanic premium Maped, include mine.",
        price: "8.00 lei",
        author: "Maped",
        features: ["Brand: Maped", "Tip: Mecanic", "Dimensiune mină: 0.5mm/0.7mm"],
        images: ["images/products/pixuri/creion-mecanic-maped.jpg"]
    }, */

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
        title: "  ",
        shortDesc: "Set 12 creioane colorate BIC Kids.",
        longDesc: "Creioanele BIC Kids oferă culori vii și intense. Mina moale este ușor de aplicat pe hârtie, iar tăietura specială a lemnului previne ruperea minei.",
        price: "20.00 lei",
        author: "BIC",
        features: ["Brand: BIC Kids", "Culori: 12", "Mină: Moale", "Culori: Vii și intense"],
        images: ["images/products/creioane/bic-kids.jpg"]
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

    /*
    {
        id: "carti-copii",
        categoryId: "carti",
        title: "Carte de colorat cu ghicitori",
        shortDesc: "Carte de colorat cu ghicitori",
        longDesc: "Carte educativa de colorat cu ghicitori",
        price: "19.00 lei",
        author: "Gama",
        features: ["Ilustrații colorate", "Povești clasice", "Educative", "Grupe vârstă"],
        images: ["images/products/carti/carte-de-colorat-ghicitori.jpg"]
    },
    {
        id: "carte-colorat-sirena",
        categoryId: "carti",
        title: "Carte de colorat și activități (Sirenă)",
        shortDesc: "Carte cu activități și abțibilduri.",
        longDesc: "Carte de colorat cu tematică marină (sirenă), include abțibilduri.",
        price: "10.00 lei",
        author: "PrintExpress",
        features: ["Tematica: Sirenă", "Include: Abțibilduri", "Format: Mic"],
        images: ["images/products/carti/carte-colorat-sirena.jpg"]
    }, 

    // --- RECHIZITE ---
    {
        id: "set-rechizite-primar",
        categoryId: "rechizite",
        title: "Set complet rechizite Primar",
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
        title: "Set complet rechizite Gimnaziu",
        shortDesc: "Set complet pentru clasele V-VIII.",
        longDesc: "Set de rechizite pentru gimnaziu: caiete specializate, instrumente geometrice, markere și materiale pentru toate materiile.",
        price: "129.00 lei",
        author: "PrintExpress",
        features: ["Conținut: 25+ piese", "Include: Caiete specializate", "Include: Instrumente geometrice", "Ciclu: Gimnaziu (V-VIII)", "Ambalaj: Cutie"],
        images: ["images/products/rechizite/set-rechizite-2.jpg"]
    },
    {
        id: "plastilina-daco",
        categoryId: "rechizite",
        title: "Plastilină Daco",
        shortDesc: "Plastilină multi-culori.",
        longDesc: "Cutie cu plastilină multi-culori Daco, ideală pentru modelaj.",
        price: "12.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Culori: Multiple", "Tip: Plastilină", "Ambalaj: Cutie plastic"],
        images: ["images/products/rechizite/plastilina-daco.jpg"]
    },
    {
        id: "lipici-solid-daco",
        categoryId: "rechizite",
        title: "Lipici solid Daco",
        shortDesc: "Lipici solid, 20g.",
        longDesc: "Lipici solid (sili-glue) Daco, uscare rapidă, non-toxic.",
        price: "5.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Tip: Solid", "Non-toxic", "Utilizare: Hârtie, carton"],
        images: ["images/products/rechizite/lipici-solid-daco.jpg"]
    },
    {
        id: "lipici-roller",
        categoryId: "rechizite",
        title: "Lipici Roller",
        shortDesc: "Lipici cu bandă, 50m.",
        longDesc: "Lipici roller, aplicare curată, ideal pentru școală și birou.",
        price: "9.00 lei",
        author: "Daco",
        features: ["Tip: Roller", "Lungime bandă: 50m", "Non-toxic", "Aplicare curată"],
        images: ["images/products/rechizite/lipici-roller.jpg"]
    },
    {
        id: "set-geometrie",
        categoryId: "rechizite",
        title: "Set Geometrie",
        shortDesc: "Trusă geometrie completă.",
        longDesc: "Trusă de geometrie cu riglă, echer, raportor și compas.",
        price: "15.00 lei",
        author: "Daco",
        features: ["Conținut: Riglă, echer, raportor, compas", "Material: Plastic", "Utilizare: Matematică, Desen"],
        images: ["images/products/rechizite/set-geometrie.jpg"]
    },
    {
        id: "corector-banda-daco",
        categoryId: "rechizite",
        title: "Corector bandă Daco",
        shortDesc: "Corector sub formă de bandă.",
        longDesc: "Corector bandă Daco, uscare instantanee, aplicare curată.",
        price: "8.00 lei",
        author: "Daco",
        features: ["Brand: Daco", "Tip: Bandă corectoare", "Aplicare: Curată"],
        images: ["images/products/rechizite/corector-banda-daco.jpg"]
    },
    {
        id: "rigla-30cm",
        categoryId: "rechizite",
        title: "Riglă 30cm",
        shortDesc: "Riglă plastic 30cm.",
        longDesc: "Riglă din plastic transparent, lungime 30cm.",
        price: "3.00 lei",
        author: "PrintExpress",
        features: ["Lungime: 30cm", "Material: Plastic", "Marcaje: Clari"],
        images: ["images/products/rechizite/rigla-30cm.jpg"]
    }, */

    // --- ACCESORII BIROU ---
    {
        id: "suport-pixuri",
        categoryId: "accesorii-birou",
        title: "Suport pentru pixuri și creioane",
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
        title: "Suport telefon",
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
        title: "Album Foto Daco",
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
        title: "Set curățare ecran",
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
        title: "Suport hârtie birou",
        shortDesc: "Suport pentru hârtie A4.",
        longDesc: "Suport din plastic pentru organizarea hârtiilor A4 pe birou.",
        price: "10.00 lei",
        author: "PrintExpress",
        features: ["Material: Plastic", "Format: A4", "Utilizare: Organizare birou"],
        images: ["images/products/birotica/suport-hartie-birou.jpg"]
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
