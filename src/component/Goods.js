import React from 'react';
import Slider from './Slider.js';
import '../styles/goods.scss';

const Goods = (props) => {
  const { type,loading,title,list } = props;

  function renderLoading(){
    return (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>);
  }

  return (
    <section className={type}>
     <div className="container goods">
       <h2>{title}</h2>
       <div className="list row g-0  g-lg-1 ">
         { loading && renderLoading()}
         { !loading &&
           <>
            { list.length === 0 && <h3 className="no-aid">暫時未有{title}</h3> }
            { list.length > 0 && <Slider data={list} /> }
           </>
          }
       </div>
     </div>
   </section>
  )
}

export default Goods;
