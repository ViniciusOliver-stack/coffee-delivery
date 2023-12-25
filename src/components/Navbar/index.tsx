import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import mapPin from "../../assets/mapPin.svg"
import shoppingCart from "../../assets/shopping-cart.svg"
import { useCoffee } from "../../hook/CoffeeContext"

export function Navbar() {
  const { cartItems } = useCoffee()

  return (
    <header className="flex items-center justify-between">
      <img src={logo} alt="Coffee Delivery" />

      <div className="flex items-center gap-3">
        <div className="bg-purple-light rounded-md inline-flex items-center gap-2 p-2">
          <img src={mapPin} alt="Localização" />
          <p className="text-purple-dark">Poções, BA</p>
        </div>

        <div className="bg-yellow-light p-2 h-[40px] rounded-md relative">
          <Link to="/checkout">
            <img src={shoppingCart} alt="" />
          </Link>
          <span className="absolute top-0 left-8 transform -translate-y-1/2 w-5 h-5 bg-yellow-dark rounded-full text-xs font-medium text-white flex items-center justify-center">
            {Object.values(cartItems).reduce((acc, count) => acc + count, 0)}
          </span>
        </div>
      </div>
    </header>
  )
}
