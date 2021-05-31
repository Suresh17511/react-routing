import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import Shop from './Components/Shop';
import Home from './Components/Home';
import ItemDetails from './Components/ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetails} />
      </div>
    </Router>
  );
}
export default App;
