import React from 'react';
import { Link } from "react-router-dom";
import '../styles/grid.scss';

const members = ['Marf','Gao','Day','Soching','Collar','Candy','Winka','Ivy','Sumling'];

const Grid = (props) => {

  const { text } = props;

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
  const image = require('../image/profile/' + member + '_1.jpg');
  const hoverImage = require('../image/profile/' + member + '_2.jpg');
  return (
    <div className="col-4">
      <Link to={member}>
        <div className="box" style={{ '--my-image': `url(${image})`, '--hover-image': `url(${hoverImage})` }} />
      </Link>
    </div>
  )
}

export default Grid;
