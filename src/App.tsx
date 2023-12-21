import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CoffeeContext } from "./hook/CoffeeContext"
import { listCoffee } from "./utils/listCoffee"

function App() {

  return (
    <BrowserRouter>
      <CoffeeContext.Provider value={{coffeeList: listCoffee}}>
        <Router/>
      </CoffeeContext.Provider>
    </BrowserRouter>
  )
}

export default App
