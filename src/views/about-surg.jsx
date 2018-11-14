import React from 'react';
import Component from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Paper from '@material-ui/core/Paper'
import SvgIcon from '@material-ui/core/SvgIcon'

import '../App.css';

//Image imports

import lab_coiling_img from '../images/labeled_coiling.svg'
import lab_clipping_img from '../images/labeled_clipping.svg'

import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import ChevronRight from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class AboutSurg extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      isLarge: window.innerWidth > 600,
      coilExp: false,
      clipExp: false
    }
  }

  componentWillMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isLarge: window.innerWidth > 600
      });
    }, false);
  }

  toggleCoilExp() {
    this.setState({
      coilExp: !this.state.coilExp
    });
  }
  toggleClipExp() {
    this.setState({
      clipExp: !this.state.clipExp
    });
  }

  render() {
    var size_class = this.state.isLarge
      ? 'large'
      : ''
    return (<div>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={16} className={'norm_padding'}>
        <Grid item={true} xs={12}>
          <Typography variant='h2'>What is the surgery like?</Typography>
          <Typography variant='subtitle1' gutterBottom={true}>Learn more about the risks and benefits of surgery:</Typography>
        </Grid>
        <Grid item={true} xs={12} className={'landing_block'}>
          <Typography variant={'title'} gutterBottom={'true'}>There are 2 surgical options:</Typography>
          <Typography variant={'body1'} paragraph={true}>Your provider will determine which option is better for you.</Typography>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Paper className={'norm_padding'}>
            <Typography variant={'title'} gutterBottom={'true'}>Endovascular Surgery</Typography>
            <Typography variant={'subtitle1'} gutterBottom={'true'}>A surgery done from within the blood vessels.</Typography>
            <img src={lab_coiling_img}/>
            <Grid container={true} justify={'space-between'}alignItems={'center'}>
              <Typography variant={'body1'}>
                <b>Procedure:</b>
                takes about 45 minutes.
              </Typography>
              <Button onClick={() => this.toggleCoilExp()}><ExpandMoreIcon/></Button>
            </Grid>

            <Collapse in={this.state.coilExp} timeout="auto" unmountOnExit={true}>
              <Typography>
                <ol>
                  <li>Arrive to operating room where sedating medications are given.</li>
                  <li>Catheter is inserted in an artery in the leg. A catheter is a small, flexible tube.</li>
                  <li>Catheter travels through the arteries in the body to the aneurysm.</li>
                  <li>Metal coils are placed in the aneurysm through the catheter. The aneurysm is packed fully with coils.</li>
                  <li>The catheter is removed, leaving the coils behind.</li>
                </ol>
              </Typography>
            </Collapse>
            <Typography variant={'body1'}>
              <b>Recovery:</b>
              <ul>
                <li>Stay overnight in hospital intensive care unit with leg immobilized. You will be awake.</li>
                <li>A small scar will may form on the inner thigh where the catheter was placed.</li>
                <li>Brain imaging and then clinic visit several weeks after to ensure that the aneurysm has been cured.</li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Paper className={'norm_padding'}>
            <Typography variant={'title'} gutterBottom={'true'}>Open Surgery</Typography>
            <Typography variant={'subtitle1'} gutterBottom={'true'}>A surgery done throuh an opening made in the skull.</Typography>
              <img src={lab_clipping_img}/>

            <Grid container={true} justify={'space-between'}alignItems={'center'}>
                <Typography variant={'body1'}>
                   <b>Procedure:</b>
                  takes about 3 hours.
                </Typography>
                <Button onClick={() => this.toggleClipExp()}><ExpandMoreIcon className={this.state.clipExp?'rotate-180 now':'rotate-180'}/></Button>
              </Grid>

            <Collapse in={this.state.clipExp} timeout="auto" unmountOnExit={true}>
              <Typography variant={'body1'}>
                <ol>
                <li>Arrive to operating room where you will put to sleep under general anesthesia</li>
                <li>An opening is made by removing some of the bone in the skull.</li>
                <li>The brain is spread so that the surgeon can see the aneurysm.</li>
                <li>A metal clip is placed around the aneurysm, pinching it closed from the artery.</li>
                <li>All tools are removed, leaving the clip behind.</li>
                <li>The bone that was removed earlier is put back and fixed in place with screws, closing the opening in the skull.
                </li>
              </ol>
            </Typography>
            </Collapse>

            <Typography variant={'body1'}>

              <b>Recovery:</b>
              <ul>
                <li>Stay for a few days in the hospital beginning in the intensive care unit and then moving to a normal hospital room when you are stable.</li>
                <li>A scar may form at where the skin was cut to make an opening in the skull. Hair may have been cut to decrease the risk of infection.</li>
                <li>Brain imaging and then clinic visit several weeks after to ensure that the aneurysm has been cured.</li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
        <Grid item={true} xs={12}>
          <Typography variant={"title"} gutterBottom={true}>Risks of Surgery:</Typography>
          <Typography variant={'body1'} paragraph={true}>
            Although the two surgery options are different, the kinds of risks associated with them include:
            <ul>
              <li>Bleeding during surgery.</li>
              <li>Stroke after surgery.</li>
              <li>Infection in the brain.</li>
            </ul>
          </Typography>
        </Grid>

      </Grid>
    </div>)
  }
}

export default AboutSurg;
