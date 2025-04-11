// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    toast.warn('You must be logged in to access this page.');
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}
