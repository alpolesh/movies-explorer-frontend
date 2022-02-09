import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      {/* <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio /> */}
    </main>
  )
}

export default Main;