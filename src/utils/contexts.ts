import { createContext } from "react";
import { INote } from "./interfaces";

export const LoginContext = createContext(
    {} as {
        user: string;
        setUser: React.Dispatch<React.SetStateAction<string>>;
    }
);