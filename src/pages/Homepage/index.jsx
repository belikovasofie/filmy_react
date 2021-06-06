import React from 'react';
import Quotes from '../../components/Quotes';

import './style.css';
const Homepage = () => {
  return (
    <main className="main__home">
      <div className="content__left">
        <Quotes />
      </div>
      <div className="content__right">
        <p className="content__text">
          Za poslední rok čím dál tím víc lidí sleduje filmy a seriály. Spousta
          z nás si vybírá stále stejné a najít něco nového nebývá snadné. Naše
          aplikace nabídne uživateli možnost vyhledávání filmů podle zadaných
          kritérií ale taky náhodnější výběr prostřednictvím zábavného kvízu.
        </p>
        <p className="content__text">
          Setkaly jsme se na DA web a padly si do oka. Obě rády koukáme na
          filmy, napadlo nás vytvořit aplikaci, která by uživateli pomohla s
          výběrem filmu. Přejeme si, aby se Vám naše apka líbila a pokud bude
          mít úspěch, budeme ji dál vylepšovat
        </p>
        <p>Eva a Sofye </p>
      </div>
    </main>
  );
};

export default Homepage;
