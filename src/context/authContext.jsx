import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{ logout, user, setUser}}
      {...props}
    ></AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
export { AuthProvider, useAuth };