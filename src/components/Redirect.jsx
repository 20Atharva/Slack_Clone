import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function Redirect() {
  const { user } = useAuth();
  if (!user) return <Navigate to={'/login'} />;
  else return <Navigate to={'/meet'} />;
}