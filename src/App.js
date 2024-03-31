
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Project from './components/projects/Project';
import Prototype from './components/prototypes/Prototype';
import Contact from './components/cotact/Contact';

const App = () => {

  return(
    <div>
      <Intro/>
      <About/>
      <Project/>
      <Prototype/>
      <Contact/>
    </div>
  );
}

export default App;
