import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MapComponent from './Asset/AutoComplete';


const styles = {
  card: {
    minHeight: '50vh',
  },
};

function ChooseLocation(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose location

        <Card className={classes.card}>
          <MapComponent />
        </Card>

      </Typography>

    </React.Fragment>
    );
}

export default withStyles(styles)(ChooseLocation);
