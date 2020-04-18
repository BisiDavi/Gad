import React from 'react';
import { Link } from 'react-router-dom';

const GridImage = (props) => {
  return (
    <>
      <li className="hex">
        <div className="hexIn">
          <Link to={props.linkroute} className="hexLink">
            <div className='img'>
              <img src={props.gridimg} alt={props.imgalt} />
            </div>
            <h1 id="demo1">{props.text1}</h1>
            <p id="demo2">{props.text2}</p>
          </Link>
        </div>
      </li>
    </>
  )
}

export default GridImage;