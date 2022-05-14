function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info-container">
        <div className="about-project__info">
          <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar__item-container"><span className="progress-bar__item-week">1 неделя</span></div>
        <div className="progress-bar__item-container"><span className="progress-bar__item-week">4 недели</span></div>
        <div className="progress-bar__item-container"><span className="progress-bar__item-sphere">Back-end</span></div>
        <div className="progress-bar__item-container"><span className="progress-bar__item-sphere">Front-end</span></div>
      </div>
    </section>
  )
}

export default AboutProject;