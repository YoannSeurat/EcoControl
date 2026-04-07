import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil — Projet Green IT",
};

/* ── Icons as lightweight inline SVGs (no external lib) ── */
function IconForm() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/>
      <path d="M9 12h6M9 16h4"/>
    </svg>
  );
}

function IconCalc() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M8 6h8M8 10h8M8 14h4"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  );
}

/* ── Image placeholder (replaces heavy <img> in wireframe) ── */
function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="eco__img-placeholder" aria-label={label} role="img">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="m3 16 5-5 4 4 3-3 4 4"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
      </svg>
    </div>
  );
}

const HOW_STEPS = [
  {
    icon: <IconForm />,
    title: "Formulaire de saisie rapide",
    desc: "Entrez vos données personnelles sur vos habitudes quotidiennes.",
  },
  {
    icon: <IconCalc />,
    title: "Moteur de calcul précis",
    desc: "Estimation fiable basée sur des référentiels environnementaux reconnus.",
  },
  {
    icon: <IconStar />,
    title: "Conseils personnalisés",
    desc: "Recevez des recommandations adaptées pour réduire votre empreinte.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Comment fonctionne le calcul ?",
    a: "Nous utilisons des référentiels environnementaux reconnus pour estimer votre empreinte carbone. Les données sont traitées selon une méthodologie scientifique éprouvée, basée sur les standards internationaux de mesure d'impact.",
  },
  {
    q: "Mes données restent-elles confidentielles ?",
    a: "Oui. Vos informations personnelles ne sont jamais stockées ni partagées. Le calcul s'effectue localement, et aucune donnée n'est transmise à des tiers. Votre vie privée est notre priorité.",
  },
  {
    q: "Puis-je modifier mes réponses ?",
    a: "Bien sûr. Vous pouvez ajuster vos données à tout moment pour voir comment vos choix influencent votre empreinte. C'est une excellente façon d'explorer différents scénarios et d'identifier les leviers d'action.",
  },
  {
    q: "Quel est le délai de calcul ?",
    a: "Le résultat s'affiche en quelques secondes après validation du formulaire. Notre moteur de calcul est optimisé pour la rapidité, sans sacrifier la précision des estimations.",
  },
  {
    q: "Les conseils sont-ils vraiment personnalisés ?",
    a: "Oui. Chaque recommandation est générée en fonction de votre profil spécifique et de vos habitudes. Nous vous proposons des actions réalistes et adaptées à votre situation.",
  },
  {
    q: "Puis-je partager mon résultat ?",
    a: "Absolument. Vous pouvez exporter votre empreinte carbone et vos conseils pour les partager avec vos proches ou les conserver pour un suivi personnel.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══ Hero ══════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">
            Mesurez votre&nbsp;<br />empreinte carbone en&nbsp;<br />cinq minutes
          </h1>
          <p>
            Découvrez l'impact réel de vos habitudes quotidiennes. Répondez à
            quelques questions simples sur vos transports, votre logement et
            votre alimentation, puis recevez des conseils concrets pour agir.
          </p>
          <div className="hero__actions">
            <a href="/calculateur" className="btn btn-primary">Commencer</a>
            <a href="#comment-ca-marche" className="btn btn-outline">En savoir plus</a>
          </div>
        </div>
      </section>

      {/* ══ How it works ═══════════════════════════════ */}
      <section className="how" id="comment-ca-marche" aria-labelledby="how-heading">
        <div className="container">
          <p className="how__eyebrow">Trois étapes</p>
          <h2 id="how-heading">Comment ça marche</h2>
          <p>Un processus simple et rapide pour comprendre votre impact.</p>

          <div className="how__grid">
            {HOW_STEPS.map((step) => (
              <article key={step.title} className="how__card">
                <div className="how__card-icon" aria-hidden="true">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Ecoconception values ════════════════════════ */}
      <section className="eco" aria-labelledby="eco-heading">
        <div className="container">
          <h2 id="eco-heading" className="eco__title">Nos valeurs d'éco-conception</h2>

          {/* Block 1 — text left, image right */}
          <div className="eco__block">
            <div className="eco__text">
              <p className="eco__eyebrow">Efficace</p>
              <h3>Léger et rapide</h3>
              <p>
                Code optimisé, images compressées, requêtes réduites. Le site
                consomme peu d'énergie, ce qui signifie un impact environnemental
                minimal lors de votre visite.
              </p>
              <div className="eco__links">
                <a href="/a-propos" className="btn btn-primary">Explorer</a>
                <a href="/conseils" className="btn btn-outline">
                  Lire plus <IconArrow />
                </a>
              </div>
            </div>
            <ImgPlaceholder label="Illustration légèreté du site" />
          </div>

          {/* Block 2 — image left, text right */}
          <div className="eco__block eco__block--reverse">
            <div className="eco__text">
              <p className="eco__eyebrow">Durable</p>
              <h3>Technologie responsable</h3>
              <p>
                Chaque décision technique privilégie la sobriété numérique. Nous
                pratiquons ce que nous prêchons en matière de réduction d'impact
                environnemental.
              </p>
              <div className="eco__links">
                <a href="/a-propos" className="btn btn-primary">Explorer</a>
                <a href="/conseils" className="btn btn-outline">
                  Lire plus <IconArrow />
                </a>
              </div>
            </div>
            <ImgPlaceholder label="Illustration technologie responsable" />
          </div>
        </div>
      </section>

      {/* ══ CTA Banner ══════════════════════════════════ */}
      <section className="cta-banner" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Prêt à agir dès maintenant&nbsp;?</h2>
          <p>
            Cinq minutes suffisent pour connaître votre empreinte et obtenir vos
            premiers conseils d'action.
          </p>
          <div className="cta-banner__actions">
            <a href="/calculateur" className="btn btn-primary">Calculer</a>
            <a href="/conseils" className="btn btn-outline">Voir les conseils</a>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════ */}
      <section className="faq" aria-labelledby="faq-heading">
        <div className="container">
          <h2 id="faq-heading" className="faq__title">Questions</h2>
          <p className="faq__subtitle">
            Trouvez les réponses aux interrogations courantes sur notre calculateur.
          </p>

          <dl className="faq__grid">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="faq__item">
                <dt>
                  <h4>{item.q}</h4>
                </dt>
                <dd>
                  <p>{item.a}</p>
                </dd>
              </div>
            ))}
          </dl>

          <div className="faq__contact">
            <h3>Des questions supplémentaires&nbsp;?</h3>
            <p>Nous sommes là pour vous aider et répondre.</p>
            <a href="/contact" className="btn btn-outline">Nous contacter</a>
          </div>
        </div>
      </section>

      {/* ══ Footer ══════════════════════════════════════ */}
      <footer className="footer">
        <div className="container">
          <p className="footer__logo">LOGO</p>

          <div className="footer__cols">
            <div className="footer__col">
              <h5>Navigation</h5>
              <ul role="list">
                <li><a href="/">Accueil</a></li>
                <li><a href="/calculateur">Calculateur</a></li>
                <li><a href="/conseils">Conseils</a></li>
                <li><a href="/a-propos">À propos</a></li>
                <li><a href="/ressources">Ressources</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h5>Légal</h5>
              <ul role="list">
                <li><a href="/confidentialite">Politique de confidentialité</a></li>
                <li><a href="/conditions">Conditions d'utilisation</a></li>
                <li><a href="/cookies">Paramètres des cookies</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h5>Nous suivre</h5>
              <ul role="list">
                <li>
                  <a href="#" className="footer__social-icon">
                    <IconInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__social-icon">
                    <IconLinkedIn /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__social-icon">
                    <IconYoutube /> YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__col" />
          </div>

          <div className="footer__bottom">
            <span>© 2026 Projet Green IT. Tous droits réservés.</span>
            <ul className="footer__bottom-links" role="list">
              <li><a href="/confidentialite">Politique de confidentialité</a></li>
              <li><a href="/conditions">Conditions d'utilisation</a></li>
              <li><a href="/cookies">Paramètres des cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
