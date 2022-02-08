import promoImage from "../../images/promo__image.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button">Узнать больше</button>
      </div>
      <div className="promo__image-container">
        <img className="promo__image" src={promoImage} alt="логотип земли" />
      </div>
    </section>
  )
}

export default Promo;