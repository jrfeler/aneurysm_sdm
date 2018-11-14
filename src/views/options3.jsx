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

import {ResponsiveBar} from '@nivo/bar'
import {ResponsivePie} from '@nivo/pie'

import '../App.css';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (<div>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={24} className={'norm_padding'}>
        <Grid item={true} xs={12}>
          <Paper style={{'height':'300px'}} className={'norm_padding'}>
            <Typography variant='title' gutterBottom={true}>Outcomes</Typography>
            <ResponsiveBar data={[{
                  "choice": "Intervention",
                  "Bad Outcome": 7,
                  "Bad OutcomeColor": "rgb(221,85,66)",
                  "Good Outcome": 93,
                  "Good OutcomeColor": "rgb(220,220,220)"
                },{
                      "choice": "No Intervention",
                      "Bad Outcome": 2,
                      "Bad OutcomeColor": "rgb(221,85,66)",
                      "Good Outcome": 98,
                      "Good OutcomeColor": "rgb(220,220,220)"
                    }
              ]} keys={["Good Outcome", "Bad Outcome"]} indexBy="choice" margin={{
                "top" : 50,
                "right" : 130,
                "bottom" : 50,
                "left" : 60
              }} padding={0.3} maxValue={100} layout="vertical"  colorBy="id"  borderColor="inherit:darker(1.6)" axisTop="null" axisRight="null" axisBottom={{
                "tickSize" : 5,
                "tickPadding" : 5,
                "tickRotation" : 0,

              }} axisLeft={{
                "tickSize" : 5,
                "tickPadding" : 5,
                "tickRotation" : 0,
                "legend" : "probability",
                "legendPosition" : "middle",
                "legendOffset" : -32

              }} labelSkipWidth={12} labelSkipHeight={12} labelTextColor="inherit:darker(1.6)" animate={true} motionStiffness={90} motionDamping={15} legends={[{
                  "dataFrom": "keys",
                  "anchor": "bottom-right",
                  "direction": "column",
                  "justify": false,
                  "translateX": 120,
                  "translateY": 0,
                  "itemsSpacing": 2,
                  "itemWidth": 100,
                  "itemHeight": 20,
                  "itemDirection": "left-to-right",
                  "itemOpacity": 0.85,
                  "symbolSize": 20,
                  "effects": [
                    {
                      "on": "hover",
                      "style": {
                        "itemOpacity": 1
                      }
                    }
                  ]
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

export default Options;
