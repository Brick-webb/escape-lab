const GAME_SECTORS = [
    {
        title: "AULA 1: MATEMATICA", color: 0x00f0ff, pos: { x: -21, z: -18 },
        questPos: { x: -21, z: -21.5 }, doorSide: "south",
        questions: [
            { q: "Quanto fa 7 per 8?", options: ["54", "56", "64", "48"], correct: 1, explanation: "7 x 8 fa 56." },
            { q: "Qual è la radice quadrata di 81?", options: ["7", "8", "9", "10"], correct: 2, explanation: "9 x 9 fa 81." },
            { q: "Se un articolo costa 50€ ed è scontato del 20%, quanto costa?", options: ["35€", "40€", "45€", "30€"], correct: 1, explanation: "Il 20% di 50 è 10, quindi 50 - 10 = 40€." },
            { q: "Quanti gradi misura un angolo retto?", options: ["45°", "90°", "180°", "360°"], correct: 1, explanation: "L'angolo retto misura esattamente 90 gradi." },
            { q: "Come si chiama un poligono con 5 lati?", options: ["Quadrato", "Esagono", "Pentagono", "Ottagono"], correct: 2, explanation: "Il pentagono ha 5 lati e 5 angoli." },
            { q: "Quanto fa 3 alla seconda (3²)?", options: ["6", "9", "8", "12"], correct: 1, explanation: "Tre alla seconda significa 3 x 3 = 9." },
            { q: "Quale frazione è equivalente a 1/2?", options: ["2/4", "1/3", "3/4", "2/3"], correct: 0, explanation: "Moltiplicando numeratore e denominatore per 2 si ottiene 2/4." },
            { q: "Se compri 3 quaderni a 2€ l'uno e paghi con una banconota da 10€, quanto ti danno di resto?", options: ["2€", "4€", "5€", "3€"], correct: 1, explanation: "3 x 2 = 6€. 10 - 6 = 4€ di resto." },
            { q: "Qual è il perimetro di un quadrato con il lato di 5 cm?", options: ["10 cm", "15 cm", "20 cm", "25 cm"], correct: 2, explanation: "Il perimetro si calcola moltiplicando il lato per 4 (5 x 4 = 20)." },
            { q: "Come si chiama il segmento che unisce il centro di un cerchio a un punto qualsiasi della circonferenza?", options: ["Diametro", "Raggio", "Corda", "Arco"], correct: 1, explanation: "Il raggio parte dal centro e arriva alla circonferenza." },
            { q: "Quanto fa 100 diviso per 4?", options: ["20", "25", "30", "50"], correct: 1, explanation: "100 / 4 = 25." },
            { q: "Qual è il risultato di 15 + 5 x 2?", options: ["40", "25", "30", "20"], correct: 1, explanation: "Prima si fa la moltiplicazione (5 x 2 = 10) e poi l'addizione (15 + 10 = 25)." },
            { q: "Quanti minuti ci sono in un'ora e mezza?", options: ["75 minuti", "90 minuti", "100 minuti", "80 minuti"], correct: 1, explanation: "60 minuti (un'ora) + 30 minuti (mezz'ora) = 90 minuti." },
            { q: "Quale di questi numeri è un multiplo di 7?", options: ["18", "24", "42", "30"], correct: 2, explanation: "7 x 6 = 42." },
            { q: "Come si chiama un triangolo con tre lati uguali?", options: ["Scaleno", "Isoscele", "Equilatero", "Rettangolo"], correct: 2, explanation: "Il triangolo equilatero ha tutti i lati e gli angoli uguali." },
            { q: "A quanto corrisponde la frazione 3/4 espressa in percentuale?", options: ["25%", "50%", "75%", "100%"], correct: 2, explanation: "Tre quarti equivalgono al 75%." },
            { q: "Qual è il valore di x nell'equazione: x + 5 = 12?", options: ["5", "7", "17", "6"], correct: 1, explanation: "x = 12 - 5, quindi x = 7." },
            { q: "Quanti millimetri ci sono in un metro?", options: ["10 mm", "100 mm", "1000 mm", "10000 mm"], correct: 2, explanation: "Un metro è composto da 1000 millimetri." },
            { q: "Qual è l'area di un rettangolo con base 6 cm e altezza 4 cm?", options: ["20 cm²", "24 cm²", "10 cm²", "12 cm²"], correct: 1, explanation: "L'area del rettangolo è base per altezza (6 x 4 = 24)." },
            { q: "Se lanci un dado a 6 facce, che probabilità hai di fare un numero pari?", options: ["1 su 6", "1 su 2", "1 su 3", "1 su 4"], correct: 1, explanation: "I numeri pari sono 3 su 6, cioè la metà (1 su 2)." },
            { q: "Quanto fa 0 diviso 5?", options: ["0", "5", "Impossibile", "1"], correct: 0, explanation: "Zero diviso qualsiasi numero diverso da zero fa zero." },
            { q: "Qual è il M.C.D. (Massimo Comun Divisore) tra 4 e 6?", options: ["1", "2", "12", "4"], correct: 1, explanation: "Il numero più grande che divide entrambi è 2." },
            { q: "Come si chiama un angolo che misura più di 90° e meno di 180°?", options: ["Acuto", "Ottuso", "Piatto", "Giro"], correct: 1, explanation: "L'angolo ottuso è maggiore di 90° e minore di 180°." },
            { q: "Qual è il successore del numero -3 sulla retta dei numeri interi?", options: ["-4", "-2", "0", "2"], correct: 1, explanation: "Il numero successivo (verso destra) di -3 è -2." },
            { q: "Se un'ora dura 60 minuti, quanti secondi ci sono in un minuto?", options: ["30", "60", "100", "3600"], correct: 1, explanation: "Un minuto è composto da 60 secondi." },
            { q: "Quanto fa 2 alla terza (2³)?", options: ["6", "8", "9", "4"], correct: 1, explanation: "Due alla terza significa 2 x 2 x 2 = 8." },
            { q: "Quale numero completa la sequenza: 3, 6, 9, 12, ...?", options: ["14", "15", "16", "18"], correct: 1, explanation: "La sequenza aumenta di 3 in 3 (12 + 3 = 15)." },
            { q: "Come si chiama la linea che divide a metà un angolo?", options: ["Altezza", "Mediana", "Bisettrice", "Asse"], correct: 2, explanation: "La bisettrice è la semiretta che divide l'angolo in due parti uguali." },
            { q: "Quanto fa 50 - (5 x 6)?", options: ["20", "25", "30", "45"], correct: 0, explanation: "Prima la moltiplicazione (5 x 6 = 30), poi 50 - 30 = 20." },
            { q: "Quale tra queste unità di misura serve per calcolare la capacità (il volume dei liquidi)?", options: ["Chilogrammo", "Metro", "Litro", "Metro quadro"], correct: 2, explanation: "Il litro è l'unità di misura della capacità." }
        ]
    },
    {
        title: "AULA 2: ITALIANO", color: 0x3b82f6, pos: { x: 21, z: -18 },
        questPos: { x: 21, z: -21.5 }, doorSide: "south",
        questions: [
            { q: "Qual è il soggetto nella frase: 'Il gatto dorme sul divano'?", options: ["Il gatto", "dorme", "sul divano", "divano"], correct: 0, explanation: "Il soggetto è chi compie l'azione: 'Il gatto'." },
            { q: "Chi ha scritto la famosa opera 'I Promessi Sposi'?", options: ["Dante Alighieri", "Alessandro Manzoni", "Giovanni Boccaccio", "Giacomo Leopardi"], correct: 1, explanation: "Alessandro Manzoni è l'autore del celebre romanzo storico." },
            { q: "Quale di queste parole è scritta correttamente?", options: ["Cieglo", "Cielo", "Cielò", "Cieo"], correct: 1, explanation: "La parola corretta è 'cielo'." },
            { q: "Come si chiama la parte variabile della frase che indica un'azione?", options: ["Nome", "Aggettivo", "Verbo", "Pronome"], correct: 2, explanation: "Il verbo esprime l'azione o lo stato del soggetto." },
            { q: "Quale figura retorica consiste in un paragone tra due elementi (es. 'forte come un leone')?", options: ["Metafora", "Similitudine", "Personificazione", "Onomatopea"], correct: 1, explanation: "La similitudine istituisce un confronto esplicito tramite 'come'." },
            { q: "Quale di queste parole è un nome collettivo?", options: ["Pesce", "Sciame", "Albero", "Libro"], correct: 1, explanation: "Sciame indica un insieme di api al singolare." },
            { q: "In quale cantica della Divina Commedia si trova il Purgatorio?", options: ["Prima", "Seconda", "Terza", "Quarta"], correct: 1, explanation: "Le tre cantiche sono Inferno, Purgatorio e Paradiso." },
            { q: "Qual è il passato remoto del verbo 'fare' alla prima persona singolare?", options: ["Io facevo", "Io feci", "Io farò", "Io faceva"], correct: 1, explanation: "Il passato remoto corretto è 'feci'." },
            { q: "Quale complemento risponde alla domanda 'A chi? A che cosa?'?", options: ["Complemento oggetto", "Complemento di termine", "Complemento di causa", "Complemento d'agente"], correct: 1, explanation: "Il complemento di termine indica la persona o cosa a cui l'azione è diretta." },
            { q: "Cosa indica un prefisso in una parola?", options: ["Si trova alla fine della parola", "Si trova all'inizio della parola", "È sempre un verbo", "Non esiste"], correct: 1, explanation: "Il prefisso si aggiunge prima della radice per modificarne il significato." },
            { q: "Quale tra questi è un sinonimo della parola 'felice'?", options: ["Triste", "Contento", "Arrabbiato", "Stanco"], correct: 1, explanation: "Contento ha un significato simile a felice." },
            { q: "Quale autore ha scritto la raccolta di novelle 'Il Decameron'?", options: ["Francesco Petrarca", "Dante Alighieri", "Giovanni Boccaccio", "Ludovico Ariosto"], correct: 2, explanation: "Giovanni Boccaccio è l'autore del Decameron." },
            { q: "Come si chiama l'articolo 'lo' al plurale maschile davanti a parole che iniziano per s impura o z?", options: ["I", "Gli", "Le", "Degli"], correct: 1, explanation: "Il plurale di 'lo zio' è 'gli zii'." },
            { q: "Quale di queste parole è un'onomatopea?", options: ["Casa", "Tic-tac", "Veloce", "Matita"], correct: 1, explanation: "Tic-tac riproduce il suono dell'orologio." },
            { q: "Cosa rappresenta il complemento oggetto nella frase?", options: ["Chi compie l'azione", "Chi subisce l'azione", "Il luogo dell'azione", "Il tempo dell'azione"], correct: 1, explanation: "Il complemento oggetto risponde alla domanda 'Chi? Che cosa?' subendo l'azione." },
            { q: "Quale tempo verbale esprime un'azione passata ma non conclusa (es. 'io mangiavo')?", options: ["Passato remoto", "Imperfetto", "Trapassato prossimo", "Futuro semplice"], correct: 1, explanation: "L'imperfetto si usa per azioni abituali o in corso nel passato." },
            { q: "Quale di queste parole contiene un dittongo?", options: ["Fiume", "Paese", "Poeta", "Maestro"], correct: 0, explanation: "In 'fiume' le vocali 'iu' formano un dittongo." },
            { q: "Chi è l'autore del poema epico 'Orlando Furioso'?", options: ["Torquato Tasso", "Ludovico Ariosto", "Virgilio", "Omero"], correct: 1, explanation: "Ludovico Ariosto ha scritto l'Orlando Furioso." },
            { q: "Quale funzione ha la congiunzione nella frase?", options: ["Indica un'azione", "Collega parole o frasi tra loro", "Sostituisce un nome", "Indica una qualità"], correct: 1, explanation: "La congiunzione (es. 'e', 'ma', 'perciò') unisce elementi del discorso." },
            { q: "Come si chiama il genere letterario fantastico ambientato nel Medioevo con cavalieri e magie?", options: ["Novella realistica", "Poema epico-cavalleresco", "Tragedia", "Commedia"], correct: 1, explanation: "Il poema cavalleresco narra le gesta di paladini e cavalieri." },
            { q: "Qual è il contrario (antonimo) della parola 'generoso'?", options: ["Buono", "Avaro", "Gentile", "Allegro"], correct: 1, explanation: "Avaro è l'opposto di generoso." },
            { q: "Quale di queste parole è un aggettivo qualificativo?", options: ["Coraggio", "Coraggioso", "Coraggiosamente", "Coraggiosità"], correct: 1, explanation: "Coraggioso descrive una qualità del nome." },
            { q: "In quale secolo visse e scrisse Dante Alighieri?", options: ["Nel Trecento (XIV secolo)", "Nel Quattrocento", "Nel Cinquecento", "Nel Duecento (XIII secolo)"], correct: 3, explanation: "Dante nacque nel 1265 (XIII secolo, pur operando a cavallo del 1300)." },
            { q: "Come si chiama la figura retorica che attribuisce caratteristiche umane agli oggetti o agli animali?", options: ["Metafora", "Personificazione", "Ossimoro", "Iperbole"], correct: 1, explanation: "La personificazione fa parlare o agire elementi inanimati come persone." },
            { q: "Quale tra questi verbi appartiene alla seconda coniugazione?", options: ["Cantare", "Temere", "Dormire", "Finire"], correct: 1, explanation: "I verbi in -ere appartengono alla seconda coniugazione." },
            { q: "Cosa studia la sintassi?", options: ["Il significato delle parole", "Come si formano le parole", "Come si legano le parole per formare le frasi", "L'origine storica dei termini"], correct: 2, explanation: "La sintassi analizza la struttura logica della frase." },
            { q: "Quale opera ha reso celebre Omero nell'antica Grecia?", options: ["L'Eneide", "L'Iliade e l'Odissea", "Le Metamorfosi", "I Promessi Sposi"], correct: 1, explanation: "Omero è tradizionalmente l'autore dell'Iliade e dell'Odissea." },
            { q: "Quale di questi pronomi è un pronome personale soggetto?", options: ["Lo", "Gli", "Egli", "Ne"], correct: 2, explanation: "Egli è un pronome personale soggetto maschile singolare." },
            { q: "Cosa indica il suffisso in una parola (es. -ino in 'gattino')?", options: ["Un accrescitivo", "Un diminutivo", "Un peggiorativo", "Un verbo"], correct: 1, explanation: "Il suffisso -ino rimpicciolisce l'oggetto indicando un diminutivo." },
            { q: "Quale tra questi termini indica una poesia di 14 endecasillabi divisi in due quartine e due terzine?", options: ["Ode", "Sonetto", "Ballata", "Epigramma"], correct: 1, explanation: "Il sonetto è la forma metrica classica resa celebre da Petrarca." }
        ]
    },
    {
        title: "AULA 3: INGLESE", color: 0x22c55e, pos: { x: -21, z: 18 },
        questPos: { x: -21, z: 21.5 }, doorSide: "north",
        questions: [
            { q: "Qual è il passato del verbo 'to go' (andare)?", options: ["Goed", "Went", "Gone", "Going"], correct: 1, explanation: "'Went' è il passato semplice (Past Simple) di 'to go'." },
            { q: "Come si traduce in inglese la frase 'Io ho 12 anni'?", options: ["I have 12 years", "I am 12 years old", "I have 12 years old", "I am 12 years"], correct: 1, explanation: "In inglese l'età si esprime con il verbo essere: 'I am 12 years old'." },
            { q: "Quale di queste parole significa 'mela' in inglese?", options: ["Banana", "Apple", "Orange", "Pear"], correct: 1, explanation: "'Apple' significa mela." },
            { q: "Qual è il plurale della parola inglese 'child' (bambino)?", options: ["Childs", "Children", "Childes", "Child"], correct: 1, explanation: "Il plurale irregolare di child è children." },
            { q: "Come si traduce la preposizione 'in' quando indica che qualcosa si trova sopra una superficie?", options: ["In", "On", "Under", "Behind"], correct: 1, explanation: "'On' significa sopra, a contatto con una superficie." },
            { q: "Qual è la forma corretta della terza persona singolare del verbo 'to have' al Present Simple?", options: ["He have", "He has", "He haves", "He having"], correct: 1, explanation: "Alla terza persona singolare il verbo have diventa has." },
            { q: "Cosa significa il verbo modale 'can'?", options: ["Dovere", "Potere / Sapere fare qualcosa", "Volere", "Dovrebbe"], correct: 1, explanation: "'Can' esprime abilità o permesso (es. I can swim)." },
            { q: "Qual è il comparativo di maggioranza dell'aggettivo corto 'big'?", options: ["Bigger", "More big", "Biggest", "Bigger than"], correct: 0, explanation: "Gli aggettivi brevi raddoppiano la consonante: bigger." },
            { q: "Come si scrive il numero '15' in inglese?", options: ["Fiveteen", "Fifteen", "Fifti", "Fifty"], correct: 1, explanation: "15 si scrive fifteen." },
            { q: "Quale pronome personale corrisponde alla terza persona singolare femminile?", options: ["He", "It", "She", "They"], correct: 2, explanation: "'She' si usa per indicare lei (femminile singolare)." },
            { q: "Qual è il passato participio del verbo 'to be'?", options: ["Was", "Were", "Been", "Being"], correct: 2, explanation: "Il participio passato di to be è been." },
            { q: "Quale interrogativo inglese si usa per chiedere 'Quando?'?", options: ["Who?", "Where?", "When?", "Why?"], correct: 2, explanation: "'When' significa quando." },
            { q: "Qual è il superlativo dell'aggettivo irregolare 'good' (buono)?", options: ["Goodest", "Best", "Better", "Worse"], correct: 1, explanation: "Il superlativo di good è 'the best'." },
            { q: "Come si traduce la frase 'C'è una penna sul tavolo' (al singolare)?", options: ["There are a pen", "There is a pen", "It is a pen", "Have a pen"], correct: 1, explanation: "'There is' si usa per il singolare." },
            { q: "Qual è il contrario dell'aggettivo 'cold' (freddo)?", options: ["Hot", "Warm", "Cool", "Freezing"], correct: 0, explanation: "Il contrario di freddo è caldo (hot)." },
            { q: "Come si forma il Present Continuous in inglese?", options: ["Soggetto + Verbo base", "Soggetto + To Be + Verbo in -ing", "Soggetto + Past Simple", "Soggetto + Will"], correct: 1, explanation: "Il Present Continuous usa l'ausiliare be e la forma in -ing." },
            { q: "Quale giorno della settimana viene dopo il martedì (Tuesday)?", options: ["Monday", "Wednesday", "Thursday", "Friday"], correct: 1, explanation: "Mercoledì (Wednesday) viene dopo martedì." },
            { q: "Come si traduce in inglese 'fratello'?", options: ["Sister", "Brother", "Father", "Mother"], correct: 1, explanation: "'Brother' significa fratello." },
            { q: "Quale ausiliare si usa per formare le frasi negative e interrogative al Present Simple con i verbi regolari?", options: ["To be", "Do / Does", "Have / Has", "Did"], correct: 1, explanation: "Si usa do (o does alla 3ª persona singolare)." },
            { q: "Qual è il plurale di 'mouse' (topo) in inglese?", options: ["Mouses", "Mice", "Mouse", "Meese"], correct: 1, explanation: "Il plurale irregolare di mouse è mice." },
            { q: "Cosa significa l'avverbio di frequenza 'always'?", options: ["Mai", "A volte", "Sempre", "Spesso"], correct: 2, explanation: "'Always' significa sempre." },
            { q: "Quale tempo verbale si usa per azioni future decise al momento o previsioni (con 'will')?", options: ["Past Simple", "Future Simple", "Present Simple", "Present Perfect"], correct: 1, explanation: "Il Future Simple si costruisce con will + verbo base." },
            { q: "Come si traduce la frase 'Ieri sono andato a scuola'?", options: ["I go to school yesterday", "I went to school yesterday", "I was go to school yesterday", "I gone to school"], correct: 1, explanation: "Si usa il Past Simple: I went to school yesterday." },
            { q: "Quale preposizione di tempo si usa davanti ai giorni della settimana (es. ... Monday)?", options: ["In", "At", "On", "By"], correct: 2, explanation: "Con i giorni della settimana si usa la preposizione 'on'." },
            { q: "Qual è il significato del verbo 'to read'?", options: ["Scrivere", "Leggere", "Ascoltare", "Parlare"], correct: 1, explanation: "'To read' significa leggere." },
            { q: "Quale pronome possessivo corrisponde a 'our' (nostro)?", options: ["Ours", "Yours", "Theirs", "His"], correct: 0, explanation: "'Ours' è il pronome possessivo corrispondente." },
            { q: "Come si traduce in inglese 'scuola media'?", options: ["Primary school", "Middle school / Junior high school", "High school", "University"], correct: 1, explanation: "La scuola media si traduce con middle school o junior high school." },
            { q: "Quale di queste parole indica un colore?", options: ["Yellow", "Table", "Dog", "Run"], correct: 0, explanation: "'Yellow' significa giallo." },
            { q: "Come si dice 'undici' in inglese?", options: ["Ten", "Eleven", "Twelve", "Twenty"], correct: 1, explanation: "11 si dice eleven." },
            { q: "Qual è la forma interrogativa corretta del verbo to be alla seconda persona singolare?", options: ["You are?", "Are you?", "Is you?", "You is?"], correct: 1, explanation: "L'inversione dà 'Are you?'." }
        ]
    },
    {
        title: "AULA 4: STORIA", color: 0xa855f7, pos: { x: 21, z: 18 },
        questPos: { x: 21, z: 21.5 }, doorSide: "north",
        questions: [
            { q: "In quale anno è iniziata la Rivoluzione Francese?", options: ["1492", "1789", "1815", "1914"], correct: 1, explanation: "La Rivoluzione Francese è scoppiata nel 1789 con la presa della Bastiglia." },
            { q: "Chi ha scoperto l'America nel 1492?", options: ["Amerigo Vespucci", "Cristoforo Colombo", "Ferdinando Magellano", "Marco Polo"], correct: 1, explanation: "Cristoforo Colombo sbarcò in America nel 1492." },
            { q: "Come si chiamava la civiltà antica che ha costruito le grandi Piramidi?", options: ["I Greci", "I Romani", "Gli Egizi", "I Mesopotami"], correct: 2, explanation: "Gli antichi Egizi costruirono le piramidi come tombe per i faraoni." },
            { q: "Quale evento storico segna convenzionalmente la fine del Medioevo e l'inizio dell'Età Moderna?", options: ["La caduta dell'Impero Romano d'Occidente", "La scoperta dell'America (1492)", "La Rivoluzione Industriale", "La Prima Guerra Mondiale"], correct: 1, explanation: "La scoperta dell'America nel 1492 fa da spartiacque." },
            { q: "In quale secolo si è sviluppato il Rinascimento in Europa?", options: ["Nel Trecento (XIV secolo)", "Nel Quattrocento e Cinquecento (XV-XVI secolo)", "Nel Settecento", "Nel Novecento"], correct: 1, explanation: "Il Rinascimento fiorisce tra il XV e il XVI secolo." },
            { q: "Quale impero fu fondato da Romolo secondo la leggenda nel 753 a.C.?", options: ["L'Impero Greco", "L'Impero Romano", "L'Impero Persiano", "L'Impero Bizantino"], correct: 1, explanation: "La leggenda narra la fondazione di Roma nel 753 a.C." },
            { q: "Come si chiamavano i signori feudali che detenevano il potere nel Medioevo?", options: ["Plebei", "Vassalli / Feudatari", "Console", "Tribuni"], correct: 1, explanation: "I feudatari governavano i feudi concessi dal sovrano." },
            { q: "Quale fu la principale invenzione di Johannes Gutenberg nel XV secolo che rivoluzionò la cultura?", options: ["La polvere da sparo", "La stampa a caratteri mobili", "La bussola", "Il telescopio"], correct: 1, explanation: "La stampa a caratteri mobili diffuse rapidamente i libri." },
            { q: "In quale continente ebbe origine la Prima Rivoluzione Industriale nella seconda metà del Settecento?", options: ["Negli Stati Uniti", "In Inghilterra", "In Germania", "In Francia"], correct: 1, explanation: "La rivoluzione industriale nacque in Gran Bretagna grazie al carbone e alla macchina a vapore." },
            { q: "Quale condottiero cartaginese attraversò le Alpi con gli elefanti per attaccare Roma?", options: ["Giulio Cesare", "Annibale", "Scipione l'Africano", "Spartaco"], correct: 1, explanation: "Annibale guidò i cartaginesi contro i Romani durante la seconda guerra punica." },
            { q: "Come si chiamava il periodo di divisione in classi sociali rigide tipico dell'Antico Regime in Francia?", options: ["Società dei tre ordini (Clero, Nobiltà, Terzo Stato)", "Democrazia diretta", "Repubblica federale", "Comuni"], correct: 0, explanation: "La società era divisa in nobiltà, clero e terzo stato." },
            { q: "In quale anno è iniziata la Prima Guerra Mondiale?", options: ["1914", "1939", "1861", "1789"], correct: 0, explanation: "La Grande Guerra è scoppiata nel 1914." },
            { q: "Chi fu il primo Imperatore romano?", options: ["Giulio Cesare", "Ottaviano Augusto", "Nerone", "Costantino"], correct: 1, explanation: "Ottaviano Augusto divenne il primo imperatore nel 27 a.C." },
            { q: "Quale civiltà inventò la scrittura cuneiforme?", options: ["I Sumeri", "I Fenici", "I Greci", "I Maya"], correct: 0, explanation: "I Sumeri in Mesopotamia inventarono la prima scrittura cuneiforme su tavolette d'argilla." },
            { q: "Chi unificò l'Italia nel 1861?", options: ["Giuseppe Garibaldi", "Camillo Benso di Cavour e Vittorio Emanuele II", "Giuseppe Mazzini", "Napoleone Bonaparte"], correct: 1, explanation: "Il Regno d'Italia fu proclamato nel 1861 sotto Vittorio Emanuele II." },
            { q: "Quale importante documento fu firmato in Inghilterra nel 1215 limitando il potere del re?", options: ["La Costituzione", "La Magna Carta", "Il Bill of Rights", "Il trattato di Versailles"], correct: 1, explanation: "La Magna Carta Libertatum pose le basi delle libertà costituzionali." },
            { q: "In quale anno terminò la Seconda Guerra Mondiale?", options: ["1942", "1945", "1918", "1950"], correct: 1, explanation: "La Seconda Guerra Mondiale si concluse nel 1945." },
            { q: "Come si chiamavano le città-stato indipendenti dell'antica Grecia (es. Atene e Sparta)?", options: ["Municipi", "Polis", "Province", "Colonie"], correct: 1, explanation: "La polis era la città-stato greca." },
            { q: "Quale esploratore portoghese circumnavigò l'Africa per primo raggiungendo l'India?", options: ["Vasco da Gama", "Amerigo Vespucci", "Ferdinando Magellano", "Bartolomeo Dias"], correct: 0, explanation: "Vasco da Gama aprì la rotta marittima per l'India." },
            { q: "Chi fu il leader della rivoluzione russa del 1917?", options: ["Stalin", "Lenin", "Trockij", "Zar Nicola II"], correct: 1, explanation: "Vladimir Lenin guidò i bolscevichi nella rivoluzione d'ottobre." },
            { q: "Quale fu la causa scatenante della Prima Guerra Mondiale a Sarajevo?", options: ["L'affondamento del Titanic", "L'attentato all'arciduca Francesco Ferdinando", "L'invasione della Polonia", "La rivoluzione francese"], correct: 1, explanation: "L'arciduca fu assassinato a Sarajevo nel giugno 1914." },
            { q: "Come si chiamava la rete di scambi commerciali tra Europa, Africa e Americhe in età moderna?", options: ["Via della Seta", "Commercio triangolare", "Lega Anseatica", "Tratta delle Indie"], correct: 1, explanation: "Il commercio triangolare legava i tre continenti attraverso la tratta degli schiavi e delle merci." },
            { q: "In quale anno l'Italia è diventata una Repubblica dopo un referendum?", options: ["1945", "1946", "1948", "1950"], correct: 1, explanation: "Il 2 giugno 1946 gli italiani scelsero la Repubblica." },
            { q: "Quale filosofo e scienziato greco fu maestro di Alessandro Magno?", options: ["Socrate", "Platone", "Aristotele", "Pitagora"], correct: 2, explanation: "Aristotele fu precettore di Alessandro Magno." },
            { q: "Chi guidò la spedizione dei Mille nel 1860 per liberare il Sud Italia?", options: ["Garibaldi", "Cavour", "Mazzini", "Garibaldi e Cavour"], correct: 0, explanation: "Giuseppe Garibaldi partì da Quarto con i Mille volontari." },
            { q: "Quale religione nacque nel VII secolo nella penisola arabica grazie a Maometto?", options: ["Cristianesimo", "Ebraismo", "Islam", "Buddismo"], correct: 2, explanation: "L'Islam fu fondato dal profeta Maometto nel 610 d.C. circa." },
            { q: "Quale fu il nome del muro che divise Berlino dal 1961 al 1989?", options: ["Muro di velluto", "Muro di Berlino", "Cortina di ferro", "Linea Maginot"], correct: 1, explanation: "Il Muro di Berlino separava la parte est dalla parte ovest della città." },
            { q: "Quale civiltà precolombiana fiorì in America Centrale costruendo grandi calendari?", options: ["Inca", "Maya", "Azztechi", "Apache"], correct: 1, explanation: "I Maya eccellevano nell'astronomia e nella matematica." },
            { q: "In quale secolo fiorì l'Impero Romano d'Oriente (Impero Bizantino) con capitale Costantinopoli?", options: ["Nel Medioevo e oltre (fino al 1453)", "Solo nell'antichità classica", "Nel Rinascimento", "Nel Settecento"], correct: 0, explanation: "L'Impero Romano d'Oriente sopravvisse fino al 1453." },
            { q: "Quale trattato pose fine alla Prima Guerra Mondiale nel 1919 ridisegnando la carta d'Europa?", options: ["Trattato di Roma", "Trattato di Versailles", "Pace di Westfalia", "Congresso di Vienna"], correct: 1, explanation: "Il Trattato di Versailles impose pesanti condizioni alla Germania." }
        ]
    },
    {
        title: "AULA MAGNA (FINALE): SCIENZE", color: 0xeab308, isBinary: false, pos: { x: 0, z: -27 },
        questPos: { x: 0, z: -29 }, doorSide: "south",
        questions: [
            { q: "Quale organo pompa il sangue in tutto il corpo umano?", options: ["I polmoni", "Il cuore", "Il fegato", "Lo stomaco"], correct: 1, explanation: "Il cuore è la pompa principale dell'apparato circolatorio." },
            { q: "Qual è la formula chimica dell'acqua?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, explanation: "L'acqua è composta da due atomi di idrogeno e uno di ossigeno (H2O)." },
            { q: "Quale gas assorbono le piante dall'aria per compiere la fotosintesi clorofilliana?", options: ["Ossigeno", "Anidride carbonica (CO2)", "Azoto", "Elio"], correct: 1, explanation: "Le piante assorbono anidride carbonica e rilasciano ossigeno." },
            { q: "Qual è il pianeta più vicino al Sole nel nostro Sistema Solare?", options: ["Venere", "Mercurio", "Terra", "Marte"], correct: 1, explanation: "Mercurio è il primo pianeta del sistema solare." },
            { q: "Come si chiama la cellula fondamentale del sistema nervoso?", options: ["Globulo rosso", "Neurone", "Cellula epiteliale", "Nefrone"], correct: 1, explanation: "Il neurone trasmette gli impulsi elettrici nel corpo." },
            { q: "A quanti gradi Celsius bolle l'acqua pura a livello del mare?", options: ["90 °C", "100 °C", "110 °C", "120 °C"], correct: 1, explanation: "L'ebollizione dell'acqua avviene a 100 °C in condizioni normali." },
            { q: "Come si chiama lo strato di gas che circonda la Terra proteggendola dai raggi solari nocivi?", options: ["Litosfera", "Atmosfera", "Idrosfera", "Biosfera"], correct: 1, explanation: "L'atmosfera è l'involucro gassoso della Terra." },
            { q: "Quale scienziato ha formulato la teoria dell'evoluzione della specie per selezione naturale?", options: ["Albert Einstein", "Charles Darwin", "Galileo Galilei", "Isaac Newton"], correct: 1, explanation: "Charles Darwin scrisse 'L'origine delle specie'." },
            { q: "Quale componente del sangue trasporta l'ossigeno dai polmoni a tutte le cellule?", options: ["Globuli bianchi", "Globuli rossi", "Piastrine", "Plasma"], correct: 1, explanation: "I globuli rossi contengono emoglobina per il trasporto dell'ossigeno." },
            { q: "Come si chiama il passaggio dello stato dell'acqua da liquido a solido (ghiaccio)?", options: ["Evaporazione", "Solidificazione", "Condensazione", "Sublimazione"], correct: 1, explanation: "La solidificazione trasforma il liquido in solido." },
            { q: "Quale pianeta è famoso per essere chiamato il 'Pianeta Rosso'?", options: ["Giove", "Marte", "Saturno", "Venere"], correct: 1, explanation: "Marte appare rosso a causa della presenza di ossidi di ferro sul suolo." },
            { q: "Quale organo del corpo umano filtra il sangue producendo l'urina?", options: ["Il fegato", "I reni", "Il cuore", "I polmoni"], correct: 1, explanation: "I reni depurano il sangue dalle scorie." },
            { q: "Quale forza ci mantiene ancorati alla superficie della Terra?", options: ["Il magnetismo", "La forza di gravità", "L'attrito", "La forza centrifuga"], correct: 1, explanation: "La gravità attrae i corpi verso il centro della Terra." },
            { q: "Come si chiama l'unità base di cui è fatta tutta la materia?", options: ["Molecola", "Atomo", "Cellula", "Tessuto"], correct: 1, explanation: "L'atomo è il mattone fondamentale della materia." },
            { q: "Quale tra questi è un gas nobile presente nell'aria?", options: ["Ossigeno", "Elio", "Azoto", "Idrogeno"], correct: 1, explanation: "L'elio fa parte dei gas nobili della tavola periodica." },
            { q: "Qual è l'osso più lungo e robusto del corpo umano?", options: ["Tibia", "Femore", "Omero", "Radio"], correct: 1, explanation: "Il femore si trova nella parte superiore della gamba." },
            { q: "Come si chiama la galassia in cui si trova il nostro Sistema Solare?", options: ["Andromeda", "Via Lattea", "Magellano", "Sombrero"], correct: 1, explanation: "La nostra galassia è la Via Lattea." },
            { q: "Quale parte della pianta assorbe acqua e sali minerali dal terreno?", options: ["Le foglie", "Il fusto", "Le radici", "I fiori"], correct: 2, explanation: "Le radici ancorano la pianta e assorbono i nutrienti dal suolo." },
            { q: "Come si definisce un animale che si nutre sia di carne che di vegetali?", options: ["Erbivoro", "Carnivoro", "Onnivoro", "Insettivoro"], correct: 2, explanation: "Gli onnivori mangiano una dieta mista." },
            { q: "Quale metallo è liquido a temperatura ambiente?", options: ["Rame", "Mercurio", "Ferro", "Oro"], correct: 1, explanation: "Il mercurio è l'unico metallo liquido in condizioni ordinarie." },
            { q: "Quale organo del corpo umano controlla il pensiero, la memoria e i movimenti volontari?", options: ["Il midollo spinale", "Il cervello", "Il cuore", "Il fegato"], correct: 1, explanation: "Il cervello è il centro di controllo del sistema nervoso." },
            { q: "Quale scala si usa per misurare la magnitudo di un terremoto?", options: ["Scala Celsius", "Scala Richter", "Scala Beaufort", "Barometro"], correct: 1, explanation: "La scala Richter misura l'energia sprigionata da un sisma." },
            { q: "Cosa misura il termometro?", options: ["La pressione", "La temperatura", "L'umidità", "La velocità del vento"], correct: 1, explanation: "Il termometro rileva la temperatura corporea o ambientale." },
            { q: "Quale vitamina viene sintetizzata dalla pelle grazie all'esposizione alla luce solare?", options: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina K"], correct: 2, explanation: "I raggi solari attivano la produzione di vitamina D." },
            { q: "Come si chiama il processo con cui le cellule si dividono generando due cellule figlie identiche?", options: ["Mitosi", "Fotosintesi", "Digestione", "Respirazione"], correct: 0, explanation: "La mitosi è la divisione cellulare per la crescita e la riparazione dei tessuti." },
            { q: "Quale gas costituisce circa il 78% dell'aria che respiriamo?", options: ["Ossigeno", "Azoto", "Anidride carbonica", "Idrogeno"], correct: 1, explanation: "L'atmosfera terrestre è composta per la maggior parte da azoto." },
            { q: "Qual è il muscolo involontario più importante che regola la respirazione?", options: ["Il bicipite", "Il diaframma", "Il cuore", "Il quadricipite"], correct: 1, explanation: "Il diaframma contraendosi permette l'espansione dei polmoni." },
            { q: "Quale pianeta del Sistema Solare possiede i famosi e luminosi anelli di ghiaccio?", options: ["Marte", "Saturno", "Nettuno", "Mercurio"], correct: 1, explanation: "Saturno è celebre per il suo imponente sistema di anelli." },
            { q: "Quale organo produce la bile utile per la digestione dei grassi?", options: ["Lo stomaco", "Il fegato", "Il pancreas", "L'intestino tenue"], correct: 1, explanation: "Il fegato secerne la bile, immagazzinata poi nella cistifellea." },
            { q: "Come si chiama lo strumento ottico utilizzato per osservare le stelle e i pianeti lontani?", options: ["Il microscopio", "Il telescopio", "Il periscopio", "La lente d'ingrandimento"], correct: 1, explanation: "Il telescopio serve per l'osservazione astronomica." }
        ]
    }
];

let scene, camera, renderer, player;
let stations = [], obstacles = [], internalWalls = [], slidingDoors = [];
let keys = { w: false, a: false, s: false, d: false, arrowup: false, arrowleft: false, arrowdown: false, arrowright: false };
let gameState = 'START', currentSector = null, completedSectors = 0, lives = 3, score = 0, questionStartTime = 0;
let currentQuestionIdx = 0, activeQuestions = [], leftArm, rightArm, legLeft, legRight, walkTime = 0;
let audioCtx = null;
const $ = function(id) { return document.getElementById(id); };

function playSound(type) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator(), gain = audioCtx.createGain(), now = audioCtx.currentTime;
        osc.connect(gain); gain.connect(audioCtx.destination);
        if (type === 'correct') {
            osc.type = 'sine';
            [523.25, 659.25, 783.99].forEach(function(f, i) {
                osc.frequency.setValueAtTime(f, now + i * 0.1);
            });
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.linearRampToValueAtTime(110, now + 0.3);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'win') {
            osc.type = 'square';
            [523.25, 659.25, 783.99, 1046.50].forEach(function(f, i) {
                osc.frequency.setValueAtTime(f, now + i * 0.12);
            });
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
            osc.start(now);
            osc.stop(now + 0.7);
        }
    } catch(e) { console.log("Audio non supportato"); }
}

function createStudentMesh() {
    const group = new THREE.Group();
    const hoodieMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });
    const sleeveMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfcd5b5, roughness: 0.5 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.6 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.8 });

    const lLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat); lLeg.position.set(-0.14, 0.275, 0); group.add(lLeg);
    const rLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat); rLeg.position.set(0.14, 0.275, 0); group.add(rLeg);

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.85, 0.38), hoodieMat); body.position.y = 0.92; group.add(body);

    const lArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.16), sleeveMat); lArm.position.set(-0.42, 0.95, 0); group.add(lArm);
    const rArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.16), sleeveMat); rArm.position.set(0.42, 0.95, 0); group.add(rArm);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.46, 0.46), skinMat); head.position.y = 1.62; group.add(head);
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.18, 0.48), hairMat); hair.position.y = 1.82; group.add(hair);

    return { group: group, lArm: lArm, rArm: rArm, lLeg: lLeg, rLeg: rLeg };
}

function createProfessorMesh(color) {
    const group = new THREE.Group();
    const suitMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const tieMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.3 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfcd5b5, roughness: 0.5 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.9, 0.34), suitMat); body.position.y = 0.9; group.add(body);
    const shirt = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.5, 0.36), shirtMat); shirt.position.y = 1.05; group.add(shirt);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.4, 0.38), tieMat); tie.position.y = 1.02; group.add(tie);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), skinMat); head.position.y = 1.6; group.add(head);
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.16, 0.45), hairMat); hair.position.y = 1.82; group.add(hair);

    const glowMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 1.0 });
    const glowBadge = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), glowMat);
    glowBadge.position.set(0, 2.25, 0);
    group.add(glowBadge);

    return { group: group, badge: glowBadge };
}

function addLockerBank(x, y, z, width, isAlongX, colorHex) {
    const lockerGroup = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: colorHex || 0x1d4ed8, metalness: 0.55, roughness: 0.35 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
    const ventMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });

    const count = Math.floor(width / 0.9);
    const step = width / count;

    for (let i = 0; i < count; i++) {
        const offset = -width / 2 + step / 2 + i * step;
        const unit = new THREE.Mesh(new THREE.BoxGeometry(isAlongX ? step - 0.05 : 0.65, 2.5, isAlongX ? 0.65 : step - 0.05), bodyMat);
        unit.position.set(isAlongX ? offset : 0, 1.25, isAlongX ? 0 : offset);
        lockerGroup.add(unit);

        const handle = new THREE.Mesh(new THREE.BoxGeometry(isAlongX ? 0.08 : 0.7, 0.25, isAlongX ? 0.7 : 0.08), trimMat);
        handle.position.set(isAlongX ? offset + step * 0.28 : 0, 1.3, isAlongX ? 0 : offset + step * 0.28);
        lockerGroup.add(handle);

        const vent = new THREE.Mesh(new THREE.BoxGeometry(isAlongX ? step * 0.5 : 0.68, 0.22, isAlongX ? 0.68 : step * 0.5), ventMat);
        vent.position.set(isAlongX ? offset : 0, 2.15, isAlongX ? 0 : offset);
        lockerGroup.add(vent);
    }

    const base = new THREE.Mesh(new THREE.BoxGeometry(isAlongX ? width : 0.7, 0.15, isAlongX ? 0.7 : width), ventMat);
    base.position.y = 0.075;
    lockerGroup.add(base);

    lockerGroup.position.set(x, y, z);
    scene.add(lockerGroup);
    obstacles.push({ x: x, z: z, rx: isAlongX ? width / 2 : 0.35, rz: isAlongX ? 0.35 : width / 2 });
}

function createAmericanHallwayDecor() {
    addLockerBank(-34.1, 0, -2, 7.2, false, 0x1d4ed8);
    addLockerBank(34.1, 0, -2, 7.2, false, 0x1d4ed8);
    addLockerBank(-21, 0, 34.1, 18, true, 0x1e40af);
    addLockerBank(21, 0, 34.1, 18, true, 0x1e40af);

    addLockerBank(-7.1, 0, -17, 14, false, 0x2563eb);
    addLockerBank(7.1, 0, -17, 14, false, 0x2563eb);
    addLockerBank(-7.1, 0, 18, 16, false, 0x2563eb);
    addLockerBank(7.1, 0, 18, 16, false, 0x2563eb);

    const benchMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.6 });
    const legMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7 });
    [[-4.5, 0], [4.5, 0]].forEach(function(pos) {
        const seat = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.12, 3.2), benchMat);
        seat.position.set(pos[0], 0.5, pos[1]);
        scene.add(seat);
        [-1.3, 1.3].forEach(function(lz) {
            const leg = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.12), legMat);
            leg.position.set(pos[0], 0.25, pos[1] + lz);
            scene.add(leg);
        });
        obstacles.push({ x: pos[0], z: pos[1], rx: 0.5, rz: 1.6 });
    });

    const emblem = new THREE.Mesh(
        new THREE.RingGeometry(2.2, 2.7, 32),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide })
    );
    emblem.rotation.x = -Math.PI / 2;
    emblem.position.set(0, 0.01, 0);
    scene.add(emblem);
}

function createClassroomRoom(sec) {
    const x = sec.pos.x;
    const z = sec.pos.z;
    const color = sec.color;
    const isNorthFacing = sec.doorSide === "north";
    const dir = isNorthFacing ? 1 : -1;

    const group = new THREE.Group();
    const woodDeskMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.45 });
    const teacherWoodMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.4 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7 });
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.5 });
    const boardMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.35 });
    const chalkMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc });

    const roomLight = new THREE.PointLight(color, 1.6, 22);
    roomLight.position.set(0, 4.8, 0);
    group.add(roomLight);

    const neonMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: color, emissiveIntensity: 0.8 });
    [-4, 4].forEach(function(nx) {
        const neon = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 6.0), neonMat);
        neon.position.set(nx, 5.5, 0);
        group.add(neon);
    });

    const wallDist = sec.pos.x === 0 ? 6.8 : 15.8;
    const boardZ = dir * wallDist;
    const blackboard = new THREE.Mesh(new THREE.BoxGeometry(7.2, 2.2, 0.12), boardMat);
    blackboard.position.set(0, 2.6, boardZ);
    group.add(blackboard);

    const frame = new THREE.Mesh(new THREE.BoxGeometry(7.5, 2.45, 0.1), metalMat);
    frame.position.set(0, 2.6, boardZ + dir * 0.04);
    group.add(frame);

    const tray = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.08, 0.25), metalMat);
    tray.position.set(0, 1.48, boardZ - dir * 0.12);
    group.add(tray);

    const chalk = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.05), chalkMat);
    chalk.position.set(-1.2, 1.54, boardZ - dir * 0.12);
    group.add(chalk);

    const deskLocalZ = sec.questPos.z - z;
    const teacherDesk = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.85, 1.1), teacherWoodMat);
    teacherDesk.position.set(0, 0.425, deskLocalZ);
    group.add(teacherDesk);
    obstacles.push({ x: x, z: z + deskLocalZ, rx: 1.35, rz: 0.6 });

    const book1 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.08, 0.35), new THREE.MeshStandardMaterial({ color: 0x2563eb }));
    book1.position.set(-0.6, 0.89, deskLocalZ);
    group.add(book1);
    const apple = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
    apple.position.set(0.7, 0.94, deskLocalZ);
    group.add(apple);

    const interactLocalZ = deskLocalZ - dir * 2.1;
    const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.1, 1.45, 32),
        new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.03, z + interactLocalZ);
    scene.add(ring);

    const pad = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 1.1, 0.02, 32),
        new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.25 })
    );
    pad.position.set(x, 0.015, z + interactLocalZ);
    scene.add(pad);

    const isAulaMagna = sec.pos.x === 0;
    const rowOffsets = isAulaMagna ? [1.2, 3.6] : [-dir * 4.8, -dir * 8.2];
    const colOffsets = isAulaMagna ? [-4.2, 0, 4.2] : [-5.5, 0, 5.5];

    rowOffsets.forEach(function(rz) {
        colOffsets.forEach(function(cx) {
            const deskTop = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.95), woodDeskMat);
            deskTop.position.set(cx, 0.76, rz);
            group.add(deskTop);

            [[-0.65, -0.38], [0.65, -0.38], [-0.65, 0.38], [0.65, 0.38]].forEach(function(legPos) {
                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.74, 0.07), metalMat);
                leg.position.set(cx + legPos[0], 0.37, rz + legPos[1]);
                group.add(leg);
            });

            const chairZ = rz - dir * 0.65;
            const seat = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.07, 0.6), chairMat);
            seat.position.set(cx, 0.45, chairZ);
            group.add(seat);

            const backRest = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.5, 0.07), chairMat);
            backRest.position.set(cx, 0.72, chairZ - dir * 0.27);
            group.add(backRest);

            obstacles.push({ x: x + cx, z: z + rz, rx: 0.8, rz: 0.65 });
        });
    });

    const profObj = createProfessorMesh(color);
    profObj.group.position.set(x, 0, z + deskLocalZ + dir * 0.95);
    profObj.group.rotation.y = isNorthFacing ? Math.PI : 0;
    scene.add(profObj.group);

    group.position.set(x, 0, z);
    scene.add(group);

    return {
        ring: ring,
        badge: profObj.badge,
        interactPos: new THREE.Vector3(x, 0, z + interactLocalZ)
    };
}

function createSlidingDoor(x, y, z, width, height, isHorizontal) {
    const doorGroup = new THREE.Group();
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.3 });
    const header = new THREE.Mesh(new THREE.BoxGeometry(width + 0.4, 1.2, 1.1), frameMat);
    header.position.set(0, height + 0.6, 0);
    doorGroup.add(header);

    const doorMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.25,
        roughness: 0.2,
        metalness: 0.7,
        transparent: true,
        opacity: 0.82
    });

    const panelGeo = isHorizontal ? new THREE.BoxGeometry(width / 2, height, 0.22) : new THREE.BoxGeometry(0.22, height, width / 2);
    const leftPanel = new THREE.Mesh(panelGeo, doorMat);
    const rightPanel = new THREE.Mesh(panelGeo, doorMat);

    if (isHorizontal) {
        leftPanel.position.set(-width / 4, height / 2, 0);
        rightPanel.position.set(width / 4, height / 2, 0);
    } else {
        leftPanel.position.set(0, height / 2, -width / 4);
        rightPanel.position.set(0, height / 2, width / 4);
    }

    doorGroup.add(leftPanel);
    doorGroup.add(rightPanel);
    doorGroup.position.set(x, y, z);
    scene.add(doorGroup);

    slidingDoors.push({
        group: doorGroup,
        left: leftPanel,
        right: rightPanel,
        pos: new THREE.Vector3(x, y, z),
        isHorizontal: isHorizontal,
        width: width,
        openAmount: 0
    });
}

function init3D() {
    try {
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0b1120, 0.013);

        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 120);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        $('canvas-container').appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.72));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.65);
        dirLight.position.set(12, 30, 18);
        scene.add(dirLight);

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(72, 72),
            new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.45, metalness: 0.15 })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.01;
        scene.add(floor);
        scene.add(new THREE.GridHelper(70, 35, 0x38bdf8, 0x334155));

        const wallMat = new THREE.MeshStandardMaterial({
            color: 0x475569,
            roughness: 0.65,
            metalness: 0.2,
            transparent: true,
            opacity: 1.0,
            depthWrite: true
        });

        const addWall = function(w, h, d, x, y, z, isInternal) {
            const mat = wallMat.clone();
            if (isInternal) mat.depthWrite = false;
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
            m.position.set(x, y, z);
            scene.add(m);
            obstacles.push({ x: x, z: z, rx: w / 2, rz: d / 2 });
            if (isInternal) internalWalls.push(m);
        };

        addWall(71, 6, 1, 0, 3, -35, false);
        addWall(71, 6, 1, 0, 3, 35, false);
        addWall(1, 6, 71, -35, 3, 0, false);
        addWall(1, 6, 71, 35, 3, 0, false);

        addWall(1, 6, 29, -8, 3, -20.5, true);
        addWall(11.5, 6, 1, -29.25, 3, -6, true);
        addWall(11.5, 6, 1, -13.75, 3, -6, true);
        createSlidingDoor(-21.5, 0, -6, 4.0, 4.8, true);

        addWall(1, 6, 29, 8, 3, -20.5, true);
        addWall(11.5, 6, 1, 13.75, 3, -6, true);
        addWall(11.5, 6, 1, 29.25, 3, -6, true);
        createSlidingDoor(21.5, 0, -6, 4.0, 4.8, true);

        addWall(1, 6, 29, -8, 3, 20.5, true);
        addWall(11.5, 6, 1, -29.25, 3, 6, true);
        addWall(11.5, 6, 1, -13.75, 3, 6, true);
        createSlidingDoor(-21.5, 0, 6, 4.0, 4.8, true);

        addWall(1, 6, 29, 8, 3, 20.5, true);
        addWall(11.5, 6, 1, 13.75, 3, 6, true);
        addWall(11.5, 6, 1, 29.25, 3, 6, true);
        createSlidingDoor(21.5, 0, 6, 4.0, 4.8, true);

        addWall(6, 6, 1, -5.5, 3, -20, true);
        addWall(6, 6, 1, 5.5, 3, -20, true);
        createSlidingDoor(0, 0, -20, 4.0, 4.8, true);

        createAmericanHallwayDecor();

        const student = createStudentMesh();
        player = student.group;
        leftArm = student.lArm;
        rightArm = student.rArm;
        legLeft = student.lLeg;
        legRight = student.rLeg;
        scene.add(player);
        player.position.set(0, 0, 29);

        GAME_SECTORS.forEach(function(sec, idx) {
            const roomData = createClassroomRoom(sec);
            stations.push({
                ring: roomData.ring,
                badge: roomData.badge,
                interactPos: roomData.interactPos,
                sectorIndex: idx,
                completed: false
            });
        });

        window.addEventListener('resize', function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        window.addEventListener('keydown', function(e) { handleKey(e, true); });
        window.addEventListener('keyup', function(e) { handleKey(e, false); });

        animate3D();
    } catch(err) {
        console.error("Errore inizializzazione 3D:", err);
    }
}

function handleKey(e, isDown) {
    const k = e.key.toLowerCase();
    if (k in keys) keys[k] = isDown;
    if (k === 'arrowup') keys.arrowup = isDown;
    if (k === 'arrowdown') keys.arrowdown = isDown;
    if (k === 'arrowleft') keys.arrowleft = isDown;
    if (k === 'arrowright') keys.arrowright = isDown;
    if (k === 'e' && isDown && gameState === 'EXPLORING' && currentSector !== null) {
        startQuiz(currentSector);
    }
}

function checkCollision(nx, nz) {
    for (let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];
        if (Math.abs(nx - obs.x) < (obs.rx + 0.35) && Math.abs(nz - obs.z) < (obs.rz + 0.35)) return true;
    }
    for (let j = 0; j < slidingDoors.length; j++) {
        let door = slidingDoors[j];
        if (door.openAmount < 0.9) {
            let rx = door.isHorizontal ? (door.width / 2) : 0.35;
            let rz = door.isHorizontal ? 0.35 : (door.width / 2);
            if (Math.abs(nx - door.pos.x) < (rx + 0.2) && Math.abs(nz - door.pos.z) < (rz + 0.2)) return true;
        }
    }
    return false;
}

function animate3D() {
    requestAnimationFrame(animate3D);

    stations.forEach(function(st) {
        if (st.badge) st.badge.rotation.y += 0.03;
    });

    if (gameState === 'EXPLORING') {
        const speed = 0.15;
        let dx = 0, dz = 0;
        if (keys.w || keys.arrowup) dz -= speed;
        if (keys.s || keys.arrowdown) dz += speed;
        if (keys.a || keys.arrowleft) dx -= speed;
        if (keys.d || keys.arrowright) dx += speed;

        if (dx !== 0 || dz !== 0) {
            if (!checkCollision(player.position.x + dx, player.position.z)) player.position.x += dx;
            if (!checkCollision(player.position.x, player.position.z + dz)) player.position.z += dz;
            player.rotation.y = Math.atan2(dx, dz);

            walkTime += 0.24;
            leftArm.rotation.x = Math.sin(walkTime) * 0.6;
            rightArm.rotation.x = -Math.sin(walkTime) * 0.6;
            legLeft.rotation.x = -Math.sin(walkTime) * 0.6;
            legRight.rotation.x = -Math.sin(walkTime) * 0.6;
        } else {
            leftArm.rotation.x = 0; rightArm.rotation.x = 0;
            legLeft.rotation.x = 0; legRight.rotation.x = 0;
        }

        camera.position.set(player.position.x, player.position.y + 8.5, player.position.z + 10.5);
        camera.lookAt(player.position.x, player.position.y + 1, player.position.z);

        slidingDoors.forEach(function(door) {
            const dist = player.position.distanceTo(door.pos);
            const targetOpen = dist < 5.0 ? 2.1 : 0;
            door.openAmount += (targetOpen - door.openAmount) * 0.18;

            if (door.isHorizontal) {
                door.left.position.x = (-door.width / 4) - door.openAmount;
                door.right.position.x = (door.width / 4) + door.openAmount;
            } else {
                door.left.position.z = (-door.width / 4) - door.openAmount;
                door.right.position.z = (door.width / 4) + door.openAmount;
            }
        });

        internalWalls.forEach(function(wall) {
            const wallZ = wall.position.z;
            const playerBehindWall = player.position.z < wallZ && camera.position.z > wallZ;
            const nearWallX = Math.abs(player.position.x - wall.position.x) < 16;

            if (playerBehindWall && nearWallX && (wallZ - player.position.z) < 28) {
                wall.material.opacity = 0.18;
            } else {
                wall.material.opacity = 1.0;
            }
        });

        let nearStation = null;
        stations.forEach(function(st) {
            if (!st.completed && player.position.distanceTo(st.interactPos) < 2.3) nearStation = st.sectorIndex;
        });
        currentSector = nearStation;
        const promptEl = $('interaction-prompt');
        if (promptEl) {
            if (currentSector !== null) {
                promptEl.innerHTML = 'Premi <b>[E]</b> per parlare con il Professore (' + GAME_SECTORS[currentSector].title + ')';
            }
            promptEl.classList.toggle('hidden', currentSector === null);
        }
    }

    renderer.render(scene, camera);
}

function startGame() {
    gameState = 'EXPLORING';
    completedSectors = 0;
    lives = 3;
    score = 0;
    if (player) player.position.set(0, 0, 29);

    stations.forEach(function(st) {
        st.completed = false;
        st.ring.material.color.setHex(GAME_SECTORS[st.sectorIndex].color);
    });

    updateHUD();
    $('start-screen').classList.add('hidden');
    $('end-screen').classList.add('hidden');
    $('hud-top').classList.remove('hidden');
}

function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i]; copy[i] = copy[j]; copy[j] = temp;
    }
    return copy;
}

function startQuiz(sectorIdx) {
    gameState = 'QUIZ';
    $('interaction-prompt').classList.add('hidden');
    const sec = GAME_SECTORS[sectorIdx];
    $('sector-title').textContent = sec.title;
    const helperEl = $('binary-helper');
    if (helperEl) helperEl.classList.add('hidden');

    activeQuestions = shuffleArray(sec.questions).slice(0, 5);
    currentQuestionIdx = 0;
    $('quiz-panel').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const qData = activeQuestions[currentQuestionIdx];
    questionStartTime = Date.now();
    $('quest-progress').textContent = "Domanda " + (currentQuestionIdx + 1) + " / " + activeQuestions.length;
    $('question-text').textContent = qData.q;
    $('options-container').innerHTML = '';
    $('feedback-box').className = 'feedback hidden';

    ['A', 'B', 'C', 'D'].forEach(function(letter, i) {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = '<span class="option-letter">' + letter + '</span> <span>' + qData.options[i] + '</span>';
        btn.onclick = function() { handleAnswer(i, btn); };
        $('options-container').appendChild(btn);
    });
}

function handleAnswer(selected, btn) {
    const qData = activeQuestions[currentQuestionIdx];
    const btns = document.querySelectorAll('.option-btn');
    for (let i = 0; i < btns.length; i++) { btns[i].disabled = true; }

    if (selected === qData.correct) {
        playSound('correct');
        btn.classList.add('correct');
        score += 100 + Math.max(20, Math.round(100 - ((Date.now() - questionStartTime) / 1000) * 5));
        $('feedback-text').innerHTML = '✅ <strong>Esatto!</strong> ' + qData.explanation;
    } else {
        playSound('wrong');
        btn.classList.add('wrong');
        btns[qData.correct].classList.add('correct');
        lives--;
        $('feedback-box').classList.add('error-fb');
        $('feedback-text').innerHTML = '❌ <strong>Attenzione!</strong> ' + qData.explanation;
    }
    updateHUD();
    $('feedback-box').classList.remove('hidden');
}

const nextBtn = $('next-btn');
if (nextBtn) {
    nextBtn.onclick = function() {
        if (lives <= 0) return endGame(false);
        currentQuestionIdx++;
        if (currentQuestionIdx < activeQuestions.length) return loadQuestion();

        const st = stations.find(function(s) { return s.sectorIndex === currentSector; });
        if (st) {
            st.completed = true;
            st.ring.material.color.setHex(0x22c55e);
        }
        completedSectors++;
        updateHUD();
        $('quiz-panel').classList.add('hidden');
        if (completedSectors >= GAME_SECTORS.length) endGame(true);
        else gameState = 'EXPLORING';
    };
}

function updateHUD() {
    $('level-indicator').textContent = completedSectors + " / " + GAME_SECTORS.length;
    $('score-indicator').textContent = score;
    let hearts = "";
    for (let i = 0; i < Math.max(0, lives); i++) { hearts += "❤️"; }
    for (let i = 0; i < (3 - Math.max(0, lives)); i++) { hearts += "🖤"; }
    $('lives-indicator').textContent = hearts;
}

function endGame(victory) {
    gameState = 'END';
    $('hud-top').classList.add('hidden');
    $('quiz-panel').classList.add('hidden');
    $('end-screen').classList.remove('hidden');
    if (victory) playSound('win');
    $('end-title').textContent = victory ? "🏆 DIPLOMA DI ECCELLENZA!" : "⚠️ BOCCIATO!";
    $('end-title').style.color = victory ? "#eab308" : "#ef4444";
    $('end-subtitle').textContent = victory ? "Hai superato gli esami in tutte le aule!" : "Non hai abbastanza energia. Riprova!";
    $('final-score').textContent = score;
    $('save-score-form').classList.remove('hidden');
    $('player-name').value = '';
    renderLeaderboards();
}

function getLB() {
    try {
        let lb = JSON.parse(localStorage.getItem('einstein_lab_lb')) || [
            { name: "Albert", score: 1920 },
            { name: "Marie", score: 1750 },
            { name: "Nikola", score: 1580 }
        ];
        // Filtra via qualsiasi voce inappropriata (es. variazioni del nome)
        lb = lb.filter(function(entry) {
            return entry.name && entry.name.trim().toLowerCase() !== "hitler";
        });
        return lb;
    } catch(e) {
        return [
            { name: "Albert", score: 1920 },
            { name: "Marie", score: 1750 },
            { name: "Nikola", score: 1580 }
        ];
    }
}

function renderLeaderboards() {
    const lb = getLB();
    const html = lb.map(function(e, i) {
        return '<li>#' + (i + 1) + ' ' + e.name + ' - ' + e.score + ' pt</li>';
    }).join('');
    const startLb = $('start-leaderboard');
    const endLb = $('end-leaderboard');
    if (startLb) startLb.innerHTML = html;
    if (endLb) endLb.innerHTML = html;
}

const saveBtn = $('save-score-btn');
if (saveBtn) {
    saveBtn.onclick = function() {
        const inputName = $('player-name');
        let playerName = inputName && inputName.value ? inputName.value.trim() : "Studente";
        
        // Se inseriscono quel nome, lo blocchiamo o cambiamo d'ufficio
        if (playerName.toLowerCase() === "hitler") {
            playerName = "Studente";
        }

        const currentScore = typeof score !== 'undefined' ? score : 0;

        let lb = getLB();
        lb.push({ name: playerName || "Studente", score: currentScore });
        lb.sort(function(a, b) { return b.score - a.score; });
        if (lb.length > 5) lb.length = 5;

        localStorage.setItem('einstein_lab_lb', JSON.stringify(lb));
        $('save-score-form').classList.add('hidden');
        renderLeaderboards();
    };
}

window.onload = function() {
    init3D();
    renderLeaderboards();
    const startBtn = $('start-btn');
    const restartBtn = $('restart-btn');
    if (startBtn) startBtn.onclick = startGame;
    if (restartBtn) restartBtn.onclick = startGame;
};
