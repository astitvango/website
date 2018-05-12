import React, { Component } from 'react';
import Card from '../components/Card';

export default ()=>{
  var events=[
    {title:'Navodaya Classes',description:'We at ASTITVA, believe that together we can all bring about a bigger change in the society than just educate the children on a fixed daily basis. The volunteers have started with specially designed classes for students of the nearby school, Shishu Mandir at Pantnagar. These classes aim to hone the bright young minds to crack through the entrance examination to get admission in Navodaya schools.',url:'/images/f_navodya.jpg',cta:false,showTitle:true},
    {title:'Udgam',description:'The ASTITVA family holds a stall every year at the bi-annual Kisaan Mela. The stall is held with a view to help spread the word about our working, to get in touch with people who could extend a support to the foundation in any way and most importantly to establish in the minds of general public the importance of introducing their child to a good and wholesome education.',url:'/images/f_udgam.jpg',cta:false,showTitle:true},
    {title:'Children\'s Day',description:'ASTITVA organises the Children\'s Day every year with great zeal and fervour. We all have had our best memories of these celebrations from our childhood, and every member tries to recreate an equally fun-filled and memorable day for the young ones. The event comprises of cultural activities to engage the children and ends with the distribution of the essentials- stationery items and clothes.',url:'/images/f_children_day.jpg',cta:false,showTitle:true},
    {title:'Saturday Event',description:'We at ASTITVA think along the same lines and thus to give the over-burdened minds of the children a much needed break, a Fun Day- Saturday is organised every weekend to re-energize and refresh the minds and bodies of the young ones for the next week ahead. Art and craft competitions and various other activities are organised on a regular basis. Several vocationally important skills are also imparted from time to time through these sessions.',url:'/images/f_saturday_event.jpg',cta:false,showTitle:true},
    {title:'Nutrition',description:'We aim to create individuals that can shoulder the responsibility of taking the nation forward. It is a well understood fact that nobody can study on an empty stomach. ASTITVA, in collaboration with the Vedic Club has been organising meals for the children on a regular basis. These meals help us attract a larger crowd and thus helps us to ineract and influence a larger number of people directly.',url:'/images/f_nutrition.jpg',cta:false,showTitle:true},
    {title:'Counselling ',description:'We frequently come across families where the children want to study but can\'t due to certain restrictions. These restrictions are sometimes monetary and sometimes social or otherwise. The volunteers at ASTITVA take it upon themselves to convince parents of such children and counsel them to send their ward to the school for studying. The team has recently been successful to finalise the admission of certain children with similar situation.',url:'/images/f_counseling.jpg',cta:false,showTitle:true}
  ];

  var cards =[];
  events.forEach( event =>{
    cards.push(<Card width="col-md-6 col-lg-4" content={event}/>);}
  );

  return (
    <main className="work-section">
      <div className="container">
        <div className="section-header">
          <h2 className="white-text">Our Programmes</h2>
        </div>
        <div className="row">
          {cards}
        </div>
      </div>
    </main>
  );
}
