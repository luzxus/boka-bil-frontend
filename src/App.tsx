import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Home } from './components/Screens/Home'

function App() {
  return (
    <>
      <Navbar />
      <h1>Boka din provkörning</h1>
      <br></br>
      <Home />
    </>
  )
}

export default App
