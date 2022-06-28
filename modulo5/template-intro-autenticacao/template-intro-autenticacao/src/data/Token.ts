import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

export const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

// Função que recebe o token e devolve as informações do usuário salvas nele.