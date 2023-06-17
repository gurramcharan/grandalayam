import {createContext, useReducer} from "react";
import {allBooks} from "../data/Data.jsx";

export const BookContext = createContext();

export const BookProvider = ({children}) => {
    const initialState = {
        books : allBooks,
        search_name: "",
        search_category:"",
    }

    const BookReducer = (state, action) => {
        switch (action.type) {
            case "SHELVES_FILTER":
                const filterBook = state.books.map((item) => (item.id === action.payload.id) ? item.shelves = action.payload.e : item)
                return {
                    ...state,
                    books: allBooks
                }
            case "SEARCH_FILTER_NAME":
                return {
                    ...state,
                    search_name: action.payload
                }
            case "SEARCH_FILTER_NAME":
                return {
                    ...state,
                    search_category: action.payload
                }
            default:
                return state
        }
    }

    const [state,
        dispatch] = useReducer(BookReducer, initialState);

    
    const handleSelect = (e,id) => {
        dispatch({type:"SHELVES_FILTER", payload:{e,id}})
        // console.log(state.books)
    }

    const handleSearch = (e) => {
        dispatch({type:"SEARCH_FILTER_NAME", payload:e})
        // console.log(state.search)
    }

    const FilterSearchBooks = (state.search_name !== "") ? state.books.filter((item) => item.name.toLowerCase().includes(state.search_name.toLowerCase())) : []

    return (
        <BookContext.Provider value={{
            dispatch,
            handleSelect,
            state,
            handleSearch,
            FilterSearchBooks,
        }}>
            {children}
        </BookContext.Provider>
    )
}