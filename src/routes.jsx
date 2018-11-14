import React from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import Home from './views/home.jsx';
import Scores from './views/scores.jsx';
import Landing from './views/landing.jsx';
import Defer from './views/defer.jsx'
import Risks from './views/risks.jsx'
import Options from './views/options.jsx'
import Options2 from './views/options2.jsx'
import AboutSurg from './views/about-surg.jsx'

export default class MainRouter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<HashRouter>
      <div>
        <Route path='/home' render={(props) => <Home updatePatient={() => this.props.updatePatient} patient={this.props.patient}/>}/>
        <Route path='/scores' render={(props) => <Scores patient={this.props.patient}/>}/>
        <Route path='/landing/:risk?' render={(props) => <Landing patient={this.props.patient}{...props}/>}/>
        <Route path='/defer' render={(props) => <Defer patient={this.props.patient}/>}/>
        <Route path='/risks' render={(props) => <Risks patient={this.props.patient}/>}/>
        <Route path='/options' render={(props) => <Options patient={this.props.patient}/>}/>
        <Route path='/options2' render={(props) => <Options2 patient={this.props.patient}/>}/>
        <Route path='/about-surg' render={(props) => <AboutSurg patient={this.props.patient}/>}/>

      </div>
    </HashRouter>)
  }
};
