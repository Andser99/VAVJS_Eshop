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
        <button onClick={() => this.adClick(this.state)}>Click this ad!</button>
        <img src={this.state.image} alt="" width="50%"></img>
        <p>Click counter: {this.state.clicks}</p>
      </div>
      </React.Fragment>
      )    
  }
}
// function Advertisement() {
//   const [counter, setCounter] = useState(0);
//   const [ad, setAd] = useState({json: {clicks: 0, url: "", image: ""}});
//   console.log(ad);
//   setAd(await fetch('http://localhost:3001/ad'));
//   // setCounter(ad.json.clicks);
//   return (
//     <div>
//       {/* <a href={ad.json.url} onclick={(e) => {adClick(e, counter, setCounter)}}>Click this ad!</a> */}
//       {/* <img src={ad.json.image} alt=""></img> */}
//       {/* <p>{counter}</p> */}
//     </div>
//   )
// }


export default Advertisement