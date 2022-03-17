import React, { useState,useEffect } from 'react';
import NavBar from '../component/NavBar.js';
import HeroImage from '../component/HeroImage.js';
import Goods from '../component/Goods.js';
import moment from 'moment';
import { useParams } from "react-router-dom";

function Member() {
  const { member } = useParams();
  const [ loading , setLoading ] = useState(null);
  const [ freeGoods, setFreeGoods ] = useState([]);
  const [ paidGoods, setPaidGoods ] = useState([]);
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
    fetch('https://script.google.com/macros/s/AKfycbwMlm-hPhI3qh6F21qjMv9XLLb5qIRtrTcV2Zm_wNzShymfbAvvH1yWknOfywxaDY8ycw/exec?member='+member)
    .then(function (response) {
      return response.text();
    }).then(function (html) {
      var goods = JSON.parse(html);
      initFreeList(goods);
      initPaidList(goods);
      setLoading(false);
    }).catch(function (err) {
      console.warn('Something went wrong.', err);
    });
    setBanner(banner);
  }, [member]);

  const compareDate = (a,b) => {
    if(a[2] === ''){
      return 1;
    }else if(b[2] === ''){
      return -1;
    }
    return moment(a[2],"DD/MM/YYYY HH:mm").toDate() < moment(b[2],"DD/MM/YYYY HH:mm").toDate() ? -1 : 1;
  };

  function initFreeList(list) {
    var free = list.filter(l => l[1] === "free").sort(compareDate);
    setFreeGoods(free);
  }

  function initPaidList(list) {
    var paid = list.filter(l => l[1] === "paid").sort(compareDate);
    setPaidGoods(paid);
  }

  return (
    <>
      <NavBar />
      <HeroImage image={banner}></HeroImage>
      <Goods type="free" loading={loading} list={freeGoods} />
      <Goods type="paid" loading={loading} list={paidGoods} />
    </>
  );
}

export default Member;
