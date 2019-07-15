import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import "./styles/sass/main.scss";
import Results from "./Results";
import Search from "./Search";
import { geolocated } from "react-geolocated";
import { usePosition } from "use-position";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      location: false
    };

    this.changeLocation = this.changeLocation.bind(this);
  }

  changeLocation(location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=b428abd361fb7ecd44e9da80694bfc92`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          loading: false,
          error: false,
          location: location
        })
      )
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    if (!this.state.location) {
      return <Search changeLocation={this.changeLocation} />;
    }

    return (
      <React.StrictMode>
        <div className="app">
          <Search changeLocation={this.changeLocation} />
          <Results dataList={this.state.data.list} />
        </div>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
