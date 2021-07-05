import './App.css';
import Header from './components/Header';

const name = [
  {
    first: 'VedaGna',
    last: 'Yarasu',
  },
  {
    first: 'Renu',
    last: 'Yarasau',
  },
]

const App = (props) => <Header name={name} />

export default App;
