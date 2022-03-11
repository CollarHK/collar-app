import React from 'react';
import { Link,useParams } from "react-router-dom";
import '../styles/navBar.scss';
import iconBack from '../image/icon/icon-back.png';

const members = ['Collar','Marf','Gao','Day','Soching','Candy','Winka','Ivy','Sumling'];

const NavBar = (props) => {
  const { member } = useParams();
  return (
    <div className="navBar">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Link to="/">
              <div className="icon" style={{ backgroundImage : 'url('+ iconBack +')' }}></div>
            </Link>
          </div>
          <div className="col-10">
            <div className="row">
              {
                members.map(function(other){
                  var path = "/" + other.toLowerCase();
                  return (
                    <div className="col">
                      <Link to={path}>{other}</Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
