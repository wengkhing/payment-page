import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page layout column">
        <div className="flex title-bar">
          <h1 className="title-bar__title">YOUR CART</h1>
          <a className="btn-back">
            <i className="fa fa-chevron-right" aria-hidden="true"> </i>
          </a>
        </div>

        <div className="flex layout row suggestion">
          <div className="flex">
            <button className="suggestion__button">
              +
            </button>
          </div>
          <div className="flex-grow">
            <p className="suggestion__text">Add a Mattress Protector (Queen Size)</p>
          </div>
          <div className="flex-grow">
            <p className="suggestion__value">$85.00</p>
          </div>
        </div>

        <div className="flex layout column items">
          <div className="flex layout row item">
            <div className="flex-basis item__image-container">
              <img src="http://via.placeholder.com/100x100" />
            </div>
            <div className="flex-grow layout column">
              <h1 className="flex item__title">The Mattress</h1>
              <h2 className="flex item__subtitle">Size: Queen</h2>
              <div className="flex layout row x-center">
                <div className="flex">
                  <button className="item__counter-button">-</button>
                </div>
                <div className="flex">
                  <span className="item__counter-display">1</span>
                </div>
                <div className="flex">
                  <button className="item__counter-button">+</button>
                </div>

              </div>
            </div>
            <div className="flex layout column m-between">
              <div className="flex">
                <a className="item__remove">x</a>
              </div>
              <div className="flex">
                <span className="item__value">$850.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex fare">
          <div className="layout row price">
            <div className="flex-grow">
              <span className="price__label">SUBTOTAL:</span>
            </div>
            <div className="flex">
              <span className="price__value">$850.00</span>
            </div>
          </div>

          <div className="layout row price">
            <div className="flex-grow">
              <span className="price__label">SHIPPING:</span>
            </div>
            <div className="flex">
              <span className="price__value">FREE</span>
            </div>
          </div>

          <hr class="flex"/>

          <div className="layout row price">
            <div className="flex-grow">
              <span className="price__label">TOTAL:</span>
            </div>
            <div className="flex">
              <span className="price__value">$850.00</span>
            </div>
          </div>
        </div>

        <div className="flex call-to-action">
          <div className="layout column">
            <button className="cta --secondary flex">
              Buy with <i class="fa fa-apple fa-lg" aria-hidden="true"></i>Pay
            </button>
            <button className="cta --primary flex">
              Checkout
            </button>
            <a className="flex btn-gift-code">
              Apply Gift Code
            </a>
          </div>
        </div>





      </div>
    );
  }
}

export default App;
