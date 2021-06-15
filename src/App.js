import './App.css';
import NavbarHeader  from './components/navbar';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
        <Route path="/Profile">
          <Profile/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
