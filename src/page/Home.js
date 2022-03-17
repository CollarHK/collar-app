import React, { useState,useEffect } from 'react';
import HeroImage from '../component/HeroImage.js';
import Goods from '../component/Goods.js';
import Grid from '../component/Grid.js';
import moment from 'moment';

function Home() {
  const { innerWidth: width } = window;
  const [ banner , setBanner ] = useState(null);
  const [ loading , setLoading ] = useState(null);
  const [ goods, setGoods ] = useState([]);

  const compareDate = (a,b) => {
    if(a[2] === ''){
      return 1;
    }else if(b[2] === ''){
      return -1;
    }
    return moment(a[2],"DD/MM/YYYY HH:mm").toDate() < moment(b[2],"DD/MM/YYYY HH:mm").toDate() ? -1 : 1;
  };

  function initList(list) {
    var list = list.sort(compareDate);
    setGoods(list);
  }

  useEffect(() => {
    var size = 1024;
    if(width > 1024)
      if(width > 2048){
        size = 3840;
      }else{
        size = 1920;
      }
    var hero = require('../image/hero/collar_hero_never_'+size+'.png');
    setLoading(true);
    fetch('https://script.google.com/macros/s/AKfycbwMlm-hPhI3qh6F21qjMv9XLLb5qIRtrTcV2Zm_wNzShymfbAvvH1yWknOfywxaDY8ycw/exec?today=true')
    .then(function (response) {
      return response.text();
    }).then(function (html) {
      var goods = JSON.parse(html);
      initList(goods);
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
      <Goods type="today" loading={loading} list={goods} />
    </section>
  );
}

export default Home;
