import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/connectes/CNCTE_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB416887570_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="2841619533"
            title="Samsung Galaxy Note 20 Ultra - Smartphone Portable débloqué 5G (Ecran Amoled - 256 Go - Double Nano-SIM - Android) - Noir - Version Française - Avec BON d'ACHAT AMAZON"
            price={1169}
            image="https://m.media-amazon.com/images/I/71FzyObItHL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="2841619532"
            title="Stratégie océan bleu: Comment créer de nouveaux espaces stratégiques"
            price={30}
            image="https://images-na.ssl-images-amazon.com/images/I/51WmERXSJcL._SX332_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="2744066303"
            title="Nouveau Apple MacBook Air avec Apple M1 Chip (13 pouces, 8 Go RAM, 256 Go SSD) - Or (Dernier modèle) "
            price={1129}
            image="https://images-eu.ssl-images-amazon.com/images/I/71vFKBpKakL._AC_UL200_SR200,200_.jpg"
            rating={3}
          />
          <Product
            id="226624065X"
            title="L'Âme du monde"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51lKTNHKJHL._SX303_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="2841619532"
            title="Les décisions absurdes III: L'enfer des règles - Les pièges relationnels"
            price={20}
            image="https://images-na.ssl-images-amazon.com/images/I/414qmwMcHgL._SX301_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="271013411X"
            title='Samsung C49RG90, Ecran PC Gaming incurvé, Format Ultra-Large, Dalle VA 49", Résolution 5K (5120 x 1440), 120 Hz, 4ms, HDR 1000, QLED, AMD Freesync, Noir'
            price={1029}
            image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UL320_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
