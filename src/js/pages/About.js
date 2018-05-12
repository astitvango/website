import React, { Component } from 'react';
import Card from '../components/Card';

export default ()=>{
  var visions = [{title:'Education',description:'Making a child competent by providing holistic education and creating a learning environment.',url:'/images/vision_6.jpg',cta:false,showTitle:false},
  {title:'Education',description:'Bringing back the smile, by conducting various programmes to broaden their perspective about life. ',url:'/images/vision_5.jpg',cta:false,showTitle:false},
  {title:'Education',description:'Every child has access to School and good education.',url:'/images/vision_4.jpg',cta:false,showTitle:false}];

  var missions = [{title:'Education',description:'To inspire breakthroughs in the way the parents of underpriviliged children think, and to achieve immediate and lasting change in the lives of such children via counselling and creating awarerness among them.',url:'/images/vision_3.jpg',cta:false,showTitle:false},
  {title:'Education',description:'ASTITVA is here to empower underprivileged children, ragpickers and youth through medium of education. Education is the single most important factor in breaking the cycle of poverty.',url:'/images/vision_2.jpg',cta:false,showTitle:false},
  {title:'Education',description:' With proper education and training a child is empowered to become a healthy, happy, income-producing person. We at ASTITVA believe in being the change that we want to see. ',url:'/images/vision_1.jpg',cta:false,showTitle:false}];

  var visionCards=[];
  visions.forEach( vision =>{
    visionCards.push(<Card width=" col-md-4" showAction="disabled" content={vision}/>);})

  var missionCards=[];
  missions.forEach( mission =>{
    missionCards.push(<Card width=" col-md-4" showAction="disabled" content={mission}/>);})

  return (
    <main className="about-section">
      <section className="summary">
        <div class="container">
          <div className="section-header">
            <h2>About Astitva</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 order-md-1 order-2">
              <div className="big-intro">
                Knowledge brings you opportunity to make a difference.
              </div>
            </div>
            <div className="col-lg-4 col-md-8 order-md-2 order-3">
              <p>We are a grass-roots Indian NGO working for the empowerment of impoverished and uneducated children in Pantnagar and other nearby areas. We have 09 years of experience working alongside these children attempting to break the vicious cycle of poverty and get them access to their basic human rights of education, nutrition, participation and opportunities for a livelihood.<br/><br/>
              ASTITVA was conceptualised in 2009 when our founder Ajayveer Singh Chaudhary started by educating poor children who worked at various tea and food stalls inside the University campus. ASTITVA has since been working continuously with volunteers from all the colleges of the University lending a helping hand
              </p>
            </div>
            <div className="col-lg-4 col-md-4 order-md-3 order-1">
              <div className="logo-container">
                <div className="logo"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission</h2>
          </div>
          <div className="row">
            {missionCards}
          </div>
        </div>
      </section>
      <section className="vision">
        <div className="container">
          <div className="section-header">
            <h2 className="white-text">Our Vision</h2>
            <h6 className="white-text">Every child deserves the best chance for a bright future. And that’s why we are fiercely committed to ensuring children not only survive, but thrive. We are committed to help children with limited means get access to quality education, with a focus on street children and girls.</h6>
          </div>
          <div className="row">
            {visionCards}
          </div>
        </div>
      </section>
    </main>
  );
}
