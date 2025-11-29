import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Hello Word!</h1>
      <Home/>
      <About/>
      <Contact/>
      <Feedback/>
    </div>
  );
}

export default App;
