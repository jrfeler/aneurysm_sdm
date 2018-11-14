import React from 'react';
import Component from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ChevronRight from '@material-ui/icons/ChevronRight'



import '../App.css';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  };
  render() {
    return (<div>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'}>
        <Button variant={'outlined'} href={'#/landing'} color={'primary'}>Back</Button>

        <Grid item={true} xs={12}>
          <Typography variant={'h3'}>Compare Your Options</Typography>
        </Grid>
        <Grid item={true} xs={12}>
          <Table className={'options-table'}>
            <TableHead>
              <TableRow hover={true}>
                <TableCell></TableCell>
                <TableCell >Do Nothing</TableCell>
                <TableCell >Watchful Waiting</TableCell>
                <TableCell >Surgical Intervention</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover={true}>
                <TableCell component="th" scope="row">
                  Medical Visits
                </TableCell>
                <TableCell>Normal healthcare visits with primary care physicians.</TableCell>
                <TableCell>Imaging tests at the hospital several times per year.</TableCell>
                <TableCell>Surgery at the hospital. Most patients will stay overnight. Imaging tests at the hospital and a followup visit.</TableCell>
              </TableRow>
              <TableRow hover={true}>
                <TableCell component="th" scope="row">
                  Good Outcome
                </TableCell>
                <TableCell>No symptoms from aneurysm.</TableCell>
                <TableCell>No symptoms from aneurysm. If anuerysm does not grow, can stop doing tests and transfer to 'Do Nothing'</TableCell>
                <TableCell>No symptoms. Aneurysm cured.</TableCell>
              </TableRow>
              <TableRow hover={true}>
                <TableCell component="th" scope="row">
                  Bad Outcome
                </TableCell>
                <TableCell>Subarachnoid hemorrhage - a brain bleed. Frequently disabling or deadly. Likelihood depends on the aneurysm.</TableCell>
                <TableCell>Subarachnoid hemorrhage - a brain bleed. Frequently disabling or deadly. Likelihood depends on the aneurysm.</TableCell>
                <TableCell>Ischemic stroke during surgery. A clot can form in the brain and cut off blood flow. Can be disabling or rarely deadly. Occurs in about 7% of cases.</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </Grid>
        <Grid item={true} xs={12}>
          <Typography variant={'title'} gutterBottom={true}>How do I know whether I will have a good or bad outcome?</Typography>
          <Typography variant={'body1'} gutterBottom={true}>Studies have been done...</Typography>
        </Grid>

        <Grid item={true} container={true} justify={'flex-end'} xs={12}>
          <Button href={'#/options'}>OptionsV1</Button>
        </Grid>
      </Grid>
    </div>)
  }
}

export default Options;
