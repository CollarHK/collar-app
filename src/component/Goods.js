import React from 'react';
import Slider from './Slider.js';
import '../styles/goods.scss';

const Goods = (props) => {
  const { type,loading,list } = props;

  function renderLoading(){
    return (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>);
  }

  return (
    <section className={type}>
     <div className="container goods">
       { type == "today" && <h2>今日應援</h2> }
       { type == "free" && <h2>免費應援</h2> }
       { type == "paid" && <h2>收費應援</h2> }
       <div className="list row g-0  g-lg-1 ">
         { loading && renderLoading()}
         { !loading &&
           <>
            { list.length == 0 && <h3 className="no-aid">暫時未有應援</h3> }
            { list.length > 0 && <Slider data={list} /> }
           </>
          }
       </div>
     </div>
   </section>
  )
}

export default Goods;
