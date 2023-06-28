import React, { Component } from 'react'

export default class Price extends Component {
  render() {
    return (
      <div className='container'>
        <section className="price">
      <div className="box">
        <h3>basic</h3>
        <div className="amount"><span>$</span>20<span>/mo</span></div>
        <ul>
          <li>certificates</li>
          <li>full courses</li>
          <li>full modules</li>
          <li>live projects</li>
          <li>24 x 7 supports</li>
        </ul>
        <a href="#" className="btn">select plan</a>
      </div>
      <div className="box">
        <h3>standard</h3>
        <div className="amount"><span>$</span>50<span>/mo</span></div>
        <ul>
          <li>certificates</li>
          <li>full courses</li>
          <li>full modules</li>
          <li>live projects</li>
          <li>24 x 7 supports</li>
        </ul>
        <a href="#" className="btn">select plan</a>
      </div>
      <div className="box">
        <h3>premium</h3>
        <div className="amount"><span>$</span>90<span>/mo</span></div>
        <ul>
          <li>certificates</li>
          <li>full courses</li>
          <li>full modules</li>
          <li>live projects</li>
          <li>24 x 7 supports</li>
        </ul>
        <a href="#" className="btn">select plan</a>
      </div>
    </section>
    </div>
    )
  }
}
