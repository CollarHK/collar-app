import React from 'react';
import Slider from './Slider.js';
import '../styles/goods.scss';

const Goods = (props) => {
  const { payment,loading,list } = props;

  function renderLoading(){
    return (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>);
  }

  return (
    <section className={payment}>
     <div className="container goods">
       { payment == "free" && <h2>免費應援</h2> }
       { payment == "paid" && <h2>收費應援</h2> }
       <div className="list row">
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
