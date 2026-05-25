import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

const BASE_GRAVITY = 1600;

// Make the game fill the whole browser window
const _style = document.createElement("style");
_style.textContent = `
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #141414; }
  canvas { display: block; width: 100vw !important; height: 100vh !important; }
`;
document.head.appendChild(_style);

kaplay({
  background: [20, 20, 20],
  global: true,
  debug: true,
  width: window.innerWidth,
  height: window.innerHeight,
  stretch: true,
  letterbox: true,
});

// Press F to toggle browser fullscreen
window.addEventListener("keydown", (e) => {
  if (e.key === "f" || e.key === "F") {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }
});
loadSprite("menuBg", "assets/Menu/BackGround.png");
loadSprite("endBg", "assets/end/BackGround.png");
loadSprite("outroBg", "assets/end/BackGround2.png");
loadSound("menuMusic", "assets/Menu/chill.mp3");
loadSound("l1Music", "assets/level1/Music/cave.mp3");
loadSound("l1Dropplets", "assets/level1/Sound/dropplets.mp3");
loadSound("l2Music", "assets/level2/Music/chill.mp3");
loadSound("l3Music", "assets/level3/Music/lily.wav");
loadSound("earthRumble", "freesound_community-earth-rumble-6953.mp3");


// Player base character — goblin scout silhouette (59 frames, 64x64 each)
loadSprite("goblin", "assets/player/goblin_combined.png", {
  sliceX: 59,
  anims: {
    idle:  { from: 0,  to: 7,  loop: true,  speed: 8 },
    walk:  { from: 8,  to: 15, loop: true,  speed: 10 },
    run:   { from: 16, to: 23, loop: true,  speed: 12 },
    jump:  { from: 24, to: 35, loop: false, speed: 10 },
    hit:   { from: 36, to: 38, loop: false, speed: 8 },
    death: { from: 39, to: 50, loop: false, speed: 8 },
    roll:  { from: 51, to: 58, loop: false, speed: 12 },
  },
});

// Level 2 assets
loadSprite("forestBg", "assets/level2/Comp.png");
loadSprite("l2RockPile1", "assets/level2/rockpile1.png");
loadSprite("l2RockPile2", "assets/level2/rockpile2.png");
loadSprite("l2TreeLay", "assets/level2/tree_lay.png");
loadSprite("l2PlatBig", "assets/level2/platforms%3A/platform_big.png");

// Level 2 mushrooms
loadSprite("decorMush1", "assets/level2/decor_mushroom_small_1.png");
loadSprite("decorMush2", "assets/level2/decor_mushroom_small_2.png");
loadSprite("decorMush3", "assets/level2/decor_mushroom_small_3.png");
loadSprite("decorMush4", "assets/level2/decor_mushroom_small_4.png");

// Level 2 full level image
loadSprite("lvl2Full", "assets/level2/lvl2.png");

// Level 2 mushroom enemy sprites
loadSprite("mushIdle", "assets/level2/Mushroom with VFX/Mushroom-Idle.png", {
  sliceX: 7,
  anims: { idle: { from: 0, to: 6, loop: true, speed: 5 } },
});
loadSprite("mushRun", "assets/level2/Mushroom with VFX/Mushroom-Run.png", {
  sliceX: 8,
  anims: { run: { from: 0, to: 7, loop: true, speed: 10 } },
});
loadSprite("mushDie", "assets/level2/Mushroom with VFX/Mushroom-Die.png", {
  sliceX: 15,
  anims: { die: { from: 0, to: 14, loop: false, speed: 12 } },
});
loadSprite("mushHit", "assets/level2/Mushroom with VFX/Mushroom-Hit.png", {
  sliceX: 5,
  anims: { hit: { from: 0, to: 4, loop: false, speed: 10 } },
});

// Cave parallax background layers (0 = farthest, 7 = closest)
loadSprite("caveBg0", "assets/level1/0.png");
loadSprite("caveBg1", "assets/level1/1.png");
loadSprite("caveBg2", "assets/level1/2.png");
loadSprite("caveBg3", "assets/level1/3.png");
loadSprite("caveBg4", "assets/level1/4.png");
loadSprite("caveBg5", "assets/level1/5.png");
loadSprite("caveBg6", "assets/level1/6.png");
loadSprite("caveBg7", "assets/level1/7.png");
loadSprite("exitDoor", "assets/level3/door_sheet.png", {
  sliceX: 5,
  anims: { open: { from: 0, to: 4, loop: false, speed: 5 } },
});

// Level 1 bat
loadSprite("batNPC", "assets/level1/Bat/Bat with VFX/Bat-Sleep.png", {
  sliceX: 3,
  anims: { sleep: { from: 0, to: 2, loop: true, speed: 3 } },
});
loadSprite("batCombo", "assets/level1/Bat/Bat with VFX/bat_combined.png", {
  sliceX: 22,
  anims: {
    idle: { from: 0, to: 8, loop: true, speed: 8 },
    run: { from: 9, to: 16, loop: true, speed: 12 },
    hurt: { from: 17, to: 21, loop: false, speed: 8 },
  },
});

// Level 1 — greenfly collectible (3-frame fly animation, 48x16 spritesheet)
loadSprite("greenfly", "assets/level1/greenfly_spritesheet.png", {
  sliceX: 3,
  anims: {
    fly: { from: 0, to: 2, loop: true, speed: 8 },
  },
});

// Level 2 — beetle spritesheet (3 frames: idle, walk1, walk2)
loadSprite("beetle", "assets/level2/beetle_spritesheet.png", {
  sliceX: 3,
  anims: {
    idle: { from: 0, to: 0, loop: true, speed: 1 },
    walk: { from: 1, to: 2, loop: true, speed: 6 },
  },
});

// Level 3 assets
loadSprite("lvl3Full", "assets/level3/Lvl3.png");
loadSprite("lilyBig", "assets/level3/lily%3A/lily_big.png");
loadSprite("lilyMed", "assets/level3/lily%3A/lily_medium.png");
loadSprite("lilyMed2", "assets/level3/lily%3A/lily_medium_2.png");
loadSprite("lilyMed3", "assets/level3/lily%3A/lily_medium_3.png");
loadSprite("lilySmall", "assets/level3/lily%3A/lily_small.png");

loadSprite("waterAnim", "assets/level3/water/water_anim.png", {
  sliceX: 6,
  anims: { flow: { from: 0, to: 5, loop: true, speed: 7 } },
});

// Frog player — combined spritesheet (8x5 grid, 39 valid frames of 128x128)
// Tongue/spit frames in the generated sheet are visually broken (artifacts),
// so we point those anims at the clean idle frames to remove the tongue glitch.
loadSprite("frogPlayer", "assets/level3/frog/frogger_combined.png", {
  sliceX: 8,
  sliceY: 5,
  anims: {
    idle:   { from: 0,  to: 4,  loop: true,  speed: 8  },
    move:   { from: 5,  to: 12, loop: true,  speed: 12 },
    hurt:   { from: 13, to: 16, loop: false, speed: 10 },
    spit:   { from: 0,  to: 4,  loop: false, speed: 8  },
    tongue: { from: 0,  to: 4,  loop: false, speed: 8  },
  },
});


// Empty chest (no key inside)
loadSprite("chestEmpty", "assets/level3/coffre_sanscle.png", {
  sliceX: 2,
  anims: {
    closed: { from: 0, to: 0, loop: false, speed: 1 },
    open:   { from: 0, to: 1, loop: false, speed: 3 },
  },
});
// Key chest — 3-frame spritesheet (closed → opening → open with key)
loadSprite("chestKey", "assets/level3/chest_key_final.png", {
  sliceX: 3,
  anims: {
    closed: { from: 0, to: 0, loop: false, speed: 1 },
    open:   { from: 0, to: 2, loop: false, speed: 5 },
  },
});

// Level 3 frog NPC
loadSprite("frogNPC", "assets/level3/frog/frogB_sheet.png", {
  sliceX: 4,
  anims: { hop: { from: 0, to: 3, loop: true, speed: 3 } },
});

// Persistence flag: has the player ever finished the game once?
function loadEverCompleted() {
  try { return localStorage.getItem('kage_everCompleted') === '1'; } catch(e) { return false; }
}
function saveEverCompleted() {
  try { localStorage.setItem('kage_everCompleted', '1'); } catch(e) {}
}

const gameState = {
  everCompleted: loadEverCompleted(),
  totalCollected: 0,
  level1Flies: 0,
  level2Mushrooms: 0,
  level3Flies: 0,
  volume: 0.5,
  startTime: null,
  levelsCompleted: 0,
  paused: false,
  hasSwampKey: false,
  currentScene: "menu",
  deaths: 0,
};

// Global Pause System
let pauseMenu = null;
function togglePause() {
  const currentScene = gameState.currentScene;
  if (currentScene === "menu" || currentScene === "levelSelect" || currentScene === "intro" || currentScene === "credits") return;

  gameState.paused = !gameState.paused;
  
  if (gameState.paused) {
    // Close controls menu if open
    if (commandsMenu) { destroy(commandsMenu); commandsMenu = null; }

    pauseMenu = add([
      rect(width(), height()),
      pos(0, 0),
      color(0, 0, 0),
      opacity(0.6),
      fixed(),
      z(6000),
    ]);

    const container = pauseMenu.add([
      rect(300, 320, { radius: 10 }),
      pos(center()),
      anchor("center"),
      color(25, 25, 30),
      outline(4, rgb(150, 150, 150)),
    ]);

    container.add([
      text("PAUSE", { size: 32 }),  // pause title
      pos(0, -100),
      anchor("center"),
    ]);

    const volText = container.add([
      text(`Volume: ${Math.round(gameState.volume * 100)}%`, { size: 16 }),
      pos(0, -20),
      anchor("center"),
    ]);

    // Volume Buttons
    const btnLess = container.add([
      rect(40, 40, { radius: 5 }),
      pos(-60, 30),
      anchor("center"),
      area(),
      color(150, 50, 50),
    ]);
    btnLess.add([text("-", { size: 24 }), anchor("center")]);

    const btnMore = container.add([
      rect(40, 40, { radius: 5 }),
      pos(60, 30),
      anchor("center"),
      area(),
      color(50, 150, 50),
    ]);
    btnMore.add([text("+", { size: 24 }), anchor("center")]);

    btnLess.onClick(() => {
      gameState.volume = Math.max(0, gameState.volume - 0.1);
      volText.text = `Volume: ${Math.round(gameState.volume * 100)}%`;
      updateMusicVolume();
    });

    btnMore.onClick(() => {
      gameState.volume = Math.min(1, gameState.volume + 0.1);
      volText.text = `Volume: ${Math.round(gameState.volume * 100)}%`;
      updateMusicVolume();
    });

    const btnResume = container.add([
      rect(200, 40, { radius: 5 }),
      pos(0, 90),
      anchor("center"),
      area(),
      color(80, 120, 200),
    ]);
    btnResume.add([text("REPRENDRE", { size: 16 }), anchor("center")]);
    btnResume.onClick(() => togglePause());

    const btnQuit = container.add([
      rect(200, 40, { radius: 5 }),
      pos(0, 140),
      anchor("center"),
      area(),
      color(120, 120, 120),
    ]);
    btnQuit.add([text("MENU PRINCIPAL", { size: 16 }), anchor("center")]);
    btnQuit.onClick(() => {
      gameState.paused = false;
      destroy(pauseMenu);
      stopMusic();
      go("menu");
    });

  } else {
    if (pauseMenu) {
      destroy(pauseMenu);
      pauseMenu = null;
    }
  }
}

onKeyPress("escape", () => togglePause());

let currentMusic = null;
let activeSFX = [];
function playMusic(soundName, vol) {
  if (currentMusic) { currentMusic.stop(); currentMusic = null; }
  // Stop all lingering SFX from previous scene
  activeSFX.forEach(s => { try { s.stop(); } catch(e) {} });
  activeSFX = [];
  currentMusic = play(soundName, { loop: true, volume: (vol || 0.3) * gameState.volume });
}
function stopMusic() {
  if (currentMusic) { currentMusic.stop(); currentMusic = null; }
  activeSFX.forEach(s => { try { s.stop(); } catch(e) {} });
  activeSFX = [];
}
function updateMusicVolume() {
  if (currentMusic) currentMusic.volume = 0.3 * gameState.volume;
}
function playSFX(soundName, opts) {
  const s = play(soundName, opts);
  activeSFX.push(s);
  return s;
}

setGravity(BASE_GRAVITY);

// TRANSITIONS & CAMERA
// Fade-in 
function fadeIn(duration = 0.4) {
  const overlay = add([
    rect(width(), height()),
    color(0, 0, 0),
    pos(0, 0),
    fixed(),
    z(1000),
    { opacity: 1 },
  ]);
  return tween(1, 0, duration, (v) => (overlay.opacity = v))
    .then(() => destroy(overlay));
}

// Fade-out
function fadeOutThen(nextScene, duration = 0.4) {
  const overlay = add([
    rect(width(), height()),
    color(0, 0, 0),
    pos(0, 0),
    fixed(),
    z(1000),
    { opacity: 0 },
  ]);
  return tween(0, 1, duration, (v) => (overlay.opacity = v))
    .then(() => go(nextScene));
}

// Camera follow 
function cameraSmoothFollow(target, smooth = 0.10) {
  onUpdate(() => {
    const curr = camPos();
    camPos(
      lerp(curr.x, target.pos.x, smooth),
      lerp(curr.y, target.pos.y, smooth)
    );
  });
}

// HUD & DIALOGUES
// HUD
function showHUDText(msg) {
  return add([
    text(msg, { size: 13 }),
    pos(20, 20),
    anchor("topleft"),
    color(160, 145, 120),
    fixed(),
    z(900),
  ]);
}

// Controls overlay (T key)
let commandsMenu = null;
function toggleCommandsMenu() {
  if (commandsMenu) {
    destroy(commandsMenu);
    commandsMenu = null;
    return;
  }

  const currentScene = gameState.currentScene;
  let cmdText = "--- CONTROLES ---\n\n";
  
  if (currentScene === "level1") {
    cmdText += "ESPACE : Voler (battre des ailes)\n";
    cmdText += "E : Echolocation (reveler les obstacles)\n";
  } else if (currentScene === "level2") {
    cmdText += "ESPACE : Sauter\n";
    cmdText += "SHIFT : Dash (necessite un champignon)\n";
    cmdText += "Maintenir ESPACE en l'air : Planer\n";
  } else if (currentScene === "level3") {
    cmdText += "Maintenir C : Saut charge\n";
    cmdText += "ESPACE : Saut normal\n";
    cmdText += "HAUT/BAS : Monter echelle / corde\n";
  }
  
  cmdText += "GAUCHE/DROITE : Se deplacer\n";
  cmdText += "\nF : Plein ecran\n";
  cmdText += "T : Fermer ce menu";

  commandsMenu = add([
    rect(380, 280, { radius: 12 }),
    pos(width() / 2, height() / 2),
    anchor("center"),
    color(15, 15, 20),
    opacity(0.92),
    outline(3, rgb(80, 160, 255)),
    fixed(),
    z(5000),
  ]);

  commandsMenu.add([
    text(cmdText, { size: 15, lineSpacing: 8, align: "center" }),
    pos(0, 0),
    anchor("center"),
    color(255, 255, 255),
  ]);
}

// T key handler is registered per-scene (in level1, level2, level3)

// Top message — for pickups, alerts, etc. Disappears after a short duration
function showTopMessage(msg, duration = 2.5, col = rgb(255, 255, 255)) {
  const t = add([
    text(msg, { size: 18 }),
    pos(center().x, 80),
    fixed(),
    anchor("center"),
    color(col),
    z(1000),
  ]);
  wait(duration, () => destroy(t));
  return t;
}

// Screen shake on damage
function screenShake(intensity = 4, duration = 0.25) {
  const origPos = camPos();
  let elapsed = 0;
  const shakeUpdate = onUpdate(() => {
    elapsed += dt();
    if (elapsed >= duration) {
      shakeUpdate.cancel();
      return;
    }
    const decay = 1 - elapsed / duration;
    const ox = (Math.random() - 0.5) * intensity * 2 * decay;
    const oy = (Math.random() - 0.5) * intensity * 2 * decay;
    const cp = camPos();
    camPos(cp.x + ox, cp.y + oy);
  });
}

// Spawn burst particles (transformation, chest open, enemy kill, etc.)
function spawnBurstParticles(cx, cy, count, colors, opts = {}) {
  const spread = opts.spread || 120;
  const upward = opts.upward || -180;
  const lifeMin = opts.lifeMin || 0.5;
  const lifeMax = opts.lifeMax || 1.2;
  const gravity = opts.gravity || 200;
  for (let i = 0; i < count; i++) {
    const p = add([
      rect(rand(3, 7), rand(3, 7)),
      pos(cx + rand(-20, 20), cy + rand(-20, 20)),
      color(choose(colors)),
      opacity(1), z(500), anchor("center"),
      { vx: rand(-spread, spread), vy: rand(upward, upward * 0.2), life: rand(lifeMin, lifeMax) },
    ]);
    p.onUpdate(() => {
      p.pos.x += p.vx * dt();
      p.pos.y += p.vy * dt();
      p.vy += gravity * dt();
      p.life -= dt();
      p.opacity = Math.max(0, p.life);
      if (p.life <= 0) destroy(p);
    });
  }
}

// Floating text that rises and fades (pickup feedback, damage, etc.)
function spawnFloatingText(msg, x, y, col, opts = {}) {
  const size = opts.size || 16;
  const rise = opts.rise || 35;
  const duration = opts.duration || 0.7;
  const useFixed = opts.fixed || false;
  const components = [
    text(msg, { size }),
    pos(x, y), anchor("center"),
    color(col), z(500), { age: 0 },
  ];
  if (useFixed) components.push(fixed());
  const t = add(components);
  t.onUpdate(() => {
    t.age += dt();
    t.pos.y -= rise * dt();
    t.opacity = 1 - t.age / duration;
    if (t.age > duration) destroy(t);
  });
  return t;
}

// NPC dialog — non-blocking (player can move during dialog)
function showDialog({ lines, iconColor, onDone, npcName }) {
  let idx = 0;
  // Bubble in upper third so it never overlaps the player or ground action
  const bubbleY = height() * 0.18;
  const name = npcName || "Karabos";

  // No backdrop — player can keep moving
  const bubble = add([
    rect(500, 100, { radius: 8 }), pos(center().x, bubbleY),
    anchor("center"), color(20, 16, 10), opacity(0.9),
    outline(3, iconColor || rgb(200, 170, 100)),
    fixed(), z(1000),
  ]);

  const icon = add([
    rect(30, 30, { radius: 4 }), pos(center().x - 220, bubbleY - 6),
    anchor("center"), color(iconColor),
    outline(2, rgb(240, 220, 160)),
    fixed(), z(1001),
  ]);

  const nameLabel = add([
    text(name, { size: 12 }),
    pos(center().x - 195, bubbleY - 36),
    anchor("left"), color(iconColor),
    fixed(), z(1001),
  ]);

  const pageCounter = add([
    text(`1/${lines.length}`, { size: 10 }),
    pos(center().x + 230, bubbleY - 36),
    anchor("right"), color(120, 110, 90),
    fixed(), z(1001),
  ]);

  const txt = add([
    text(lines[0], { size: 14, width: 420 }),
    pos(center().x + 10, bubbleY + 2),
    anchor("center"), color(255, 245, 210),
    fixed(), z(1001),
  ]);

  const hint = add([
    text("ESPACE ▶", { size: 10 }),
    pos(center().x + 225, bubbleY + 36),
    anchor("right"), color(150, 140, 105),
    fixed(), z(1001), { t: 0 },
  ]);
  hint.onUpdate(() => {
    hint.t += dt();
    hint.opacity = 0.6 + Math.sin(hint.t * 3) * 0.4;
  });

  const advance = onKeyPress("space", () => {
    idx++;
    if (idx >= lines.length) {
      destroy(bubble); destroy(icon);
      destroy(nameLabel); destroy(pageCounter);
      destroy(txt); destroy(hint);
      advance.cancel();
      if (onDone) onDone();
      return;
    }
    txt.text = lines[idx];
    pageCounter.text = `${idx + 1}/${lines.length}`;
  });
}

scene("menu", () => {
  // Background image
  add([
    sprite("menuBg", { width: width(), height: height() }),
    pos(0, 0),
    fixed(), z(-1),
  ]);

  // Button PLAY
  const playBtn = add([
    rect(220, 50),
    pos(center().x, center().y + 30),
    area(),
    color(70, 95, 80),
    anchor("center"),
    fixed(), z(5),
  ]);
  add([
    text("JOUER", { size: 20 }),
    pos(center().x, center().y + 30),
    anchor("center"),
    color(230, 220, 190),
    fixed(), z(6),
  ]);

  // Button SELECT LEVEL — locked until first completion
  const levelSelectUnlocked = gameState.everCompleted;
  const selectBtn = add([
    rect(220, 44),
    pos(center().x, center().y + 95),
    area(),
    color(levelSelectUnlocked ? 85 : 60, levelSelectUnlocked ? 110 : 60, levelSelectUnlocked ? 95 : 65),
    opacity(levelSelectUnlocked ? 1 : 0.55),
    anchor("center"),
    fixed(), z(5),
  ]);
  add([
    text(levelSelectUnlocked ? "SÉLECTION DE NIVEAU" : "🔒 SÉLECTION DE NIVEAU", { size: 14 }),
    pos(center().x, center().y + 95),
    anchor("center"),
    color(levelSelectUnlocked ? rgb(230, 220, 190) : rgb(170, 160, 140)),
    fixed(), z(6),
  ]);
  if (!levelSelectUnlocked) {
    add([
      text("Termine le jeu une fois pour débloquer", { size: 11 }),
      pos(center().x, center().y + 120),
      anchor("center"), color(180, 170, 150), fixed(), z(6),
    ]);
  }

  // Button CREDITS
  const creditsBtn = add([
    rect(160, 40),
    pos(center().x, center().y + 155),
    area(),
    color(110, 90, 70),
    anchor("center"),
    fixed(), z(5),
  ]);
  add([
    text("CRÉDITS", { size: 16 }),
    pos(center().x, center().y + 155),
    anchor("center"),
    color(230, 220, 190),
    fixed(), z(6),
  ]);

  const volLabel = add([
    text(`Volume: ${Math.round(gameState.volume * 100)}%`, { size: 14 }),
    pos(center().x, center().y + 210),
    anchor("center"), color(200, 200, 200), fixed(), z(6),
  ]);

  const volDown = add([
    rect(36, 30), pos(center().x - 80, center().y + 245),
    area(), color(110, 80, 70), anchor("center"), fixed(), z(5),
  ]);
  add([text("−", { size: 20 }), pos(center().x - 80, center().y + 245),
    anchor("center"), color(230, 220, 190), fixed(), z(6)]);

  const volUp = add([
    rect(36, 30), pos(center().x + 80, center().y + 245),
    area(), color(80, 110, 90), anchor("center"), fixed(), z(5),
  ]);
  add([text("+", { size: 20 }), pos(center().x + 80, center().y + 245),
    anchor("center"), color(230, 220, 190), fixed(), z(6)]);

  volDown.onClick(() => {
    gameState.volume = Math.max(0, gameState.volume - 0.1);
    volLabel.text = `Volume: ${Math.round(gameState.volume * 100)}%`;
    updateMusicVolume();
  });
  volUp.onClick(() => {
    gameState.volume = Math.min(1, gameState.volume + 0.1);
    volLabel.text = `Volume: ${Math.round(gameState.volume * 100)}%`;
    updateMusicVolume();
  });

  // Menu music — start on first user interaction (browser autoplay policy)
  let menuMusicStarted = false;
  function ensureMenuMusic() {
    if (!menuMusicStarted) {
      menuMusicStarted = true;
      playMusic("menuMusic", 0.3);
    }
  }
  onClick(() => ensureMenuMusic());
  onKeyPress(() => ensureMenuMusic());

  playBtn.onClick(() => {
    stopMusic();
    gameState.startTime = Date.now();
    gameState.levelsCompleted = 0;
    fadeOutThen("intro", 0.35);
  });

  selectBtn.onClick(() => {
    if (!levelSelectUnlocked) {
      showTopMessage("🔒 Termine le jeu au moins une fois pour débloquer", 2.5, rgb(255, 180, 100));
      return;
    }
    fadeOutThen("levelSelect", 0.35);
  });
  creditsBtn.onClick(() => fadeOutThen("credits", 0.35));

  onKeyPress("enter", () => {
    stopMusic();
    gameState.startTime = Date.now();
    gameState.levelsCompleted = 0;
    fadeOutThen("intro", 0.35);
  });

  fadeIn(0.35);
});

scene("levelSelect", () => {
  // Guard: redirect to menu if not yet unlocked
  if (!gameState.everCompleted) { go("menu"); return; }
  // Play menu music in level select
  playMusic("menuMusic", 0.3);

  add([
    rect(width(), height()),
    color(30, 30, 30),
    pos(0, 0),
    fixed(),
  ]);

  add([
    text("SÉLECTION DE NIVEAU", { size: 32 }),
    pos(center().x, center().y - 120),
    anchor("center"),
    fixed(),
  ]);

  const entries = [
    "1 — Niveau 1 : L'Écho des Profondeurs",
    "2 — Niveau 2 : Les Sentiers Enracinés",
    "3 — Niveau 3 : Le Marécage Oublié",
  ];
  const scenes = ["level1", "level2", "level3"];

  const entryLabels = entries.map((txt, i) =>
    add([
      text(txt, { size: 20 }),
      pos(center().x, center().y - 40 + i * 35),
      anchor("center"), fixed(), color(200, 200, 200),
    ])
  );

  // Tab selector
  let tabIdx = 0;
  const arrow = add([
    text("▶", { size: 18 }),
    pos(center().x - 170, center().y - 40),
    anchor("center"), fixed(), color(80, 220, 255),
  ]);

  function updateTabHighlight() {
    arrow.pos.y = center().y - 40 + tabIdx * 35;
    entryLabels.forEach((l, i) => {
      l.color = i === tabIdx ? rgb(80, 220, 255) : rgb(200, 200, 200);
    });
  }
  updateTabHighlight();

  add([
    text("TAB : sélectionner   ENTRÉE : valider   ÉCHAP : retour", { size: 12 }),
    pos(center().x, center().y + 80),
    anchor("center"), fixed(), color(130, 120, 100),
  ]);

  onKeyPress("tab", () => {
    tabIdx = (tabIdx + 1) % 3;
    updateTabHighlight();
  });

  onKeyPress("enter", () => fadeOutThen(scenes[tabIdx], 0.35));
  onKeyPress("1", () => fadeOutThen("level1", 0.35));
  onKeyPress("2", () => fadeOutThen("level2", 0.35));
  onKeyPress("3", () => fadeOutThen("level3", 0.35));
  onKeyPress("escape", () => fadeOutThen("menu", 0.35));

  fadeIn(0.35);
});

scene("credits", () => {
  add([
    rect(width(), height()),
    color(20, 20, 30),
    pos(0, 0),
    fixed(),
  ]);

  add([
    text("CRÉDITS", { size: 32 }),
    pos(center().x, center().y - 140),
    anchor("center"),
    fixed(),
  ]);

add([
  text(
    "Développé avec Kaplay.js\n\n" +

    "Idées & Programmation : Armin\n\n" +

    "Game Design : Admurin - karsiori - MonoPixelArt - the14collective - zneeke\n\n" +

    "Musique & Sons : DRAGON-STUDIO - Fablefly Music - Spencer_YK\n\n" +

    "Beta Testing : Adri - Micka - Nono\n\n" +

    "Merci d'avoir joué !",
    { size: 18 }
  ),
  pos(center()),
  anchor("center"),
  fixed(),
]);


  const backBtn = add([
    rect(140, 40),
    pos(center().x, center().y + 120),
    area(),
    color(120, 120, 120),
    anchor("center"),
    fixed(),
  ]);

  add([
    text("RETOUR", { size: 16 }),
    pos(center().x, center().y + 120),
    anchor("center"),
    color(255, 255, 255),
    fixed(),
  ]);

  backBtn.onClick(() => fadeOutThen("menu", 0.35));
  onKeyPress("escape", () => fadeOutThen("menu", 0.35));

  fadeIn(0.35);
});

scene("intro", () => {
  setGravity(0);

  // Menu background behind the text (for earthquake effect)
  const bgScale = Math.max(width() / 1920, height() / 960);
  const introBg = add([
    sprite("menuBg"),
    pos(center().x, center().y),
    anchor("center"),
    scale(bgScale),
    opacity(0.35),
    fixed(),
    z(-10),
  ]);

  add([
    rect(width(), height()),
    color(10, 10, 15),
    opacity(0.65),
    pos(0, 0),
    fixed(),
    z(-5),
  ]);

  const pages = [
    "Depuis toujours, KAGE vivait caché.\n\n" +
    "Reclus dans une grotte qu'il avait creusée lui-même,\n" +
    "loin du monde, loin du danger.\n\n" +
    "C'était son refuge.\n" +
    "Son terrier.\n" +
    "Son foyer.",

    "Mais une nuit, tout a changé.\n\n" +
    "La terre a tremblé.\n" +
    "La pluie est tombée sans fin.\n" +
    "La roche s'est fissurée.\n\n" +
    "L'eau a envahi la grotte.\n\n" +
    "KAGE a dû fuir.",

    "Dehors, le monde est vaste.\n" +
    "Dangereux.\n" +
    "Inconnu.\n\n" +
    "En avançant, KAGE découvre qu'il peut s'adapter.\n\n" +
    "... se transformer !\n" +
    "Son but est simple :\n" +
    "Trouver un nouvel endroit où vivre.\n\n" +
    "Appuie sur T pour voir tes contrôles."
  ];

  let page = 0;
  let canAdvance = false;
  let rumbleHandle = null;

  add([
    text("KAGE — L'éveil", { size: 36 }),
    pos(center().x, 80),
    anchor("center"),
    fixed(),
    color(200, 220, 255),
    z(10),
  ]);

  const body = add([
    text(pages[0], { size: 20, width: width() - 120 }),
    pos(center().x, 180),
    anchor("top"),
    fixed(),
    color(230, 230, 230),
    z(10),
  ]);

  const hint = add([
    text("▶ ESPACE pour continuer", { size: 14 }),
    pos(center().x, height() - 60),
    anchor("center"),
    fixed(),
    color(160, 160, 160),
    z(10),
  ]);

  // Earthquake screen-shake on the background image
  function startEarthquake() {
    rumbleHandle = play("earthRumble", { volume: 0.6, loop: false });
    let elapsed = 0;
    const duration = 4;
    const intensity = 8;
    const cx = center().x;
    const cy = center().y;
    const shakeEv = onUpdate(() => {
      elapsed += dt();
      if (elapsed >= duration) {
        shakeEv.cancel();
        introBg.pos.x = cx;
        introBg.pos.y = cy;
        return;
      }
      const decay = 1 - elapsed / duration;
      introBg.pos.x = cx + (Math.random() - 0.5) * intensity * 2 * decay;
      introBg.pos.y = cy + (Math.random() - 0.5) * intensity * 2 * decay;
    });
  }

  // Allow advancing after a short delay to prevent accidental skips
  wait(0.25, () => canAdvance = true);

  onKeyPress("space", () => {
    if (!canAdvance) return;

    page++;
    if (page >= pages.length) {
      if (rumbleHandle) { rumbleHandle.stop(); rumbleHandle = null; }
      fadeOutThen("level1", 0.5);
    } else {
      body.text = pages[page];
      if (page === 1) startEarthquake();
    }
  });

  fadeIn(0.5);
});


scene("level1", () => {
  gameState.currentScene = "level1";
  onKeyPress("t", () => { if (!gameState.paused) toggleCommandsMenu(); });
  // Reminder: T opens the controls menu
  wait(0.8, () => showTopMessage("Appuie sur T pour voir les contrôles", 4, rgb(200, 200, 255)));
  setGravity(0);

  // Level 1 music
  playMusic("l1Music", 0.3);

  // Droplets SFX — random ambient water drops
  let dropTimer = rand(12, 20);
  onUpdate(() => {
    dropTimer -= dt();
    if (dropTimer <= 0) {
      playSFX("l1Dropplets", { volume: 0.015 * gameState.volume });
      dropTimer = rand(20, 35);
    }
  });

  const WORLD_W = 4600;
  const FLOOR_Y = height() - 60;
  const CEIL_Y = 50;
  const CAVERN_H = FLOOR_Y - CEIL_Y;
  const PW = 26, PH = 26;

  const FLY_GRAVITY = 620;
  const FLAP_IMPULSE = -270;
  const MAX_VEL_DOWN = 340;
  const H_SPEED = 230;

  const bgScale = height() / 216;
  const bgW = 384 * bgScale;
  const bgLayers = []; // array of { layer, tiles[], parallaxFactor }

  const parallaxFactors = [0.0, 0.02, 0.04, 0.07, 0.10, 0.14, 0.18, 0.22];

  let bgVisible = true; // bg visible before bat transformation

  for (let layer = 0; layer < 8; layer++) {
    const tiles = [];
    for (let bx = 0; bx < WORLD_W + bgW; bx += bgW) {
      // All layers visible before transformation
      const baseOp = layer === 0 ? 0.9 : (0.7 - layer * 0.06);
      const tile = add([
        sprite("caveBg" + layer), pos(bx, 0), scale(bgScale),
        z(-100 + layer), opacity(baseOp),
      ]);
      tile.baseX = bx;
      tile.sonarFade = 0;
      tile.sonarOpacity = 0;
      tiles.push(tile);
    }
    bgLayers.push({ layer, tiles, factor: parallaxFactors[layer] });
  }

  const revealables = [];
  let sonarCooldown = 0;
  const SONAR_CD = 1.5;
  const SONAR_SPEED = 600;
  const SONAR_MAX_R = 500;
  const SONAR_FADE = 2.5;
  const sonarWaves = [];

  // Player ambient glow
  const batGlow = add([
    rect(60, 60), pos(0, 0), anchor("center"),
    color(120, 100, 180), opacity(0.06), z(99),
  ]);

  function addRevealable(obj, cx, cy) {
    obj.sonarOpacity = 0;
    obj.sonarFade = 0;
    obj.rcx = cx;
    obj.rcy = cy;
    revealables.push(obj);
    return obj;
  }

  // Sonar update loop
  onUpdate(() => {
    if (sonarCooldown > 0) sonarCooldown -= dt();

    batGlow.pos.x = player.pos.x;
    batGlow.pos.y = player.pos.y;

    // Expand active waves
    for (let i = sonarWaves.length - 1; i >= 0; i--) {
      const w = sonarWaves[i];
      w.r += SONAR_SPEED * dt();
      if (w.r > w.maxR) { sonarWaves.splice(i, 1); continue; }
      for (const obj of revealables) {
        const dx = obj.rcx - w.cx;
        const dy = obj.rcy - w.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < w.r && dist > w.r - 120) {
          obj.sonarOpacity = 1;
          obj.sonarFade = SONAR_FADE;
        }
      }
      // Reveal bg layers
      for (const bl of bgLayers) {
        if (bl.layer === 0) continue; // layer 0 always slightly visible
        for (const tile of bl.tiles) {
          const tLeft = tile.pos.x;
          const tRight = tile.pos.x + bgW;
          const nearX = Math.max(tLeft, Math.min(w.cx, tRight));
          const dist = Math.abs(nearX - w.cx);
          if (dist < w.r) {
            tile.sonarOpacity = 1;
            tile.sonarFade = SONAR_FADE;
          }
        }
      }
    }

    // Fade revealed objects
    for (const obj of revealables) {
      if (obj.sonarFade > 0) {
        obj.sonarFade -= dt();
        obj.sonarOpacity = Math.max(0, obj.sonarFade / SONAR_FADE);
      }
      obj.opacity = obj.sonarOpacity * 0.9;
    }
    // Fade bg layers
    for (const bl of bgLayers) {
      for (const tile of bl.tiles) {
        if (bgVisible) {
          // Before transformation — bg fully visible
          const baseOp = bl.layer === 0 ? 0.9 : (0.7 - bl.layer * 0.06);
          tile.opacity = baseOp;
        } else {
          // After transformation — only sonar reveals bg
          if (tile.sonarFade > 0) {
            tile.sonarFade -= dt();
            tile.sonarOpacity = Math.max(0, tile.sonarFade / SONAR_FADE);
          }
          tile.opacity = tile.sonarOpacity * 0.65;
        }
      }
    }
  });

  const obstacleRects = [];

  // All pillars are pointed stalactites/stalagmites with cave-matching colors
  function addFormation(cx, startY, h, baseW, fromTop) {
    // Dark purple-gray matching the background texture
    const colBase = [40, 38, 56];
    const colLight = [56, 60, 77]; // lighter shade for detail lines
    const steps = 6 + Math.floor(Math.random() * 4);
    for (let s = 0; s < steps; s++) {
      const t = s / steps;
      // Pointed taper: wide base → narrow tip
      const w = baseW * (1 - t * 0.92);
      const segH = h / steps;
      const sy = fromTop ? startY + s * segH : startY + h - (s + 1) * segH;
      // Alternate slightly between base and lighter shade for texture
      const c = s % 3 === 0 ? colLight : colBase;
      const r = add([rect(Math.max(2, w), segH + 1), pos(cx - w / 2, sy),
        color(c[0], c[1], c[2]), opacity(0), z(-50)]);
      addRevealable(r, cx, sy + segH / 2);
    }
  }

  // Generate pillar pairs with gaps (flappy bird style)
  // Start pillars after the bat NPC area, end before landing zone
  const PILLAR_START_X = 550;
  const PILLAR_END_X = WORLD_W - 600;
  const PILLAR_SPACING = 320;

  for (let px = PILLAR_START_X; px < PILLAR_END_X; px += PILLAR_SPACING + Math.random() * 80) {
    const pillarW = 35 + Math.floor(Math.random() * 30);

    // Random gap position and size
    const gapCenter = CEIL_Y + CAVERN_H * (0.25 + Math.random() * 0.5);
    const gapH = 150 + Math.random() * 80;
    const gapTop = gapCenter - gapH / 2;
    const gapBot = gapCenter + gapH / 2;

    // Top stalactite
    const topH = gapTop - CEIL_Y;
    if (topH > 15) {
      obstacleRects.push({ x: px - pillarW / 2, y: CEIL_Y, w: pillarW, h: topH });
      addFormation(px, CEIL_Y, topH, pillarW, true);
    }
    // Bottom stalagmite
    const botH = FLOOR_Y - gapBot;
    if (botH > 15) {
      obstacleRects.push({ x: px - pillarW / 2, y: gapBot, w: pillarW, h: botH });
      addFormation(px, gapBot, botH, pillarW, false);
    }
  }

  // Extra small decorative stalactites
  for (let dx = PILLAR_START_X; dx < PILLAR_END_X; dx += 120 + Math.random() * 200) {
    const dw = 8 + Math.random() * 18;
    const dh = 20 + Math.random() * 60;
    const dr = add([rect(dw, dh), pos(dx - dw / 2, CEIL_Y),
      color(40, 38, 56), opacity(0), z(-51)]);
    addRevealable(dr, dx, CEIL_Y + dh / 2);
    if (Math.random() > 0.5) {
      const fh = 15 + Math.random() * 40;
      const fw = 6 + Math.random() * 14;
      const fr = add([rect(fw, fh), pos(dx + 30 - fw / 2, FLOOR_Y - fh),
        color(40, 38, 56), opacity(0), z(-51)]);
      addRevealable(fr, dx + 30, FLOOR_Y - fh / 2);
    }
  }

  const LAND_X = WORLD_W - 350;
  const LAND_Y = FLOOR_Y - 14;  // exit at ground level
  const LAND_W = 350;
  const LAND_H = 14;

  // Landing platform — use platform_big sprite for a clean look
  const landPlat = add([sprite("l2PlatBig"), pos(LAND_X, LAND_Y), anchor("topleft"),
    opacity(0), z(-40)]);
  addRevealable(landPlat, LAND_X + LAND_W / 2, LAND_Y);

  // Exit door on the landing platform
  const exitX = LAND_X + LAND_W - 60;
  const doorScale = 2;
  const exitDoor = add([
    sprite("exitDoor", { anim: "open" }), pos(exitX, LAND_Y),
    anchor("bot"), scale(doorScale), z(5),
  ]);
  exitDoor.stop();
  const doorGlow = add([
    rect(58 * doorScale, 74 * doorScale), pos(exitX, LAND_Y),
    anchor("bot"), color(255, 220, 100), opacity(0.08), z(4), { t: 0 },
  ]);
  doorGlow.onUpdate(() => {
    doorGlow.t += dt();
    doorGlow.opacity = 0.05 + Math.sin(doorGlow.t * 2) * 0.04;
  });
  add([text("SORTIE ▶", { size: 16 }), pos(exitX, LAND_Y - 74 * doorScale - 10),
    anchor("center"), color(200, 180, 100), z(10)]);

  // Fly collectibles (replace gems)
  const FLY_TOTAL = 5;
  let playerFlies = 0;
  const flyEntities = [];

  const flyUI = add([
    text(`Mouches : 0/${FLY_TOTAL}`, { size: 16 }),
    pos(20, 50), fixed(), anchor("topleft"),
    color(80, 220, 120), z(900),
  ]);

  // Flies patrol left/right between pillars
  function addFly(gx, gy, leftBound, rightBound) {
    const range = (rightBound - leftBound) / 2;
    const cx = (leftBound + rightBound) / 2;
    const f = add([
      sprite("greenfly"),
      pos(gx, gy), anchor("center"),
      scale(1.3), z(4),
      { collected: false, t: Math.random() * 6.28, baseY: gy,
        dir: 1, speed: 60 + Math.random() * 40,
        leftB: leftBound, rightB: rightBound },
    ]);
    f.play("fly");
    f.onUpdate(() => {
      if (f.collected) return;
      f.t += dt();
      f.pos.y = f.baseY + Math.sin(f.t * 2.5) * 8;
      f.pos.x += f.dir * f.speed * dt();
      if (f.pos.x > f.rightB) { f.dir = -1; f.flipX = true; }
      if (f.pos.x < f.leftB) { f.dir = 1; f.flipX = false; }
    });
    flyEntities.push(f);
  }

  // Flies placed between pillar gaps (patrol within gap)
  addFly(700, CEIL_Y + 0.4 * CAVERN_H, 580, 820);
  addFly(1400, CEIL_Y + 0.55 * CAVERN_H, 1280, 1520);
  addFly(2200, CEIL_Y + 0.35 * CAVERN_H, 2080, 2320);
  addFly(3000, CEIL_Y + 0.5 * CAVERN_H, 2880, 3120);
  addFly(3800, CEIL_Y + 0.3 * CAVERN_H, 3680, 3920);

  const fallingRocks = [];
  const rockTriggers = [
    { x: 800,  sizes: [18] },
    { x: 1600, sizes: [18, 26] },
    { x: 2400, sizes: [26] },
    { x: 3200, sizes: [18, 38] },
    { x: 3900, sizes: [26] },
  ];
  const triggeredRocks = new Set();

  function spawnRock(baseX, sz) {
    const rx = baseX + (Math.random() - 0.5) * 200;
    const delay = Math.random() * 1.2;
    wait(delay, () => {
      const warn = add([
        text("!", { size: sz > 30 ? 28 : 20 }), pos(rx, CEIL_Y + 22), anchor("center"),
        color(255, 100, 60), z(10), { age: 0 },
      ]);
      warn.onUpdate(() => {
        warn.age += dt();
        warn.opacity = 0.5 + Math.sin(warn.age * 12) * 0.5;
        if (warn.age > 0.9) destroy(warn);
      });
      wait(0.9, () => {
        // Pointed jagged rock — drawn as a rotated diamond polygon for a stalactite look
        const rock = add([
          polygon([
            vec2(0, -sz * 0.7),
            vec2(sz * 0.55, -sz * 0.15),
            vec2(sz * 0.35, sz * 0.55),
            vec2(-sz * 0.30, sz * 0.65),
            vec2(-sz * 0.55, -sz * 0.10),
          ]),
          pos(rx, CEIL_Y + 5), anchor("center"),
          color(sz > 30 ? 70 : 95, sz > 30 ? 58 : 78, sz > 30 ? 48 : 62),
          outline(sz > 30 ? 2 : 1, rgb(40, 32, 25)),
          rotate(rand(-25, 25)),
          { velY: 0, alive: true, sz },
        ]);
        fallingRocks.push(rock);
        rock.onUpdate(() => {
          if (!rock.alive) return;
          rock.velY += (sz > 30 ? 380 : 480) * dt();
          rock.pos.y += rock.velY * dt();
          if (rock.pos.y > FLOOR_Y + 50) { rock.alive = false; destroy(rock); }
        });
      });
    });
  }

  const player = add([
    sprite("goblin", { anim: "idle" }), pos(60, FLOOR_Y - PH / 2 - 4), anchor("center"),
    area({ shape: new Rect(vec2(0), PW, PH) }),
    scale(1.8),
  ]);
  let goblinAnim = "idle";

  // Light halo around goblin
  const goblinHalo = add([
    circle(70), pos(player.pos), anchor("center"),
    color(180, 170, 255), opacity(0.12), z(90),
  ]);
  const goblinHalo2 = add([
    circle(40), pos(player.pos), anchor("center"),
    color(220, 210, 255), opacity(0.18), z(91),
  ]);
  let haloT = 0;

  let canFly = false;
  let velY = 0;
  let dialogOpen = false;
  let exitTriggered = false;
  let onLandingPlat = false;
  let hasLanded = false; // true after bat→goblin retransformation on landing

  const checkpoints = [350, 1000, 1600, 2200, 2800, 3400];

  function respawn() {
    if (batAnim !== null && !hasLanded) {
      player.play("hurt");
      batAnim = "hurt";
      wait(0.5, () => {
        if (batAnim === "hurt") {
          player.play("idle");
          batAnim = "idle";
        }
      });
    }
    let rx = 350;
    for (const cx of checkpoints) { if (cx < player.pos.x) rx = cx; }
    player.pos.x = rx;
    player.pos.y = CEIL_Y + CAVERN_H / 2;
    velY = 0;
    onLandingPlat = false;
    gameState.deaths++;
    screenShake(5, 0.3);
    showTopMessage("Aïe !", 1, rgb(255, 100, 80));
  }

  function updateBatAnim(d) {
    if (batAnim === null) {
      const want = d !== 0 ? "walk" : "idle";
      if (want !== goblinAnim) {
        goblinAnim = want;
        player.play(want);
      }
      if (d < 0) player.flipX = true;
      else if (d > 0) player.flipX = false;
      return;
    }
    if (batAnim === "hurt") return;
    if (d !== 0 && batAnim !== "run") {
      player.play("run");
      batAnim = "run";
    } else if (d === 0 && batAnim === "run") {
      player.play("idle");
      batAnim = "idle";
    }
    if (d < 0) player.flipX = false;
    else if (d > 0) player.flipX = true;
  }

  const batCeilY = CEIL_Y + 60;
  const bat = add([
    sprite("batNPC", { anim: "sleep" }), pos(220, batCeilY), anchor("center"),
    scale(4), { t: 0 },
  ]);
  // bat orientation: face naturally (no flip)
  bat.onUpdate(() => { bat.t += dt(); bat.pos.y = batCeilY + Math.sin(bat.t * 2) * 3; });
  const batLabel = add([text("Chiro", { size: 13 }), pos(220, batCeilY + 70),
    anchor("center"), color(200, 180, 255), z(10)]);
  let batMet = false;
  let batAnim = null;

  // Camera follows player (clamped to level bounds so we never see past the world)
  onUpdate(() => {
    const curr = camPos();
    const halfW = width() / 2;
    const targetX = player.pos.x + (canFly && !hasLanded ? 80 : 0);
    const minX = halfW;
    const maxX = Math.max(halfW, WORLD_W - halfW);
    camPos(lerp(curr.x, clamp(targetX, minX, maxX), 0.1), height() / 2);
  });

  onUpdate(() => {
    const cx = camPos().x;
    for (const bl of bgLayers) {
      for (const tile of bl.tiles) {
        tile.pos.x = tile.baseX - cx * bl.factor;
      }
    }
  });

  onUpdate(() => {
    if (gameState.paused) return;
    // Halo follows player
    if (goblinHalo.exists()) {
      haloT += dt();
      goblinHalo.pos = player.pos;
      goblinHalo2.pos = player.pos;
      const pulse = 0.12 + Math.sin(haloT * 3) * 0.04;
      goblinHalo.opacity = pulse;
      goblinHalo2.opacity = pulse + 0.06;
    }

    if (dialogOpen) return;

    // ========== PRE-FLIGHT: goblin walks to bat NPC ==========
    if (!canFly && !hasLanded) {
      player.pos.y = FLOOR_Y - PH / 2 - 4;
      let d = 0;
      if (isKeyDown("right") || isKeyDown("d")) d = 1;
      if (isKeyDown("left") || isKeyDown("a")) d = -1;
      player.pos.x += d * 200 * dt();
      updateBatAnim(d);

      if (!batMet && Math.abs(player.pos.x - bat.pos.x) < 60) {
        batMet = true;
        dialogOpen = true;
        showDialog({
          npcName: "Chiro",
          iconColor: rgb(90, 65, 130),
          lines: [
            "Bonsoir petit KAGE ! Je suis Chiro, la chauve-souris.",
            "Sais-tu comment je me déplace dans le noir complet ?",
            "J'utilise l'ÉCHOLOCATION ! J'envoie des ondes sonores...",
            "... et quand elles rebondissent, je 'vois' les obstacles autour de moi !",
            "Observe-moi bien… En me regardant, tu pourras copier ma forme de chauve-souris !",
            "Attention : tu seras plongé dans l'obscurité totale !",
            "Utilise E pour envoyer des ultrasons et révéler ton chemin.",
            "Attrape les mouches sur ton passage — c'est notre nourriture !",
            "La sortie est tout au bout, en haut à droite. Bon vol !",
            "Appuie sur T à tout moment pour revoir les commandes."
          ],
          onDone: () => {
            dialogOpen = false;
            canFly = true;
            velY = -150;

            spawnBurstParticles(player.pos.x, player.pos.y, 25,
              [rgb(90, 65, 130), rgb(130, 100, 170), rgb(180, 140, 255), rgb(200, 180, 255)]);

            // Transform goblin → bat
            player.unuse("sprite");
            player.use(sprite("batCombo", { anim: "idle" }));
            player.use(scale(1.3));
            if (goblinHalo.exists()) destroy(goblinHalo);
            if (goblinHalo2.exists()) destroy(goblinHalo2);
            // Hide background — echolocation takes over
            bgVisible = false;
            batAnim = "idle";

            showTopMessage("Transformation !", 3, rgb(180, 160, 255));
          }
        });
      }
      return;
    }

    // ========== POST-LANDING: goblin walks to exit door ==========
    if (hasLanded) {
      // Goblin on landing platform
      player.pos.y = LAND_Y - PH / 2;
      let d = 0;
      if (isKeyDown("right") || isKeyDown("d")) d = 1;
      if (isKeyDown("left") || isKeyDown("a")) d = -1;
      player.pos.x += d * 200 * dt();
      // Keep on platform
      if (player.pos.x < LAND_X + PW) player.pos.x = LAND_X + PW;
      if (player.pos.x > LAND_X + LAND_W - PW) player.pos.x = LAND_X + LAND_W - PW;

      // Animate goblin
      const want = d !== 0 ? "walk" : "idle";
      if (want !== goblinAnim) {
        goblinAnim = want;
        player.play(want);
      }
      if (d < 0) player.flipX = true;
      if (d > 0) player.flipX = false;

      // Exit door
      if (!exitTriggered && Math.abs(player.pos.x - exitX) < 50) {
        exitTriggered = true;
        gameState.levelsCompleted++;
        exitDoor.play("open");
        wait(0.8, () => fadeOutThen("level2", 0.5));
      }
      return;
    }

    // ========== FLIGHT MODE — flappy bird ==========
    // Landing platform check
    onLandingPlat = false;
    if (velY >= 0) {
      if (player.pos.x > LAND_X - PW / 2 && player.pos.x < LAND_X + LAND_W + PW / 2 &&
          player.pos.y + PH / 2 >= LAND_Y && player.pos.y + PH / 2 <= LAND_Y + LAND_H + 8) {
        player.pos.y = LAND_Y - PH / 2;
        velY = 0;
        onLandingPlat = true;

        // Transform bat → goblin on landing!
        if (!hasLanded) {
          hasLanded = true;
          canFly = false;

          spawnBurstParticles(player.pos.x, player.pos.y, 25,
            [rgb(90, 65, 130), rgb(130, 100, 170), rgb(180, 140, 255), rgb(200, 180, 255)]);

          // Transform bat → goblin
          player.unuse("sprite");
          player.use(sprite("goblin", { anim: "idle" }));
          player.use(scale(1.8));
          batAnim = null;
          goblinAnim = "idle";
          // Restore background visibility
          bgVisible = true;

          showTopMessage("De retour sur la terre ferme !", 3, rgb(180, 255, 160));
          return;
        }
      }
    }

    if (!onLandingPlat) {
      velY += FLY_GRAVITY * dt();
      if (velY > MAX_VEL_DOWN) velY = MAX_VEL_DOWN;
      player.pos.y += velY * dt();
    }

    let d = 0;
    if (isKeyDown("right") || isKeyDown("d")) d = 1;
    if (isKeyDown("left") || isKeyDown("a")) d = -1;
    player.pos.x += d * H_SPEED * dt();
    updateBatAnim(d);
    if (player.pos.x < 300) player.pos.x = 300;

    // Ceiling/floor collision → respawn
    if (player.pos.y - PH / 2 < CEIL_Y || player.pos.y + PH / 2 > FLOOR_Y) {
      respawn(); return;
    }

    // Pillar collision
    const ppx = player.pos.x - PW / 2;
    const ppy = player.pos.y - PH / 2;
    for (const ob of obstacleRects) {
      if (ppx + PW > ob.x && ppx < ob.x + ob.w &&
          ppy + PH > ob.y && ppy < ob.y + ob.h) {
        respawn(); return;
      }
    }

    // --- Falling rock collision ---
    for (const rock of fallingRocks) {
      if (!rock.alive) continue;
      const hs = rock.sz / 2;
      if (Math.abs(rock.pos.x - player.pos.x) < (PW / 2 + hs) &&
          Math.abs(rock.pos.y - player.pos.y) < (PH / 2 + hs)) {
        respawn(); return;
      }
    }

    // Fly collection
    for (const f of flyEntities) {
      if (f.collected) continue;
      const dx = f.pos.x - player.pos.x;
      const dy = f.pos.y - player.pos.y;
      if (dx * dx + dy * dy < 30 * 30) {
        f.collected = true;
        playerFlies++;
        gameState.level1Flies++;
        gameState.totalCollected++;
        flyUI.text = `Mouches : ${playerFlies}/${FLY_TOTAL}`;
        spawnFloatingText("+ Mouche !", player.pos.x, player.pos.y - 30, rgb(80, 220, 120));
        destroy(f);
      }
    }

    // --- Trigger falling rocks ---
    for (let i = 0; i < rockTriggers.length; i++) {
      if (!triggeredRocks.has(i) && Math.abs(player.pos.x - rockTriggers[i].x) < 150) {
        triggeredRocks.add(i);
        rockTriggers[i].sizes.forEach(sz => spawnRock(rockTriggers[i].x, sz));
      }
    }
  });

  onKeyPress("space", () => {
    if (gameState.paused || dialogOpen || hasLanded) return;

    if (canFly) {
      velY = FLAP_IMPULSE;
      onLandingPlat = false;

      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI;
        const spd = 30 + Math.random() * 50;
        const spark = add([
          rect(3 + Math.random() * 3, 3), pos(player.pos.x + rand(-14, 14), player.pos.y + 8),
          anchor("center"), color(140 + Math.random() * 60, 120, 220), opacity(0.7),
          { age: 0, life: 0.3 + Math.random() * 0.15, vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd * 0.5 },
        ]);
        spark.onUpdate(() => {
          spark.age += dt();
          spark.pos.x += spark.vx * dt();
          spark.pos.y += (spark.vy + 30) * dt();
          spark.opacity = 0.7 * (1 - spark.age / spark.life);
          if (spark.age >= spark.life) destroy(spark);
        });
      }
    }
  });

  onKeyPress("e", () => {
    if (gameState.paused || dialogOpen || !canFly || hasLanded) return;
    if (sonarCooldown > 0) return;
    sonarCooldown = SONAR_CD;

    playSFX("l1Dropplets", { volume: 0.12 * gameState.volume });

    const cx = player.pos.x;
    const cy = player.pos.y;
    sonarWaves.push({ cx, cy, r: 0, maxR: SONAR_MAX_R });

    for (let ring = 0; ring < 3; ring++) {
      const delay = ring * 0.12;
      wait(delay, () => {
        const wave = add([
          rect(1, 1), pos(cx, cy), anchor("center"),
          color(100, 160, 255), opacity(0.5), z(100),
          { age: 0, ringR: 0 },
        ]);
        wave.onUpdate(() => {
          wave.age += dt();
          wave.ringR += SONAR_SPEED * dt();
          const sz = wave.ringR * 2;
          wave.width = sz;
          wave.height = sz;
          wave.opacity = 0.4 * (1 - wave.ringR / SONAR_MAX_R);
          if (wave.ringR > SONAR_MAX_R) destroy(wave);
        });
      });
    }

    const flash = add([
      rect(80, 80), pos(cx, cy), anchor("center"),
      color(120, 180, 255), opacity(0.4), z(101),
    ]);
    flash.onUpdate(() => {
      flash.opacity -= dt() * 2;
      if (flash.opacity <= 0) destroy(flash);
    });
  });

  // Sonar cooldown bar
  const sonarBar = add([
    rect(40, 4), pos(20, 76), fixed(), anchor("topleft"),
    color(100, 160, 255), z(900),
  ]);
  onUpdate(() => {
    const pct = sonarCooldown > 0 ? 1 - sonarCooldown / SONAR_CD : 1;
    sonarBar.width = 40 * pct;
    sonarBar.opacity = pct < 1 ? 0.4 : 0.9;
  });

  onKeyPress("tab", () => fadeOutThen("levelSelect", 0.35));

  fadeIn(0.4);
});


scene("level2", () => {
  gameState.currentScene = "level2";
  onKeyPress("t", () => { if (!gameState.paused) toggleCommandsMenu(); });
  // Reminder: T opens the controls menu
  wait(0.8, () => showTopMessage("Appuie sur T pour voir les contrôles", 4, rgb(255, 230, 140)));
  setGravity(BASE_GRAVITY);

  // Level 2 music
  playMusic("l2Music", 0.3);

  const WORLD_W = 2400;
  const WORLD_H = 400;
  const fixedY = WORLD_H / 2;

  // Zoom camera so 400px world height fills screen
  const zoomScale = height() / WORLD_H;
  camScale(zoomScale);

  add([sprite("lvl2Full"), pos(0, 0), scale(1), z(-100)]);

  const DEBUG_HITBOX = false;
  function addHitbox(x, y, w, h) {
    add([
      rect(w, h), pos(x, y),
      area(), body({ isStatic: true }),
      opacity(DEBUG_HITBOX ? 0.25 : 0),
      color(255, 0, 0),
      z(DEBUG_HITBOX ? 100 : -10),
      "solid",
    ]);
  }


  addHitbox(0,    368, 1642, 32);       
  addHitbox(1843, 368,  557, 32);       
  addHitbox(0,      0, 2400, 10);       


  addHitbox(423.3,  305.7, 192,   50);    
  addHitbox(827.4,  256.6, 128,   32);    
  addHitbox(1136.9, 272.6, 127.6, 75);   
  addHitbox(2059.9, 255.5, 128,   32);   
  addHitbox(1651.4, 96.9, 192,   207.1);  
  addHitbox(2272,   210.8, 128,   32);   

  // Tunnel log: pure decoration on top, no body, fully walk-through
  const TUNNEL_X      = 1642.4;
  const TUNNEL_W      = 200.6;
  const TUNNEL_TOP    = 329.5;
  const TUNNEL_FLOOR  = 368;

  // ground continues under the log so the player doesn't fall
  addHitbox(TUNNEL_X, TUNNEL_FLOOR, TUNNEL_W, 32);

  // visual log on the foreground (no area, no body — player passes through)
  add([
    sprite("l2TreeLay"),
    pos(TUNNEL_X, TUNNEL_TOP),
    anchor("topleft"),
    scale(1),
    z(950),
  ]);

// Breakable stone pillars (dash)

  function addDashPillar(x, y, w, h, variant) {
    const spName = variant === 2 ? "l2RockPile2" : "l2RockPile1";

    const vis = add([
      sprite(spName),
      pos(x + w / 2, y + h),
      anchor("bot"),
      scale(1.2),
      z(8),
    ]);

    const box = add([
      rect(w, h),
      pos(x, y),
      area(),
      body({ isStatic: true }),
      opacity(DEBUG_HITBOX ? 0.3 : 0),
      color(255, 140, 0),
      z(DEBUG_HITBOX ? 110 : -5),
      "breakable",
      "solid",
      { visual: vis },
    ]);

    return box;
  }

  // Pillar 1
  addDashPillar(531.6,  231.6, 55.8, 72.6, 1);
  // Pillar 2
  addDashPillar(1172.1, 200,   55.8, 72.6, 2);
  // Pillar 3
  addDashPillar(1595.9, 295.4, 55.8, 72.6, 1);
  // Pillar 4
  addDashPillar(1839,   295.4, 55.8, 72.6, 2);
  // Pillar 5
  addDashPillar(2145.7, 185,   55.8, 72.6, 1);
  // Pillar 6
  addDashPillar(2257.6, 148.7, 55.8, 72.6, 2);

  const GOBLIN_SCALE = 1.6;
  const player = add([
    sprite("goblin", { anim: "idle" }), pos(100, 355),
    area({ shape: new Rect(vec2(0, -6), 28, 36) }), body(), anchor("center"),
    scale(GOBLIN_SCALE), z(20),
    {
      speed: 250,
      canCharge: false, charging: false,
      chargeDir: 1, chargeSpeed: 400, // reduced from 650 to 400
      chargeTime: 0.2, chargeTimer: 0, // short brutal dash (0.2s)
      respawnX: 100, respawnY: 355,
      currentAnim: "idle", isHurt: false,
    },
  ]);

  // Hover fuel mechanic
  let hoverFuel = 0.7;
  const MAX_HOVER = 0.7;

  player.onUpdate(() => {
    const curr = camPos();
    const visW = width() / zoomScale;
    const minX = Math.min(visW / 2, WORLD_W - visW / 2);
    const maxX = Math.max(visW / 2, WORLD_W - visW / 2);
    const targetX = clamp(player.pos.x, minX, maxX);
    camPos(lerp(curr.x, targetX, 0.1), fixedY);
  });

  function respawn() {
    player.pos.x = player.respawnX;
    player.pos.y = player.respawnY;
    player.charging = false;
    hoverFuel = MAX_HOVER;
    setGravity(BASE_GRAVITY);

    player.isHurt = true;
    player.currentAnim = "idle";
    player.play("idle");
    wait(0.5, () => { player.isHurt = false; });
    gameState.deaths++;

    screenShake(5, 0.3);
    showTopMessage("Aïe !", 1, rgb(255, 100, 80));
  }

  // Fall death
  player.onUpdate(() => {
    if (player.pos.y > WORLD_H + 50) respawn();
  });

  let mushCount = 0; // current mushrooms available for dash

  const mushUI = add([
    text(`🍄 Dashes : 0`, { size: 16 }),
    pos(-width() / 2 + 16, -height() / 2 + 16),
    fixed(), anchor("topleft"),
    color(200, 120, 60), z(900),
  ]);

  function spawnCollectMush(x, y, variant) {
    const sprName = "decorMush" + (variant || 1);
    const mush = add([
      sprite(sprName), pos(x, y),
      area({ shape: new Rect(vec2(0), 20, 20) }),
      anchor("center"), scale(2.0), z(10),
      "collectMush",
      { collected: false, baseY: y, t: rand(6) },
    ]);
    mush.onUpdate(() => {
      if (mush.collected) return;
      mush.t += dt();
      mush.pos.y = mush.baseY + Math.sin(mush.t * 2.5) * 6;
    });
  }

  function collectMush(mush) {
    if (mush.collected) return;
    mush.collected = true;
    mushCount += 2;  // each mushroom gives 2 dashes
    gameState.level2Mushrooms++;
    gameState.totalCollected++;
    mushUI.text = `🍄 Dashes : ${mushCount}`;
    spawnFloatingText("+ Champignon (2 dashes) !", player.pos.x, player.pos.y - 40, rgb(200, 120, 60));
    destroy(mush);
  }

  player.onCollide("collectMush", collectMush);

  // 5 mushrooms on platforms (each gives 2 dashes = 10 total, enough for 6 pillars)
  spawnCollectMush(350, 350, 1);         // right after beetle NPC dialogue
  spawnCollectMush(460, 290, 2);         // on first platform (423, 305)
  spawnCollectMush(860, 242, 3);         // on mid platform (827, 256)
  spawnCollectMush(1170, 258, 1);        // on platform (1136, 272)
  spawnCollectMush(2090, 240, 4);        // on right platform (2059, 255)

  // Hover fuel bar
  add([rect(64, 8), pos(-width() / 2 + 16, -height() / 2 + 40),
    fixed(), color(40, 40, 60), z(899)]);
  const hoverBar = add([
    rect(64, 8), pos(-width() / 2 + 16, -height() / 2 + 40),
    fixed(), color(140, 180, 255), z(900),
  ]);
  add([text("Plané", { size: 10 }),
    pos(-width() / 2 + 16, -height() / 2 + 52),
    fixed(), anchor("topleft"), color(140, 180, 255), z(900)]);

  let beetleTriggered = false;
  let beetleDialogOpen = false;

  const beetleNPC = add([
    sprite("beetle", { anim: "idle" }),
    pos(300, 384),
    area(), anchor("bot"),
    scale(3.5),
    "beetle-npc", z(15),
    { t: 0, baseX: 300 },
  ]);

  const beetleLabel = add([
    text("Karabos", { size: 13 }),
    pos(300, 310), anchor("center"),
    color(255, 230, 140), z(10), { t: 0 },
  ]);
  beetleLabel.onUpdate(() => {
    beetleLabel.t += dt();
    beetleLabel.opacity = 0.6 + Math.sin(beetleLabel.t * 4) * 0.4;
    beetleLabel.pos.x = beetleNPC.pos.x;
    beetleLabel.pos.y = beetleNPC.pos.y - 120;
  });

  beetleNPC.onUpdate(() => {
    if (beetleTriggered) return;
    const dist = Math.abs(player.pos.x - beetleNPC.pos.x);
    // Face toward player
    beetleNPC.flipX = player.pos.x < beetleNPC.pos.x;
    if (dist < 320) {
      const dir = player.pos.x < beetleNPC.pos.x ? -1 : 1;
      beetleNPC.pos.x += dir * 160 * dt();
    }
  });

  function openBeetleDialog() {
    beetleTriggered = true;
    beetleDialogOpen = true;
    beetleNPC.unuse("beetle-npc");
    beetleLabel.text = "Karabos";
    beetleLabel.opacity = 1;
    beetleLabel.color = rgb(255, 200, 60);

    showDialog({
      npcName: "Karabos",
      iconColor: rgb(200, 140, 40),
      lines: [
        "Hé toi ! Je suis Karabos, le scarabée bousier.",
        "Sais-tu que je peux pousser des objets 1 141 fois mon poids ?",
        "C'est comme si toi tu poussais 6 bus en même temps !",
        "Observe-moi attentivement et tu pourras copier ma force ! Utilise SHIFT pour charger.",
        "Mais attention : le dash ne fonctionne que si tu manges des champignons !",
        "Les champignons te donnent l'énergie nécessaire pour foncer.",
        "Casse les piliers de pierre et trouve la sortie !",
        "Rappel : appuie sur T pour revoir toutes les commandes."
      ],
      onDone: () => {
        beetleDialogOpen = false;
        player.canCharge = true;
        player.respawnX = player.pos.x;
        player.respawnY = player.pos.y;

        // Transform player into beetle
        player.unuse("sprite");
        player.use(sprite("beetle", { anim: "idle" }));
        player.use(scale(1.8));
        player.use(anchor("bot"));
        player.use(area({ shape: new Rect(vec2(0), 28, 14) }));

        const ok = add([
          text("TRANSFORMATION !", { size: 18 }),
          pos(0, -70), fixed(), anchor("center"),
          color(255, 180, 50), z(1000),
        ]);
        wait(2.5, () => destroy(ok));
      }
    });
  }

  player.onCollide("beetle-npc", () => {
    if (!beetleTriggered) openBeetleDialog();
  });

  function spawnMushEnemy(x, leftX, rightX, spd) {
    spd = spd || 60;
    const en = add([
      sprite("mushRun", { anim: "run" }),
      pos(x, 300), anchor("bot"),
      area({ shape: new Rect(vec2(0), 40, 50) }),
      body(),
      scale(1.2), z(15),
      "mushEnemy",
      { leftX, rightX, dir: 1, speed: spd, alive: true },
    ]);
    en.onUpdate(() => {
      if (!en.alive) return;
      en.move(en.dir * en.speed, 0);
      if (en.pos.x > en.rightX) en.dir = -1;
      if (en.pos.x < en.leftX) en.dir = 1;
      // sprite faces left by default; flip for right
      en.flipX = (en.dir === 1);
    });
    // Reverse on hitting a solid wall
    en.onCollide("solid", () => {
      en.dir *= -1;
    });
    return en;
  }

  // Enemy 1: patrol after first obstacle
  spawnMushEnemy(680, 600, 850, 55);
  // Enemy 2: patrol in mid-section
  spawnMushEnemy(1400, 1250, 1600, 65);
  // Enemy 3: patrol in right section
  spawnMushEnemy(2050, 1900, 2200, 50);

  // Enemy collision via onCollide (physics-based)
  player.onCollide("mushEnemy", (enemy) => {
    if (!enemy.alive) return;
    if (player.charging) {
      enemy.alive = false;
      spawnBurstParticles(enemy.pos.x, enemy.pos.y - 20, 10,
        [rgb(180, 60, 30), rgb(200, 80, 40), rgb(150, 50, 25)],
        { lifeMin: 0.3, lifeMax: 0.6, gravity: 300 });
      destroy(enemy);
      // Enemy drops a mushroom collectible
      spawnCollectMush(enemy.pos.x, enemy.pos.y - 10, choose([1,2,3,4]));
    } else {
      respawn();
    }
  });

  player.onCollide("breakable", wall => {
    if (!player.charging) return; // only with dash

    // Small stone debris particles
    for (let i = 0; i < 14; i++) {
      const sz = 3 + Math.random() * 6;
      const chip = add([
        rect(sz, sz),
        pos(
          wall.pos.x + wall.width  * Math.random(),
          wall.pos.y + wall.height * Math.random()
        ),
        color(
          80  + Math.floor(Math.random() * 50),
          68  + Math.floor(Math.random() * 30),
          50  + Math.floor(Math.random() * 25)
        ),
        anchor("center"),
        z(30),
        {
          vel: vec2(
            (Math.random() - 0.5) * 280,
            -120 - Math.random() * 160
          ),
          age: 0,
          life: 0.5 + Math.random() * 0.35,
          rot: Math.random() * 360,
          rotSpd: (Math.random() - 0.5) * 300,
        },
      ]);
      chip.onUpdate(() => {
        chip.age += dt();
        chip.pos.x  += chip.vel.x  * dt();
        chip.pos.y  += chip.vel.y  * dt();
        chip.vel.y  += 420 * dt();           // gravity on chips
        chip.angle   = chip.rot + chip.rotSpd * chip.age;
        chip.opacity = 1 - chip.age / chip.life;
        if (chip.age >= chip.life) destroy(chip);
      });
    }

    // Impact flash
    const flash = add([
      rect(wall.width + 20, wall.height + 20),
      pos(wall.pos.x - 10, wall.pos.y - 10),
      color(255, 220, 100),
      opacity(0.55),
      z(25),
      { age: 0 },
    ]);
    flash.onUpdate(() => {
      flash.age += dt();
      flash.opacity = Math.max(0, 0.55 - flash.age / 0.15);
      if (flash.age > 0.15) destroy(flash);
    });

    // Remove visual and hitbox
    if (wall.visual && wall.visual.exists()) destroy(wall.visual);
    destroy(wall);
  });

  const exitX      = 2336;            // center of last platform
  const exitY      = 210.8;           // top of platform
  const l2DoorScale = 1.87;           // reduced scale (~15% smaller)

  const exit = add([
    sprite("exitDoor", { anim: "open" }),
    pos(exitX, exitY),
    anchor("bot"),
    scale(l2DoorScale),
    z(5),
  ]);
  exit.stop();

  // Exit label
  add([
    text("SORTIE ▶", { size: 14 }),
    pos(exitX, exitY - 74 * l2DoorScale - 8),
    anchor("center"),
    color(200, 180, 100),
    z(10),
  ]);

  let exitTriggered = false;
  // Trigger when near in X and on (or near) the top platform
  player.onUpdate(() => {
    if (!exitTriggered
        && Math.abs(player.pos.x - exitX) < 80
        && Math.abs(player.pos.y - exitY) < 80) {
      exitTriggered = true;
      gameState.levelsCompleted++;
      exit.play("open");
      wait(0.8, () => fadeOutThen("level3", 0.5));
    }
  });

  [500, 1100, 1850].forEach(cx => {
    add([
      rect(10, 60), pos(cx, 308),
      area(), opacity(0), z(-10),
      "checkpoint",
    ]);
  });

  player.onCollide("checkpoint", (cp) => {
    player.respawnX = cp.pos.x;
    player.respawnY = 355;
    destroy(cp);
  });

  onKeyPress("space", () => {
    if (gameState.paused || beetleDialogOpen) return;
    if (!player.charging && player.isGrounded()) player.jump(420);
  });

  // Dash requires mushroom — consumes 1 mushroom per dash
  onKeyPress("shift", () => {
    if (gameState.paused || !player.canCharge) return;
    if (player.charging) return;
    if (mushCount <= 0) {
      showTopMessage("Mange un champignon pour dasher !", 1.8, rgb(255, 120, 60));
      return;
    }
    mushCount--;
    mushUI.text = `🍄 Dashes : ${mushCount}`;
    player.chargeDir = isKeyDown("left") ? -1 : 1;
    player.charging = true;
    player.chargeTimer = player.chargeTime;
    player.currentAnim = "walk";
    player.play("walk");
    player.flipX = player.chargeDir < 0;
  });

  onUpdate(() => {
    if (gameState.paused) return;
    // CHARGE
    if (player.charging) {
      player.chargeTimer -= dt();
      player.move(player.chargeDir * player.chargeSpeed, 0);

      const trail = add([
        rect(22, 12),
        pos(player.pos.x - player.chargeDir * 24, player.pos.y),
        color(255, 160, 40), opacity(0.7),
        anchor("center"),
        { age: 0, life: 0.12 },
      ]);
      trail.onUpdate(() => {
        trail.age += dt();
        trail.opacity = 0.7 * (1 - trail.age / trail.life);
        if (trail.age >= trail.life) destroy(trail);
      });

      if (player.chargeTimer <= 0) player.charging = false;
      return;
    }

    // MOVEMENT
    if (beetleDialogOpen) return;
    let dir = 0;
    if (isKeyDown("left") || isKeyDown("a")) dir -= 1;
    if (isKeyDown("right") || isKeyDown("d")) dir += 1;
    player.move(dir * player.speed, 0);

    // ANIMATION STATE (beetle only has idle/walk anims)
    if (!player.isHurt) {
      let wantAnim = "idle";
      if (!player.isGrounded()) {
        wantAnim = "walk"; // no jump anim — use walk
      } else if (dir !== 0) {
        wantAnim = "walk";
      }
      if (dir < 0) player.flipX = true;
      if (dir > 0) player.flipX = false;
      if (wantAnim !== player.currentAnim) {
        player.currentAnim = wantAnim;
        player.play(wantAnim);
      }
    }

    // HOVER — reduced fuel, higher gravity penalty
    if (!player.isGrounded() && isKeyDown("space") && hoverFuel > 0) {
      setGravity(BASE_GRAVITY * 0.45);
      hoverFuel -= dt();
      if (Math.random() < 0.35) {
        const spark = add([
          rect(5, 5),
          pos(player.pos.x + rand(-14, 14), player.pos.y + 14),
          color(220, 240, 255), opacity(0.7),
          anchor("center"),
          { age: 0, life: 0.2 },
        ]);
        spark.onUpdate(() => {
          spark.age += dt();
          spark.opacity = 0.7 * (1 - spark.age / spark.life);
          if (spark.age >= spark.life) destroy(spark);
        });
      }
    } else {
      setGravity(BASE_GRAVITY);
    }

    // Recharge hover on ground
    if (player.isGrounded()) {
      hoverFuel = Math.min(hoverFuel + dt() * 2.5, MAX_HOVER);
    }

    hoverBar.width = 64 * (hoverFuel / MAX_HOVER);
  });

  onKeyPress("tab", () => fadeOutThen("levelSelect", 0.35));

  fadeIn(0.4);
});

scene("level3", () => {
  gameState.currentScene = "level3";
  onKeyPress("t", () => { if (!gameState.paused) toggleCommandsMenu(); });
  // Reminder: T opens the controls menu
  wait(0.8, () => showTopMessage("Appuie sur T pour voir les contrôles", 4, rgb(140, 255, 180)));
  setGravity(BASE_GRAVITY);
  playMusic("l3Music", 0.3);

  const WORLD_W = 2400;
  const WORLD_H = 400;

  // Zoom camera so 400px world height fills screen
  const zoomScale = height() / WORLD_H;
  camScale(zoomScale);

  add([sprite("lvl3Full"), pos(0, 0), scale(1), z(-100)]);

  add([
    rect(WORLD_W, WORLD_H + 100), pos(0, 0),
    color(8, 12, 6), opacity(0.35), z(-50),
  ]);

  const WATER_Y = 390;

  // Invisible collision water (mortelle, non solide car pas de body)
  add([
    rect(WORLD_W, 100),
    pos(0, WATER_Y - 5), // raised so contact is immediate
    area(), opacity(0), "water", z(50),
  ]);

  // Dark swamp water base
  add([
    rect(WORLD_W, WORLD_H - WATER_Y + 200),
    pos(0, WATER_Y),
    color(18, 35, 20), z(3),
  ]);

  // Animated water surface (tinted dark via overlay)
  for (let wy = WATER_Y; wy < WORLD_H + 100; wy += 208) {
    for (let wx = 0; wx < WORLD_W; wx += 592) {
      add([sprite("waterAnim", { anim: "flow" }), pos(wx, wy), opacity(0.5), z(4)]);
    }
  }

  // Dark water shimmer
  for (let wx = 0; wx < WORLD_W; wx += 60 + Math.random() * 100) {
    const sh = add([
      rect(rand(15, 40), 1), pos(wx, WATER_Y + 2),
      color(30, 60, 35), opacity(0.08), z(4), { t: rand(6) },
    ]);
    sh.onUpdate(() => {
      sh.t += dt();
      sh.opacity = 0.04 + Math.sin(sh.t * 1.5) * 0.06;
    });
  }

  // Lily pad timing constants
  const LILY_STAND_TIME  = 2.2;   // time before sinking after player steps on
  const LILY_SINK_TIME   = 1.0;   // sinking duration
  const LILY_RESURFACE_TIME = 2.5; // time underwater before resurfacing
  const LILY_RISE_TIME   = 0.8;   // rising duration

  function addLilyPad(x, y, sprName, sc) {
    // hitbox width adjustment by lily pad type
    let hw = 60;
    if (sprName === "lilyMed" || sprName === "lilyMed2" || sprName === "lilyMed3") hw = 40;
    if (sprName === "lilySmall") hw = 25;

    const lp = add([
      sprite(sprName), pos(x, y),
      area({ shape: new Rect(vec2(-hw * sc / 2, -5), hw * sc, 10) }),
      body({ isStatic: true }),
      scale(sc), anchor("center"),
      "solid", "lilypad", z(6),
      {
        baseY: y,
        t: rand(6),
        bounceT: 0,
        // states: idle | warning | sinking | submerged | rising
        lilyState: 'idle',
        lilyTimer: 0,
        playerWasOn: false,
      },
    ]);
    lp.onUpdate(() => {
      lp.t += dt();
      const bob = lp.lilyState === 'idle' || lp.lilyState === 'warning'
        ? Math.sin(lp.t * 1.6) * 2
        : 0;
      const bounce = lp.bounceT > 0 ? Math.sin(lp.bounceT * 12) * 4 * lp.bounceT : 0;

      if (lp.lilyState === 'idle' || lp.lilyState === 'warning') {
        lp.pos.y = lp.baseY + bob + bounce;
      }
      if (lp.bounceT > 0) lp.bounceT = Math.max(0, lp.bounceT - dt() * 2);

      // warning blink
      if (lp.lilyState === 'warning') {
        lp.opacity = 0.5 + Math.sin(lp.t * 18) * 0.5;
      } else if (lp.lilyState === 'idle') {
        lp.opacity = 1;
      }

      if (lp.lilyState === 'warning') {
        lp.lilyTimer -= dt();
        if (lp.lilyTimer <= 0) {
          lp.lilyState = 'sinking';
          lp.lilyTimer = LILY_SINK_TIME;
          // disable collision while sinking
          if (lp.area) lp.area.paused = true;
        }
      } else if (lp.lilyState === 'sinking') {
        lp.lilyTimer -= dt();
        const progress = 1 - (lp.lilyTimer / LILY_SINK_TIME);
        lp.pos.y = lp.baseY + progress * 30; // sink 30px below base
        lp.opacity = 1 - progress * 0.8;
        if (lp.lilyTimer <= 0) {
          lp.lilyState = 'submerged';
          lp.lilyTimer = LILY_RESURFACE_TIME;
          lp.opacity = 0;
          lp.pos.y = lp.baseY + 30;
        }
      } else if (lp.lilyState === 'submerged') {
        lp.lilyTimer -= dt();
        if (lp.lilyTimer <= 0) {
          lp.lilyState = 'rising';
          lp.lilyTimer = LILY_RISE_TIME;
        }
      } else if (lp.lilyState === 'rising') {
        lp.lilyTimer -= dt();
        const progress = 1 - (lp.lilyTimer / LILY_RISE_TIME);
        lp.pos.y = lp.baseY + 30 - progress * 30;
        lp.opacity = progress;
        if (lp.lilyTimer <= 0) {
          lp.lilyState = 'idle';
          lp.lilyTimer = 0;
          lp.pos.y = lp.baseY;
          lp.opacity = 1;
          lp.playerWasOn = false;
          // re-enable collision
          if (lp.area) lp.area.paused = false;
        }
      }
    });
  }

  // Large lily pads at specified positions
  addLilyPad(149.4, 384.2, "lilyBig", 1.5);
  addLilyPad(275, 384, "lilyBig", 1.5);
  addLilyPad(400.5, 384, "lilyBig", 1.5);
  addLilyPad(991.3, 384, "lilyBig", 1.5);
  addLilyPad(1200, 384, "lilyBig", 1.5);
  addLilyPad(1376.9, 384.2, "lilyBig", 1.5);
  addLilyPad(1697.2, 384.2, "lilyBig", 1.5);
  // Small lily pads scattered in gaps
  addLilyPad(550, 389, "lilySmall", 1.6);
  addLilyPad(740, 390, "lilySmall", 1.6);
  addLilyPad(1550, 389, "lilySmall", 1.6);
  addLilyPad(1870, 388, "lilyMed3", 1.4);

  // Lamp positions with fireflies (exact coordinates from image)
  const lampPositions = [
    { x: 225.3 + 28, y: 125.5 + 18 },  // left platform lantern
    { x: 680.7 + 23, y: 236.5 + 17 },  // center island lamp
    { x: 2132.9 + 27, y: 236.5 + 21 }, // right area lamp
  ];

  // Fireflies clustered around lamps
  for (const lamp of lampPositions) {
    for (let i = 0; i < 5; i++) {
      const ff = add([
        rect(2, 2),
        pos(lamp.x + rand(-25, 25), lamp.y + rand(-25, 25)),
        color(choose([rgb(220, 255, 140), rgb(255, 240, 100), rgb(180, 255, 120)])),
        opacity(0.3), anchor("center"), z(45),
        { t: rand(10), cx: lamp.x, cy: lamp.y, orbitR: rand(15, 40) },
      ]);
      ff.onUpdate(() => {
        ff.t += dt() * (0.4 + Math.random() * 0.3);
        ff.pos.x = ff.cx + Math.sin(ff.t * 0.7) * ff.orbitR;
        ff.pos.y = ff.cy + Math.cos(ff.t * 0.5) * ff.orbitR * 0.6;
        ff.opacity = 0.15 + Math.sin(ff.t * 3) * 0.2;
      });
    }
    // Warm glow halo around each lamp
    const glow = add([
      rect(50, 50), pos(lamp.x, lamp.y), anchor("center"),
      color(200, 180, 80), opacity(0.04), z(44),
      { t: rand(6) },
    ]);
    glow.onUpdate(() => {
      glow.t += dt();
      glow.opacity = 0.03 + Math.sin(glow.t * 2) * 0.02;
    });
  }

  // A few ambient fireflies drifting across the level
  for (let i = 0; i < 8; i++) {
    const ff = add([
      rect(2, 2),
      pos(rand(50, WORLD_W - 50), rand(50, WATER_Y - 50)),
      color(choose([rgb(200, 240, 120), rgb(255, 220, 80), rgb(120, 230, 160)])),
      opacity(0.1), anchor("center"), z(45),
      { t: rand(10), sx: rand(50, WORLD_W - 50), sy: rand(50, WATER_Y - 50) },
    ]);
    ff.onUpdate(() => {
      ff.t += dt() * 0.4;
      ff.pos.x = ff.sx + Math.sin(ff.t * 0.3) * 50;
      ff.pos.y = ff.sy + Math.sin(ff.t * 0.6) * 25;
      ff.opacity = 0.05 + Math.sin(ff.t * 2) * 0.1;
    });
  }

  const camUpdate = (px, py) => {
    const c = camPos();
    // Lock Y to center on the 400px-tall level; only scroll X
    const fixedY = WORLD_H / 2;
    const visW = width() / zoomScale;
    const minX = Math.min(visW / 2, WORLD_W - visW / 2);
    const maxX = Math.max(visW / 2, WORLD_W - visW / 2);
    camPos(
      lerp(c.x, clamp(px, minX, maxX), 0.1),
      fixedY
    );
  };

  // Charge bar
  add([rect(66, 10), pos(-width() / 2 + 16, -height() / 2 + 56),
    fixed(), color(30, 30, 50), z(899)]);
  const chargeBar = add([
    rect(0, 10), pos(-width() / 2 + 16, -height() / 2 + 56),
    fixed(), color(120, 255, 160), z(900),
  ]);
  add([text("Maintenir C", { size: 10 }),
    pos(-width() / 2 + 16, -height() / 2 + 70),
    fixed(), anchor("topleft"), color(120, 255, 160), z(900)]);

  const DEBUG_HITBOX = false;

  function addHitbox(x, y, w, h) {
    add([
      rect(w, h), pos(x, y),
      area(), body({ isStatic: true }),
      opacity(DEBUG_HITBOX ? 0.25 : 0),
      color(255, 0, 0),
      z(DEBUG_HITBOX ? 100 : -10),
      "solid",
    ]);
  }

  // --- CEILING ---
  addHitbox(0, 0, WORLD_W, 10);

  // --- LEFT SECTION ---
  addHitbox(-10, 213, 116, 65);       // player spawn platform
  addHitbox(106, 209, 227, 74);       // NPC frog platform
  addHitbox(0.5, 352.1, 137, 65);     // bottom-left platform (empty chest)
  addHitbox(0, 98, 195, 40);          // top-left ceiling platform
  // Removed small ledge (23.9, 323, 85, 37) that was blocking access to bottom-left platform

  // One-way platform (pass through from below, land on top)
  function addOneWayPlatform(x, y, w, h) {
    const plat = add([
      rect(w, h), pos(x, y),
      area(), body({ isStatic: true }),
      opacity(DEBUG_HITBOX ? 0.25 : 0),
      color(100, 200, 100),
      z(DEBUG_HITBOX ? 100 : -10),
      "oneway",
    ]);
    plat.onBeforePhysicsResolve((col) => {
      if (col.source.vel.y < 0) { col.preventResolution(); return; }
      const playerBottom = col.source.pos.y + (col.source.height || 0);
      if (playerBottom > plat.pos.y + 10) { col.preventResolution(); }
    });
    return plat;
  }

  // --- CENTER SECTION ---
  addHitbox(687, 292, 227, 74);       // center island
  addHitbox(823.5, 211.2, 139, 25);   // mid floating platform
  addHitbox(743.3, 118.4, 42.8, 14.5);   // solid platform (mid-left)
  addHitbox(835, 83.9, 52.5, 14.5);      // solid platform + false empty chest
  addHitbox(1085.9, 82.4, 61, 28);    // platform with true key chest

  // --- LADDER (tree trunk, full height) ---
  add([
    rect(46, 221.2), pos(909.5, 211.6),
    area(), opacity(0), "ladder", z(-10),
  ]);

  // --- ROPE/VINE ZONES (grab on but pass through) ---
  add([rect(14, 74), pos(981.6, 45.4), area(), opacity(0), "ladder", z(-10)]);
  add([rect(14, 74), pos(515.1, 35.1), area(), opacity(0), "ladder", z(-10)]);
  add([rect(14, 74), pos(280.1, 228.5), area(), opacity(0), "ladder", z(-10)]);

  // --- RIGHT SECTION ---
  addHitbox(1549, 206, 84, 29);       // small floating platform right
  addHitbox(757.5, 312.2, 137, 65);   // mid-right platform

  // Slope platform (17.5 degrees rotation approximated with steps)
  for (let i = 0; i < 6; i++) {
    const stepW = 136.2 / 6;
    addHitbox(2004.5 + i * stepW, 367.9 - i * 7.2, stepW, 12);
  }

  addHitbox(2120.7, 326, 279.3, 75);  // main right platform
  addHitbox(1872.4, 349.6, 168.1, 51.4); // bridge right
  const frog = add([
    sprite("frogNPC", { anim: "hop" }),
    pos(200, 209), area(), anchor("bot"), scale(3.5), "frog-npc", z(10),
  ]);
  const frogLabel = add([
    text("Rana", { size: 13 }),
    pos(200, 170), anchor("center"), color(180, 255, 180), z(10), { t: 0 },
  ]);
  frogLabel.onUpdate(() => {
    frogLabel.t += dt();
    frogLabel.opacity = 0.6 + Math.sin(frogLabel.t * 4) * 0.4;
  });

  function addCheckpoint(x, y) {
    add([
      rect(8, 36), pos(x, y - 36),
      opacity(0), area(), "checkpoint", { used: false }, z(10),
    ]);
  }
  addCheckpoint(750, 278);
  addCheckpoint(1590, 208);
  addCheckpoint(2100, 318);

  const player = add([
    sprite("goblin", { anim: "idle" }),
    pos(50, 210),
    area({ shape: new Rect(vec2(0, -12), 32, 48) }),
    body(), anchor("center"), scale(2.0), z(20),
    {
      speed: 260, canFrog: false,
      frogCharging: false, frogCharge: 0, frogChargeMax: 0.9,
      frogJumpBase: 560, frogJumpBonus: 900,
      respawnX: 50, respawnY: 210,
      frogAnim: null, currentAnim: "idle", isHurt: false,
      onLadder: false,
    },
  ]);
  player.onUpdate(() => camUpdate(player.pos.x, player.pos.y));

  // --- LADDER CLIMBING ---
  let touchingLadder = false;
  player.onCollide("ladder", () => { touchingLadder = true; });
  player.onCollideEnd("ladder", () => {
    touchingLadder = false;
    player.onLadder = false;
    player.gravityScale = 1;
  });
  onUpdate(() => {
    if (touchingLadder && (isKeyDown("up") || isKeyDown("w") || isKeyDown("down") || isKeyDown("s"))) {
      player.onLadder = true;
      player.gravityScale = 0;
    }
    if (player.onLadder) {
      let vy = 0;
      if (isKeyDown("up") || isKeyDown("w")) vy = -180;
      if (isKeyDown("down") || isKeyDown("s")) vy = 180;
      player.move(0, vy);
    }
  });

  function respawn() {
    if (player.canFrog) {
      player.play("hurt");
      player.frogAnim = "hurt";
      wait(0.5, () => {
        if (player.frogAnim === "hurt") {
          player.play("idle");
          player.frogAnim = "idle";
        }
      });
    } else {
      player.isHurt = true; player.currentAnim = "idle"; player.play("idle");
      wait(0.5, () => { player.isHurt = false; });
    }
    player.pos.x = player.respawnX;
    player.pos.y = player.respawnY;
    player.frogCharging = false; player.frogCharge = 0;
    gameState.deaths++;
    screenShake(5, 0.3);
    showTopMessage("Aïe !", 1, rgb(255, 100, 80));
  }

  let frogDialogOpen = false;
  player.onCollide("frog-npc", () => {
    if (player.canFrog) return;
    frog.unuse("frog-npc"); frogDialogOpen = true;
    frogLabel.text = "Rana";
    frogLabel.color = rgb(120, 255, 160); frogLabel.opacity = 1;
    showDialog({
      npcName: "Rana",
      iconColor: rgb(80, 190, 80),
      lines: [
        "Croa croa ! Je suis Rana, la grenouille du marais.",
        "Sais-tu que les grenouilles peuvent sauter 20 fois leur propre taille ?",
        "Nos pattes arrières sont de véritables ressorts !",
        "Regarde mes pattes… En m'observant, tu pourras copier ma forme ! Maintiens C pour charger ton saut.",
        "Plus tu charges, plus tu bondis haut et loin !",
        "Attrape les mouches et explore le marais en hauteur...",
        "Trouve la clé cachée dans un coffre pour ouvrir la maison abandonnée.",
        "Ce sera ton nouveau refuge ! Bonne chance, croa !",
        "N'oublie pas : appuie sur T pour voir les commandes.",
      ],
      onDone: () => {
        frogDialogOpen = false; player.canFrog = true;
        player.respawnX = player.pos.x; player.respawnY = player.pos.y;
        spawnBurstParticles(player.pos.x, player.pos.y, 25,
          [rgb(80, 220, 80), rgb(120, 255, 100), rgb(200, 255, 100)]);
        player.unuse("sprite");
        player.use(sprite("frogPlayer", { anim: "idle" }));
        player.use(scale(0.45));
        player.use(area({ shape: new Rect(vec2(0), 128, 128) }));
        player.frogAnim = "idle";
        const ok = add([
          text("TRANSFORMATION !", { size: 18 }),
          pos(0, -70), fixed(), anchor("center"),
          color(120, 255, 160), z(1000),
        ]);
        wait(2.5, () => destroy(ok));
      },
    });
  });

  player.onCollide("checkpoint", (cp) => {
    if (cp.used) return;
    cp.used = true; cp.color = rgb(100, 255, 120);
    player.respawnX = cp.pos.x; player.respawnY = cp.pos.y - 20;
    showTopMessage("Checkpoint !", 1.2, rgb(120, 255, 140));
  });

  onKeyDown("c", () => {
    if (gameState.paused || !player.canFrog || frogDialogOpen) return;
    if (player.isGrounded()) {
      player.frogCharging = true;
      player.frogCharge = clamp(player.frogCharge + dt(), 0, player.frogChargeMax);
      if (Math.random() < 0.4) {
        const sp = add([
          rect(4, 4), pos(player.pos.x + rand(-16, 16), player.pos.y + 14),
          color(120, 255, 150), opacity(0.7), anchor("center"),
          { age: 0, life: 0.25 },
        ]);
        sp.onUpdate(() => {
          sp.age += dt(); sp.pos.y -= 40 * dt();
          sp.opacity = 0.7 * (1 - sp.age / sp.life);
          if (sp.age >= sp.life) destroy(sp);
        });
      }
    }
  });

  onKeyRelease("c", () => {
    if (!player.canFrog) return;
    if (player.frogCharging && player.isGrounded()) {
      const ratio = player.frogCharge / player.frogChargeMax;
      player.jump(player.frogJumpBase + player.frogJumpBonus * ratio);
      for (let i = 0; i < 6; i++) {
        const p = add([
          rect(5, 5), pos(player.pos.x + rand(-12, 12), player.pos.y + 16),
          color(120, 255, 150), opacity(0.8), anchor("center"),
          { vel: vec2(rand(-80, 80), rand(-60, -20)), age: 0, life: 0.3 },
        ]);
        p.onUpdate(() => {
          p.age += dt(); p.pos.x += p.vel.x * dt(); p.pos.y += p.vel.y * dt();
          p.opacity = 0.8 * (1 - p.age / p.life);
          if (p.age >= p.life) destroy(p);
        });
      }
    }
    player.frogCharging = false; player.frogCharge = 0;
  });

  onKeyPress("space", () => {
    if (gameState.paused || frogDialogOpen) return;
    if (player.isGrounded()) player.jump(500);
  });

  onUpdate(() => {
    if (gameState.paused || frogDialogOpen) return;
    let d = 0;
    if (isKeyDown("left") || isKeyDown("a")) d -= 1;
    if (isKeyDown("right") || isKeyDown("d")) d += 1;

    if (player.canFrog && player.frogAnim !== "hurt" && player.frogAnim !== "tongue") {
      if (d !== 0 && player.frogAnim !== "move") {
        player.play("move");
        player.frogAnim = "move";
      } else if (d === 0 && player.frogAnim === "move") {
        player.play("idle");
        player.frogAnim = "idle";
      }
      if (d < 0) player.flipX = false; else if (d > 0) player.flipX = true;
    } else if (!player.canFrog && !player.isHurt) {
      let wa = "idle";
      if (!player.isGrounded()) wa = "walk"; else if (d !== 0) wa = "walk";
      if (d < 0) player.flipX = true; if (d > 0) player.flipX = false;
      if (wa !== player.currentAnim) { player.currentAnim = wa; player.play(wa); }
    }

    player.move(d * player.speed, 0);
    if (player.pos.y > WATER_Y + 30) respawn();
    chargeBar.width = player.frogCharging ? 66 * (player.frogCharge / player.frogChargeMax) : 0;
  });

  player.onCollide("fish", () => respawn());
  player.onCollide("water", () => {
    // water contact = instant death
    respawn();
  });

  // Lily pad bounce + start sinking timer
  player.onCollide("lilypad", (lp) => {
    if (lp.bounceT !== undefined) lp.bounceT = 1;
    // start countdown if lily pad is idle
    if (lp.lilyState === 'idle' && !lp.playerWasOn) {
      lp.playerWasOn = true;
      lp.lilyState = 'warning';
      lp.lilyTimer = LILY_STAND_TIME;
    }
  });

  // --- FLY COLLECTIBLES (Level 3) ---
  const L3_FLY_TOTAL = 5;
  let l3Flies = 0;
  const l3FlyUI = add([
    text(`Mouches : 0/${L3_FLY_TOTAL}`, { size: 14 }),
    pos(-width()/2 + 16, -height()/2 + 16),
    fixed(), anchor("topleft"), color(80, 220, 120), z(900),
  ]);

  function addL3Fly(fx, fy, leftB, rightB) {
    const f = add([
      sprite("greenfly"),
      pos(fx, fy), anchor("center"),
      scale(1.3), z(30),
      area({ shape: new Rect(vec2(-10,-10), 20, 20) }),
      "l3fly",
      { collected: false, t: rand(6.28), baseY: fy,
        dir: 1, speed: 50 + Math.random() * 30,
        leftB: leftB, rightB: rightB },
    ]);
    f.play("fly");
    f.onUpdate(() => {
      if (f.collected) return;
      f.t += dt();
      f.pos.y = f.baseY + Math.sin(f.t * 2.5) * 8;
      f.pos.x += f.dir * f.speed * dt();
      if (f.pos.x > f.rightB) { f.dir = -1; f.flipX = true; }
      if (f.pos.x < f.leftB) { f.dir = 1; f.flipX = false; }
    });
  }

  // Flies patrol near lamp areas
  addL3Fly(253, 110, 200, 310);
  addL3Fly(703, 220, 650, 780);
  addL3Fly(1100, 60, 1050, 1150);
  addL3Fly(1560, 190, 1510, 1600);
  addL3Fly(2160, 220, 2100, 2230);

  player.onCollide("l3fly", (f) => {
    if (f.collected) return;
    f.collected = true;
    l3Flies++;
    gameState.level3Flies++;
    gameState.totalCollected++;
    l3FlyUI.text = `Mouches : ${l3Flies}/${L3_FLY_TOTAL}`;
    // Tongue animation when catching fly
    if (player.canFrog) {
      player.play("tongue");
      player.frogAnim = "tongue";
      wait(0.6, () => {
        if (player.frogAnim === "tongue") {
          player.play("idle");
          player.frogAnim = "idle";
        }
      });
    }
    spawnFloatingText("+ Mouche !", f.pos.x, f.pos.y - 20, rgb(80, 220, 120), { size: 14, duration: 0.6, rise: 30 });
    destroy(f);
  });

  // --- EMPTY CHEST on bottom-left platform (0.5, 352.1) ---
  const emptyChest1 = add([
    sprite("chestEmpty", { anim: "closed" }),
    pos(69, 352.1), anchor("bot"), scale(2.0), z(29),
    area({ shape: new Rect(vec2(-14,-18), 28, 18) }),
    "emptyChest",
    { opened: false },
  ]);
  // (no "?" label — chest is self-explanatory)
  const emptyChest1Label = null;
  player.onCollide("emptyChest", (ch) => {
    if (ch.opened) return;
    ch.opened = true;
    ch.play("open");
    if (ch === emptyChest1 && emptyChest1Label) destroy(emptyChest1Label);
    showTopMessage("Coffre vide... continue à chercher !", 2, rgb(180, 160, 100));
  });

  // --- FALSE CHEST on one-way platform (834, 84.2) ---
  const falseChest = add([
    sprite("chestEmpty", { anim: "closed" }),
    pos(860, 84.2), anchor("bot"), scale(2.0), z(29),
    area({ shape: new Rect(vec2(-14,-18), 28, 18) }),
    "emptyChest",
    { opened: false },
  ]);

  // ============================================================
  //  TRUE KEY CHEST — platform (1085.9, 82.4)
  // ============================================================
  const CHEST_X = 1116.4;   // platform center X (1085.9 + 61/2)
  const CHEST_Y = 82.4;     // top of platform

  const chestSprite = add([
    sprite("chestKey", { anim: "closed" }),
    pos(CHEST_X, CHEST_Y),
    anchor("bot"),
    scale(1.2),
    z(29),
    area({ shape: new Rect(vec2(-18, -20), 36, 20) }),
    "chest",
    { opened: false },
  ]);

  // (no "?" label)
  const chestLabel = null;

  function openChest() {
    if (chestSprite.opened) return;
    chestSprite.opened = true;
    gameState.hasSwampKey = true;

    // Play open animation on the spritesheet
    chestSprite.play("open");

    if (chestLabel) destroy(chestLabel);

    // Burst particles on open
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 80 + Math.random() * 160;
      const p = add([
        rect(rand(3, 7), rand(3, 7)),
        pos(CHEST_X + rand(-10, 10), CHEST_Y - 16 + rand(-10, 10)),
        anchor("center"),
        color(choose([rgb(255, 220, 60), rgb(255, 180, 40), rgb(255, 255, 140), rgb(200, 255, 100), rgb(255, 100, 60)])),
        opacity(1), z(500),
        { vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd - 60, life: 0.6 + Math.random() * 0.5 },
      ]);
      p.onUpdate(() => {
        p.pos.x += p.vx * dt();
        p.pos.y += p.vy * dt();
        p.vy += 200 * dt();
        p.life -= dt();
        p.opacity = Math.max(0, p.life);
        if (p.life <= 0) destroy(p);
      });
    }

    // Flash effect
    const flash = add([
      rect(120, 80), pos(CHEST_X, CHEST_Y - 20),
      anchor("center"), color(255, 240, 120), opacity(0.8), z(499),
      { age: 0 },
    ]);
    flash.onUpdate(() => {
      flash.age += dt();
      flash.opacity = Math.max(0, 0.8 - flash.age / 0.4);
      if (flash.age > 0.4) destroy(flash);
    });

    // show key icon and message
    showTopMessage("Clé du marais trouvée ! La sortie est ouverte.", 4, rgb(255, 220, 60));

    // persistent key icon (HUD)
    add([
      text("🔑 Clé du marais", { size: 14 }),
      pos(20, 110), fixed(), anchor("topleft"),
      color(255, 220, 60), z(900),
    ]);

    // static particles around opened chest
    for (let i = 0; i < 8; i++) {
      const gp = add([
        rect(2, 2),
        pos(CHEST_X + rand(-20, 20), CHEST_Y - 10 + rand(-20, 10)),
        anchor("center"),
        color(rgb(255, 220, 80)), opacity(0.6), z(30),
        { t: rand(6), bx: CHEST_X + rand(-20, 20), by: CHEST_Y - 10 + rand(-20, 10) },
      ]);
      gp.onUpdate(() => {
        gp.t += dt();
        gp.pos.y = gp.by + Math.sin(gp.t * 2) * 4;
        gp.opacity = 0.3 + Math.sin(gp.t * 3) * 0.3;
      });
    }
  }

  // trigger on player contact
  player.onCollide("chest", () => openChest());

  // ============================================================
  //  LEVEL 3 EXIT — requires Swamp Key
  // ============================================================
  const exitX = 2251.3 + 56.9/2;  // exit door center (from hitbox spec)
  const exitY = 250.1 + 74;       // bottom of exit hitbox
  const exit = add([
    sprite("exitDoor", { anim: "open" }),
    pos(exitX, exitY), anchor("bot"), scale(1.1), z(9),
  ]);
  exit.stop();

  // exit label
  const exitLabel = add([
    text("SORTIE ▶", { size: 16 }),
    pos(exitX, exitY - 60), anchor("center"),
    color(200, 180, 100), z(10),
  ]);
  const exitLockLabel = add([
    text("🔒 Clé requise", { size: 12 }),
    pos(exitX, exitY - 44), anchor("center"),
    color(255, 120, 80), z(10), { t: 0 },
  ]);
  exitLockLabel.onUpdate(() => {
    exitLockLabel.t += dt();
    exitLockLabel.opacity = gameState.hasSwampKey ? 0 : (0.6 + Math.sin(exitLockLabel.t * 3) * 0.4);
  });

  let exitTriggered = false;
  let exitLockMsgCooldown = 0;
  player.onUpdate(() => {
    exitLockMsgCooldown -= dt();
    if (!exitTriggered
        && Math.abs(player.pos.x - exitX) < 80
        && Math.abs(player.pos.y - exitY) < 80) {
      if (!gameState.hasSwampKey) {
        // block exit without key (cooldown to avoid spam)
        if (exitLockMsgCooldown <= 0) {
          exitLockMsgCooldown = 3;
          showTopMessage("La porte est verrouillée... trouve la clé !", 2.5, rgb(255, 120, 80));
        }
        return;
      }
      exitTriggered = true; gameState.levelsCompleted++;
      exit.play("open");
      wait(0.8, () => fadeOutThen("outro", 0.5));
    }
  });

  onKeyPress("tab", () => fadeOutThen("levelSelect", 0.35));
  fadeIn(0.45);
});

scene("outro", () => {
  setGravity(0);

  add([
    sprite("outroBg", { width: width(), height: height() }),
    pos(0, 0), fixed(), z(-1),
  ]);
  add([rect(width(), height()), color(0, 0, 0), opacity(0.45), pos(0, 0), fixed(), z(0)]);

  const pages = [
    "Le voyage de KAGE n'a pas été simple.\n\nIl a quitté sa grotte et affronté le monde.",
    "En chemin, il a appris à s'adapter.\nÀ observer.\nÀ survivre.",
    "KAGE a trouvé un nouveau foyer.\nIl a appris de nouvelles choses.\n\nIl décide de continuer son voyage\npour rencontrer d'autres créatures\net en apprendre davantage sur lui-même\net sur le monde.",
  ];

  let i = 0;

  add([
    text("KAGE — Un nouveau foyer", { size: 34 }),
    pos(center().x, 80),
    anchor("center"),
    fixed(), z(1),
    color(180, 220, 210),
  ]);

  const body = add([
    text(pages[0], { size: 20, width: width() - 120 }),
    pos(center().x, 190),
    anchor("top"),
    fixed(), z(1),
    color(210, 235, 225),
  ]);

  add([
    text("▶ ESPACE pour continuer", { size: 14 }),
    pos(center().x, height() - 60),
    anchor("center"),
    fixed(), z(1),
    color(150, 190, 180),
  ]);

  onKeyPress("space", () => {
    i++;
    if (i >= pages.length) {
      saveEverCompleted();
      gameState.everCompleted = true;
      fadeOutThen("end", 0.6);
    } else {
      body.text = pages[i];
    }
  });

  fadeIn(0.5);
});

scene("end", () => {
  playMusic("menuMusic", 0.3);

  // Background image (has FIN + Merci d'avoir joué ! baked in)
  add([
    sprite("endBg", { width: width(), height: height() }),
    pos(0, 0),
    fixed(), z(-1),
  ]);

  const totalTime = gameState.startTime
    ? Math.floor((Date.now() - gameState.startTime) / 1000)
    : 0;

  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  // Stats panel — positioned below the baked-in title, above buttons
  const panelCenterY = height() * 0.62;
  const panelH = 120;
  add([
    rect(width() * 0.5, panelH, { radius: 8 }),
    pos(center().x, panelCenterY),
    anchor("center"), fixed(), z(0),
    color(10, 20, 18), opacity(0.5),
  ]);

  add([
    text(`Objets collectés : ${gameState.totalCollected}`, { size: 18 }),
    pos(center().x, panelCenterY - 42),
    anchor("center"), fixed(), z(1),
    color(160, 220, 200),
  ]);
  add([
    text(`Grotte : ${gameState.level1Flies}   Forêt : ${gameState.level2Mushrooms}   Marais : ${gameState.level3Flies}`, { size: 12 }),
    pos(center().x, panelCenterY - 22),
    anchor("center"), fixed(), z(1),
    color(120, 180, 165),
  ]);
  add([
    text(`Temps : ${minutes}:${seconds.toString().padStart(2, "0")}`, { size: 18 }),
    pos(center().x, panelCenterY + 2),
    anchor("center"), fixed(), z(1),
    color(160, 220, 200),
  ]);
  add([
    text(`Niveaux : ${gameState.levelsCompleted} / 3`, { size: 16 }),
    pos(center().x, panelCenterY + 24),
    anchor("center"), fixed(), z(1),
    color(140, 190, 175),
  ]);
  add([
    text(`Morts : ${gameState.deaths}`, { size: 16 }),
    pos(center().x, panelCenterY + 44),
    anchor("center"), fixed(), z(1),
    color(190, 140, 130),
  ]);

  // --- Buttons ---
  const btnY = height() - 55;

  const replayBtn = add([
    rect(150, 36, { radius: 6 }),
    pos(center().x - 120, btnY),
    area(), anchor("center"), fixed(), z(1),
    color(45, 80, 65), opacity(0.8),
  ]);
  add([
    text("REJOUER", { size: 15 }),
    pos(center().x - 120, btnY),
    anchor("center"), fixed(), z(2),
    color(190, 225, 210),
  ]);

  const creditsBtn = add([
    rect(150, 36, { radius: 6 }),
    pos(center().x, btnY),
    area(), anchor("center"), fixed(), z(1),
    color(40, 65, 80), opacity(0.8),
  ]);
  add([
    text("CRÉDITS", { size: 15 }),
    pos(center().x, btnY),
    anchor("center"), fixed(), z(2),
    color(190, 215, 225),
  ]);

  const menuBtn = add([
    rect(150, 36, { radius: 6 }),
    pos(center().x + 120, btnY),
    area(), anchor("center"), fixed(), z(1),
    color(65, 55, 50), opacity(0.8),
  ]);
  add([
    text("MENU", { size: 15 }),
    pos(center().x + 120, btnY),
    anchor("center"), fixed(), z(2),
    color(210, 200, 190),
  ]);

  replayBtn.onClick(() => {
    gameState.totalCollected = 0;
    gameState.level1Flies = 0;
    gameState.level2Mushrooms = 0;
    gameState.level3Flies = 0;
    gameState.deaths = 0;
    gameState.startTime = Date.now();
    gameState.levelsCompleted = 0;
    fadeOutThen("level1", 0.45);
  });

  creditsBtn.onClick(() => {
    fadeOutThen("credits", 0.35);
  });

  menuBtn.onClick(() => {
    fadeOutThen("menu", 0.35);
  });

  fadeIn(0.45);
});

go("menu");