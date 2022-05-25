import React, { useEffect } from 'react';
import moment from 'moment-timezone';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '../styles/slider.scss';

const Slider = (props) => {
  const { data } = props;

  useEffect(() => {
    if(props.data.length > 0)
      window.instgrm.Embeds.process();
  });

  function renderSlide(data){
    var tag;
    var status = "unknown";
    var currentDate = new moment(new Date()).tz('Asia/Hong_Kong');
    if(data[4] !== ''){
      var reserveDate = moment(data[4]+'+08:00', "DD/MM/YYYY HH:mmZ").tz('Asia/Hong_Kong');
      if(reserveDate.isBefore(currentDate)){
        tag = "預留中";
        status = "started";
      }else{
        tag = reserveDate.format("D/M") + '預留';
        status = "pending";
      }
    }
    if(data[6] !== ''){
      var startDate = moment(data[6]+'+08:00', "DD/MM/YYYY HH:mmZ").tz('Asia/Hong_Kong');
      if(currentDate.isAfter(startDate)){
        tag = "派發中";
        status = "started";
      }else if(status === "unknown"){
        tag = startDate.format("D/M") + '派發';
        status = "pending";
      }
    }

    return (
      <SplideSlide>
        <div className={`status ${status}`}>{tag}</div>
        <div dangerouslySetInnerHTML={{__html: data[3]}} />
      </SplideSlide>)
  }

  return (
    <Splide options = {{
        rewind : true,
        focus : 'center',
        gap : '1rem',
        perPage : 3,
        breakpoints: {
          375 : {
            gap : '0rem',
          },
      		768 : {
      			pagination: false,
            gap : '1rem',
            perPage : 1,
      		},
          1440 : {
            perPage : 2,
          }
        }
    }}>
        {
          data.map(a => renderSlide(a))
        }
    </Splide>
  )
}

export default Slider;
