import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <main className="contact-section">
        <section className="jumbotron">
          <div className="container">
            <h1 className="intro-text white-text">Contact Us</h1>
          </div>
        </section>
        <section className="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 order-lg-2 ml-auto">
                <h5>Get in touch</h5>
                <p className="email"><strong>Email : </strong>pantnagarastitva@gmail.com</p>
              </div>
              <div className="col-lg-6 order-lg-1">
                <h5>Send Us a Message</h5>
                <p className="required-field-text">* Required</p>
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSeoffPth8FEFsUuHqWMG21r2osVMZbeMF8WQwmB3h7cVLgwUw/formResponse" target="_self" method="POST" novalidate>
                  <div className="form-group">
                    <label for="name9909">Name <span className="required-field">*</span></label>
                    <input type="text" className="form-control" name="entry.2005620554" id="name9909" placeholder="Your answer" required/>
                    <div className="invalid-feedback">
                      Please enter a name.
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address <span className="required-field">*</span></label>
                    <input type="email" className="form-control" name="entry.1045781291" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your answer" required/>
                    <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="phoneNumber9908">Phone number</label>
                    <input type="password" name="entry.1166974658" className="form-control" id="phoneNumber9908" placeholder="Your answer"/>
                  </div>
                  <div className="form-group">
                    <label for="address9907">Address <span className="required-field">*</span></label>
                    <input type="password" name="entry.1065046570" className="form-control" id="address9907" placeholder="Your answer" required/>
                  </div>
                  <div className="form-group">
                    <label for="message9906">Message <span className="required-field">*</span></label>
                    <textarea  type="password" name="entry.839337160" className="form-control" id="message9906" placeholder="Your answer" rows="3" required></textarea>
                  </div>
                  <button type="submit" className="peter-river-flat-button">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
