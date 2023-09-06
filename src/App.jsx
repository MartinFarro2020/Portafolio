import './App.css'
import Buttosn from './components/Buttons'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Last_Proyects from './components/Last_Proyects'
import Nav from './components/Nav'


function App() {
  
  return (
    <main className='min-h-screen bg-black'>
    <Nav />
    <Buttosn />
    <Last_Proyects />
    <Footer />
    <Contact />
    </main>
  )
}

export default App
