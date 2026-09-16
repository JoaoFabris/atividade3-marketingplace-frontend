import { Navigate, useLocation } from 'react-router-dom';

function RotaPrivada({ usuario, children }) {
  const location = useLocation();

  if (!usuario) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}

export default RotaPrivada;
