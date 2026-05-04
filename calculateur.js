// ── Facteurs d'émission (kg CO₂) - sources ADEME Base Carbone ──
const FACTEURS = {
  motorisation: { essence: 0.21, diesel: 0.17, electrique: 0.1, aucune: 0 },
  // avion : moyenne court + long courrier
  avion: 0.23,
  // logement : kg CO₂ par kWh, on estime ~120 kWh/m²/an
  energie: { electricite: 0.052, gaz: 0.227, fioul: 0.324, pompe: 0.02 },
  kwhParM2: 120,
  // alimentation : kg CO₂ / an
  regime: { viande_rouge: 2630, omnivore: 1900, flexitarien: 1400, vegetarien: 1050, vegan: 730 },
  // numérique : kg CO₂ / h d'usage
  appareil: { laptop: 0.021, desktop: 0.05, smartphone: 0.01, tablette: 0.015 },
  connexion: { wifi: 0.013, '4g': 0.119 },
};

const MOYENNE_FR = 9200; // kg CO₂/an (ADEME 2023)

function initSlider(id, valId, formatter) {
  const input = document.getElementById(id);
  const val   = document.getElementById(valId);
  const update = () => { val.textContent = formatter(Number.parseFloat(input.value)); };
  input.addEventListener('input', update);
  update();
}

initSlider('km-voiture',     'val-km-voiture', v => v.toLocaleString('fr-FR') + ' km');
initSlider('km-avion',       'val-km-avion',   v => v.toLocaleString('fr-FR') + ' km');
initSlider('surface',        'val-surface',    v => v + ' m²');
initSlider('heures-internet','val-heures',     v => v + ' h/jour');

// ── Navigation ──
let currentStep = 1;

function goTo(n) {
  document.getElementById('step-' + currentStep).classList.remove('active');
  document.getElementById('si-' + currentStep).classList.remove('active');
  if (n > currentStep) document.getElementById('si-' + currentStep).classList.add('done');
  else document.getElementById('si-' + currentStep).classList.remove('done');

  currentStep = n;
  document.getElementById('step-' + currentStep).classList.add('active');
  document.getElementById('si-' + currentStep).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Calcul ──
function getVal(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function getVals(name) {
  const els = document.querySelectorAll(`input[name="${name}"]:checked`);
  return Array.from(els).map(el => el.value);
}

function calculer() {
  const kmVoiture = Number.parseFloat(document.getElementById('km-voiture').value);
  const kmAvion   = Number.parseFloat(document.getElementById('km-avion').value);
  const surface   = Number.parseFloat(document.getElementById('surface').value);
  const heures    = Number.parseFloat(document.getElementById('heures-internet').value);

  const motorisation = getVal('motorisation') || 'essence';
  const energie      = getVal('energie')      || 'electricite';
  const regime       = getVal('regime')       || 'omnivore';
  const appareils    = getVals('appareil').length > 0 ? getVals('appareil') : ['laptop'];
  const connexions   = getVals('connexion').length > 0 ? getVals('connexion') : ['wifi'];

  const transport   = Math.round(kmVoiture * FACTEURS.motorisation[motorisation] + kmAvion * FACTEURS.avion);
  const logement    = Math.round(surface * FACTEURS.kwhParM2 * FACTEURS.energie[energie]);
  const alimentation = FACTEURS.regime[regime];
  
  const facteurAppareils = appareils.reduce((sum, app) => sum + FACTEURS.appareil[app], 0);
  const facteurConnexions = connexions.reduce((sum, conn) => sum + FACTEURS.connexion[conn], 0);
  const numerique   = Math.round(heures * 365 * (facteurAppareils + facteurConnexions));
  const total       = transport + logement + alimentation + numerique;

  afficherResultats({ transport, logement, alimentation, numerique, total });
  goTo(5);
}

function afficherResultats(scores) {
  const { transport, logement, alimentation, numerique, total } = scores;
  const pct = Math.round((total / MOYENNE_FR) * 100);

  // Total
  document.getElementById('result-kg').innerHTML =
    total.toLocaleString('fr-FR') + ' <span>kg CO₂/an</span>';
  document.getElementById('result-compare').textContent =
    `Soit ${pct}% de la moyenne française (${MOYENNE_FR.toLocaleString('fr-FR')} kg/an)`;

  const badge = document.getElementById('result-badge');
  if (pct <= 75) {
    badge.textContent = '✓ En dessous de la moyenne';
    badge.className   = 'result-badge badge-good';
  } else if (pct <= 110) {
    badge.textContent = '≈ Dans la moyenne';
    badge.className   = 'result-badge badge-mid';
  } else {
    badge.textContent = '↑ Au-dessus de la moyenne';
    badge.className   = 'result-badge badge-bad';
  }

 
  const cats = [
    { label: '🚗 Transports',    val: transport },
    { label: '🏠 Logement',       val: logement },
    { label: '🥗 Alimentation',   val: alimentation },
    { label: '💻 Numérique',      val: numerique },
  ];
  const max = Math.max(...cats.map(c => c.val), 1);
  const barsEl = document.getElementById('cat-bars');
  barsEl.innerHTML = cats.map(c => `
    <div class="cat-bar-item">
      <div class="cat-bar-header">
        <span class="cat-bar-label">${c.label}</span>
        <span class="cat-bar-val">${c.val.toLocaleString('fr-FR')} kg CO₂</span>
      </div>
      <div class="cat-bar-track">
        <div class="cat-bar-fill" style="width:${Math.round((c.val/max)*100)}%"></div>
      </div>
    </div>
  `).join('');

  // Conseils
  const conseils = genererConseils(scores);
  document.getElementById('conseils-list').innerHTML = conseils.map(c =>
    `<li class="conseil-item">
      <span class="conseil-icon">${c.icon}</span>
      <div class="conseil-text"><strong>${c.titre}</strong>${c.texte}</div>
    </li>`
  ).join('');
}

function genererConseils({ transport, logement, alimentation, numerique, total }) {
  const conseils = [];

  if (transport > 3000)
    conseils.push({
      icon: '🚗',
      titre: 'Réduire les trajets en voiture',
      texte: 'Le covoiturage ou les transports en commun peuvent diviser votre empreinte transport par 2 à 4.'
    });
  else if (transport > 0)
    conseils.push({
      icon: '🚲',
      titre: 'Bon effort sur les transports !',
      texte: 'Continuer à privilégier les modes doux pour les courts trajets consolide votre bilan.'
    });

  if (logement > 2000)
    conseils.push({
      icon: '🏠',
      titre: 'Améliorer l\'isolation',
      texte: 'Passer à une pompe à chaleur ou améliorer l\'isolation peut réduire votre empreinte logement de 60 %.'
    });

  if (alimentation >= 1900)
    conseils.push({
      icon: '🥗',
      titre: 'Réduire la viande rouge',
      texte: 'Passer à un régime flexitarien économise en moyenne 500 kg CO₂ par an, sans effort majeur.'
    });

  if (numerique > 200)
    conseils.push({
      icon: '💻',
      titre: 'Sobriété numérique',
      texte: 'Préférer le Wi-Fi à la 4G et allonger la durée de vie de vos appareils réduit fortement l\'empreinte numérique.'
    });

  if (conseils.length === 0)
    conseils.push({
      icon: '🌱',
      titre: 'Empreinte maîtrisée',
      texte: 'Votre bilan est inférieur à la moyenne. Partagez vos pratiques autour de vous pour avoir un impact collectif !'
    });

  return conseils;
}
