import React, { useState,useEffect } from 'react';
import NavBar from '../component/NavBar.js';
import HeroImage from '../component/HeroImage.js';
import Goods from '../component/Goods.js';
import moment from 'moment-timezone';
import { useParams } from "react-router-dom";

function Member() {
  const { member } = useParams();
  const [ loading , setLoading ] = useState(null);
  const [ freeGoods, setFreeGoods ] = useState([]);
  const [ paidGoods, setPaidGoods ] = useState([]);
  const [ teaserGoods, setTeaserGoods ] = useState([]);
  const [ banner, setBanner] = useState(null);
  const { innerWidth: width } = window;

  useEffect(() => {
    var size = 1024;
    if(width > 1024)
      if(width > 2048){
        size = 3840;
      }else{
        size = 1920;
      }
    const banner = require('../image/hero/' + member + '_hero_'+size+'.png');
    setLoading(true);
    fetch('https://script.google.com/macros/s/AKfycbzw2cQ6ytBBEINQNdKmM89xaKw5Wm-rxBZz7W-tq78i2NHA-KC8sqA64D5pUzsaUOnh/exec?member='+member)
    .then(function (response) {
      return response.text();
    }).then(function (html) {
      var goods = JSON.parse(html);
      initTeaserList(goods);
      initFreeList(goods);
      initPaidList(goods);
      setLoading(false);
    }).catch(function (err) {
      console.warn('Something went wrong.', err);
    });
    setBanner(banner);
  }, [member]);

  const compareDate = (a,b) => {
    if(a[6] === ''){
      return 1;
    }else if(b[6] === ''){
      return -1;
    }
    return moment(a[6],"DD/MM/YYYY HH:mm").toDate() < moment(b[6],"DD/MM/YYYY HH:mm").toDate() ? -1 : 1;
  };

  function initFreeList(list) {
    var free = list.filter(l => l[1] === "free" && (l[6] != '' || l[4] != '')).sort(compareDate);
    setFreeGoods(free);
  }

  function initPaidList(list) {
    var paid = list.filter(l => l[1] === "paid" && (l[6] != '' || l[4] != '')).sort(compareDate);
    setPaidGoods(paid);
  }

  function initTeaserList(list){
    var teaser = list.filter(l => l[6] == '' && l[4] == '');
    setTeaserGoods(teaser);
  }

  return (
    <section id="members">
      <NavBar />
      <HeroImage image={banner}></HeroImage>
      <Goods type="free" loading={loading} title={"免費應援"} list={freeGoods} />
      <Goods type="paid" loading={loading} title={"收費應援"} list={paidGoods} />
      <Goods type="teaser" loading={loading} title={"應援預告"} list={teaserGoods} />
    </section>
  );
}

export default Member;
