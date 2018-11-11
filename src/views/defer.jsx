import React from 'react';
import Component from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

import '../App.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (<div >
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'}>
        <Grid item={true} xs={12}>
          <Typography variant='h2'>Be sure to ask:</Typography>
        </Grid>
        <Grid item={true} xs={12} sm={10}>
          <Typography variant='h3' align={'right'}>"Why have you chosen this treatment for me?"</Typography>
        </Grid>
      </Grid> </div>)
  }
}

export default Landing;
