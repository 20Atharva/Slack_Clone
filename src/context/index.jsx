import { AuthProvider } from './authContext';
import { BrowserRouter } from 'react-router-dom';
export const AppProviders = (props) => {
  return (
    <BrowserRouter>
      <AuthProvider>{props.children}</AuthProvider>
    </BrowserRouter>
  );
};