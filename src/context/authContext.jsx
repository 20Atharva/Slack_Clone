import { createContext, useContext, useState } from 'react';

import { getMessages } from '../utils';

export const AuthContext = createContext(null);
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [currentSrc, setCurrentSrc] = useState(null);
  const [messages,setMessages] = useState(getMessages());
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{ logout, user, setUser, currentSrc, setCurrentSrc, messages, setMessages }}
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