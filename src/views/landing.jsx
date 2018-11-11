import React from 'react';
import Component from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Paper from '@material-ui/core/Paper'

import StatInterpret from '../components/StatInterpret.js'

import LinearProgress from '@material-ui/core/LinearProgress';
import '../App.css';

//Image imports
import aneurysm_img from '../images/aneurysm.svg'
import aneurysm_flow_img from '../images/aneurysm_flow.png'
import coiling_img from '../images/coiling.png'
import donothing_img from '../images/donothing.png'

class Landing extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      isLarge: window.innerWidth > 600
    }
  }

  componentWillMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isLarge: window.innerWidth > 800,
        ruptureRiskInterpetOpen: false,
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
          <Typography variant='h2'>I have an aneurysm.</Typography>
        </Grid>
        <Grid item={true} xs={12} sm={10}>
          <Typography variant='h3'>Now what?</Typography>
        </Grid>
        <Grid className={'landing_block first'} item={true} xs={12} container={true} justify={'flex-end'}>
          <img src={aneurysm_img} className={size_class + ' limit_lg'}/>
          <div className={size_class + ' landing_img_text'}>

            <Typography variant='title'>The Basics:</Typography>
            <Typography variant='body' paragraph={true}>Cerebral aneurysms (AN-yuh-riz-uhm) are a problem of the blood vessels that feed the brain. For some people, they can cause problems, but for most people, they will not.
            </Typography>
            <Typography variant='body' paragraph={true}>Anuerysms can cause problems in two ways.
              <ul>
                <li>If they become large, they can press on the brain, causing headaches and other neurological issues like blurred vision, weakness, numbness, or difficulty speaking.</li>
                <li>A small number of aneurysms can <b>rupture</b>, causing a bleed in the brain that can be deadly or cause permanent neurological harm.</li>
              </ul>
            </Typography>
            <Typography variant='body' paragraph={true}>
              <b>Aneurysms are treatable</b>, and your provider will work with you to determine the best plan for you.
            </Typography>
          </div>

        </Grid>

        <Grid item={true} container={true} xs={12} alignItems={'center'} className={'landing_block'} direction={'row'}>
          <Grid item={true} container={true} xs={12} sm={4} className={'norm_padding'} alignContent={'center'} justify={'center'}>
            <img src={aneurysm_flow_img} className={'limit_md grid_img'}/>
          </Grid>
          <Grid xs={12} sm={8} className='landing_text_block'>
            <Typography variant='title'>What is an aneurysm?</Typography>
            <Typography variant={'body'} paragraph={true}>An aneurysm is an abnormal outpouching of the vessels that bring blood to the brain. About 3% of people have an aneurysm, though most do not know it.
            </Typography>
            <Typography variant={'body'} paragraph={true}>
              Although aneurysms can be discovered when they begin to cause problems, they can also be discovered by accident when a person has images taken of their brain for other reasons. People that have aneurysms discovered in this way may not notice anything abnormal, and many of them never will.
            </Typography>
          </Grid>
        </Grid>
        <Grid item={true} container={true} xs={12} className={'landing_block'} alignItems={'center'}>
          <Grid item={true} xs={12} sm={8} className='landing_text_block'>
            <Typography variant={'title'}>Since it may not cause a problem, should I do something about it?</Typography>
            <Typography variant={'body'} paragraph={true}>A number of scientific studies have been done that help doctors predict which aneurysms will cause problems in the future. Although it might seem like a good idea to treat all aneurysms just in case, the treatments themselves can cause problems. For this reason, the risk and benefits of multiple of treatment must be considered on an individual basis to determine the best choice.
            </Typography>

            <Typography variant={'body'} paragraph={true}>
              When you meet the doctor who will manage your aneurysm, you will discuss the risks and benefits of treating or not treating your aneurysm.
            </Typography>

          </Grid>
          <Grid item={true} xs={12} sm={4} container={true} justify={'space-between'} alignItems={'stretch'} direction={'column'} className={'norm_padding'}>
            <Paper className={'norm_padding'}>
            <Typography variant={'h6'} justify={'center'}>My Risk of Rupture in Next 5 Years:</Typography>
            <Typography variant={'h3'}  justify={'center'}>4% - 12%</Typography>

            <LinearProgress variant="determinate" value={12}/>
              <Typography variant={'caption'}>Score based on age, ethnicity, aneurysm size, aneurysm location, presence of hypertension, and history of subarachnoid hemorrhage.</Typography>
          <Button size={'small'} color={'primary'} alignSelf={'flex-end'} onClick={() => this.setState('ruptureRiskInterpetOpen':true)}>How do I interpret this?</Button>
          <StatInterpret open={this.state.ruptureRiskInterpetOpen}/>
          </Paper>
          </Grid>
        </Grid>
        <Grid item={true} container={true} spacing={24} className={'landing_block'}>
          <Grid item={true} xs={12}>
            <Typography variant={'h3'}>
              What are my options?
            </Typography>
            <Typography variant={'body'} className={'limit_lg'}>The best option for you will depend on how likely it is that your aneurysm will rupture balanced against your individual needs and the risks of surgery.</Typography>
          </Grid>
          <Grid item={true} xs={12} sm={4} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={donothing_img} title="Do Nothing"/>
                <CardContent>
                  <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                    Do Nothing
                  </Typography>
                  <Typography component="p">
                    Some aneurysms are so unlikely to rupture that doing any tests or intervention is more likely to cause harm than the anuerysm. For patients with these kinds of anuerysms, it is best to do nothing at all beyond normal health maintenance like avoiding smoking and ensuring blood pressure and cholesterol are under control.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

          </Grid>
          <Grid item={true} xs={12} sm={4} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={'https://www.cedars-sinai.edu/Patients/Programs-and-Services/Imaging-Center/For-Patients/Exams-by-Procedure/CT-Scans/Images/Circle-of-Willis-2.jpg'} title="Watchful Waiting"/>
                <CardContent>
                  <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                    Watchful Waiting
                  </Typography>
                  <Typography component="p">
                    For some aneurysms with a low risk of rupture, it is best not to perform a risky procedure. However, it can be helpful to wait some time and then test again to see whether the anuerysm is growing - a sign that the anuerysm is more likely to rupture.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={coiling_img} title="Surgical Intervention"/>
                <CardContent>
                  <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                    Surgical Intervention
                  </Typography>
                  <Typography component="p">
                    Some aneurysms are likely enough to rupture that it may be worth the risk to do surgery to treat the aneurysm. The intent of these surgeries is to reduce the risk of rupture in the future.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Button href='#/options'>See Comparison</Button>
        </Grid>

        <Grid item={true} xs={12} className={'landing_block'}>
          <Typography variant={'h4'}>Learn more:</Typography>
          <GridList cellHeight={200} cols={3} rows={3}>
            <GridListTile key={''} cols={1} rows={1}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'What is the procedure like?'}/>
            </GridListTile>
            <GridListTile key={''} cols={1} rows={1}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'What do the studies show?'}/>
            </GridListTile>
            <GridListTile key={''} cols={1} rows={1}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'If I get a procedure, what could go wrong?'} subtitle={<span> Some aneurysms may require different treatment.</span>}/>
            </GridListTile>
            <GridListTile key={''} cols={1} rows={1}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'How sure are you about all this?'} subtitle={<span> Some aneurysms may require different treatment.</span>}/>
            </GridListTile>
            <GridListTile key={''} cols={1} rows={1}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'Types of Procedures'} subtitle={<span> Some aneurysms may require different treatment.</span>}/>
            </GridListTile>
          </GridList>

        </Grid>
      </Grid>
    </div>)
  }
}

export default Landing;
