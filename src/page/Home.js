import React, { useState,useEffect } from 'react';
import HeroImage from '../component/HeroImage.js';
import Goods from '../component/Goods.js';
import Grid from '../component/Grid.js';
import moment from 'moment-timezone';

function Home() {
  const { innerWidth: width } = window;
  const [ banner , setBanner ] = useState(null);
  const [ loading , setLoading ] = useState(null);
  const [ reserve, setReserve ] = useState([]);
  const [ distribute, setDistribute ] = useState([]);

  const compareDate = (a,b) => {
    if(a[6] === ''){
      return 1;
    }else if(b[6] === ''){
      return -1;
    }
    return moment(a[6],"DD/MM/YYYY HH:mm").toDate() < moment(b[6],"DD/MM/YYYY HH:mm").toDate() ? -1 : 1;
  };

  function initReservse(list) {
    var now = new moment(new Date()).tz('Asia/Hong_Kong');
    var reserve = list.filter((i) => {
      if(i[4] != ''){
        var startDate = moment(i[6]+'+08:00', "DD/MM/YYYY HH:mmZ").tz('Asia/Hong_Kong');
        if(now.isBefore(startDate) || i[6] === '')
          return i;
      }
    }).sort(compareDate);
    setReserve(reserve);
  }

  function initDistribute(list){
    var now = new moment(new Date()).tz('Asia/Hong_Kong');
    var distribute = list.filter((i) => {
      if(i[6] != ''){
        var startDate = moment(i[6]+'+08:00', "DD/MM/YYYY HH:mmZ").tz('Asia/Hong_Kong');
        if(now.isAfter(startDate))
          return i;
      }
    }).sort(compareDate);
    setDistribute(distribute);
  }

  useEffect(() => {
    var size = 1024;
    if(width > 1024)
      if(width > 2048){
        size = 3840;
      }else{
        size = 1920;
      }
    var hero = require('../image/teaser.gif');

    setLoading(true);
    fetch('https://script.google.com/macros/s/AKfycbzw2cQ6ytBBEINQNdKmM89xaKw5Wm-rxBZz7W-tq78i2NHA-KC8sqA64D5pUzsaUOnh/exec?today=true')
    .then(function (response) {
      return response.text();
    }).then(function (html) {
      var goods = JSON.parse(html);
      initReservse(goods);
      initDistribute(goods);
      setLoading(false);
    }).catch(function (err) {
      console.warn('Something went wrong.', err);
    });
    setBanner(hero);
  }, []);


  return (
    <section id="home">
      <section className="hero">
        { banner && <HeroImage image={banner}></HeroImage> }
      </section>
      <section className="grid">
        <Grid />
      </section>
      <Goods type="today-reserve" loading={loading} title={"今日預留"} list={reserve} />
      <Goods type="today-distribute" loading={loading} title={"今日派發"} list={distribute} />
    </section>
  );
}

export default Home;
