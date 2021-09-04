import HeaderImage from './components/HeaderImage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
