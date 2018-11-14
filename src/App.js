import React, {Component} from 'react';

import MainRouter from './routes.jsx';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E64C3C'
    }
  }
})

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
    <MuiThemeProvider theme={theme}>
      <Paper className={'app_container'}>
        <MainRouter updatePatient={() => this.updatePatient()} patient={this.state.patient}/>
      </Paper>
      </MuiThemeProvider>
    </div>);
  }
}

export default App;
