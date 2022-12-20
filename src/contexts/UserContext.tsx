import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iChildren, iCreateUserProps, iLoginUserProps } from "./types";

interface iUserContextProps {
  createUser(dataForm: iCreateUserProps): Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser(dataForm: iLoginUserProps): Promise<void>;
  user: iUserInfo;
}

interface iUserInfo {
  id: number;
  name: string;
  email: string;
}

interface iLoginUserResponse {
  accessToken: string;
  user: iUserInfo;
}

export const UserContext = createContext({} as iUserContextProps);

export function UserProvider({ children }: iChildren) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({} as iUserInfo);

  useEffect(() => {
    const token = localStorage.getItem("HamKenzie:token");
    if (token) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createUser(dataForm: iCreateUserProps) {
    try {
      const response = await api.post("users", dataForm);
      toast.success("Usuário criado com sucesso!");
      localStorage.setItem("HamKenzie:token", response.data.accessToken);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  async function loginUser(dataForm: iLoginUserProps) {
    try {
      const response = await api.post<iLoginUserResponse>("login", dataForm);
      toast.success("Usuário logado com sucesso!");
      setUser(response.data.user);
      localStorage.setItem("HamKenzie:token", response.data.accessToken);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <UserContext.Provider
      value={{ createUser, loginUser, loading, setLoading, user }}
    >
      {children}
    </UserContext.Provider>
  );
}
