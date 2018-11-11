import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default class NavBar  extends React.Component {
  render() {
    return(
      <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Aneurysm Shared Decision Making Assistant
                </Typography>
                <Button href={'#/home'}>Data Entry</Button>
                <Button href={'#/scores'}>Patient Scores</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
  }
}
