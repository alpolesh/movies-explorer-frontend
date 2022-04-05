import HeaderAuth from '../HeaderAuth/HeaderAuth';
import HeaderContent from '../HeaderContent/HeaderContent';
import HeaderMain from '../HeaderMain/HeaderMain';

function Header() {
  return (
    <>
      <HeaderContent />
      <HeaderMain />
      <HeaderAuth />
    </>
  )
}

export default Header;