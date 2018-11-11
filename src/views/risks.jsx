import React from 'react';
import Component from 'react'
import NavBar from '../components/NavBar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import {ResponsiveBar} from '@nivo/bar'
import {ResponsivePie} from '@nivo/pie'

import LinearProgress from '@material-ui/core/LinearProgress';

import '../App.css';

class Risks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: this.props.patient
    }
  }

  render() {
    return (<div>
      <NavBar/>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={24} className={'norm_padding'}>
        <Grid item={true} xs={6}>
          <Paper>
            <p>paper1</p>
            <ResponsivePie data={[
                {
                  'id': 'Nothing',
                  'label': 'Nothing',
                  'value': 90,
                  'color': 'hsl(84, 70%, 50%)'
                }, {
                  'id': 'SAH',
                  'label': 'SAH',
                  'value': 10,
                  'color': 'hsl(100, 70%, 50%)'
                }
              ]}/>
          </Paper>
        </Grid>
        <Grid item={true} xs={6}>
          <Paper>
            <ResponsiveBar data={[
                {
                  'Outcome': 'Intervention',
                  'Nothing': 90,
                  'Subarachnoid Hemorrhage': 10
                }, {
                  'Outcome': 'Intervention',
                  'Nothing': 95,
                  'Subarachnoid Hemorrhage': 5
                }
              ]}/>

          </Paper>
        </Grid>
      </Grid>

    </div>)
  }

}

export default Risks;
