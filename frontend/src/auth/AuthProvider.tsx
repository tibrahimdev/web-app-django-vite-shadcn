import { createContext, ReactNode } from "react";
import { AuthAdapter, LoginResponse } from "./adapters/AuthAdapter";

interface AuthContextType {
  user: any;
  login: (credentials: any) => Promise<LoginResponse>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ adapter: AuthAdapter, children: ReactNode }> = ({ adapter, children }) => {
  console.log("AuthProvider used", adapter)

  const login = async (credentials: any): Promise<LoginResponse> => {
    const response = await adapter.login(credentials)
    console.log(response)
    return response
  }

  return <AuthContext.Provider value={{ user: null, login, logout: adapter.logout }} >
    {children}
  </AuthContext.Provider>
}
