import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projet Green IT — Calculateur d'empreinte carbone",
  description:
    "Mesurez votre empreinte carbone en cinq minutes. Répondez à quelques questions sur vos transports, votre logement et votre alimentation, et recevez des conseils personnalisés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect for Google Fonts (single round-trip) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {/* ── Navigation ── */}
        <header>
          <nav className="nav" aria-label="Navigation principale">
            <div className="container nav__inner">
              <a href="/" className="nav__logo" aria-label="Accueil Projet Green IT">
                LOGO
              </a>

              <ul className="nav__links" role="list">
                <li><a href="/">Accueil</a></li>
                <li><a href="/calculateur">Calculateur</a></li>
                <li><a href="/conseils">Conseils</a></li>
                <li><a href="/a-propos">À propos</a></li>
              </ul>

              <div className="nav__actions">
                <a href="/connexion" className="btn btn-outline">
                  Connexion
                </a>
                <a href="/inscription" className="btn btn-primary">
                  Inscription
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
