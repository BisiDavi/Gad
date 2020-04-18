import React from 'react';
import '../styles/imagegrid.css';
import {
  barber, bricklayer, tailor, carpenter, cobbler, electrician, fashiondesigner,
  laundry, mechanic, painterhouse, painter, plumber, Salon, welder
} from '.'
import { Link } from 'react-router-dom';
import GridImage from '../components/gridImage';



let ImageGrid = () => {
  return (
    <div className="grid">
      <ul id="hexGrid">
        <li className="hex">
          <div className="hexIn">
            <GridImage
              linkroute="/barber"
              gridimg={barber}
              imgalt="hire a barber"
              text1="Need a Professional Barber"
              text2="Get Connected"
            />
            {/**<Link to="/barber" className="hexLink">
              <div className='img'>
                <img src={barber} alt="hire a barber" />
              </div>
              <h1 id="demo1">Need a Professional Barber</h1>
              <p id="demo2">Get Connected</p>
  </Link>*/}
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to='/plumber' className="hexLink">
              <div className='img' >
                <img src={plumber} alt="hire a plumber" />
              </div>
              <h1 id="demo1">Hire a Professional Plumber</h1>
              <p id="demo2">Get Connected</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/carpenter" className="hexLink">
              <div className='img'>
                <img src={carpenter} alt="hire a carpenter now" />
              </div>
              <h1 id="demo1">Hire a Certified Carpenter</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/cobbler" className="hexLink">
              <div className='img'>
                <img src={cobbler} alt='hire a cobbler' />
              </div>
              <h1 id="demo1">Hire a Certified Cobbler</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/electrician" className="hexLink">
              <div className='img'>
                <img src={electrician} alt='hire an electrician' />
              </div>
              <h1 id="demo1">Hire a Certified Electrician</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/fashion-designer" className="hexLink">
              <div className='img'>
                <img src={fashiondesigner} alt='hire a fashion designer' />
              </div>
              <h1 id="demo1">Hire a Fashion Designer</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/laundry" className="hexLink">
              <div className='img'>
                <img src={laundry} alt='hire a professional laundry' />
              </div>
              <h1 id="demo1">Professional Laundry</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/painter" className="hexLink">
              <div className='img'>
                <img src={painter} alt="hire a painter" />
              </div>
              <h1 id="demo1">Hire a Painter</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/mechanic" className="hexLink">
              <div className='img' >
                <img src={mechanic} alt='Hire a mechanic' />
              </div>
              <h1 id="demo1">Hire a mechanic</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/salon" className="hexLink">
              <div className='img'>
                <img src={Salon} alt='make your hair' />
              </div>
              <h1 id="demo1">Professional Hair Salon</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/bricklayer" className="hexLink">
              <div className='img'>
                <img src={bricklayer} alt='bricklayer' />
              </div>
              <h1 id="demo1">Hire a bricklayer</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/painter" className="hexLink">
              <div className='img'>
                <img src={painterhouse} alt='painterhouse' />
              </div>
              <h1 id="demo1">Hire a Painter</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/fashion-designer" className="hexLink">
              <div className='img'>
                <img src={tailor} alt='hire a tailor' />
              </div>
              <h1 id="demo1">Hire a tailor</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <Link to="/welder" className="hexLink">
              <div className='img'>
                <img src={welder} alt='hire a welder' />
              </div>
              <h1 id="demo1">Hire a welder</h1>
              <p id="demo2">Get Connected, for free</p>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ImageGrid;