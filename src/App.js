import logo from './logo.svg';
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Loader, Dimmer, Progress, Input, Button } from 'semantic-ui-react';

import Home from './components/Home.js';
// import Projects from './components/Projects.js';
// import SpokeCalculator from './components/SpokeCalculator.js';
// import Page from './components/Page.js';
// import Printable from './components/Printable.js';
// import Entry from './components/Entry.js';
// import WordBuilder from './components/WordBuilder.js';
// import SentenceBuilder from './components/SentenceBuilder.js';
// import Dialogues from './components/Dialogues.js';
// import Report from './components/Report.js';
// import TlingitMap from './components/Map.js';
// import Phrasebook from './components/Phrasebook.js';
// import Conversations from './components/Conversations.js';
// import Chinese from './components/constants/chinese.js';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import axios from 'axios';

// export const API_URL = "http://localhost:5001";
// export const API_URL = "https://www.inupiaqonline.com/fastapi/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.progressData1 !== prevState.progressData1 || this.state.progressData2 !== prevState.progressData2 || this.state.progressData3 !== prevState.progressData3) {
  //     this.setState({fullProgress:((this.state.progressData1+this.state.progressData2+this.state.progressData3)/12616540)*100})
  //   }
  // }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  // removeArtifacts = (sentence) => {
  //   sentence = sentence.replaceAll('«','“').replaceAll('«','“').replaceAll('»','”').replaceAll('»','”')
  //   let matches1 = sentence.match(/{.*?}/g)
  //   // let matches2 = sentence.match(/\[.*?\]/g)
  //   // console.log(matches2)
  //   if (matches1 !== null) {
  //     if (matches1 !== null) {
  //       matches1.map((m) => sentence = sentence.replaceAll(m,''))            
  //     }
  //     // if (matches2 !== null) {
  //     //   matches1.map((m) => sentence = sentence.replaceAll(m,''))            
  //     // }
  //   }
  //   return sentence
  // }

  render() {
    // console.log(window.innerHeight)
    // console.log(this.state)
    return(
      <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/' render={(props) => <Home />}></Route>
          <Route path='/about' render={(props) => <Home currentPage='about' />}></Route>
          <Route path='/projects' render={(props) => <Home currentPage='projects' />}></Route>
          <Route path='/contact' render={(props) => <Home currentPage='contact' />}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
};

export default App;
