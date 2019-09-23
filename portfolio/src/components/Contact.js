import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <section className="contact" id="contact">
          <form
            action="https://formspree.io/katrinsalac@gmail.com"
            method="POST"
          >
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  size="15"
                  maxlength="30"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  size="15"
                  maxlength="30"
                ></input>
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  size="15"
                  maxlength="30"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  name="message"
                  cols="20"
                  rows="10"
                  placeholder="message"
                  required
                ></textarea>
              </li>
              <input type="submit" value="send"></input>
            </ul>
          </form>
          <a className="avatar" href="mailto:katrinsalac@gmail.com">
            <h4 className="emailclick">contact me!</h4>
          </a>
        </section>
      </div>
    );
  }
}

export default Contact;
