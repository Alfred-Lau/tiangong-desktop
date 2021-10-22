import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
