import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AutocompleteComponent from './Asset/GeocodeAutocomplete';
import GoogleMapComponent from './Asset/GoogleMapComp';

function loadLocalStorage(e) {
  const x = window.localStorage.getItem(localstorage_key);
  this.setState({ userJson: x });
  this.refs.textarea.value = x;
  this.validateJson();
}

function saveLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
  console.log('key: ' + key + ', value: ' + value);
}

const styles = {
  card: {
    minHeight: '50vh',
  },
};

class ChooseLocation extends React.Component {
  constructor(props) {
      super(props);
  };


  locationLink(address,lat,lon) {
    console.log('address: ' + address + '\nlat: ' + lat + '\nlon: ' + lon);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Choose location
  
          <Card className={classes.card}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <AutocompleteComponent locationLink={this.locationLink} />
              </Grid>
              <Grid item xs={12}>
                <GoogleMapComponent />
              </Grid>
            </Grid>
  
          </Card>
  
        </Typography>
  
      </React.Fragment>
    );
  }
  
}

export default withStyles(styles)(ChooseLocation);
