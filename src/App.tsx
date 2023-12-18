import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Coffee } from './components/Coffee'

function App() {

  return (
    <div className="px-8 md:px-28 lg:px-[160px] py-[32px]">
      <Navbar/>
      <Header/>
      <Coffee/>
    </div>
  )
}

export default App
