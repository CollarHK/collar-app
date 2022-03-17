import React, { useEffect } from 'react';
import moment from 'moment';
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
    var tag = "未定";
    var status = "pending";
    if(data[2] !== ''){
      var startDate = moment(data[2]+'+08:00', "DD/MM/YYYY HH:mmZ");
      var currentDate = moment();
      if(currentDate > startDate){
        tag = "派發中";
        status = "started";
      }else {
        tag = startDate.format("D/M") + '開始';
      }
    }
    return (
      <SplideSlide>
        <div className={`status ${status}`}>{tag}</div>
        <div dangerouslySetInnerHTML={{__html: data[5]}} />
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
