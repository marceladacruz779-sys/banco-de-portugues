import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  }

  return (
    <header className="site-header">
      <div className="site-navbar">
        <nav className="site-nav">
          <NavLink to="/">Banco</NavLink>
          <NavLink to="/literatura">Literatura</NavLink>
          <NavLink to="/gramatica">Gramática</NavLink>
        </nav>

        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </header>
  );
}
