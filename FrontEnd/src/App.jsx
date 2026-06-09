import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Literatura from './pages/literatura';
import Gramatica from './pages/gramatica';
import Login from './pages/Login';
import './App.css';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('jwtToken');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/literatura" element={<ProtectedRoute><Literatura /></ProtectedRoute>} />
        <Route path="/gramatica" element={<ProtectedRoute><Gramatica /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;