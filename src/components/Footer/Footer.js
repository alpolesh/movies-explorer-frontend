function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__text">&copy; 2020</p>
        <ul className="footer__links">
          <li className="footer__link"><a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li className="footer__link"><a href="https://github.com/yandex-praktikum/" target="_blank" rel="noreferrer">Github</a></li>
          <li className="footer__link"><a href="https://www.facebook.com/yandex.practicum/" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;