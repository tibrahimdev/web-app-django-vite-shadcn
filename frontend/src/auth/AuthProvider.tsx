import { createContext, ReactNode, useContext } from "react";
import { AuthAdapter, LoginResponse } from "./adapters/AuthAdapter";

interface AuthContextType {
  user: any;
  login: (credentials: any) => Promise<LoginResponse>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export const AuthProvider: React.FC<{ adapter: AuthAdapter, children: ReactNode }> = ({ adapter, children }) => {
  console.log("AuthProvider used", adapter)

  const login = async (credentials: any): Promise<LoginResponse> => {
    const response = await adapter.login(credentials)
    return response
  }

  return <AuthContext.Provider value={{ user: null, login, logout: adapter.logout }} >
    {children}
  </AuthContext.Provider>
}
