import React from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import Home from './views/home.jsx';
import Scores from './views/scores.jsx';
import Landing from './views/landing.jsx';
import Defer from './views/defer.jsx'
import Risks from './views/risks.jsx'
import Options from './views/options.jsx'

export default class MainRouter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<HashRouter>
      <div>
        <Route path='/home' render={(props) => <Home updatePatient={() => this.props.updatePatient} patient={this.props.patient}/>}/>
        <Route path='/scores' render={(props) => <Scores patient={this.props.patient}/>}/>
        <Route path='/landing' render={(props) => <Landing patient={this.props.patient}/>}/>
        <Route path='/defer' render={(props) => <Defer patient={this.props.patient}/>}/>
        <Route path='/risks' render={(props) => <Risks patient={this.props.patient}/>}/>
        <Route path='/options' render={(props) => <Options patient={this.props.patient}/>}/>
        <Route path='/' render={() => <Redirect to='/landing'/>}/>
        <Route path='' render={() => <Redirect to='/landing'/>}/>
      </div>
    </HashRouter>)
  }
};
