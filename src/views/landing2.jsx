import React from 'react';
import Component from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Paper from '@material-ui/core/Paper'
import SvgIcon from '@material-ui/core/SvgIcon'

import LinearProgress from '@material-ui/core/LinearProgress';
import '../App.css';

//Image imports
import aneurysm_img from '../images/aneurysm.svg'
import aneurysm_flow_img from '../images/aneurysm_flow.svg'
import coiling_img from '../images/coiling.png'
import donothing_img from '../images/donothing.png'
import angio_img from '../images/angio.jpg'

import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import ChevronRight from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class Landing extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      isLarge: window.innerWidth > 600,
      risk: typeof this.props.match.params.risk !== 'undefined'
        ? this.props.match.params.risk
        : ''
    }
  }

  componentWillMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isLarge: window.innerWidth > 600,
        risk: typeof this.props.match.params.risk !== 'undefined'
          ? this.props.match.params.risk
          : ''
      });
    }, false);
  }

  render() {
    var size_class = this.state.isLarge
      ? 'large'
      : ''
    return (<div>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={16} className={'norm_padding'}>
        <Grid item={true} xs={12}>
          <Typography variant='h2' className={'landing-title'}>I have an aneurysm.</Typography>
        </Grid>
        <Grid item={true} xs={12} sm={10}>
          <Typography variant='h3' gutterBottom={true} className={'landing-subtitle'}>Now what?</Typography>
        </Grid>
        <Grid className={'landing_block first'} item={true} xs={12} container={true} justify={'flex-end'}>
          <img src={aneurysm_img} className={size_class + ' limit_lg'}/>
          <div className={size_class + ' landing_img_text'}>
            <p className={'supertitle'}>BASICS:</p>
            <Typography variant='title' gutterBottom={true}>What you need to know:</Typography>
            <Typography variant='body1' paragraph={true}>Cerebral aneurysms
              <VolumeUpIcon className={'inline-icon'} color={'primary'} onClick={this.setState()}/>
              are a problem with blood vessels in the brain. For some people, they can cause problems, but for most people, they will not.
            </Typography>
            <Typography variant='body1' paragraph={true}>2 ways that anuerysms cause problems:
              <ul>
                <li>they can cause headaches and other issues like blurred vision, weakness, numbness, or difficulty speaking.</li>
                <li>they can
                  <b>rupture</b>, causing a bleed in the brain that can be deadly or cause permanent brain damage.</li>
              </ul>
            </Typography>
            <Typography variant='body1' paragraph={true}>
              <b>Aneurysms are treatable</b>, and your provider will work with you to determine the best plan for you.
            </Typography>
          </div>

        </Grid>

        <Grid item={true} container={true} xs={12} alignItems={'center'} className={'landing_block'} direction={'row'}>
          <Grid item={true} container={true} xs={12} sm={6} className={'norm_padding'} alignContent={'center'} justify={'center'}>
            <img src={aneurysm_flow_img} className={'limit_md grid_img'}/>
          </Grid>
          <Grid item={true} xs={12} sm={6} className='landing_text_block'>
            <p className={'supertitle'}>DEFINITION:</p>
            <Typography variant='title' gutterBottom={true}>What is an aneurysm?</Typography>
            <Typography variant={'body1'} paragraph={true}>An aneurysm is an abnormal growth from the wall of the blood vessels in the brain. About 3% of people have an aneurysm.
            </Typography>
            <p className={'supertitle'}>DEFINITION:</p>
            <Typography variant='title' gutterBottom={true}>What is an aneurysm?</Typography>
            <Typography variant={'body1'} paragraph={true}>An aneurysm is an abnormal growth from the wall of the blood vessels in the brain. About 3% of people have an aneurysm.
            </Typography>
          </Grid>
        </Grid>
        <Grid item={true} container={true} xs={12} className={'landing_block'} alignItems={'center'}>
          <Grid item={true} xs={12} sm={8} className='landing_text_block'>
            <p className={'supertitle'}>QUESTION:</p>
            <Typography variant={'title'} gutterBottom={true}>Should I do something about it?</Typography>
            <Typography variant={'body1'} paragraph={true}>Studies have been done that help doctors predict which aneurysms may cause problems. Although it might seem like a good idea to treat all aneurysms just in case, the treatments themselves can cause problems, or complications. For this reason, the risk and benefits of treatment must be balanced, and this balance will be different for every person.
            </Typography>
            <Typography variant={'body1'} paragraph={true}>
              When you meet the doctor who will manage your aneurysm, you will discuss the risks and benefits of treating or not treating your aneurysm.
            </Typography>

          </Grid>
          {
            this.state.risk != ''
              ? <Grid item={true} xs={12} sm={4} container={true} justify={'space-between'} alignItems={'stretch'} direction={'column'} className={'norm_padding'}>
                  <Paper className={'norm_padding'}>
                    <Typography variant={'h6'} justify={'center'}>My Risk of Rupture in Next 5 Years:</Typography>
                    <Typography variant={'h3'} justify={'center'} color={'primary'} className={'big-number'}>{this.state.risk.replace('_', ' ')}</Typography>
                    <Typography variant={'caption'}>based on age, ethnicity, aneurysm size, aneurysm location, presence of hypertension, and history of subarachnoid hemorrhage.</Typography>

                  </Paper>
                </Grid>
              : <Grid item={true} xs={12} sm={4} container={true} justify={'space-between'} alignItems={'stretch'} direction={'column'} className={'norm_padding'}>
                  <Paper className={'norm_padding'}>
                    <Typography variant={'h6'} gutterBottom={true}>What is my risk of rupture?</Typography>
                    <Typography variant={'body1'} gutterBottom={true}>Your doctor will review your records to determine what your risk of rupture might be based on your medical history and the appearance of your aneurysm.</Typography>
                  </Paper>
                </Grid>
          }
        </Grid>
        <Grid item={true} container={true} spacing={24} className={'landing_block'}>
          <Grid item={true} xs={12}>
            <Typography variant={'title'} gutterBottom={true}>
              What are my options?
            </Typography>
            <Typography variant={'body1'} className={'limit_lg'}>The best option for you will depend on how likely it is that your aneurysm will rupture balanced against your individual needs and the risks of surgery.</Typography>
          </Grid>
          <Grid item={true} xs={12} sm={4} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={donothing_img} title="Do Nothing"/>
                <CardContent>
                  <Typography gutterBottom={true} variant="h5" component="h2">
                    Healthy Living
                  </Typography>
                  <Typography gutterBottom={true} variant="subtitle1" component="h2">
                    Goal: forget it's there
                  </Typography>
                  <Typography component="p">
                    Some aneurysms are so unlikely to rupture that testing or intervention is more likely to cause harm. For these, it is best to do nothing at all beyond living healthfully, including avoiding smoking and ensuring blood pressure and cholesterol are under control.
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>

          </Grid>
          <Grid item={true} xs={12} sm={4} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={angio_img} title="Watchful Waiting"/>
                <CardContent>
                  <Typography gutterBottom={true} variant="h5" component="h2">
                    Watch and Wait
                  </Typography>
                  <Typography gutterBottom={true} variant="subtitle1" component="h2">
                    Goal: collect more data
                  </Typography>
                  <Typography component="p">
                    For some aneurysms with a low risk of rupture, it is best not to perform a risky procedure. However, it can be helpful to wait some time and then test again to see whether the anuerysm is growing - a sign that the anuerysm is more likely to rupture.

                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>

          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={coiling_img} title="Surgical Intervention"/>
                <CardContent>
                  <Typography gutterBottom={true} variant="h5" component="h2">
                    Have Surgery
                  </Typography>
                  <Typography gutterBottom={true} variant="subtitle1" component="h2">
                    Goal: decrease rupture risk
                  </Typography>
                  <Typography component="p">
                    For anuerysms that are more likely to rupture, it may be worth the risk to do surgery to treat the aneurysm. The intent of these surgeries is to reduce the risk of rupture in the future.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item={true} container={true} xs={12} justify={'flex-end'}>
            <Button href='#/options' color={'primary'} size={'large'} variant={'outlined'}>See Comparison<ChevronRight/></Button>
          </Grid>
        </Grid>

        <Grid item={true} xs={12} className={'landing_block'}>
          <Typography variant={'title'} gutterBottom={true}>Common Questions:</Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant={'subtitle1'}>Where can I get more information?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant={'subtitle1'}>What happens if you have a stroke?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                2 types of strokes:
                <ul>
                  <li>
                    <b>Hemorrhagic Stroke:</b>
                    a brain bleed.</li>
                  <li>
                    <b>Ischemic Stroke:</b>
                    when part of the brain has its blood supply cut off.</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </Grid>
      </Grid>
    </div>)
  }
}

export default Landing;
