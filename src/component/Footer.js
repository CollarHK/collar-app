import React from 'react';
import '../styles/footer.scss';
import iconForm from '../image/icon/icon-form.png';
import iconIG from '../image/icon/icon-ig.png';
import iconTG from '../image/icon/icon-tg.png';
import iconGit from '../image/icon/icon-github.png';

const Footer = (props) => {

  return (
    <section className="footer">
      <div className="container">
        <div className="row g-0 g-lg-1">
          <div className="col">
            <div className="message">
                <h3><span className="warn">!!!</span>本站只作整合用途，如對應援收費／派發有任何問題請直接與相關人士聯絡。<span className="warn">!!!</span></h3>
            </div>
          </div>
        </div>
        <div className="row g-0 g-lg-1 align-items-center">
          <div className="col-sm d-flex justify-content-center align-items-center">
            <div className="icon" style={{ backgroundImage : 'url('+ iconForm +')' }}></div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9-WIMybAA4L37jg4wAmJyUGRlNsUWagv9MGNJ_9AHXDzMWw/viewform" target="_blank">
                <div>應援登記</div>
            </a>
          </div>
          <div className="col-sm">
            <a href="https://instagram.com/dwarf67.hk" target="_blank">
              <div className="icon" style={{ backgroundImage : 'url('+ iconIG +')' }}></div>
            </a>
            <a href="https://telegram.me/callmekolo" target="_blank">
              <div className="icon" style={{ backgroundImage : 'url('+ iconTG +')' }}></div>
            </a>
            <a href="https://github.com/collar-hk/goods" target="_blank">
              <div className="icon" style={{ backgroundImage : 'url('+ iconGit +')' }}></div>
            </a>
          </div>
          <div className="col-sm">
            <span>嗚謝：@芝心糖醋蝦</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
