import React, { Component} from 'react';
class Advertisement extends Component {
  constructor(props) {
      super(props);
      this.state = {}
  }
  async componentDidMount() {
      var f = await fetch('http://localhost:3001/ad');
      var response = await f.json();
      console.log("Response: ");
      console.log(response);
      this.setState(response);
  }
  adClick(state) {
    console.log("clicked ad");
    fetch('http://localhost:3001/adclick').then((res) => {
      if (res.status === 200) {
        state.clicks++;
        this.setState(state);
      }
      window.open(this.state.url, '_blank');
    });
  }
  render() {
      return (
      <React.Fragment>
      <div>
        <img src={this.state.image} alt="" width="50%" style={{cursor: 'pointer'}} onClick={() => this.adClick(this.state)}></img>
        <p>Click counter: {this.state.clicks}</p>
      </div>
      </React.Fragment>
      )    
  }
}


export default Advertisement