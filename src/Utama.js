import React, {Component} from "react";
import './App.css';
import Beranda from './page1/beranda'
import Tentangsaya from './page1/tentangsaya'
import Karya from './page1/karya'
import Kontak from './page1/kontak'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const Utama = () =>{
    return(
  <Switch>
    <Route exact path="/" component={Beranda}/>
    <Route exact path="/tentangsaya" component={Tentangsaya}/>
    <Route exact path="/karya" component={Karya}/>
    <Route exact path="/kontak" component={Kontak}/>
  </Switch>
    )
}
export default Utama