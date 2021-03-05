import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FormBuah from '../Tugas-9/FormBuah';
import TabelHargaBuah from '../Tugas-10/TabelHargaBuah';
import Timer from '../Tugas-11/Timer'
import DaftarHargaBuah2 from '../Tugas-12/DaftarHargaBuah'
import DaftarHargaBuah from '../Tugas-13/DaftarHargaBuah';
import DaftarBuah from '../Tugas-14/DaftarBuah';

import '../Tugas-15/Routes.css'
import GantiTema from "./GantiTema";
import { GantiTemaContext } from "./GantiTemaContext";

export default function Routes() {
  const [tema,] = useContext(GantiTemaContext)
  return (
    <Router>
        <div>
        
                  
        <nav style={tema} >
          <ul>
            <li >
              <Link to="/" style={tema}>Tugas 9</Link>
            </li>
            <li>
              <Link to="/tugas-10" style={tema}>Tugas 10</Link>
            </li>
            <li>
              <Link to="/tugas-11" style={tema}>Tugas 11</Link>
            </li>
            <li>
              <Link to="/tugas-12" style={tema}>Tugas 12</Link>
            </li>
            <li>
              <Link to="/tugas-13" style={tema}>Tugas 13</Link>
            </li>
            <li>
              <Link to="/tugas-14" style={tema}>Tugas 14</Link>
            </li>
            <li>
              <Link to="/tugas-15" style={tema}>Tugas 15</Link>
            </li>
          </ul>
          <hr />
        </nav>
        


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <FormBuah />
          </Route>
          <Route exact path="/tugas-10">
            <TabelHargaBuah />
          </Route>
          <Route exact path="/tugas-11">
            <Timer />
          </Route>
          <Route exact path="/tugas-12">
            <DaftarHargaBuah2 />
          </Route>
          <Route exact path="/tugas-13">
            <DaftarHargaBuah />
          </Route>
          <Route exact path="/tugas-14">
            <DaftarBuah />
          </Route>
          <Route exact path="/tugas-15">
            <GantiTema />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
