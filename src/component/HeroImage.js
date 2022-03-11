import React from 'react';
import '../styles/heroImage.scss';

const HeroImage = (props) => {

  const { image } = props;

  const imgStyle = {
      backgroundImage: 'url('+ image +')'
  }

  return (
    <div className="hero-image" style={imgStyle}></div>
  )
}

export default HeroImage;
