import React from 'react';
import '../styles/imagegrid.css';
import barber from '../img/img/barber.jpg';
import bricklayer from '../img/img/bricklayer.jpg';
import tailor from '../img/img/tailor.jpg';
import carpenter from '../img/img/carpenter.jpg';
import cobbler from '../img/img/cobbler.jpeg';
import electrician from '../img/img/electrician.jpg';
import fashiondesigner from '../img/img/fashiondesigner.jpg';
import laundry from '../img/img/laundry.jpg';
import mechanic from '../img/img/mechanic.jpg';
import painterhouse from '../img/img/painterhouse.png';
import painter from '../img/img/painter.jpg';
import plumbers from '../img/img/plumbers.jpg';
import Salon from '../img/img/Salon.jpg';
import welder from '../img/img/welder.png';



let ImageGrid = () => {
  return (
    <div className="grid">
      <ul id="hexGrid">
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#hirebarber">
              <div className='img'>
                <img src={barber} alt="hire a barber" />
              </div>
              <h1 id="demo1">Need a Professional Barber</h1>
              <p id="demo2">Get Connected</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#hireplumber">
              <div className='img' >
                <img src={plumbers} alt="hire a plumber" />
              </div>
              <h1 id="demo1">Hire a Professional Plumber</h1>
              <p id="demo2">Get Connected</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#hirecarpenter">
              <div className='img'>
                <img src={carpenter} alt="hire a carpenter now" />
              </div>
              <h1 id="demo1">Hire a Certified Carpenter</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#cobbler">
              <div className='img'>
                <img src={cobbler} alt='hire a cobbler' />
              </div>
              <h1 id="demo1">Hire a Certified Cobbler</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#electrician">
              <div className='img'>
                <img src={electrician} alt='hire an electrician' />
              </div>
              <h1 id="demo1">Hire a Certified Electrician</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#fashiondesigner">
              <div className='img'>
                <img src={fashiondesigner} alt='hire a fashion designer' />
              </div>
              <h1 id="demo1">Hire a Fashion Designer</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#laundry">
              <div className='img'>
                <img src={laundry} alt='hire a professional laundry' />
              </div>
              <h1 id="demo1">Professional Laundry</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#painter">
              <div className='img'>
                <img src={painter} alt="hire a painter" />
              </div>
              <h1 id="demo1">Hire a Painter</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#mechanic">
              <div className='img' >
                <img src={mechanic} alt='Hire a mechanic' />
              </div>
              <h1 id="demo1">Hire a mechanic</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#salon">
              <div className='img'>
                <img src={Salon} alt='make your hair' />
              </div>
              <h1 id="demo1">Professional Hair Salon</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#bricklayer">
              <div className='img'>
                <img src={bricklayer} alt='bricklayer' />
              </div>
              <h1 id="demo1">Hire a bricklayer</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#painterhouse">
              <div className='img'>
                <img src={painterhouse} alt='painterhouse' />
              </div>
              <h1 id="demo1">Hire a Painter</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#tailor">
              <div className='img'>
                <img src={tailor} alt='hire a tailor' />
              </div>
              <h1 id="demo1">Hire a tailor</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" href="#welder">
              <div className='img'>
                <img src={welder} alt='hire a welder' />
              </div>
              <h1 id="demo1">Hire a welder</h1>
              <p id="demo2">Get Connected, for free</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ImageGrid;