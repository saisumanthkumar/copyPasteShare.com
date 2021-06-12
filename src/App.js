import './App.css'
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import SavedFetch from './components/SavedFetch';
function App() {

  return (
    <Router>
      <Route path='/' exact component={Home}  />
      <Route path='/:id' exact component={SavedFetch}  />
    </Router>
  );
}

export default App;
