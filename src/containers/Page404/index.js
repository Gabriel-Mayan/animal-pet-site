import style from './style.module.scss';

import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <div>
      <h2> Ops! </h2>
      <p> Página não encontrada </p>
      <Link to={('/home')}> <button> Página inicial </button> </Link>
    </div>
  );
}
