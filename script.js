const GAME_SECTORS = [
    {
        title: "STANZA 1: LOGICA & MATEMATICA", color: 0x00f0ff, pos: { x: -11, z: -11 },
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
        title: "STANZA 2: SPAZIO & FISICA", color: 0x3b82f6, pos: { x: 11, z: -11 },
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
        title: "STANZA 3: CHIMICA & NATURA", color: 0x22c55e, pos: { x: -11, z: 11 },
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
        title: "STANZA 4: IL CORPO UMANO", color: 0xa855f7, pos: { x: 11, z: 11 },
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
        title: "CAVEAU BINARIO (FINALE)", color: 0xeab308, isBinary: true, pos: { x: 0, z: -20 },
        questions: [
            { q: "I computer usano segnali di acceso/spento. Quali cifre formano il codice binario?", options: ["1 e 2", "0 e 1", "A e B", "0 e 9"], correct: 1, explanation: "Il sistema binario usa solo due cifre: 0 (spento) e 1 (acceso)." },
            { q: "A quale numero corrisponde il codice binario 101? (4 + 0 + 1)", options: ["3", "5", "6", "7"], correct: 1, explanation: "101 significa: 4 acceso + 0 + 1 acceso = 5!" },
            { q: "In informatica, quanti bit servono per formare 1 Byte?", options: ["4 bit", "8 bit", "10 bit", "100 bit"], correct: 1, explanation: "1 Byte è composto da una sequenza di 8 bit." },
            { q: "Come si scrive il numero 3 in binario usando i bit 2 e 1?", options: ["100", "011", "110", "001"], correct: 1, explanation: "Per fare 3 accendiamo il bit 2 e il bit 1: quindi 011." },
            { q: "Как si scrive il numero 7 in binario accendendo tutti e tre i bit (4 + 2 + 1)?", options: ["111", "100", "000", "101"], correct: 0, explanation: "4 + 2 + 1 = 7, quindi tutti i bit sono accesi: 111!" },
            { q: "Cosa rappresenta lo '0' nel codice binario di un computer?", options: ["Circuito acceso", "Circuito spento", "Un errore", "Un file cancellato"], correct: 1, explanation: "Lo 0 indica l'assenza di corrente (spento), mentre l'1 indica la presenza (acceso)." }
        ]
    }
];

let scene, camera, renderer, player, stations = [], obstacles = [];
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

function createScienceStation(x, z, color) {
    const stationGroup = new THREE.Group();
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.2 });
    
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, 0.2, 24), poleMat);
    base.position.y = 0.1; stationGroup.add(base);

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 1.2, 16), poleMat);
    pole.position.y = 0.7; stationGroup.add(pole);

    const deskMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 });
    const desk = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 0.9), deskMat);
    desk.position.set(0, 1.35, 0); desk.rotation.x = -0.35; stationGroup.add(desk);

    const bookMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.5, roughness: 0.2 });
    bookMaterials.push(bookMat);
    const book = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 0.6), bookMat);
    book.position.set(0, 1.43, -0.02); book.rotation.x = -0.35; stationGroup.add(book);

    stationGroup.position.set(x, 0, z);
    scene.add(stationGroup);
    obstacles.push({ x: x, z: z, rx: 0.9, rz: 0.9 });
}

function init3D() {
    try {
        scene = new THREE.Scene(); 
        scene.fog = new THREE.FogExp2(0x0b1120, 0.018);
        
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        $('canvas-container').appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.75));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8); 
        dirLight.position.set(10, 25, 15); 
        scene.add(dirLight);

        // Pavimento generale
        const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.2 }));
        floor.rotation.x = -Math.PI / 2; 
        floor.position.y = -0.01; 
        scene.add(floor);
        scene.add(new THREE.GridHelper(50, 25, 0x38bdf8, 0x334155));

        // Muri perimetrali esterni
        const wallMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.3 });
        const addWall = (w, h, d, x, y, z) => {
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat); 
            m.position.set(x, y, z); 
            scene.add(m);
            obstacles.push({ x: x, z: z, rx: w/2, rz: d/2 });
        };
        addWall(50, 6, 1, 0, 3, -25); 
        addWall(50, 6, 1, 0, 3, 25);
        addWall(1, 6, 50, -25, 3, 0); 
        addWall(1, 6, 50, 25, 3, 0);

        // --- PARETI INTERNE PER CREARE LE STANZE E I CORRIDOI ---
        // Muro divisorio verticale sinistro (con porta al centro z=0)
        addWall(1, 6, 16, -15, 3, -8);
        addWall(1, 6, 16, -15, 3, 8);

        // Muro divisorio verticale destro (con porta al centro z=0)
        addWall(1, 6, 16, 15, 3, -8);
        addWall(1, 6, 16, 15, 3, 8);

        // Muro divisorio orizzontale superiore (per isolare il Caveau)
        addWall(16, 6, 1, -8, 3, -15);
        addWall(16, 6, 1, 8, 3, -15);

        // Lavagne e dettagli nelle stanze
        const boardMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.7 });
        [-10, 10].forEach(xPos => {
            const board = new THREE.Mesh(new THREE.BoxGeometry(6, 2.5, 0.2), boardMat);
            board.position.set(xPos, 3, -24.4);
            scene.add(board);
        });

        const einstein = createEinsteinMesh();
        player = einstein.group; 
        leftArm = einstein.lArm; 
        rightArm = einstein.rArm; 
        legLeft = einstein.lLeg; 
        legRight = einstein.rLeg;
        scene.add(player); 
        player.position.set(0, 0, 18); // Posizionato nell'Atrio centrale

        GAME_SECTORS.forEach((sec, idx) => {
            createScienceStation(sec.pos.x, sec.pos.z, sec.color);

            const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.5, 32), new THREE.MeshBasicMaterial({ color: sec.color, side: THREE.DoubleSide }));
            ring.rotation.x = -Math.PI / 2;
            ring.position.set(sec.pos.x, 0.02, sec.pos.z + 1.8);
            scene.add(ring);

            stations.push({ ring: ring, interactPos: new THREE.Vector3(sec.pos.x, 0, sec.pos.z + 1.8), sectorIndex: idx, completed: false, bookMat: bookMaterials[idx] });
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight; 
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        window.addEventListener('keydown', e => handleKey(e, true));
        window.addEventListener('keyup', e => handleKey(e, false));
        
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
    if (k === 'e' && isDown && gameState === 'EXPLORING' && currentSector !== null) startQuiz(currentSector);
}

function checkCollision(nx, nz) {
    for (let obs of obstacles) {
        if (Math.abs(nx - obs.x) < (obs.rx + 0.3) && Math.abs(nz - obs.z) < (obs.rz + 0.3)) return true;
    }
    return false;
}

function animate3D() {
    requestAnimationFrame(animate3D);

    if (gameState === 'EXPLORING') {
        const speed = 0.14;
        let dx = 0, dz = 0;
        if (keys.w || keys.arrowup) dz -= speed;
        if (keys.s || keys.arrowdown) dz += speed;
        if (keys.a || keys.arrowleft) dx -= speed;
        if (keys.d || keys.arrowright) dx += speed;

        if (dx !== 0 || dz !== 0) {
            if (!checkCollision(player.position.x + dx, player.position.z)) player.position.x += dx;
            if (!checkCollision(player.position.x, player.position.z + dz)) player.position.z += dz;
            player.rotation.y = Math.atan2(dx, dz);

            walkTime += 0.22;
            leftArm.rotation.x = Math.sin(walkTime) * 0.6;
            rightArm.rotation.x = -Math.sin(walkTime) * 0.6;
            legLeft.rotation.x = -Math.sin(walkTime) * 0.6;
            legRight.rotation.x = Math.sin(walkTime) * 0.6;
        } else {
            leftArm.rotation.x = 0; rightArm.rotation.x = 0;
            legLeft.rotation.x = 0; legRight.rotation.x = 0;
        }

        camera.position.set(player.position.x, player.position.y + 7.5, player.position.z + 9.5);
        camera.lookAt(player.position.x, player.position.y + 1, player.position.z);

        let nearStation = null;
        stations.forEach(st => {
            if (!st.completed && player.position.distanceTo(st.interactPos) < 2.2) nearStation = st.sectorIndex;
        });
        currentSector = nearStation;
        $('interaction-prompt').classList.toggle('hidden', currentSector === null);
    }

    renderer.render(scene, camera);
}

function startGame() {
    gameState = 'EXPLORING'; 
    completedSectors = 0; 
    lives = 3; 
    score = 0;
    player.position.set(0, 0, 18);
    
    stations.forEach((st) => {
        st.completed = false;
        st.ring.material.color.setHex(GAME_SECTORS[st.sectorIndex].color);
        st.bookMat.color.setHex(GAME_SECTORS[st.sectorIndex].color);
        st.bookMat.emissive.setHex(GAME_SECTORS[st.sectorIndex].color);
    });
    
    updateHUD();
    $('start-screen').classList.add('hidden'); 
    $('end-screen').classList.add('hidden'); 
    $('hud-top').classList.remove('hidden');
}

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startQuiz(sectorIdx) {
    gameState = 'QUIZ'; 
    $('interaction-prompt').classList.add('hidden');
    const sec = GAME_SECTORS[sectorIdx];
    $('sector-title').textContent = sec.title;
    $('binary-helper').classList.toggle('hidden', !sec.isBinary);
    
    activeQuestions = shuffleArray(sec.questions).slice(0, 3);
    currentQuestionIdx = 0;
    $('quiz-panel').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const qData = activeQuestions[currentQuestionIdx];
    questionStartTime = Date.now();
    $('quest-progress').textContent = `Domanda ${currentQuestionIdx + 1} / ${activeQuestions.length}`;
    $('question-text').textContent = qData.q;
    $('options-container').innerHTML = '';
    $('feedback-box').className = 'feedback hidden';

    ['A', 'B', 'C', 'D'].forEach((letter, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letter}</span> <span>${qData.options[i]}</span>`;
        btn.onclick = () => handleAnswer(i, btn);
        $('options-container').appendChild(btn);
    });
}

function handleAnswer(selected, btn) {
    const qData = activeQuestions[currentQuestionIdx], btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    if (selected === qData.correct) {
        playSound('correct'); btn.classList.add('correct');
        score += 100 + Math.max(20, Math.round(100 - ((Date.now() - questionStartTime) / 1000) * 5));
        $('feedback-text').innerHTML = `✅ <strong>Esatto!</strong> ${qData.explanation}`;
    } else {
        playSound('wrong'); btn.classList.add('wrong'); btns[qData.correct].classList.add('correct');
        lives--; $('feedback-box').classList.add('error-fb');
        $('feedback-text').innerHTML = `❌ <strong>Attenzione!</strong> ${qData.explanation}`;
    }
    updateHUD(); $('feedback-box').classList.remove('hidden');
}

$('next-btn').onclick = () => {
    if (lives <= 0) return endGame(false);
    if (++currentQuestionIdx < activeQuestions.length) return loadQuestion();

    const st = stations.find(s => s.sectorIndex === currentSector);
    if (st) {
        st.completed = true;
        st.ring.material.color.setHex(0x22c55e);
        st.bookMat.color.setHex(0x22c55e);
        st.bookMat.emissive.setHex(0x22c55e);
    }
    completedSectors++; updateHUD();
    $('quiz-panel').classList.add('hidden');
    if (completedSectors >= GAME_SECTORS.length) endGame(true);
    else gameState = 'EXPLORING';
};

function updateHUD() {
    $('level-indicator').textContent = `${completedSectors} / ${GAME_SECTORS.length}`;
    $('score-indicator').textContent = score;
    $('lives-indicator').textContent = '❤️'.repeat(Math.max(0, lives)) + '🖤'.repeat(3 - Math.max(0, lives));
}

function endGame(victory) {
    gameState = 'END';
    $('hud-top').classList.add('hidden'); $('quiz-panel').classList.add('hidden'); $('end-screen').classList.remove('hidden');
    if (victory) playSound('win');
    $('end-title').textContent = victory ? "🏆 GENIO DELLA SCIENZA!" : "⚠️ ESPERIMENTO FALLITO";
    $('end-title').style.color = victory ? "#eab308" : "#ef4444";
    $('end-subtitle').textContent = victory ? "Hai esplorato tutte le stanze del laboratorio!" : "Hai esaurito l'energia. Riprova!";
    $('final-score').textContent = score;
    $('save-score-form').classList.remove('hidden'); $('player-name').value = '';
    renderLeaderboards();
}

const getLB = () => JSON.parse(localStorage.getItem('einstein_lab_lb')) || [{ name: "Albert", score: 1920 }, { name: "Marie", score: 1750 }, { name: "Nikola", score: 1580 }];
function renderLeaderboards() {
    const html = getLB().map((e, i) => `<li><span>#${i + 1} ${e.name}</span> <span>${e.score} pt</span></li>`).join('');
    $('start-leaderboard').innerHTML = html; $('end-leaderboard').innerHTML = html;
}

$('save-score-btn').onclick = () => {
    const lb = [...getLB(), { name: $('player-name').value.trim() || "Scienziato", score }].sort((a, b) => b.score - a.score).slice(0, 5);
    localStorage.setItem('einstein_lab_lb', JSON.stringify(lb));
    $('save-score-form').classList.add('hidden'); renderLeaderboards();
};

window.onload = () => {
    init3D();
    renderLeaderboards();
    $('start-btn').onclick = startGame;
    $('restart-btn').onclick = startGame;
};