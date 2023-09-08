import './App.css'
import Buttons from './components/Buttons'
import Contact from './components/Contact'
import Header from './components/Header'
import Last_Proyects from './components/Last_Proyects'
import Nav from './components/Nav'
import SobreMi from './components/SobreMi'


function App() {
  
  return (
    <main className="bg-black">
    <Nav />
    <Header />
    <SobreMi />
    <Buttons />
    <Last_Proyects />
    <Contact />
    </main>
  )
}

export default App
