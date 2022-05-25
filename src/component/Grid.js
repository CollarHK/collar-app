import React from 'react';
import { Link } from "react-router-dom";
import '../styles/grid.scss';

const members = ['Soching','Candy','Marf','Gao','Collar','Sumling','Winka','Ivy','Day'];

const Grid = (props) => {

  return (
    <div className="container">
      <div className="row g-3 g-lg-5">
        {
          members.map(function(member){
            return renderMemberBlock(member.toLowerCase());
          })
        }
      </div>
    </div>
  )
}

function renderMemberBlock(member){
  const image = require('../image/profile/' + member + '.jpg');
  var hoverImage;
  if(member == "collar"){
    //hoverImage = require('../image/profile/collar_1.jpg');
  }
  return (
    <div className="col-4">
      <Link to={member}>
        <div className="box" style={{ '--my-image': `url(${image})`, '--hover-image': `url(${hoverImage})` }} />
      </Link>
    </div>
  )
}

export default Grid;
