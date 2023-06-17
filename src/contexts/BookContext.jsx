import { createContext } from "react";
import { allBooks } from "../data/Data.jsx";

export const BookContext = createContext();

export const BookProvider = ({children}) => {
    return(
        <BookContext.Provider value={allBooks}>
            {children}
        </BookContext.Provider>
    )
}