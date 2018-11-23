import React from 'react';
import {
 GoogleApiWrapper, InfoWindow, Map, Marker 
} from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent';

/*
const mapStyles = {
  width: '70%',
  height: '40%'
};

export class MapComponent extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 33.4255, 
          lng: -111.94
        }}
        onClick={this.mapClicked}
      />
    );
  }
}
*/

export class GoogleMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const style = {
      width: '50%',
      height: '40%'
      //marginLeft: '0px',
      //marginRight: '0px'
    };
    return (
      <Map
        item
        style= {style}
        google= {this.props.google}
        onClick= {this.onMapClick}
        zoom= {14}
        initialCenter ={{ lat: 33.4255, lng: -111.94 }}
      >
        <Marker
          onClick ={this.onMarkerClick}
          title= "aaatest"
          position= {{ lat: 33.4255, lng: -111.94 }}
          name= "nameeee"
        />
        <InfoWindow
          marker= {this.state.activeMarker}
          visible ={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography
              variant= "headline"
              component= "h4"
            >
              marker.title
            </Typography>
            <Typography
              component= "p"
            >
              marker.name
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyC4xYqoJ2z76xP1hEu8B4AG9otpRL7mxec'
})(GoogleMapContainer);

/*
renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position: place.geometry.location });
    });
  }

  render() {
    const { position } = this.state;

    return (
      <div className={styles.flexWrapper}>
        <div className={styles.left}>
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
            />

            <input className={styles.button} type="submit" value="Go" />
          </form>

          <div>
            <div>Lat: {position && position.lat()}</div>
            <div>Lng: {position && position.lng()}</div>
          </div>
        </div>

        <div className={styles.right}>
          <Map
            {...this.props}
            center={position}
            centerAroundCurrentLocation={false}
            containerStyle={{
              height: '100vh',
              position: 'relative',
              width: '100%'
            }}>
            <Marker position={position} />
          </Map>
        </div>
      </div>
    );
  }
}

*/