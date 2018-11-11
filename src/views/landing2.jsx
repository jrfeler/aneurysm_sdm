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
import '../App.css';

//Image imports
import aneurysm_img from '../images/aneurysm.png'
import aneurysm_flow_img from '../images/aneurysm_flow.png'

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
        isLarge: window.innerWidth > 600
      });
    }, false);
  }

  render() {
    console.log(this.state)
    var size_class = this.state.isLarge
      ? 'large'
      : '';
    return (<div>

      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={24} className={'norm_padding'}>
        <Grid item={true} xs={12}>
          <Typography variant='h2'>I have an aneurysm.</Typography>
        </Grid>
        <Grid item={true} xs={12} sm={10}>
          <Typography variant='h3'>Now what?</Typography>
        </Grid>

        <Grid className={'landing_block'} item={true} xs={12} spacing={24} container={true}>
          <Grid item={true} xs={12} sm={6} md={4} container={true} alignItems={'flex-start'}>
            <img src={aneurysm_img}/>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={8} className={'landing_img_text'}>

            <Typography variant='title'>The Basics:</Typography>
            <Typography variant='body' paragraph={true}>Cerebral aneurysms (AN-yuh-riz-uhm) are a problem of the blood vessels that feed the brain. For some people, they can cause problems, but for most people, they will not.
            </Typography>
            <Typography variant='body' paragraph={true}>Anuerysms can cause problems in two ways.
              <ul>
                <li>If they become large, they can press on the brain, causing headaches and other neurological issues like blurred vision, weakness, numbness, or difficulty speaking.</li>
                <li>A small number of aneurysms can
                  <b>rupture</b>, causing a bleed in the brain that can deadly or cause permanent neurological harm.</li>
              </ul>
            </Typography>
            <Typography variant='body' paragraph={true}>
              <b>Aneurysms are treatable</b>, and your provider will work with you to determine the best plan for you.
            </Typography>
          </Grid>

        </Grid>

        <Grid item={true} container={true} xs={12} spacing={24} alignItems={'center'} className={'landing_block norm_padding'} direction={'row'}>
          <Grid item={true} xs={12} sm={4}>
            <img src={aneurysm_flow_img}/>
          </Grid>
          <Grid xs={12} sm={8} className='landing_text_block'>

            <Typography variant='title'>What is an aneurysm?</Typography>
            <Typography variant={'body'} paragraph={true}>An aneurysm is an abnormal outpouching of the vessels that bring blood to the brain. About 3% of people have an aneurysm, though most do not know it.
            </Typography>
            <Typography variant={'body'} paragraph={true}>
              Although aneurysms can be discovered when they begin to cause problems, they can also be discovered by accident when a person has pictures taken of their brain for other reasons. People that have aneurysms discovered in this way may not notice anything abnormal, and many of them never will.
            </Typography>
          </Grid>
        </Grid>
        <Grid item={true} xs={12}>
          <div className='landing_text_block'>
            <Typography variant={'title'}>Since it may not cause a problem, should I do something about it?</Typography>
            <Typography variant={'body'} paragraph={true}>A number of studies have been done that help doctors predict which aneurysms will cause problems in the future. Although it might seem like a good idea to treat all aneurysms just in case, the treatments themselves can cause problems. For this reason, aneurysms that are not likely to cause problems are not treated.
            </Typography>

            <Typography variant={'body'} paragraph={true}>
              When you meet the doctor who will manage your aneurysm, you will discuss the risks and benefits of treating or not treating your aneurysm.
            </Typography>
          </div>
        </Grid>
        <Grid item={true} xs={12}>
          <Typography variant={'h4'}>
            What are my options?
          </Typography>
          <Typography variant={'body'}>The best option for you will depend on how likely it is that your aneurysm will rupture balanced against your individual needs and the risks of surgery.</Typography>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={aneurysm_img} title="Do Nothing"/>
                <CardContent>
                  <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                    Do Nothing
                  </Typography>
                  <Typography component="p">
                    Some aneurysms are safe enough that doing any monitoring or intervention is more likely to cause harm than the anuerysm. For patients with these kinds of anuerysms, it is best to do nothing at all.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={aneurysm_img} title="Monitor with Imaging"/>
              <CardContent>
                <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                  Monitor with Imaging
                </Typography>
                <Typography component="p">
                  For some aneurysms with a low risk of rupture, it is best not to perform a risky procedure. However, because there is a chance that these aneurysms will continue to grow, it can be helpful to wait and then take images again to see whether the anuerysm is growing - a sign that the anuerysm is more likely to rupture.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>


        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={aneurysm_img} title="Monitor with Imaging"/>
              <CardContent>
                <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                  Intervene with Surgury
                </Typography>
                <Typography component="p">
                  Some aneurysms are likely enough to rupture that it may be worth the risk to do surgery in order to prevent that from happening.                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

        </Grid>

        <Grid item={true} xs={12}>
          <Typography variant={'h4'}>Learn more:</Typography>
          <GridList cellHeight={200} cols={3} rows={3}>
            <GridListTile key={''} cols={1}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'What is the procedure like?'}/>
            </GridListTile>
            <GridListTile key={''} cols={1} rows={1}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'What do the studies show?'}/>
            </GridListTile>
            <GridListTile key={''} cols={2} rows={2}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'If I get a procedure, what could go wrong?'} subtitle={<span> Some aneurysms may require different treatment.</span>}/>
            </GridListTile>
            <GridListTile key={''} cols={1} rows={2}>
              <img src={'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/43879008_2349921368370965_6199012270677164032_n.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=dd551341b1daf933150424a39a8571f0&oe=5C86F500'}/>
              <GridListTileBar title={'Types of Procedures'} subtitle={<span> Some aneurysms may require different treatment.</span>}/>
            </GridListTile>
            <GridListTile key={''} cols={2} rows={2}>
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
