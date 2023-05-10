import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from '../reportWebVitals';

const teachers = () => {
  return (
<div className="body2"><nav className="zone yellow sticky">
  <ul className="main-nav">
    <li><a href="service.html">サービス</a></li>
        <li><a href="events.html">イベント</a></li>
    <li><a href="contact.html">問い合わせ</a></li>
    <li><a href="teacher.html">教師</a></li>
    <li className="home"><a href="index.html">ホーム</a></li>
  </ul>
  </nav>

  <h1 className="teacherstitle"> Our Teachers</h1>
  <div className="teacherscontainer">
    <div className="photo-us">  
      <img src="img/miki.jpg" />
        <p>Miki Umeda<br />President<br />クリックして挨拶</p>
    </div>
    <div className="photo-us">
      <img src="img/chris.jpg" /><br />
      <p>Chris Fletcher<br />Teacher<br />クリックして挨拶</p>
    </div>
    <div className="photo-us">
      <img src="img/momo.jpg" /><br />
      <p>Momo<br />Mascot<br />クリックして挨拶</p>
    </div>
  </div>
</div> 
) ;
  };
export default teacher