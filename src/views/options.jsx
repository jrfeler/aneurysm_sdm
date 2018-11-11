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

import '../App.css';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (<div>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'}>
        <Grid item={true} xs={12}><Typography variant={'h3'}>Compare Your Options</Typography></Grid>
        <Grid item={true} xs={12}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell >Do Nothing</TableCell>
              <TableCell >Watchful Waiting</TableCell>
              <TableCell >Surgical Intervention</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Goal
              </TableCell>
              <TableCell>Return to normal life.</TableCell>
              <TableCell>Get more information through time to determine risk of rupture.</TableCell>
              <TableCell>Decrease risk of rupture.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Medical Benefits
              </TableCell>
              <TableCell>No risk of complications from testing or surgery.</TableCell>
              <TableCell>Avoid risk of surgery while collecting more information to determine risk of rupture.</TableCell>
              <TableCell>Decreases risk of rupture.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Medical Concerns
              </TableCell>
              <TableCell>Does not decrease risk of rupture.</TableCell>
              <TableCell>Does not decrease risk of rupture. Some risk of complications with testing.<br/><a href='#/imaging_complications'>See Complications</a></TableCell>
              <TableCell>Some risk of complications with surgery. <br/><a href='#/surgery_complications'>See Complications</a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Lifestyle Benefits
              </TableCell>
              <TableCell>No need for further followup or testing.</TableCell>
              <TableCell>Testing can be scheduled flexibly and does not require staying at the hospital. Provides peace of mind to some patients.</TableCell>
              <TableCell>Provides peace of mind to some patients after surgery.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Lifestyle Concerns
              </TableCell>
              <TableCell>Some patients continue to be anxious about rupture.</TableCell>
              <TableCell>Repeated testing can be inconvenient.</TableCell>
              <TableCell>Surgery requires an overnight stay at the hospital for most patients as well as followup testing.
                <br/><a href='#/landing'>See Typical Hospital Course</a></TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </Grid>
      </Grid>
    </div>)
  }
}

export default Options;
