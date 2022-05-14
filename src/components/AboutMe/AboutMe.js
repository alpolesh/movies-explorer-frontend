import myPhoto from "../../images/about-me__photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-container">
        <div className="about-me__data">
          <p className="about-me__data-header">Андрей</p>
          <p className="about-me__data-prof">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__data-description">Я родился и живу в Минске, закончил стротельный факультет БНТУ. С 2016 года работаю в компании «IMC Planungsgesellschaft» инженером-проектировщиком.</p>
          <ul className="about-me__data-contacts">
            <li className="about-me__link"><a href="https://www.facebook.com/andrey.poleschuck" target="_blank" rel="noreferrer">Facebook</a></li>
            <li className="about-me__link"><a href="https://github.com/alpolesh" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
        <div className="about-me__photo-container">
          <img className="about-me__photo" src={myPhoto} alt="фото автора" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;