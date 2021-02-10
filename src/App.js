import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import "./Style.css"
import "./Fonts.css"

import Navigation from "./components/Navigation";
// import {apple} from "/public/apple.png";


class App extends React.Component {
  componentDidMount() {
    this.randomObject();
  }
  randomObject() {
    
  }
  stickeron() {

  }
  stickeroff() {

  }


  render () {
  
    return(<div className ="container flex">
    <div className ="pannel-left">

      <section className="mg-nav">
        <HashRouter><Navigation/></HashRouter>

      </section>
      
    </div>    
      
      

      <div className ="pannel-right float-center">
      <section className="letter-left mg-big">
              <h1 className="nav fs-base fw-bold"><a href="/pf/">HI</a></h1>



      </section>
      


      {/* <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/cava" exact={true} component={Cava} />
      <Route path="/lany" exact={true} component={Lany} />
      <Route path="/axis" exact={true} component={Axis} />

      </HashRouter> */}

      </div>
      
      
      </div>)
  };
}

export default App;
