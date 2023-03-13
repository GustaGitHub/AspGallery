import './index.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import { HeaderHome } from './style/Header';
import HomePage from './components/Home';
import AddFilePage from './components/AddFilePage';
import SelectedPicture from './components/SelectedPicture';
import { useHistory } from 'react-router-dom';

function App() {
  let historyHomepage = useHistory();

  return (
       <div className='App'>
          <Router>
            <HeaderHome>
              <Link to="/"> 
                <h1>AspGallery</h1>
              </Link>
            </HeaderHome>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/addFile' component={AddFilePage} />
              <Route exact path='/File/:idFile' component={SelectedPicture} />
            </Switch>
          </Router>
      </div>
  );
}

export default App;
