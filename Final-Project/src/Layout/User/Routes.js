import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ContentLayout from "../Content/ContentLayout";
import GameList from "../Content/GameList";
import MovieList from "../Content/MovieList";
import MovieListEdit from "../Content/MovieListEdit";
import FooterLayout from "../FooterLayout/FooterLayout";
import HeaderLayout from "../Header/HeaderLayout";
import Login from "./Login";
import Register from "./Register";
import { UserContext } from "./UserContext";


const Routes = () => {
  const [user] = useContext(UserContext)

  const LoginRoute = ({...props}) => {
    if(user === null) {
      return <Route {...props} />
    } else {
      return <Redirect to="/" />
    }

  }

  const PrivateRoute = ({...props}) => {
    if(user) {
      return <Route {...props} />
    } else {
      return <Redirect to="/login" />
    }
  }

  return (
    <Router>
      <HeaderLayout/>
        <Switch>
          <Route exact path="/"
            component={ContentLayout}
          />
          <Route exact path="/movies">
            <MovieList />
          </Route>
          <Route exact path="/games">
            <GameList />
          </Route>
          <LoginRoute exact path="/login">
            <Login />
          </LoginRoute>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/movie-list">
            <MovieList />
          </Route>
          <PrivateRoute exact path="/movie-list-edit">
            <MovieListEdit />
          </PrivateRoute>
        </Switch>
        <FooterLayout />
    </Router>
  );
}

export default Routes
