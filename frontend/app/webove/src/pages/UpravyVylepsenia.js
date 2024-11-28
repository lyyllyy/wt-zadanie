import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function UpravyVylepsenia() {
  return (
    <div>
     
     
      <main>
        <section className="main-howto container">
          <div className="row nadpis_contact-howto">
            <div className="col text-center">
              <div className="heading">
                <h1>Úpravy/vylepšenia</h1>
              </div>
            </div>
          </div>

          <div className="row upravy_vylepsenia_body main-scrol">
            <div className="col-12 col-md-6 text-center">
              <h2>Úpravy</h2>
              <p>1. Grafický dizajn vo figme</p>
              <p>2. Vytvorenie "indexu" pomocou FLEXBOX </p>
              <p>3. Vytvorenie "contact us", "how it works", "upravy_vylepsenia" pomocou bootstrapu</p>
              <p>4. Na podstránke "how it works" sa nachádza "SEKCIA ZMENA"</p>
            </div>

            <div className="col-12 col-md-6 text-center">
              <h2>Vylepšenia</h2>
              <p>1. Pridanie viac podstránok</p>
              <p>2. Aktívne tlačidlá (Zmena farby)</p>
              <p>3. Oneskorenia na jednotlivé sekcie (ScrollReveal)</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default UpravyVylepsenia;
