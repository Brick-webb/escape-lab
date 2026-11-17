const GAME_SECTORS = [
    {
        title: "AULA 1: LOGICA & MATEMATICA", color: 0x00f0ff, pos: { x: -21, z: -18 },
        questPos: { x: -21, z: -21.5 }, doorSide: "south",
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
        title: "AULA 2: SPAZIO & FISICA", color: 0x3b82f6, pos: { x: 21, z: -18 },
        questPos: { x: 21, z: -21.5 }, doorSide: "south",
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
        title: "AULA 3: CHIMICA & NATURA", color: 0x22c55e, pos: { x: -21, z: 18 },
        questPos: { x: -21, z: 21.5 }, doorSide: "north",
        questions: [
            { q: "Qual è la formula chimica dell'acqua?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, explanation: "Una molecola d'acqua è formata da 2 atomi di Idrogeno e 1 di Ossigeno." },
            { q: "Quale gas assorbono le piante dall'aria per fare la fotosintesi?", options: ["Anidride carbonica (CO2)", "Elio", "Azoto", "Metano"], correct: 0, explanation: "Le piante assorbono CO2 e luce solare per produrre zuccheri e ossigeno." },
            { q: "Il succo di limone ha un pH inferiore a 7. Questo significa che è...", options: ["Basico", "Acido", "Neutro", "Metallico"], correct: 1, explanation: "Nella scala del pH, i valori sotto il 7 indicano sostanze acide." },
            { q: "Quale elemento chimico ha come simbolo 'O'?", options: ["Oro", "Osmio", "Ossigeno", "Olio"], correct: 2, explanation: "O è il simbolo dell'Ossigeno (l'Oro si indica con Au)." },
            { q: "Quale gas costituisce circa il 78% dell'atmosfera terrestre?", options: ["Ossigeno", "Anidride carbonica", "Azoto", "Idrogeno"], correct: 2, explanation: "L'aria che respiriamo è composta per il 78% da Azoto." },
            { q: "Как si chiamano gli animali che mangiano sia carne che vegetali?", options: ["Erbivori", "Carnivori", "Onnivori", "Insettivori"], correct: 2, explanation: "Gli onnivori (come l'essere umano o il maiale) mangiano di tutto." }
        ]
    },
    {
        title: "AULA 4: IL CORPO UMANO", color: 0xa855f7, pos: { x: 21, z: 18 },
        questPos: { x: 21, z: 21.5 }, doorSide: "north",
        questions: [
            { q: "Quale organo pompa il sangue in tutto il corpo umano?", options: ["I polmoni", "Il fegato", "Il cuore", "Lo stomaco"], correct: 2, explanation: "Il cuore batte circa 100.000 volte al giorno." },
            { q: "Quale funzione principale hanno i globuli rossi nel sangue?", options: ["Combattere i virus", "Trasportare ossigeno", "Digerire il cibo", "Produrre energia"], correct: 1, explanation: "I globuli rossi trasportano l'ossigeno dai polmoni a tutto il corpo." },
            { q: "Как si chiama la molecola a doppia elica che contiene la genetica?", options: ["ATP", "DNA", "RNA", "H2O"], correct: 1, explanation: "Il DNA contiene il 'libretto di istruzioni' di ogni essere vivente." },
            { q: "Quanti sono i sensi principali dell'essere umano?", options: ["3", "4", "5", "6"], correct: 2, explanation: "Vista, udito, olfatto, gusto e tatto." },
            { q: "Dove si trova protetto il cervello umano?", options: ["Nel torace", "Nel cranio", "Nella colonna vertebrale", "Nell'addome"], correct: 1, explanation: "La scatola cranica protegge il cervello dagli urti." },
            { q: "Qual è il muscolo involontario più importante per la respirazione?", options: ["Il bicipite", "Il diaframma", "Il cuore", "Il quadricipite"], correct: 1, explanation: "Il diaframma si contrae e si rilassa permettendo ai polmoni di respirare." }
        ]
    },
    {
        title: "AULA MAGNA (FINALE)", color: 0xeab308, isBinary: true, pos: { x: 0, z: -27 },
        questPos: { x: 0, z: -29 }, doorSide: "south",
        questions: [
            { q: "I computer usano segnali di acceso/spento. Quali cifre formano il codice binario?", options: ["1 e 2", "0 e 1", "A e B", "0 e 9"], correct: 1, explanation: "Il sistema binario usa solo due cifre: 0 (spento) e 1 (acceso)." },
            { q: "A quale numero corrisponde il codice binario 101? (4 + 0 + 1)", options: ["3", "5", "6", "7"], correct: 1, explanation: "101 significa: 4 acceso + 0 + 1 acceso = 5!" },
            { q: "In informatica, quanti bit servono per formare 1 Byte?", options: ["4 bit", "8 bit", "10 bit", "100 bit"], correct: 1, explanation: "1 Byte è composto da una sequenza di 8 bit." },
            { q: "Как si scrive il numero 3 in binario usando i bit 2 e 1?", options: ["100", "011", "110", "001"], correct: 1, explanation: "Per fare 3 accendiamo il bit 2 e il bit 1: quindi 011." },
            { q: "Как si scrive il numero 7 in binario accendendo tutti e tre i bit (4 + 2 + 1)?", options: ["111", "100", "000", "101"], correct: 0, explanation: "4 + 2 + 1 = 7, quindi tutti i bit sono accesi: 111!" },
            { q: "Cosa rappresenta lo '0' nel codice binario di un computer?", options: ["Circuito acceso", "Circuito spento", "Un errore", "Un file cancellato"], correct: 1, explanation: "Lo 0 indica l'assenza di corrente (spento), mentre l'1 indica la presenza (acceso)." }
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

    const wallDist = sec.isBinary ? 6.8 : 15.8;
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

    const rowOffsets = sec.isBinary ? [1.2, 3.6] : [-dir * 4.8, -dir * 8.2];
    const colOffsets = sec.isBinary ? [-4.2, 0, 4.2] : [-5.5, 0, 5.5];

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
    // Cornice visiva decorativa in alto (senza ostacolare il passaggio a terra)
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

        // 1. MURI ESTERNI
        addWall(71, 6, 1, 0, 3, -35, false);
        addWall(71, 6, 1, 0, 3, 35, false);
        addWall(1, 6, 71, -35, 3, 0, false);
        addWall(1, 6, 71, 35, 3, 0, false);

        // 2. AULA 1 (Nord-Ovest)
        addWall(1, 6, 29, -8, 3, -20.5, true);
        addWall(11.5, 6, 1, -29.25, 3, -6, true);
        addWall(11.5, 6, 1, -13.75, 3, -6, true);
        createSlidingDoor(-21.5, 0, -6, 4.0, 4.8, true);

        // 3. AULA 2 (Nord-Est)
        addWall(1, 6, 29, 8, 3, -20.5, true);
        addWall(11.5, 6, 1, 13.75, 3, -6, true);
        addWall(11.5, 6, 1, 29.25, 3, -6, true);
        createSlidingDoor(21.5, 0, -6, 4.0, 4.8, true);

        // 4. AULA 3 (Sud-Ovest)
        addWall(1, 6, 29, -8, 3, 20.5, true);
        addWall(11.5, 6, 1, -29.25, 3, 6, true);
        addWall(11.5, 6, 1, -13.75, 3, 6, true);
        createSlidingDoor(-21.5, 0, 6, 4.0, 4.8, true);

        // 5. AULA 4 (Sud-Est)
        addWall(1, 6, 29, 8, 3, 20.5, true);
        addWall(11.5, 6, 1, 13.75, 3, 6, true);
        addWall(11.5, 6, 1, 29.25, 3, 6, true);
        createSlidingDoor(21.5, 0, 6, 4.0, 4.8, true);

        // 6. AULA MAGNA FINALE
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
    // 1. Controllo ostacoli fissi (muri, banchi, cattedre, armadietti)
    for (let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];
        if (Math.abs(nx - obs.x) < (obs.rx + 0.35) && Math.abs(nz - obs.z) < (obs.rz + 0.35)) return true;
    }
    // 2. Controllo porte scorrevoli: blocca il passaggio SOLO SE la porta è chiusa o quasi chiusa
    for (let j = 0; j < slidingDoors.length; j++) {
        let door = slidingDoors[j];
        // Se la porta è aperta oltre una certa soglia (openAmount >= 0.9), la collisione svanisce e fa passare!
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

        // Apertura rapida e fluida della porta all'avvicinamento
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
    if (helperEl) helperEl.classList.toggle('hidden', !sec.isBinary);

    activeQuestions = shuffleArray(sec.questions).slice(0, 3);
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
        return JSON.parse(localStorage.getItem('einstein_lab_lb')) || [
            { name: "Albert", score: 1920 },
            { name: "Marie", score: 1750 },
            { name: "Nikola", score: 1580 }
        ];
    } catch(e) {
        return [{ name: "Albert", score: 1920 }];
    }
}

function renderLeaderboards() {
    const lb = getLB();
    const html = lb.map(function(e, i) {
        return '<li><span>#' + (i + 1) + ' ' + e.name + '</span> <span>' + e.score + ' pt</span></li>';
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
        const playerName = inputName && inputName.value ? inputName.value.trim() : "Studente";
        const currentScore = typeof score !== 'undefined' ? score : 0;

        const lb = getLB();
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