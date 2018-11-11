import React from 'react';
import Component from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import LinearProgress from '@material-ui/core/LinearProgress';

import {isuia1YSurgicalOutcome,isuia5YRuptureRisk, calculatePhases, ucasYearlyRuptureRate} from '../constants.js'

import '../App.css';

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: this.props.patient,
      phasesRaw: 0,
      phasesPercent: 0
    }
  }

  componentDidMount() {
    this.setState({
      phasesPercent: calculatePhases(this.props.patient)})
  }

  render() {
    return (<div>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'} spacing={24}>
        <Grid item={true} xs={12}>
          <Paper>
            <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'}>
              <Grid item={true} xs={12}>
                <Typography component="h2" variant="h4">
                  PHASES
                </Typography>
              </Grid>
              <Grid item={true} xs={12} sm={6} container={true} justify={'center'} alignItems={'stretch'} direction={'column'}>
                <Typography variant={'h6'} justify={'center'}>Risk of Rupture in Next 5 Years:</Typography>
                <Typography variant={'h3'}>{calculatePhases(this.state.patient)}%</Typography>
                <LinearProgress variant="determinate" value={this.state.phasesPercent}/>
              </Grid>
              <Grid item={true} xs={12}>
                <Typography variant={'caption'}>Score based on age, ethnicity, aneurysm size, aneurysm location, presence of hypertension, and history of subarachnoid hemorrhage.</Typography>
              </Grid>
            </Grid>
          </Paper>

        </Grid>
        <Grid item={true} xs={12}>
          <Paper>
            <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'}>
              <Grid item={true} xs={12}>
                <Typography component="h2" variant="h4">
                  ISUIA
                </Typography>
              </Grid>

              <Grid item={true} xs={12} sm={6} container={true} justify={'center'} alignItems={'stretch'} direction={'column'}>
                <Typography variant={'h6'} justify={'center'}>Risk of Rupture in Next 5 Years:</Typography>
                <Typography variant={'h3'}>{isuia5YRuptureRisk(this.state.patient.lesionLocation,this.state.patient.lesionLocation,this.state.patient.hxSAH)}%</Typography>
                <LinearProgress variant="determinate" value={this.state.phasesPercent}/>
              </Grid>  <Grid item={true} container={true} xs={12} sm={6} justify={'center'} alignItems={'stretch'} direction={'column'}>
                  <Typography variant={'h6'}>Risk of Bad Neurological Outcome After 1 Years with Endovascular Treatment:</Typography>
                  <Typography variant={'h3'}>{isuia1YSurgicalOutcome(this.state.patient.age,this.state.patient.lesionLocation,this.state.patient.lesionDiameter)}%</Typography>
                </Grid>
              <Grid item={true} xs={12}>
                <Typography variant={'caption'}>Score based on aneurysm size, aneurysm location, and history of subarachnoid hemorrhage.</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item={true} xs={12}>
          <Paper>
            <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'}>
              <Grid item={true} xs={12}>
                <Typography component="h2" variant="h4">
                  UCAS
                </Typography>
              </Grid>

              <Grid item={true} xs={12} sm={6} container={true} justify={'center'} alignItems={'stretch'} direction={'column'}>
                <Typography variant={'h6'} justify={'center'}>Risk of Rupture in Next 5 Years:</Typography>
                <Typography variant={'h3'}>{ucasYearlyRuptureRate(this.state.patient.lesionLocation,this.state.patient.lesionDiameter)}%</Typography>
                <LinearProgress variant="determinate" value={ucasYearlyRuptureRate(this.state.patient.lesionLocation,this.state.patient.lesionDiameter)}/>
              </Grid>
              <Grid item={true} xs={12}>
                <Typography variant={'caption'}>Score based on aneurysm size and aneurysm location.</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </div>);
  }
}

export default Scores;
