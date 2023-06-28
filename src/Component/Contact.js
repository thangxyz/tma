import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <section className="contact">
  <div className="image">
    <img src="./images/images/contact-img.svg" alt="" />
  </div>
  <form action>
    <div className="inputBox">
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
    </div>
    <input type="text" placeholder="subject" className="box" />
    <textarea placeholder="message" name id cols={30} rows={10} defaultValue={""} />
    <input type="submit" className="btn" defaultValue="send" />
  </form>
</section>

      </div>
    )
  }
}
