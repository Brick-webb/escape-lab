const GAME_SECTORS = [
    {
        title: "STANZA 1: LOGICA & MATEMATICA", color: 0x00f0ff, pos: { x: -16, z: -16 },
        theme: "logic",
        questions: [
            { q: "Qual è il numero successivo in questa sequenza: 2, 4, 8, 16, ...?", options: ["24", "32", "20", "30"], correct: 1, explanation: "Ogni numero viene moltiplicato per 2 (16 x 2 = 32)." },
            { q: "Quanto vale la somma degli angoli interni di un qualsiasi triangolo?", options: ["90 gradi", "360 gradi", "180 gradi", "270 gradi"], correct: 2, explanation: "In qualsiasi triangolo la somma degli angoli interni è sempre 180°." },
            { q: "Se un treno viaggia a 100 km/h, quanta strada percorre in 30 minuti?", options: ["50 km", "100 km", "30 km", "25 km"], correct: 0, explanation: "30 minuti sono mezz'ora, quindi percorre la metà di 100 km: 50 km." },
            { q: "Quale di questi è un numero primo?", options: ["9", "15", "13", "21"], correct: 2, explanation: "13 è divisibile solo per 1 e per se stesso." },
            { q: "Un cubo ha 6 facce. Quanti spigoli (lati) ha in totale?", options: ["8", "12", "6", "10"], correct: 1, explanation: "Un cubo ha 4 spigoli sopra, 4 sotto e 4 verticali: in totale 12." },
            { q: "Se hai 3 mele e ne prendi 2, quante mele hai?", options: ["5 mele", "3 mele", "2 mele", "1 mela"], correct: 0, explanation: "Hai preso 2 mele, quindi adesso ne possiedi 5 in totale!" }
        ]
    },
    {
        title: "STANZA 2: SPAZIO & FISICA", color: 0x3b82f6, pos: { x: 16, z: -16 },
        theme: "physics",
        questions: [
            { q: "Qual è il pianeta più grande del Sistema Solare?", options: ["Saturno", "Marte", "Giove", "Nettuno"], correct: 2, explanation: "Giove è così grande che conterrebbe oltre 1.300 Terre!" },
            { q: "Come si chiama il passaggio dell'acqua dallo stato liquido a quello gassoso?", options: ["Condensazione", "Solidificazione", "Evaporazione", "Fusione"], correct: 2, explanation: "Con il calore l'acqua evapora trasformandosi in vapore acqueo." },
            { q: "Cosa viaggia più veloce nell'universo?", options: ["Il suono", "Un razzo spaziale", "La luce", "Il vento solare"], correct: 2, explanation: "La luce viaggia a circa 300.000 km al secondo." },
            { q: "Perché sulla Luna gli astronauti saltano molto più in alto?", options: ["Non c'è aria", "La gravità è minore", "Le tute hanno molle", "La Luna gira veloce"], correct: 1, explanation: "La massa della Luna è minore, quindi la sua gravità è circa 6 volte più debole." },
            { q: "Quale pianeta è famoso per i suoi grandi anelli visibili?", options: ["Venere", "Saturno", "Mercurio", "Marte"], correct: 1, explanation: "Gli anelli di Saturno sono formati da frammenti di ghiaccio e roccia." },
            { q: "Qual è la forza che ci tiene incollati al suolo sulla Terra?", options: ["Il magnetismo", "La gravità", "L'elettricità", "L'attrito"], correct: 1, explanation: "La forza di gravità attrae i corpi verso il centro della Terra." }
        ]
    },
    {
        title: "STANZA 3: CHIMICA & NATURA", color: 0x22c55e, pos: { x: -16, z: 16 },
        theme: "chemistry",
        questions: [
            { q: "Qual è la formula chimica dell'acqua?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, explanation: "Una molecola d'acqua è formata da 2 atomi di Idrogeno e 1 di Ossigeno." },
            { q: "Quale gas assorbono le piante dall'aria per fare la fotosintesi?", options: ["Anidride carbonica (CO2)", "Elio", "Azoto", "Metano"], correct: 0, explanation: "Le piante assorbono CO2 e luce solare per produrre zuccheri e ossigeno." },
            { q: "Il succo di limone ha un pH inferiore a 7. Questo significa che è...", options: ["Basico", "Acido", "Neutro", "Metallico"], correct: 1, explanation: "Nella scala del pH, i valori sotto il 7 indicano sostanze acide." },
            { q: "Quale elemento chimico ha come simbolo 'O'?", options: ["Oro", "Osmio", "Ossigeno", "Olio"], correct: 2, explanation: "O è il simbolo dell'Ossigeno (l'Oro si indica con Au)." },
            { q: "Quale gas costituisce circa il 78% dell'atmosfera terrestre?", options: ["Ossigeno", "Anidride carbonica", "Azoto", "Idrogeno"], correct: 2, explanation: "L'aria che respiriamo è composta per il 78% da Azoto." },
            { q: "Come si chiamano gli animali che mangiano sia carne che vegetali?", options: ["Erbivori", "Carnivori", "Onnivori", "Insettivori"], correct: 2, explanation: "Gli onnivori (come l'essere umano o il maiale) mangiano di tutto." }
        ]
    },
    {
        title: "STANZA 4: IL CORPO UMANO", color: 0xa855f7, pos: { x: 16, z: 16 },
        theme: "biology",
        questions: [
            { q: "Quale organo pompa il sangue in tutto il corpo umano?", options: ["I polmoni", "Il fegato", "Il cuore", "Lo stomaco"], correct: 2, explanation: "Il cuore batte circa 100.000 volte al giorno." },
            { q: "Quale funzione principale hanno i globuli rossi nel sangue?", options: ["Combattere i virus", "Trasportare ossigeno", "Digerire il cibo", "Produrre energia"], correct: 1, explanation: "I globuli rossi trasportano l'ossigeno dai polmoni a tutto il corpo." },
            { q: "Come si chiama la molecola a doppia elica che contiene la genetica?", options: ["ATP", "DNA", "RNA", "H2O"], correct: 1, explanation: "Il DNA contiene il 'libretto di istruzioni' di ogni essere vivente." },
            { q: "Quanti sono i sensi principali dell'essere umano?", options: ["3", "4", "5", "6"], correct: 2, explanation: "Vista, udito, olfatto, gusto e tatto." },
            { q: "Dove si trova protetto il cervello umano?", options: ["Nel torace", "Nel cranio", "Nella colonna vertebrale", "Nell'addome"], correct: 1, explanation: "La scatola cranica protegge il cervello dagli urti." },
            { q: "Qual è il muscolo involontario più importante per la respirazione?", options: ["Il bicipite", "Il diaframma", "Il cuore", "Il quadricipite"], correct: 1, explanation: "Il diaframma si contrae e si rilassa permettendo ai polmoni di respirare." }
        ]
    },
    {
        title: "CAVEAU BINARIO (FINALE)", color: 0xeab308, isBinary: true, pos: { x: 0, z: -26 },
        theme: "binary",
        questions: [
            { q: "I computer usano segnali di acceso/spento. Quali cifre formano il codice binario?", options: ["1 e 2", "0 e 1", "A e B", "0 e 9"], correct: 1, explanation: "Il sistema binario usa solo due cifre: 0 (spento) e 1 (acceso)." },
            { q: "A quale numero corrisponde il codice binario 101? (4 + 0 + 1)", options: ["3", "5", "6", "7"], correct: 1, explanation: "101 significa: 4 acceso + 0 + 1 acceso = 5!" },
            { q: "In informatica, quanti bit servono per formare 1 Byte?", options: ["4 bit", "8 bit", "10 bit", "100 bit"], correct: 1, explanation: "1 Byte è composto da una sequenza di 8 bit." },
            { q: "Come si scrive il numero 3 in binario usando i bit 2 e 1?", options: ["100", "011", "110", "001"], correct: 1, explanation: "Per fare 3 accendiamo il bit 2 e il bit 1: quindi 011." },
            { q: "Come si scrive il numero 7 in binario accendendo tutti e tre i bit (4 + 2 + 1)?", options: ["111", "100", "000", "101"], correct: 0, explanation: "4 + 2 + 1 = 7, quindi tutti i bit sono accesi: 111!" },
            { q: "Cosa rappresenta lo '0' nel codice binario di un computer?", options: ["Circuito acceso", "Circuito spento", "Un errore", "Un file cancellato"], correct: 1, explanation: "Lo 0 indica l'assenza di corrente (spento), mentre l'1 indica la presenza (acceso)." }
        ]
    }
];

let scene, camera, renderer, player;
let stations = [], obstacles = [], internalWalls = [], slidingDoors = [];
let keys = { w: false, a: false, s: false, d: false, arrowup: false, arrowleft: false, arrowdown: false, arrowright: false };
let gameState = 'START', currentSector = null, completedSectors = 0, lives = 3, score = 0, questionStartTime = 0;
let currentQuestionIdx = 0, activeQuestions = [], leftArm, rightArm, legLeft, legRight, walkTime = 0;
let bookMaterials = [], audioCtx = null;
const $ = id => document.getElementById(id);

function playSound(type) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator(), gain = audioCtx.createGain(), now = audioCtx.currentTime;
        osc.connect(gain); gain.connect(audioCtx.destination);
        if (type === 'correct') {
            osc.type = 'sine'; [523.25, 659.25, 783.99].forEach((f, i) => osc.frequency.setValueAtTime(f, now + i * 0.1));
            gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4); osc.start(now); osc.stop(now + 0.4);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(180, now); osc.frequency.linearRampToValueAtTime(110, now + 0.3);
            gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35); osc.start(now); osc.stop(now + 0.35);
        } else if (type === 'win') {
            osc.type = 'square'; [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => osc.frequency.setValueAtTime(f, now + i * 0.12));
            gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7); osc.start(now); osc.stop(now + 0.7);
        }
    } catch(e) { console.log("Audio non supportato"); }
}

function createEinsteinMesh() {
    const group = new THREE.Group();
    const coatMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfcd5b5, roughness: 0.5 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.8 });

    const lLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat); lLeg.position.set(-0.14, 0.275, 0); group.add(lLeg);
    const rLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat); rLeg.position.set(0.14, 0.275, 0); group.add(rLeg);

    const coat = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.85, 0.38), coatMat); coat.position.y = 0.92; group.add(coat);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.45, 0.4), new THREE.MeshStandardMaterial({ color: 0xef4444 })); tie.position.y = 0.98; group.add(tie);

    const lArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.16), coatMat); lArm.position.set(-0.42, 0.95, 0); group.add(lArm);
    const rArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.16), coatMat); rArm.position.set(0.42, 0.95, 0); group.add(rArm);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.46, 0.46), skinMat); head.position.y = 1.62; group.add(head);

    const glassMat = new THREE.MeshBasicMaterial({ color: 0x0f172a }), lensMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const frameL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.05), glassMat); frameL.position.set(-0.11, 1.65, 0.24); group.add(frameL);
    const frameR = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.05), glassMat); frameR.position.set(0.11, 1.65, 0.24); group.add(frameR);
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.03, 0.05), glassMat); bridge.position.set(0, 1.66, 0.24); group.add(bridge);
    const lensL = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.06), lensMat); lensL.position.set(-0.11, 1.65, 0.24); group.add(lensL);
    const lensR = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.06), lensMat); lensR.position.set(0.11, 1.65, 0.24); group.add(lensR);

    const mustache = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.09, 0.08), hairMat); mustache.position.set(0, 1.50, 0.25); group.add(mustache);

    [[-0.25, 1.75, 0], [0.25, 1.75, 0], [-0.22, 1.85, -0.15], [0.22, 1.85, -0.15], [0, 1.9, -0.1], [-0.26, 1.65, -0.12], [0.26, 1.65, -0.12], [0, 1.75, -0.25]].forEach(p => {
        const puff = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), hairMat);
        puff.position.set(p[0], p[1], p[2]); group.add(puff);
    });

    return { group, lArm, rArm, lLeg, rLeg };
}

function createCompactLabRoom(x, z, color, theme) {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.3 });
    const lightMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 1.0 });

    const neon = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 0.3), lightMat);
    neon.position.set(0, 4.8, 0);
    group.add(neon);

    const roomLight = new THREE.PointLight(color, 2.0, 12);
    roomLight.position.set(0, 4.2, 0);
    group.add(roomLight);

    const pad = new THREE.Mesh(
        new THREE.CylinderGeometry(3.2, 3.2, 0.04, 32),
        new THREE.MeshStandardMaterial({ color: color, roughness: 0.2, metalness: 0.6, transparent: true, opacity: 0.4 })
    );
    pad.position.y = 0.01;
    group.add(pad);

    [-5.5, 5.5].forEach(xOffset => {
        const cab = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.5, 3.0), metalMat);
        cab.position.set(xOffset, 1.25, 0);
        group.add(cab);
    });

    group.position.set(x, 0, z);
    scene.add(group);
}

function createScienceStation(x, z, color, theme) {
    const stationGroup = new THREE.Group();
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.2 });
    
    createCompactLabRoom(x, z, color, theme);

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 0.2, 24), poleMat);
    base.position.y = 0.1; stationGroup.add(base);

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 1.1, 16), poleMat);
    pole.position.y = 0.65; stationGroup.add(pole);

    const deskMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 });
    const desk = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.8), deskMat);
    desk.position.set(0, 1.25, 0); desk.rotation.x = -0.35; stationGroup.add(desk);

    const bookMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.7, roughness: 0.2 });
    bookMaterials.push(bookMat);
    const book = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.08, 0.5), bookMat);
    book.position.set(0, 1.33, -0.02); book.rotation.x = -0.35; stationGroup.add(book);

    stationGroup.position.set(x, 0, z);
    scene.add(stationGroup);
    obstacles.push({ x: x, z: z, rx: 0.8, rz: 0.8 });
}

function createSlidingDoor(x, y, z, width, height, isHorizontal) {
    const doorGroup = new THREE.Group();
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3, metalness: 0.7, transparent: true, opacity: 0.85 });
    
    const panelGeo = isHorizontal ? new THREE.BoxGeometry(width / 2, height, 0.2) : new THREE.BoxGeometry(0.2, height, width / 2);
    
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

function addCorridorProps() {
    const propGroup = new THREE.Group();
    const stretcherMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.6 });
    const mattressMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5 });
    
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 1.8), stretcherMat);
    frame.position.set(-8, 0.25, 20);
    propGroup.add(frame);
    
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.2, 1.6), mattressMat);
    mattress.position.set(-8, 0.55, 20);
    propGroup.add(mattress);
    obstacles.push({ x: -8, z: 20, rx: 0.5, rz: 1.0 });

    const cabMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.4 });
    const emergencyCab = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.5, 0.3), cabMat);
    emergencyCab.position.set(0, 2.5, 5);
    propGroup.add(emergencyCab);

    scene.add(propGroup);
}

function init3D() {
    try {
        scene = new THREE.Scene(); 
        scene.fog = new THREE.FogExp2(0x0b1120, 0.016);
        
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        $('canvas-container').appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8); 
        dirLight.position.set(10, 25, 15); 
        scene.add(dirLight);

        const floor = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.3 }));
        floor.rotation.x = -Math.PI / 2; 
        floor.position.y = -0.01; 
        scene.add(floor);
        scene.add(new THREE.GridHelper(80, 40, 0x38bdf8, 0x1e293b));

        const wallMat = new THREE.MeshStandardMaterial({ 
            color: 0x1e293b, 
            roughness: 0.5, 
            metalness: 0.4, 
            transparent: true, 
            opacity: 1.0,
            depthWrite: false 
        });
        
        const addWall = (w, h, d, x, y, z, isInternal = false) => {
            const mat = wallMat.clone();
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); 
            m.position.set(x, y, z); 
            scene.add(m);
            obstacles.push({ x: x, z: z, rx: w/2, rz: d/2 });
            if (isInternal) internalWalls.push(m);
        };

        addWall(70, 6, 1, 0, 3, -35); 
        addWall(70, 6, 1, 0, 3, 35);
        addWall(1, 6, 70, -35, 3, 0); 
        addWall(1, 6, 70, 35, 3, 0);

        addWall(20, 6, 1, -22, 3, -8, true);
        addWall(1, 6, 20, -8, 3, -22, true);

        addWall(20, 6, 1, 22, 3, -8, true);
        addWall(1, 6, 20, 8, 3, -22, true);

        addWall(20, 6, 1, -22, 3, 8, true);
        addWall(1, 6, 20, -8, 3, 22, true);

        addWall(20, 6, 1, 22, 3, 8, true);
        addWall(1, 6, 20, 8, 3, 22, true);

        addWall(12, 6, 1, -6, 3, -30, true);
        addWall(12, 6, 1, 6, 3, -30, true);

        createSlidingDoor(-22, 0, -8, 4, 6, true);
        createSlidingDoor(22, 0, -8, 4, 6, true);
        createSlidingDoor(-22, 0, 8, 4, 6, true);
        createSl