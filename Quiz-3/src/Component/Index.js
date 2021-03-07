import '../App.css';
import logo from '../img/logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Component/Home'
import About from '../Component/About'
import BookListEditor from '../Component/BooksListEditor';
import { useContext } from 'react';
import { LoginContext } from './Login/LoginContext';
import Login from './Login/Login';

function Index() {
  const [login, setLogin] = useContext(LoginContext)
  const logoutHandle = () => {
      setLogin(null)
  }


  return (
    <Router>
      <header>
        <img src={logo} id="logo" style={{width:"200px"}} alt="logo"/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {
                login !== null &&  (
                    <>
                    <li>
                    <Link to="/book-list-editor">Books List Editor</Link>
                    </li>
                    <li onClick={logoutHandle}>Logout</li>
                    </>
                )
            }
            {
                login === null &&  (
                    <li>
              <Link to="/login">Login</Link>
            </li>
                )
            }
          </ul>
        </nav>
      </header>
      <div class="main"></div>
      <section>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/book-list-editor">
            <BookListEditor />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </section>
      <footer>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
    </Router>
  );
}

export default Index
