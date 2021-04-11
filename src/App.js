
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Projects/Projects'
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
     
   
      <Header/>
      <Container/>
      <Skills/>
      <Portfolio />
      <Contact />
      
    </div>
  );
}

export default App;
