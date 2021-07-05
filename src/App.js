import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
