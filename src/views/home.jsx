import React from 'react';
import Component from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import '../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.patient.age,
      lesionLocation: this.props.patient.lesionLocation,
      lesionDiameter: this.props.patient.lesionDiameter,
      htn: this.props.patient.htn,
      ethnicity: this.props.patient.ethnicity,
      hxSAH: this.props.patient.hxSAH
    }
  }

  handleTextChange = name => event => {
    console.log(this);
    this.setState({[name]: event.target.value});
  };
  handleToggleChange = name => event => {
    this.setState({[name]: event.target.checked});
  };

  submit() {
    var newPatient = this.props.patient;
    newPatient.age = this.state.age;
    newPatient.lesionDiameter = this.state.lesionDiameter;
    newPatient.lesionLocation = this.state.lesionLocation;
    newPatient.htn = this.state.htn;
    newPatient.ethnicity = this.state.ethnicity;
    newPatient.hxSAH = this.state.hxSAH;

    //this.props.updatePatient(newPatient);
  }

  render() {
    return (<div>
      <Grid container={true} justify={'flex-start'} alignContent={'flex-start'} spacing={8} className={'norm_padding'}>
        <Grid item={true} xs={12}>
          <Paper className={'norm_padding'}>
            <Typography component="h2" variant="h4">
              Patient Information
            </Typography>
            <Typography variant="subtitle1" gutterBottom={true}>This information will be used to generate a custom data feed.</Typography>
            <Typography variant="body1">Please fill out the following form:</Typography>
          </Paper>

        </Grid>
        <Grid item={true} xs={12}>
          <Paper className={'norm_padding'}>
            <Grid container={true} spacing={24}>
              <Grid item={true} xs={12}>
                <TextField required={true} id="age" name="age" label="Age" fullWidth={true} onChange={this.handleTextChange('age')}/>
              </Grid>
              <Grid item={true} xs={12}>
                <TextField required={true} id="lesionDiameter" name="lesionDiameter" label="Lesion Diameter" fullWidth={true} onChange={this.handleTextChange('lesionDiameter')}/>
              </Grid>
              <Grid item={true} xs={12} sm={6}>
                <FormControl >
                  <InputLabel htmlFor="location-native-simple">Lesion Location</InputLabel>
                  <NativeSelect fullWidth={true} value={this.state.lesionLocation} input={<Input name = "lesionLocation" id = "lesionLocation" onChange = {
                      this.handleTextChange('lesionLocation')
                    } />}>
                    <option value=""/>
                    <option value={1}>Intra-dural Internal Carotid Artery</option>
                    <option value={2}>Anterior Cerebral Artery</option>
                    <option value={3}>Anterior Communicating Artery</option>
                    <option value={4}>Pericollosal Artery</option>
                    <option value={5}>Middle Cerebral Artery</option>
                    <option value={6}>Posterior Communicating Artery</option>
                    <option value={7}>Basilar Tip</option>
                    <option value={8}>Other Posterior Circulation</option>
                    <option value={9}>Cavernous Carotid Artery</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item={true} xs={12} sm={6}>
                <FormControl >
                  <InputLabel htmlFor="ethnicity-native-simple">Ethnicity</InputLabel>
                  <NativeSelect fullWidth={true} value={this.state.ethnicity} input={<Input name = "ethnicity" id = "ethnicity" onChange = {
                      this.handleTextChange('ethnicity')
                    } />}>
                    <option value=""/>
                    <option value={1}>Finnish</option>
                    <option value={2}>Japanese</option>
                    <option value={0}>Other</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item={true} xs={12} sm={6}>
                <FormControlLabel control={<Checkbox checked = {
                    this.state.htn
                  }
                  onChange = {
                    this.handleToggleChange('htn')
                  }
                  value = {
                    'htn'
                  } />} label="Hypertension"/>
              </Grid>
              <Grid item={true} xs={12} sm={6}>
                <FormControlLabel control={<Checkbox checked = {
                    this.state.hxSAH
                  }
                  onChange = {
                    this.handleToggleChange('hxSAH')
                  }
                  value = {
                    'hxSAH'
                  } />} label="History of Subarachnoid Hemorrhage"/>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
        <Grid item={true} xs={6}>
          <Button fullWidth={true} variant={'outlined'} onClick={this.submit()}>Save</Button>
        </Grid>
        <Grid item={true} xs={6}>
          <Button fullWidth={true} variant={'outlined'} href={'#/scores'}>Next</Button>
        </Grid>

      </Grid>
    </div>);
  }
}

export default Home;
