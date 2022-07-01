import './App.css';
import NavBar from './components/navbar';
import Content from './components/content';
import { useRef, useState } from 'react';

function App() {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)


  const [solidNavbar, setSolidNavbar] = useState(false);


  const changeNavbar = (e) => {
      if (e.target.scrollTop > 50) {
          setSolidNavbar(true);
      } else {
          setSolidNavbar(false);
      }
  }

  return (
    <div onScroll={changeNavbar} className="App">
        <NavBar solidNavbar={solidNavbar} homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} teamRef={teamRef} contactRef={contactRef}></NavBar>
        <Content homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} teamRef={teamRef} contactRef={contactRef}></Content>
    </div>
  );
}

export default App;
