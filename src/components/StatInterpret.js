import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class StatInterpret extends React.Component {
  render() {
    return (<div>
      <Dialog onClose={this.handleClose}>
        <DialogTitle id="explain-rupture-risk">How to Interpret Risk of Rupture</DialogTitle>
        <div>
          <Typography variant={'body'}>A number of studies have been done in which people that have been found to have aneurysms are followed through time to see what happen to their anuerysm. The numbers given describe how many people with aneurysms like yours had a rupture over 5 years.</Typography>
        </div>
      </Dialog>
    </div>)
  }
}
