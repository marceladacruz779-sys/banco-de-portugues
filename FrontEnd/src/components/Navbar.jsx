import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  }

  return (
    <header>
      <div className="cabecalho">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gramatica">Gramática</NavLink>
          <NavLink to="/literatura">Literatura</NavLink>
        </nav>

        <button onClick={handleLogout} className="btn-logout">Logout</button>
      </div>
    </header>
  );
}