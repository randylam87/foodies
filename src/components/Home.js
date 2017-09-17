import React, { Component } from 'react';
import Search from './Homepage/Search';
import MapSearch from './MapSearch/MapSearch';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStartLatLng = this.getStartLatLng.bind(this);
    this.getSearchCity = this.getSearchCity.bind(this);

    this.state = {
      searchCity: '',
      secretData: '',
      value: '',
    };
  }

  getStartLatLng(address) {
    //URL encode address
    encodeURI(address);

    return new Promise((resolve, reject) => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
        .then((res) => {
          let latLng = res.data.results[0].geometry.location;
          resolve(latLng);
        })
    })
  }

  getSearchCity(latLng) {
    return new Promise((resolve, reject) => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&key=AIzaSyBEF9CrZfS_ucE-Tj08YB4SH56v9Ni6sso`)
        .then((res) => {
          let searchCity = res.data.results[0].address_components[3].short_name;
          resolve(searchCity);
        })
    })
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.substring(0, 140)
    });
  }

  async handleSubmit(event) {
    let latLng = await this.getStartLatLng(this.state.value);
    let searchCity = await this.getSearchCity(latLng);
    this.setState({
      latLng,
      searchCity
    });
  }

  render() {
    return (
      <div className="img-fluid rounded" alt="Home">
        <h1 className="text-center home-title">Foodies</h1>
        { this.state.latLng ? (
          <MapSearch latLng={ this.state.latLng } searchCity={ this.state.searchCity } />
          ) : (
          <Search value={ this.state.value } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
          ) }
      </div>
      );
  }
}

export default Home;