const GAME_SECTORS = [
    {
        title: "SETTORE 1: LOGICA & MATEMATICA", color: 0x00f0ff,
        pos: { x: -8, z: -8 },
        questions: [
            { q: "Qual è il numero successivo in questa sequenza: 2, 4, 8, 16, ...?", options: ["24", "32", "20", "30"], correct: 1, explanation: "Ogni numero viene moltiplicato per 2 (16 x 2 = 32)." },
            { q: "Quanto vale la somma degli angoli interni di un qualsiasi triangolo?", options: ["90 gradi", "360 gradi", "180 gradi", "270 gradi"], correct: 2, explanation: "In qualsiasi triangolo la somma degli angoli interni è sempre 180°." },
            { q: "Se un treno viaggia a 100 km/h, quanta strada percorre in 30 minuti?", options: ["50 km", "100 km", "30 km", "25 km"], correct: 0, explanation: "30 minuti sono mezz'ora, quindi percorre la metà di 100 km: 50 km." }
        ]
    },
    {
        title: "SETTORE 2: SPAZIO & FISICA", color: 0x3b82f6,
        pos: { x: 8, z: -8 },
        questions: [
            { q: "Qual è il pianeta più grande del Sistema Solare?", options: ["Saturno", "Marte", "Giove", "Nettuno"], correct: 2, explanation: "Giove è così grande che conterrebbe oltre 1.300 Terre!" },
            { q: "Come si chiama il passaggio dell'acqua dallo stato liquido a quello gassoso?", options: ["Condensazione", "Solidificazione", "Evaporazione", "Fusione"], correct: 2, explanation: "Con il calore l'acqua evapora trasformandosi in vapore acqueo." },
            { q: "Cosa viaggia più veloce nell'universo?", options: ["Il suono", "Un razzo spaziale", "La luce", "Il vento solare"], correct: 2, explanation: "La luce viaggia a circa 300.000 km al secondo." }
        ]
    },
    {
        title: "SETTORE 3: CHIMICA & NATURA", color: 0x22c55e,
        pos: { x: -12, z: 4 },
        questions: [
            { q: "Qual è la formula chimica dell'acqua?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, explanation: "Una molecola d'acqua è formata da 2 atomi di Idrogeno (H) e 1 di Ossigeno (O)." },
            { q: "Quale gas assorbono le piante dall'aria per fare la fotosintesi?", options: ["Anidride carbonica (CO2)", "Elio", "Azoto", "Metano"], correct: 0, explanation: "Le piante assorbono CO2 e luce solare per produrre zuccheri e liberare Ossigeno." },
            { q: "Il succo di limone ha un pH inferiore a 7. Questo significa che è...", options: ["Basico", "Acido", "Neutro", "Metallico"], correct: 1, explanation: "Nella scala del pH (da 0 a 14), i valori sotto il 7 indicano sostanze acide." }
        ]
    },
    {
        title: "SETTORE 4: IL CORPO UMANO", color: 0xa855f7,
        pos: { x: 12, z: 4 },
        questions: [
            { q: "Quale organo pompa il sangue in tutto il corpo umano?", options: ["I polmoni", "Il fegato", "Il cuore", "Lo stomaco"], correct: 2, explanation: "Il cuore batte circa 100.000 volte al giorno per far circolare il sangue." },
            { q: "Quale funzione principale hanno i globuli rossi nel sangue?", options: ["Combattere i virus", "Trasportare ossigeno", "Digerire il cibo", "Produrre energia"], correct: 1, explanation: "I globuli rossi trasportano l'ossigeno dai polmoni a tutto il corpo." },
            { q: "Come si chiama la molecola a doppia elica che contiene le nostre informazioni genetiche?", options: ["ATP", "DNA", "RNA", "H2O"], correct: 1, explanation: "Il DNA contiene il 'libretto di istruzioni' di ogni essere vivente." }
        ]
    },
    {
        title: "SETTORE 5: CAVEAU BINARIO (FINALE)", color: 0xeab308, isBinary: true,
        pos: { x: 0, z: -14 },
        questions: [
            { q: "I computer capiscono solo due simboli elettrici (acceso/spento). Quali cifre usano?", options: ["1 e 2", "0 e 1", "A e B", "0 e 9"], correct: 1, explanation: "Il sistema binario usa solo due cifre: 0 (spento) e 1 (acceso)." },
            { q: "A quale numero corrisponde il codice binario 101? (Suggerimento: 4 + 0 + 1)", options: ["3", "5", "6", "7"], correct: 1, explanation: "101 significa: 4 acceso + 0 + 1 acceso = 5!" },
            { q: "In informatica, quanti bit servono per formare 1 Byte?", options: ["4 bit", "8 bit", "10 bit", "100 bit"], correct: 1, explanation: "1 Byte è composto da una sequenza di 8 bit." }
        ]
    }
];

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain(), now = audioCtx.currentTime;
    osc.connect(gain); gain.connect(audioCtx.destination);
    if (type === 'correct') {
        osc.type = 'sine';
        [523.25, 659.25, 783.99].forEach((f, i) => osc.frequency.setValueAtTime(f, now + i * 0.1));
        gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now); osc.stop(now + 0.4);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(180, now); osc.frequency.linearRampToValueAtTime(110, now + 0.3);
        gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now); osc.stop(now + 0.35);
    } else if (type === 'win') {
        osc.type = 'square';
        [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => osc.frequency.setValueAtTime(f, now + i * 0.12));
        gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
        osc.start(now); osc.stop(now + 0.7);
    }
}

let scene, camera, renderer, player, npcs = [], particles;
let keys = { w: false, a: false, s: false, d: false, arrowup: false, arrowleft: false, arrowdown: false, arrowright: false };
let gameState = 'START', currentSector = null, completedSectors = 0, lives = 3, score = 0, questionStartTime = 0;
let currentQuestionIdx = 0, activeQuestions = [];
const $ = id => document.getElementById(id);

function init3D() {
    scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x050811, 0.025);
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    $('canvas-container').appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x1e293b, 1.8));
    const pointLight = new THREE.PointLight(0x00f0ff, 2, 40); pointLight.position.set(0, 10, 0); scene.add(pointLight);
    scene.add(new THREE.GridHelper(50, 30, 0x00f0ff, 0x0f172a));

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshStandardMaterial({ color: 0x070d19, roughness: 0.5, metalness: 0.8 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -0.01; scene.add(floor);

    // Muri perimetrali della stanza
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.5 });
    const wall1 = new THREE.Mesh(new THREE.BoxGeometry(50, 6, 1), wallMat); wall1.position.set(0, 3, -25); scene.add(wall1);
    const wall2 = new THREE.Mesh(new THREE.BoxGeometry(50, 6, 1), wallMat); wall2.position.set(0, 3, 25); scene.add(wall2);
    const wall3 = new THREE.Mesh(new THREE.BoxGeometry(1, 6, 50), wallMat); wall3.position.set(-25, 3, 0); scene.add(wall3);
    const wall4 = new THREE.Mesh(new THREE.BoxGeometry(1, 6, 50), wallMat); wall4.position.set(25, 3, 0); scene.add(wall4);

    // Creazione del Giocatore (Robottino 3D)
    const playerGroup = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.8, roughness: 0.2 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), bodyMat); body.position.y = 0.5; playerGroup.add(body);
    const eye = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.3), new THREE.MeshBasicMaterial({ color: 0xffffff })); eye.position.set(0, 0.6, 0.35); playerGroup.add(eye);
    scene.add(playerGroup);
    player = playerGroup;
    player.position.set(0, 0, 15);

    // Creazione dei 5 NPC (Scienziati nelle postazioni)
    GAME_SECTORS.forEach((sec, idx) => {
        const npcGroup = new THREE.Group();
        const npcMat = new THREE.MeshStandardMaterial({ color: sec.color, roughness: 0.3, metalness: 0.6 });
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 1.2, 16), npcMat); base.position.y = 0.6; npcGroup.add(base);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), npcMat); head.position.y = 1.5; npcGroup.add(head);
        
        npcGroup.position.set(sec.pos.x, 0, sec.pos.z);
        scene.add(npcGroup);
        npcs.push({ group: npcGroup, sectorIndex: idx, completed: false });
    });

    // Particelle
    const partGeo = new THREE.BufferGeometry(), posArray = new Float32Array(600);
    for (let i = 0; i < 600; i++) posArray[i] = (Math.random() - 0.5) * 45;
    partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particles = new THREE.Points(partGeo, new THREE.PointsMaterial({ size: 0.1, color: 0x00f0ff }));
    scene.add(particles);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('keydown', e => handleKey(e, true));
    window.addEventListener('keyup', e => handleKey(e, false));
    animate3D();
}

function handleKey(e, isDown) {
    const k = e.key.toLowerCase();
    if (k in keys) keys[k] = isDown;
    if (k === 'arrowup') keys.arrowup = isDown;
    if (k === 'arrowdown') keys.arrowdown = isDown;
    if (k === 'arrowleft') keys.arrowleft = isDown;
    if (k === 'arrowright') keys.arrowright = isDown;

    if (e.key.toLowerCase() === 'e' && isDown && gameState === 'EXPLORING' && currentSector !== null) {
        startQuiz(currentSector);
    }
}

function animate3D() {
    requestAnimationFrame(animate3D);
    if (particles) particles.rotation.y += 0.0008;

    if (gameState === 'EXPLORING') {
        const speed = 0.12;
        let dx = 0, dz = 0;
        if (keys.w || keys.arrowup) dz -= speed;
        if (keys.s || keys.arrowdown) dz += speed;
        if (keys.a || keys.arrowleft) dx -= speed;
        if (keys.d || keys.arrowright) dx += speed;

        if (dx !== 0 || dz !== 0) {
            player.position.x = Math.max(-23, Math.min(23, player.position.x + dx));
            player.position.z = Math.max(-23, Math.min(23, player.position.z + dz));
            player.rotation.y = Math.atan2(dx, dz);
        }

        // Segui il giocatore con la telecamera in terza persona
        camera.position.x = player.position.x;
        camera.position.y = player.position.y + 7;
        camera.position.z = player.position.z + 9;
        camera.lookAt(player.position.x, player.position.y, player.position.z);

        // Controllo vicinanza NPC
        let nearNpc = null;
        npcs.forEach(npc => {
            if (!npc.completed) {
                const dist = player.position.distanceTo(npc.group.position);
                if (dist < 2.8) nearNpc = npc.sectorIndex;
            }
        });

        currentSector = nearNpc;
        $('interaction-prompt').classList.toggle('hidden', currentSector === null);
    }

    renderer.render(scene, camera);
}

function startGame() {
    gameState = 'EXPLORING'; completedSectors = 0; lives = 3; score = 0;
    player.position.set(0, 0, 15);
    npcs.forEach(n => { n.completed = false; n.group.visible = true; });
    updateHUD();
    $('start-screen').classList.add('hidden');
    $('end-screen').classList.add('hidden');
    $('hud-top').classList.remove('hidden');
}

function startQuiz(sectorIdx) {
    gameState = 'QUIZ';
    $('interaction-prompt').classList.add('hidden');
    const sec = GAME_SECTORS[sectorIdx];
    
    $('sector-title').textContent = sec.title;
    $('binary-helper').classList.toggle('hidden', !sec.isBinary);
    activeQuestions = [...sec.questions];
    currentQuestionIdx = 0;
    
    $('quiz-panel').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const qData = activeQuestions[currentQuestionIdx];
    questionStartTime = Date.now();
    $('question-text').textContent = qData.q;
    $('options-container').innerHTML = '';
    $('feedback-box').className = 'feedback hidden';

    ['A', 'B', 'C', 'D'].forEach((letter, i) => {
        if (!qData.options[i]) return;
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
        lives--;
        $('feedback-box').classList.add('error-fb');
        $('feedback-text').innerHTML = `❌ <strong>Sbagliato!</strong> ${qData.explanation}`;
    }
    updateHUD(); $('feedback-box').classList.remove('hidden');
}

$('next-btn').onclick = () => {
    if (lives <= 0) return endGame(false);
    currentQuestionIdx++;
    if (currentQuestionIdx < activeQuestions.length) {
        loadQuestion();
    } else {
        // Settore completato!
        const npc = npcs.find(n => n.sectorIndex === currentSector);
        if (npc) { npc.completed = true; npc.group.visible = false; }
        completedSectors++;
        updateHUD();

        $('quiz-panel').classList.add('hidden');
        if (completedSectors >= GAME_SECTORS.length) {
            endGame(true);
        } else {
            gameState = 'EXPLORING';
        }
    }
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
    $('end-title').textContent = victory ? "🏆 LABORATORIO COMPLETATO!" : "⚠️ ENERGIA ESAURITA";
    $('end-title').style.color = victory ? "#eab308" : "#ef4444";
    $('end-subtitle').textContent = victory ? "Hai visitato tutti gli scienziati e sbloccato il caveau!" : "Hai esaurito le vite. Riprova!";
    $('final-score').textContent = score;
    $('save-score-form').classList.remove('hidden'); $('player-name').value = '';
    renderLeaderboards();
}

const getLB = () => JSON.parse(localStorage.getItem('science_festival_lb_3d')) || [{ name: "Einstein", score: 1850 }, { name: "Curie", score: 1620 }, { name: "Turing", score: 1490 }];

function renderLeaderboards() {
    const html = getLB().map((e, i) => `<li><span>#${i + 1} ${e.name}</span> <span>${e.score} pt</span></li>`).join('');
    $('start-leaderboard').innerHTML = html; $('end-leaderboard').innerHTML = html;
}

$('save-score-btn').onclick = () => {
    const lb = [...getLB(), { name: $('player-name').value.trim() || "Scienziato", score }].sort((a, b) => b.score - a.score).slice(0, 5);
    localStorage.setItem('science_festival_lb_3d', JSON.stringify(lb));
    $('save-score-form').classList.add('hidden'); renderLeaderboards();
};

$('start-btn').onclick = startGame; $('restart-btn').onclick = startGame;
init3D(); renderLeaderboards();