import { createContext, useContext, useState } from "react"
import { listCoffee } from "../utils/listCoffee"

interface CoffeeContextProps {
  coffeeList: typeof listCoffee
  cartItems: { [key: string]: number }
  addToCart: (coffeeId: string) => void
}

export const CoffeeContext = createContext<CoffeeContextProps | undefined>(
  undefined
)

export const useCoffee = () => {
  const context = useContext(CoffeeContext)
  if (!context) {
    throw new Error("useCoffee deve ser utilizado dentro de um CoffeeProvider")
  }

  return context
}

export function CoffeeProvider({ children }) {
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({})

  function addToCart(coffeeId: string) {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [coffeeId]: (prevCartItems[coffeeId] || 0) + 1,
    }))
  }

  return (
    <CoffeeContext.Provider
      value={{ coffeeList: listCoffee, cartItems, addToCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
