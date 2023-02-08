import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
 
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Projects />   
      <Contact />
      <Footer /> 
    </>
  )
}

export default App
