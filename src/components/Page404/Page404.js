import { useHistory  } from 'react-router-dom';

function Page404() {
  let history = useHistory();
  return (
    <div className="page-404">
      <p className="page-404__title">404</p>
      <p className="page-404__description">Страница не найдена</p>
      <p className="page-404__link" onClick={history.goBack}>Назад</p>
    </div>
  )
}

export default Page404;
