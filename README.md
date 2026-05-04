# Eco Control

Eco Control est une application web de calcul d'empreinte carbone personnelle, développée dans le cadre du module TI616 (Mini-Projet Numérique Durable). Le projet est accessible en ligne à l'adresse suivante :

**https://yoannseurat.github.io/EcoControl/**

---

## Contexte

Ce projet a été réalisé par cinq étudiants - Yoann Seurat, Sidney Sanglier, Arthur Savatier, Kevin Sivaharan, Aubin Sabiani - dans le cadre d'un mini-projet académique portant sur le numérique responsable. L'objectif pédagogique était de concevoir et déployer une application web en respectant les principes de l'éco-conception numérique : sobriété technique, performance, accessibilité et transparence.

L'application vise à sensibiliser le grand public à son impact environnemental en proposant un outil de mesure simple, rapide et accessible, sans installation ni compte obligatoire.

---

## Fonctionnalités

### Calculateur d'empreinte carbone

Le calculateur guide l'utilisateur en quatre étapes successives :

1. **Transports** — kilométrage annuel en voiture et en avion.
2. **Logement** — surface du logement et source d'énergie principale de chauffage.
3. **Alimentation** — régime alimentaire.
4. **Numérique** — temps passé sur internet par jour, appareils utilisés et type de connexion.

À l'issue de ces étapes, l'application affiche :

- le total annuel estimé en kg CO₂ ;
- une comparaison avec la moyenne française (9 200 kg CO₂/an, source ADEME 2023) ;
- une décomposition par catégorie sous forme de barres ;
- des recommandations personnalisées générées en fonction du profil de l'utilisateur.

Tous les calculs sont effectués côté client, directement dans le navigateur. Aucune donnée n'est transmise à un serveur.

### Facteurs d'émission

Les facteurs d'émission utilisés sont issus de la Base Carbone de l'ADEME :

| Catégorie | Paramètre | Valeur |
|---|---|---|
| Transports | Voiture essence | 0,21 kg CO₂/km |
| Transports | Voiture diesel | 0,17 kg CO₂/km |
| Transports | Voiture électrique | 0,10 kg CO₂/km |
| Transports | Avion | 0,23 kg CO₂/km |
| Logement | Électricité | 0,052 kg CO₂/kWh |
| Logement | Gaz naturel | 0,227 kg CO₂/kWh |
| Logement | Fioul | 0,324 kg CO₂/kWh |
| Logement | Pompe à chaleur | 0,02 kg CO₂/kWh |
| Alimentation | Omnivore | 1 900 kg CO₂/an |
| Alimentation | Vegan | 730 kg CO₂/an |
| Numérique | Wi-Fi | 0,013 kg CO₂/h |
| Numérique | 4G/5G | 0,119 kg CO₂/h |

### Page Conseils

La page Conseils propose 24 fiches pratiques organisées en quatre thèmes — Transports, Logement, Alimentation, Numérique et Consommation — chacune accompagnée d'un lien direct vers la ressource ADEME correspondante.

### Autres pages

- **À propos** : présentation de la mission du projet (sensibiliser, mesurer, agir).
- **Contact, Confidentialité, Conditions** : pages légales et de contact.

---

## Architecture technique

Le projet est entièrement statique : il ne repose sur aucun framework front-end, aucun serveur applicatif et aucune base de données.

```
EcoControl/
├── index.html
├── calculateur.html
├── calculateur.js 
├── conseils.html
├── a-propos.html
├── contact.html
├── confidentialite.html
├── conditions.html
├── style.css
├── assets/               Logos et images de la page d'accueil
└── pdf/                  Livrables académiques du projet
```

**Technologies utilisées :**

- HTML5 sémantique avec attributs ARIA pour l'accessibilité
- CSS personnalisé avec variables CSS (design tokens)
- JavaScript vanilla (ES6+), sans dépendance externe
- Google Fonts (DM Serif Display, DM Sans, Quicksand, Raleway)
- GitHub Pages pour l'hébergement

---

## Éco-conception

Le site a été conçu en appliquant les principes de sobriété numérique :

- Aucune dépendance JavaScript externe (pas de framework, pas de bibliothèque tierce)
- Code CSS et JS optimisé, sans ressources superflues
- Images limitées au strict nécessaire (logo uniquement)
- Calcul entièrement côté client, sans requête réseau lors de l'utilisation
- Police de caractères chargée depuis Google Fonts avec `preconnect` pour minimiser la latence

---

## Déploiement

L'application est déployée via GitHub Pages et accessible sans installation à l'adresse :

**https://yoannseurat.github.io/EcoControl/**

Pour travailler localement, il suffit d'ouvrir `index.html` directement dans un navigateur.

---

## Livrables académiques

Les livrables du projet (cahier des charges, spécifications, wireframes) sont disponibles dans le répertoire `pdf/` du dépôt.

---

## Auteurs

Yoann Seurat, Sidney Sanglier, Arthur Savatier, Kevin Sivaharan, Aubin Sabiani
© EFREI 2026
