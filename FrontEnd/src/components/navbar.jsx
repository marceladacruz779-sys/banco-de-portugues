import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="menu">
      <div className="menu-links">
        <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      

       <NavLink to="/gramatica" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Gramática</NavLink> 


       <NavLink to="/literatura" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Literatura</NavLink> 
      </div>
    </nav>
    );
}