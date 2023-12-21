import { createContext, useContext } from "react";
import { listCoffee } from "../utils/listCoffee";

interface CoffeeContextProps {
    coffeeList: typeof listCoffee
}

export const CoffeeContext = createContext<CoffeeContextProps | undefined>(undefined)

export const useCoffee = () => {
    const context = useContext(CoffeeContext)
    if(!context) {
        throw new Error('useCoffee deve ser utilizado dentro de um CoffeeProvider')
    }

    return context
}