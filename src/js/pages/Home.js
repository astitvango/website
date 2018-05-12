import React, { Component } from 'react';
import Card from '../components/HomeCard';
import { Link,NavLink } from "react-router-dom";

export default ()=>{
  var focusSections=[
    {title:'Education',description:'Our volunteers help underprivileged kids from the slums of Pantnagar in getting access to quality education and academic counsel.',url:'/images/f_education.jpg'},
    {title:'Extracurricular Activities',description:'We believe in all round personality development through activities, programmes and learning experience that hone their natural talent.',url:'/images/f_e_activity.jpg'},
    {title:'School Supplies',description:'We supply books, notebooks, stationery and other school supplies to the children in collaboration with Vedic Club.',url:'/images/f_school_supply.jpg'},
    {title:'Moral Values',description:'The best way to spread moral values is by inculcating them at an early age. We not only teach but also educate these students by giving them strong moral support.',url:'/images/f_moral_values.jpg'},
  ];

  var cards =[];
  focusSections.forEach( section =>{
    cards.push(<Card width="col-sm-6 col-lg-3" showAction="disabled" content={section}/>);})

  return(
    <main className="home-section" role="main">
      <section className="jumbotron">
        <div className="shadow-box"></div>
        <div className="container hero-text">
          <h1 className="intro-text">ASTITVA<br/>Ek Soch Hai Ek Vichar Hai<br/>Jo Badalna chahti Hai Aaj Ko!</h1>
          <div className="buttons row">
            <div className="col-sm-6 cta-1">
              <NavLink exact className="alizarin-flat-button" to='/about' activeClassName="active">Our Mission</NavLink></div>
            <div className="col-sm-6 cta-2">
              <a href="http://amzn.in/0Zrfnkm" className="turquoise-flat-button">Support Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="focus">
        <div className="container">
          <div className="row">
            <div className="col-12 section-header">
              <h2>HOW WE HELP CHILDREN</h2>
            </div>
            {cards}
          </div>
        </div>
      </section>

      <section id="#donate" className="donate">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 donate-msg">
              <div className="col-12 section-header">
                <h2>Support us</h2>
              </div>
              <div className="col-md-6 offset-md-3">
                <p>
                  Help fullfilling wish of children of a brighter future by providing school supplies that can help assist in their education. Click on the below link to make your contribution through Amazon wishlist that will directly deliver these gifts to the children. Select Gift Registery Address while checkout.
                </p>
                <a href="http://amzn.in/0Zrfnkm" className="turquoise-flat-button">Donate</a>
              </div>
            </div>
            <div className="col-md-6 donate-img">

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
