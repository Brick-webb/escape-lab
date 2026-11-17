const GAME_LEVELS = [
    {
        title: "SETTORE 1: LOGICA & MATEMATICA", color: 0x00f0ff,
        questions: [
            { q: "Qual è il numero successivo in questa sequenza: 2, 4, 8, 16, ...?", options: ["24", "32", "20", "30"], correct: 1, explanation: "Ogni numero viene moltiplicato per 2 (16 x 2 = 32)." },
            { q: "Quanto vale la somma degli angoli interni di un qualsiasi triangolo?", options: ["90 gradi", "360 gradi", "180 gradi", "270 gradi"], correct: 2, explanation: "In qualsiasi triangolo la somma degli angoli interni è sempre 180°." },
            { q: "Se un treno viaggia a 100 km/h, quanta strada percorre in 30 minuti?", options: ["50 km", "100 km", "30 km", "25 km"], correct: 0, explanation: "30 minuti sono mezz'ora, quindi percorre la metà di 100 km: 50 km." },
            { q: "Quale di questi è un numero primo?", options: ["9", "15", "13", "21"], correct: 2, explanation: "13 è divisibile solo per 1 e per se stesso." },
            { q: "Un cubo ha 6 facce. Quanti spigoli (lati) ha in totale?", options: ["8", "12", "6", "10"], correct: 1, explanation: "Un cubo ha 4 spigoli sopra, 4 sotto e 4 verticali: in totale 12." }
        ]
    },
    {
        title: "SETTORE 2: SPAZIO & FISICA", color: 0x3b82f6,
        questions: [
            { q: "Qual è il pianeta più grande del Sistema Solare?", options: ["Saturno", "Marte", "Giove", "Nettuno"], correct: 2, explanation: "Giove è così grande che conterrebbe oltre 1.300 Terre!" },
            { q: "Come si chiama il passaggio dell'acqua dallo stato liquido a quello gassoso?", options: ["Condensazione", "Solidificazione", "Evaporazione", "Fusione"], correct: 2, explanation: "Con il calore l'acqua evapora trasformandosi in vapore acqueo." },
            { q: "Perché sulla Luna gli astronauti saltano molto più in alto che sulla Terra?", options: ["Non c'è aria", "La gravità è minore", "Le tute hanno molle", "La Luna gira più veloce"], correct: 1, explanation: "La gravità sulla Luna è circa 6 volte più debole di quella terrestre." },
            { q: "Cosa viaggia più veloce nell'universo?", options: ["Il suono", "Un razzo spaziale", "La luce", "Il vento solare"], correct: 2, explanation: "La luce viaggia a circa 300.000 km al secondo." },
            { q: "Quale pianeta è famoso per i suoi grandi anelli di ghiaccio e roccia?", options: ["Venere", "Saturno", "Mercurio", "Marte"], correct: 1, explanation: "Gli anelli di Saturno sono visibili anche con un piccolo telescopio." }
        ]
    },
    {
        title: "SETTORE 3: CHIMICA & NATURA", color: 0x22c55e,
        questions: [
            { q: "Qual è la formula chimica dell'acqua?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, explanation: "Una molecola d'acqua è formata da 2 atomi di Idrogeno (H) e 1 di Ossigeno (O)." },
            { q: "Quale gas assorbono le piante dall'aria per fare la fotosintesi?", options: ["Anidride carbonica (CO2)", "Elio", "Azoto", "Metano"], correct: 0, explanation: "Le piante assorbono CO2 e luce solare per produrre zuccheri e liberare Ossigeno." },
            { q: "Quale elemento chimico ha come simbolo la lettera 'O'?", options: ["Oro", "Osmio", "Ossigeno", "Olio"], correct: 2, explanation: "O è il simbolo dell'Ossigeno (l'Oro si indica con Au)." },
            { q: "Il succo di limone ha un pH inferiore a 7. Questo significa che è...", options: ["Basico", "Acido", "Neutro", "Metallico"], correct: 1, explanation: "Nella scala del pH (da 0 a 14), i valori sotto il 7 indicano sostanze acide." },
            { q: "Quale gas costituisce la maggior parte dell'atmosfera terrestre (circa il 78%)?", options: ["Ossigeno", "Anidride carbonica", "Azoto", "Idrogeno"], correct: 2, explanation: "L'aria è composta per il 78% da Azoto e per il 21% da Ossigeno." }
        ]
    },
    {
        title: "SETTORE 4: IL CORPO UMANO", color: 0xa855f7,
        questions: [
            { q: "Quale organo pompa il sangue in tutto il corpo umano?", options: ["I polmoni", "Il fegato", "Il cuore", "Lo stomaco"], correct: 2, explanation: "Il cuore batte circa 100.000 volte al giorno per far circolare il sangue." },
            { q: "Dove si trova il cervello?", options: ["Nella cassa toracica", "Nella scatola cranica", "Nella colonna vertebrale", "Nell'addome"], correct: 1, explanation: "Il cranio protegge il cervello dagli urti." },
            { q: "Quale funzione principale hanno i globuli rossi nel sangue?", options: ["Combattere i virus", "Trasportare ossigeno", "Digerire il cibo", "Produrre energia"], correct: 1, explanation: "I globuli rossi trasportano l'ossigeno dai polmoni a tutto il corpo." },
            { q: "Quanti sono i sensi principali dell'essere umano?", options: ["3", "4", "5", "6"], correct: 2, explanation: "Vista, udito, olfatto, gusto e tatto." },
            { q: "Come si chiama la molecola a doppia elica che contiene le nostre informazioni genetiche?", options: ["ATP", "DNA", "RNA", "H2O"], correct: 1, explanation: "Il DNA contiene il 'libretto di istruzioni' di ogni essere vivente." }
        ]
    },
    {
        title: "SETTORE 5: CAVEAU BINARIO (CODICE FINALE)", color: 0xeab308, isBinary: true,
        questions: [
            { q: "I computer capiscono solo due simboli elettrici (acceso/spento). Quali cifre usano?", options: ["1 e 2", "0 e 1", "A e B", "0 e 9"], correct: 1, explanation: "Il sistema binario usa solo due cifre: 0 (spento) e 1 (acceso)." },
            { q: "Guarda il decodificatore in alto: a quale numero corrisponde il codice binario 101?", options: ["3", "5", "6", "7"], correct: 1, explanation: "101 significa: 4 acceso (1) + 2 spento (0) + 1 acceso (1) = 4 + 1 = 5!" },
            { q: "Quale codice binario corrisponde al numero 3? (Suggerimento: 2 + 1)", options: ["100", "011", "110", "001"], correct: 1, explanation: "Per fare 3 accendiamo il bit 2 e il bit 1: quindi 011." },
            { q: "Come si scrive il numero 7 in binario accendendo tutti e tre i bit (4 + 2 + 1)?", options: ["111", "100", "000", "101"], correct: 0, explanation: "4 + 2 + 1 = 7, quindi tutti i bit sono accesi: 111!" },
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
    } else if (type === 'door') {
        osc.type = 'triangle'; osc.frequency.setValueAtTime(90, now); osc.frequency.linearRampToValueAtTime(220, now + 0.8);
        gain.gain.setValueAtTime(0.25, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
        osc.start(now); osc.stop(now + 0.9);
    } else if (type === 'win') {
        osc.type = 'square';
        [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => osc.frequency.setValueAtTime(f, now + i * 0.12));
        gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
        osc.start(now); osc.stop(now + 0.7);
    }
}

let scene, camera, renderer, doorLeft, doorRight, doorFrame, neonLight, particles;
let energyOrbs = [], isDoorOpening = false, doorOpenProgress = 0;

function init3D() {
    scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x050811, 0.035);
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 2.2, 12); camera.lookAt(0, 2, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x1e293b, 1.5));
    neonLight = new THREE.PointLight(0x00f0ff, 2.5, 30); neonLight.position.set(0, 4, 6); scene.add(neonLight);
    scene.add(new THREE.GridHelper(60, 40, 0x00f0ff, 0x0f172a));

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x070d19, roughness: 0.4, metalness: 0.8 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -0.02; scene.add(floor);

    const doorGroup = new THREE.Group(), frameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.3 });
    const addMesh = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); doorGroup.add(m); return m; };

    addMesh(new THREE.BoxGeometry(7.2, 0.6, 1.2), frameMat, 0, 5.2, 0);
    addMesh(new THREE.BoxGeometry(0.6, 5.5, 1.2), frameMat, -3.3, 2.75, 0);
    addMesh(new THREE.BoxGeometry(0.6, 5.5, 1.2), frameMat, 3.3, 2.75, 0);
    doorFrame = addMesh(new THREE.BoxGeometry(6.4, 0.15, 1.25), new THREE.MeshBasicMaterial({ color: 0x00f0ff }), 0, 4.9, 0);

    const panelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.2 });
    doorLeft = addMesh(new THREE.BoxGeometry(3.0, 4.8, 0.6), panelMat, -1.5, 2.4, 0);
    doorRight = addMesh(new THREE.BoxGeometry(3.0, 4.8, 0.6), panelMat, 1.5, 2.4, 0);

    for (let i = 0; i < 3; i++) {
        const orb = addMesh(new THREE.SphereGeometry(0.32, 24, 24), new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2 }), (i - 1) * 1.4, 5.9, 0.2);
        energyOrbs.push(orb);
    }
    scene.add(doorGroup);

    const partGeo = new THREE.BufferGeometry(), posArray = new Float32Array(750);
    for (let i = 0; i < 750; i++) posArray[i] = (Math.random() - 0.5) * 40;
    partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particles = new THREE.Points(partGeo, new THREE.PointsMaterial({ size: 0.12, color: 0x00f0ff }));
    scene.add(particles);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    animate3D();
}

function setOrbStatus(idx, active) {
    if (!energyOrbs[idx]) return;
    energyOrbs[idx].material.color.setHex(active ? 0x22c55e : 0x1e293b);
    energyOrbs[idx].material.emissive.setHex(active ? 0x22c55e : 0x000000);
    energyOrbs[idx].material.emissiveIntensity = active ? 0.8 : 0;
}

function triggerDoorTransition(cb) {
    isDoorOpening = true; doorOpenProgress = 0; playSound('door');
    setTimeout(() => {
        isDoorOpening = false; doorLeft.position.x = -1.5; doorRight.position.x = 1.5; camera.position.z = 12;
        energyOrbs.forEach((_, idx) => setOrbStatus(idx, false));
        if (cb) cb();
    }, 1500);
}

function animate3D() {
    requestAnimationFrame(animate3D);
    if (particles) particles.rotation.y += 0.001;
    const t = Date.now() * 0.004;
    energyOrbs.forEach((orb, i) => orb.position.y = 5.9 + Math.sin(t + i) * 0.06);
    if (isDoorOpening) {
        doorOpenProgress = Math.min(doorOpenProgress + 0.025, 1);
        doorLeft.position.x = -1.5 - doorOpenProgress * 2.6;
        doorRight.position.x = 1.5 + doorOpenProgress * 2.6;
        camera.position.z = 12 - doorOpenProgress * 10;
    }
    renderer.render(scene, camera);
}

let currentLevelIdx = 0, currentQuestIdx = 0, currentLevelQuestions = [], lives = 3, score = 0, questionStartTime = 0;
const $ = id => document.getElementById(id);

function startGame() {
    currentLevelIdx = 0; lives = 3; score = 0; updateHUD();
    $('start-screen').classList.add('hidden'); $('end-screen').classList.add('hidden');
    $('hud-top').classList.remove('hidden'); $('quiz-panel').classList.remove('hidden');
    loadLevel(0);
}

function loadLevel(idx) {
    currentLevelIdx = idx; currentQuestIdx = 0;
    const lvl = GAME_LEVELS[idx];
    neonLight.color.setHex(lvl.color); doorFrame.material.color.setHex(lvl.color); particles.material.color.setHex(lvl.color);
    energyOrbs.forEach((_, i) => setOrbStatus(i, false));

    currentLevelQuestions = [...lvl.questions].sort(() => Math.random() - 0.5).slice(0, 3);
    $('sector-title').textContent = lvl.title;
    $('binary-helper').classList.toggle('hidden', !lvl.isBinary);
    updateHUD(); loadQuestion();
}

function loadQuestion() {
    const qData = currentLevelQuestions[currentQuestIdx];
    questionStartTime = Date.now();
    for (let i = 0; i < 3; i++) {
        $(`dot-${i}`).className = 'dot' + (i < currentQuestIdx ? ' completed' : (i === currentQuestIdx ? ' active' : ''));
    }
    $('question-text').textContent = qData.q;
    $('options-container').innerHTML = '';
    $('feedback-box').className = 'feedback hidden';
    $('quiz-panel').classList.remove('shake');

    ['A', 'B', 'C', 'D'].forEach((letter, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letter}</span> <span>${qData.options[i]}</span>`;
        btn.onclick = () => handleAnswer(i, btn);
        $('options-container').appendChild(btn);
    });
}

function handleAnswer(selected, btn) {
    const qData = currentLevelQuestions[currentQuestIdx], btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    if (selected === qData.correct) {
        playSound('correct'); btn.classList.add('correct');
        score += 100 + Math.max(20, Math.round(100 - ((Date.now() - questionStartTime) / 1000) * 5));
        setOrbStatus(currentQuestIdx, true); $(`dot-${currentQuestIdx}`).classList.add('completed');
        $('feedback-text').innerHTML = `✅ <strong>Esatto!</strong> ${qData.explanation}`;
    } else {
        playSound('wrong'); btn.classList.add('wrong'); btns[qData.correct].classList.add('correct');
        $('quiz-panel').classList.add('shake'); lives--;
        $('feedback-box').classList.add('error-fb');
        $('feedback-text').innerHTML = `❌ <strong>Attenzione!</strong> ${qData.explanation}`;
    }
    updateHUD(); $('feedback-box').classList.remove('hidden');
}

$('next-btn').onclick = () => {
    if (lives <= 0) return endGame(false);
    if (++currentQuestIdx < 3) return loadQuestion();
    $('quiz-panel').classList.add('hidden');
    triggerDoorTransition(() => {
        if (currentLevelIdx + 1 < GAME_LEVELS.length) { $('quiz-panel').classList.remove('hidden'); loadLevel(currentLevelIdx + 1); }
        else endGame(true);
    });
};

function updateHUD() {
    $('level-indicator').textContent = `${currentLevelIdx + 1} / ${GAME_LEVELS.length}`;
    $('score-indicator').textContent = score;
    $('lives-indicator').textContent = '❤️'.repeat(Math.max(0, lives)) + '🖤'.repeat(3 - Math.max(0, lives));
}

function endGame(victory) {
    $('hud-top').classList.add('hidden'); $('quiz-panel').classList.add('hidden'); $('end-screen').classList.remove('hidden');
    if (victory) playSound('win');
    $('end-title').textContent = victory ? "🏆 CAVEAU SBLOCCATO!" : "⚠️ ENERGIA ESAURITA";
    $('end-title').style.color = victory ? "#eab308" : "#ef4444";
    $('end-subtitle').textContent = victory ? "Complimenti! Hai superato tutti i 5 settori scientifici." : "Il sistema ha bloccato le porte. Riprova!";
    $('final-score').textContent = score;
    $('save-score-form').classList.remove('hidden'); $('player-name').value = '';
    renderLeaderboards();
}

const getLB = () => JSON.parse(localStorage.getItem('science_festival_lb')) || [{ name: "Einstein", score: 1850 }, { name: "Curie", score: 1620 }, { name: "Turing", score: 1490 }];

function renderLeaderboards() {
    const html = getLB().map((e, i) => `<li><span>#${i + 1} ${e.name}</span> <span>${e.score} pt</span></li>`).join('');
    $('start-leaderboard').innerHTML = html; $('end-leaderboard').innerHTML = html;
}

$('save-score-btn').onclick = () => {
    const lb = [...getLB(), { name: $('player-name').value.trim() || "Scienziato", score }].sort((a, b) => b.score - a.score).slice(0, 5);
    localStorage.setItem('science_festival_lb', JSON.stringify(lb));
    $('save-score-form').classList.add('hidden'); renderLeaderboards();
};

$('start-btn').onclick = startGame; $('restart-btn').onclick = startGame;
init3D(); renderLeaderboards();