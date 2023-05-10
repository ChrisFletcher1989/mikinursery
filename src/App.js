import logo from './logo.svg';
import WeatherAdachi from './components/weatherAdachi'
import WeatherLondon from './components/weatherLondon';
import './index.css';
import React, { Component } from 'react';


// create state
class App extends Component {
  constructor () {
      super()
      this.state = {
          WeatherInAdachi: '',
          WeatherLondon: '',
      }
  }

  componentDidMount() {
      fetch('https://api.open-meteo.com/v1/forecast?latitude=35.76&longitude=139.81&hourly=temperature_2m&current_weather=true&forecast_days=1')
      .then(response=> response.json())
      .then(data => this.setState({WeatherInAdachi: data}));

    }

render () {
  return (  
    <div>
  <nav className="zone navcolour sticky">
  <ul className="main-nav">
    <li><a href="service.html">サービス</a></li>
        <li><a href="events.html">イベント</a></li>
        <li><a href="contact.html">問い合わせ</a></li>
        <li><a href="teacher.html">教師</a></li>
      <WeatherAdachi></WeatherAdachi>
      <WeatherLondon></WeatherLondon>
  
  </ul>
  </nav>
  
  <div className="zone container1 description">
    <p className="descriptionTitle">
      サービス説明タイトルまたはロゴ
    </p><br/>
    <p className="description">みきのコンセプトについての説明</p>
  </div>

<div className="zone pinkblue grid-wrapper">
    <div className="box zone"><ul><li><h1> Enter sales point</h1></li><li><p>More info here</p></li></ul></div>
    <div className="box zone"><img src="img/jack.jpg"/></div>
    <div className="box zone"><ul><li><h1> Enter sales point</h1></li><li><p>More info here</p></li></ul></div>
    <div className="box zone"><ul><li><h1> Enter sales point</h1></li><li><p>More info here</p></li></ul></div>
    <div className="box zone"><ul><li><h1> Enter sales point</h1></li><li><p>More info here</p></li></ul></div>
    <div className="box zone"><ul><li><h1> Enter sales point</h1></li><li><p>More info here</p></li></ul></div>
 
</div>
  

  <footer className="zone yellow footer">Copyright Miki Umeda</footer>
</div>

  );
}
}

export default App;