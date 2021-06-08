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
          Dej si film! je aplikace, která ti doporučí film podle tvé momentální
          nálady. Obrázky tě dovedou k seznamu filmů, který se sestaví přímo pro
          tebe. Obrázky se pokaždé mění a tvůj výběr nebude nikdy stejný.
          Informace o filmech aplikace čerpá z{' '}
          <a href="https://www.imdb.com/">IMDb</a>. K detailnějším informacím se
          dostaneš přes odkaz u každého filmu.
        </p>
        <p className="content__text">
          Hledání podle kritérií nebo formulář u nás nehledej. Na to ti
          doporučujeme zkusit{' '}
          <a href="https://www.csfd.cz/podrobne-vyhledavani/">CSFD</a> . Pokud
          se ti aplikace líbí, napiš Evě nebo Sofi.
        </p>
      </div>
    </main>
  );
};

export default Homepage;
