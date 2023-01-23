import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import MovieInfo from './components/MovieInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/movie/:id">
            <MovieInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
