# KAGE — A Shifting Path

## 1. Description du projet

**KAGE** est un jeu de plateforme narratif en 2D developpe en JavaScript avec la librairie [Kaplay.js](https://kaplayjs.com/).

En japonais, *kage* (影 ou 陰) signifie "ombre", "silhouette" ou "obscurite".
Le joueur incarne KAGE, une creature recluse ayant vecu toute son existence dans une grotte souterraine.
A la suite d'une catastrophe naturelle (tremblements de terre et inondation), son terrier est detruit. Contraint de quitter son refuge, KAGE part explorer un monde inconnu a la recherche d'un nouvel endroit ou s'installer.

Le jeu repose sur une progression lineaire en trois niveaux, chacun introduisant une nouvelle capacite qui permet au joueur de s'adapter a son environnement :

- **Niveau 1 — L'Echo des Profondeurs (Caverne)**
  Incarner la chauve-souris pour voler a travers une caverne souterraine, utiliser l'echolocalisation (`E`) pour esquiver stalactites, stalagmites et eboulements.
- **Niveau 2 — Les Sentiers Enracines (Foret)**
  Incarner le scarabee pour charger et briser des obstacles (`SHIFT`), bondir et planer a travers une foret ancestrale.
- **Niveau 3 — Le Marecage Oublie (Marais)**
  Incarner la grenouille pour charger ses sauts (`C`) et traverser des eaux sombres et des environnements instables.

Chaque niveau est introduit par un PNJ qui explique narrativement et mecaniquement la nouvelle capacite acquise.

Le jeu est encadre par :
- une cinematique d'introduction presentant le contexte et l'histoire,
- une cinematique de fin concluant le voyage de KAGE,
- un ecran de fin affichant les statistiques de jeu (temps, objets collectes, morts, progression).

---

## 2. Captures du projet

![Menu principal](menu.png)
![Niveau 1 — L'Echo des Profondeurs](lvl1.png)
![Niveau 2 — Les Sentiers Enracines](lvl2.png)
![Niveau 3 — Le Marecage Oublie](lvl3.png)
![Ecran de fin](end.png)

---

## 3. Procedure d'installation et de lancement

Le projet n'etant pas heberge en ligne, il doit etre lance localement.

### Pre-requis

- Un navigateur web moderne (Chrome, Firefox, Edge)
- Un serveur local (ex. **Live Server** dans VS Code)

### Lancement

1. Cloner ou telecharger le depot GitHub.
2. Ouvrir le dossier racine du projet dans Visual Studio Code.
3. S'assurer que le fichier `index.html` se trouve a la racine.
4. Lancer un serveur local (par exemple via l'extension Live Server).
5. Le jeu s'ouvre dans le navigateur.

---

## 4. Librairies, modules et scripts utilises

| Technologie | Role |
|---|---|
| **[Kaplay.js](https://kaplayjs.com/)** (v3001.0.19) | Librairie JavaScript pour le developpement de jeux 2D (scenes, collisions, camera, inputs, UI) |
| **JavaScript (ES modules)** | Langage principal du projet |
| **HTML5 / Canvas** | Support d'affichage du jeu |

Aucune autre librairie externe n'est requise pour le fonctionnement du projet.

---

## 5. Ressources, licences et credits

### Assets visuels

#### Tilesets et sprites

| Asset | Auteur | Source | Utilisation |
|---|---|---|---|
| Swamp Kingdom — Platformer Tileset | the14collective | [itch.io](https://14collective.itch.io/swamp-kingdom-platfomer-tileset) | Niveaux 2 et 3 (decors, plateformes, objets) |
| Bosses — Frogger | Admurin | [itch.io](https://admurin.itch.io/bosses-frogger) | Niveau 3 (PNJ grenouille, transformation grenouille) |

#### Backgrounds

| Asset | Auteur | Source | Utilisation |
|---|---|---|---|
| StoneMoon | Forest Elfs | [itch.io](https://forest-elfs.itch.io/stonemoon) | Background du menu principal |
| ForestMoon | Forest Elfs | [itch.io](https://forest-elfs.itch.io/forestmoon) | Background de l'ecran de fin |
| Crystal Cave Pixel Art Backgrounds | CraftPix | [craftpix.net](https://craftpix.net/freebies/free-crystal-cave-pixel-art-backgrounds/?num=2&count=28&sq=cavern&pos=1) | Niveau 1 (parallaxe caverne) |
| Nature Backgrounds Pixel Art | CraftPix | [craftpix.net](https://craftpix.net/freebies/free-nature-backgrounds-pixel-art/) | Decors nature |
| Forest and Trees Pixel Backgrounds | CraftPix | [craftpix.net](https://craftpix.net/freebies/forest-and-trees-free-pixel-backgrounds/) | Niveau 2 (foret) |
| Underwater World Pixel Art Backgrounds | CraftPix | [craftpix.net](https://craftpix.net/freebies/free-underwater-world-pixel-art-backgrounds/) | Niveau 3 (marais/eau) |

> Licence CraftPix : [craftpix.net/file-licenses](https://craftpix.net/file-licenses/)

#### Police

| Asset | Auteur | Source |
|---|---|---|
| DungeonFont | vrtxrry | [itch.io](https://vrtxrry.itch.io/dungeonfont) |

### Musique

| Piste | Auteur | Source | Utilisation |
|---|---|---|---|
| Cave (musique niveau 1) | Spencer Y.K. | [Pixabay](https://pixabay.com/users/spencer_yk-36670691/) | Niveau 1 — L'Echo des Profondeurs |
| Little Slime's Adventure (musique niveau 2) | Spencer Y.K. | [Pixabay](https://pixabay.com/music/video-games-little-slimex27s-adventure-151007/) | Niveau 2 — Les Sentiers Enracines |
| Lily Paddling Down the Stream (musique niveau 3) | Fablefly Music | [itch.io](https://fablefly-music.itch.io/lily-paddling-down-the-stream) | Niveau 3 — Le Marecage Oublie |
| Deep in the Dell (musique menu / fin) | Geoff Harvey | [Pixabay](https://pixabay.com/fr/users/geoffharvey-9096471/) | Menu principal et ecran de fin |

### Effets sonores

| Son | Auteur | Source | Utilisation |
|---|---|---|---|
| Cave Droplets | Pixabay (non credite) | [Pixabay](https://pixabay.com/sound-effects/film-special-effects-inside-a-cave-effect-240264/) | Niveau 1 — gouttes d'eau ambiantes |
| Earth Rumble | freesound_community | [Pixabay](https://pixabay.com/users/freesound_community-46691455/) | Introduction — tremblement de terre |
| Power Up Sparkle | floraphonic | [Pixabay](https://pixabay.com/fr/users/floraphonic-38928062/) | Effet de transformation |
| Sound Effects Pack | Pixabay | [Pixabay — Video Games SFX Collection](https://pixabay.com/collections/video-games-sfx-27925379/) | Divers effets sonores |

### Packs complementaires (references / inspiration)

| Pack | Auteur | Source |
|---|---|---|
| 400 Sounds Pack | CI | [itch.io](https://ci.itch.io/400-sounds-pack) |
| Cute and Silly RPG Music Pack | chajamakesmusic | [itch.io](https://chajamakesmusic.itch.io/cute-and-silly-rpg-music-pack) |
| Caves, Mines and Dungeons Retro Music Pack | bb82dabn | [itch.io](https://bb82dabn.itch.io/caves-mines-and-dungeons-retro-music-pack) |
| Classic 16x16 Pixel Art Platformer Tileset | exploitdev | [itch.io](https://exploitdev.itch.io/classic-16x16-free-pixel-art-platformer-tileset) |
| Free Undead Tileset Top Down Pixel Art | Free Game Assets | [itch.io](https://free-game-assets.itch.io/free-undead-tileset-top-down-pixel-art) |

### Code

Le code du projet est original, a l'exception de :
- structures standards liees a Kaplay.js,
- principes courants de game design (puzzles, plateformes, collisions).

Les assets ont ete reorganises, decoupes et integres pour correspondre aux besoins visuels et ludiques du projet. Toutes les licences des packs autorisant l'usage dans des projets gratuits et commerciaux, la modification, mais interdisant la revente ou redistribution des assets seuls.

---

## 6. Concept abandonne : La Taupe (Niveau 1)

Le concept initial du Niveau 1 reposait sur un personnage de **Taupe** qui enseignait au joueur a **creuser la terre** pour naviguer dans un environnement souterrain.

### Premiere iteration — Grille de blocs (style Dome Keeper)

L'idee etait de creer une caverne entierement remplie de terre, composee d'une grille de blocs individuels que le joueur pouvait creuser un par un. Des pierres indestructibles parsemaient la grille pour forcer le joueur a trouver un chemin alternatif vers la sortie (en haut a droite).

**Probleme rencontre :** La grille necessitait environ **745 blocs de terre**, chacun possedant son propre composant de collision (`area()` et `body()`). Cette quantite massive d'entites physiques a provoque des **chutes de framerate severes** et une **consommation memoire excessive**, rendant le jeu injouable (confirme par le profiling Firefox). Kaplay.js n'est pas optimise pour gerer autant de corps physiques simultanement.

### Deuxieme iteration — Defilement horizontal (style Kingdom: Two Crowns)

Pour resoudre le probleme de performance, le niveau a ete redesigne en **defilement horizontal** avec seulement ~80 blocs de terre. Le joueur avancait de gauche a droite en creusant des murs de terre, avec des piliers de pierre forcant des detours.

**Probleme rencontre :** Le gameplay resultant etait **trop lineaire et monotone** — le joueur n'avait qu'a avancer en ligne droite et creuser les murs sur son passage, sans reelle reflexion ni variete.

### Solution finale — La Chauve-souris (vol)

Face a ces limitations, le concept de la Taupe a ete **entierement abandonne** au profit d'une **Chauve-souris** enseignant le vol. Ce changement a resolu les deux problemes :
- **Performance :** aucun bloc de terre a gerer, collision manuelle legere.
- **Gameplay :** le vol de type Flappy Bird combine a des **tunnels rocheux** traversables a pied offre une variete et un rythme bien superieurs, tout en restant accessible aux joueurs de 8-12 ans.

---

## 7. Usage des modeles de langage (LLM)

Des modeles de langage ont ete utilises dans le cadre du developpement du projet.

### Modeles utilises

- **Copilot** (Microsoft)
- **Claude** (Anthropic)

### Usages principaux

- Aide a la structuration du gameplay (progression par capacites)
- Assistance au debogage JavaScript / Kaplay.js
- Clarification de concepts techniques

### Nature de l'assistance

Les modeles de langage n'ont pas produit de code final autonome, mais ont servi :
- de support a la reflexion,
- d'assistant pedagogique.

L'ensemble des choix finaux (code, design, integration) releve du developpeur.

---

## 8. Contexte de developpement

Ce projet a ete developpe dans le cadre d'un enseignement universitaire a l'**Universite de Lausanne (UNIL)**, "Developpement de jeu video 2D" donne par **Loic Catani** dans le domaine des sciences du langage et des humanites numeriques.
