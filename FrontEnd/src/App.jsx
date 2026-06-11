import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./index.css";
import "./app.css";
import Gramatica from "./pages/gramatica/Gramatica";
import Home from "./pages/home/Home";
import Literatura from "./pages/literatura/Literatura";
import Login from "./pages/login/Login";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("jwtToken");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/literatura"
          element={
            <ProtectedRoute>
              <Literatura />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gramatica"
          element={
            <ProtectedRoute>
              <Gramatica />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
