function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__webpages">
        <li className="portfolio__webpage"><span className="portfolio__webpage-name">Статичный сайт</span><a className="portfolio__webpage-link" href="https://alpolesh.github.io/how-to-learn/" target="_blank" rel="noreferrer">↗</a></li>
        <li className="portfolio__webpage"><span className="portfolio__webpage-name">Адаптивный сайт</span><a className="portfolio__webpage-link" href="https://alpolesh.github.io/russian-travel/" target="_blank" rel="noreferrer">↗</a></li>
        <li className="portfolio__webpage"><span className="portfolio__webpage-name">Одностраничное приложение</span><a className="portfolio__webpage-link" href="https://mesto.polesh.nomoredomains.rocks/" target="_blank" rel="noreferrer">↗</a></li>
      </ul>
    </section>
  )
}

export default Portfolio;