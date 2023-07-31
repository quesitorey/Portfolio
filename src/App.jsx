import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'

export default function App() {
  return (
    <section className='sectionnn'>
      <NavBar/>
      
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
      </main>
    </section>
  )
}
