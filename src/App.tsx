import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CoffeeProvider } from "./hook/CoffeeContext"

function App() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <Router />
      </CoffeeProvider>
    </BrowserRouter>
  )
}

export default App
