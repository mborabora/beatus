import React from "react";
import "./index.css";
import "./App.css";
import beatus from "./beatus-logo.png";

function App() {
  return (
    <div className="app-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/" class="navbar-wagon-brand">
          <img src={beatus} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link " href="#info--1">
                INFO<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">
                IMPRESSUM<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="introduction">
        <div class="container">
          <div class="row fill-viewport align-items-center">
            <div class="col-12 col-md-6 intro">
              <h1 class="text-white">BEATUS-OFFICE</h1>
              <p class="lead text-white">
                Bei uns erhalten Sie hochwertige Verbrauchsmaterialien für Ihren
                Drucker. Schauen Sie sich unser Produktportfolio an, nehmen sie
                Kontakt zu uns auf und wir melden uns sofort bei Ihnen mit
                erstklassigen Angeboten.
              </p>
              <a
                class="btn btn-warning"
                href="mailto:info@beatus-office.de?subject=Anfrage"
                role="button"
              >
                Schreiben Sie uns!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="info--1">
        <div class="container">
          <div class="row fill-80-viewport align-items-center justify-content-end text-black">
            <div class="col">
              <h6 class="text-uppercase text-black-40">Produktinformationen</h6>
              <h2>
                Wir setzen auf langfristige Zusammenarbeit, erstklassigen
                Service und hochwertige Produkte.
              </h2>
              <p>
                Wir sind ein Unternehmen mit Sitz in Berlin. Unsere Kompetenz
                haben wir langjähriger Erfahrung in diesem Bereich und einem
                Netzwerk von zufriedenen und treuen Kunden zu verdanken. Die
                Qualität unseres Produktes ist uns sehr wichtig. Ihr Feedback
                ist sehr willkommen und für uns eine große Hilfe unser Produkt
                und unseren Service immer weiter zu verbessern. Für Fragen,
                Feedback und Bestellungen kontaktieren Sie uns!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="info-3" style={{ position: "relative" }}>
        <div class="container">
          <div class="row fill-80-viewport align-items-center text-white">
            <div class="col-12 col-md-4">
              <h6 class="text-white-40">Unsere Philosophie</h6>
              <h3>
                be·ā·tus ist Latein für glücklich und zufrieden. Für uns ist das
                nicht nur ein Name, wir sind erst zufrieden wenn unsere Kunden
                zufrieden sind!
              </h3>
              <p class="text-uppercase text-white-70">team, beatus-office</p>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" class="bg-dark">
        <div class="container">
          <div class="row fill-40-viewport py-2 text-white-70 align-items-center">
            <div class="col-12 col-md-4">
              <div className="text-white">IMPRESSUM</div>
              <div>Beatus Office</div>
            </div>
            <div class="col-12 col-md-4">
              <div>Brandenburgische Str. 29</div>
              <div>12167 Berlin</div>
            </div>
            <div class="col-12 col-md-4">
              <div>Inhaber: Jouand Mazdak</div>
              <div>E-Mail: info@beatus-office.de</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
