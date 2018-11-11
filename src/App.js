import React, {Component} from 'react';

import MainRouter from './routes.jsx';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {
        lesionLocation: null,
        lesionDiameter: 0,
        age: null,
        htn: false,
        hxSAH: false,
        ethnicity: null
      },
      phasesRaw: 0,
      phasesPercent: 0
    }
    this.updatePatient = this.updatePatient.bind(this);
  }

  updatePatient(updatedPatient) {
    this.setState({patient: updatedPatient})
    this.calculatePhases()
  }

  render() {
    return (<div className={'app_background'}>
      <Paper className={'app_container'}>
        <MainRouter updatePatient={() => this.updatePatient()} patient={this.state.patient}/>
      </Paper>
    </div>);
  }
}

export default App;
