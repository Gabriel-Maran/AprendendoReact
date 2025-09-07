import { createContext, useContext, useState } from "react";

interface IAuthContextProps {
  email: string | undefined;
  acessToken: string | undefined;

  logOut(): void;
  login(email: string, password: string): void;
}

const AuthContext = createContext({} as IAuthContextProps);

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [email, setEmail] = useState<string>();
  const [acessToken, setAcessToken] = useState<string>();
  const logOut = () => {
    setEmail(undefined);
    setAcessToken(undefined);
  };
  const login = (email: string, password: string) => {
    setEmail(email);
    setAcessToken(crypto.randomUUID()); //Se deve chamar o backend para conseguir um token de autenticação
  };
  return (
    <AuthContext.Provider value={{ login, logOut, email, acessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useIsAuthenticated = () => {
  const { acessToken } = useAuthContext();
  return !!acessToken; //Quando se nega uma string com valor dentro, retorna false, então so negar duas vezes para obter o true e negar undefined duas vezes retorna false
};
