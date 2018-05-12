import React, { Component } from 'react';

export default (props)=>{
  return(
    <div className={`${props.width}`}>
      <div className="card">
        <img className="card-img-top" src={process.env.PUBLIC_URL +props.content.url} alt="Card image cap"/>
        <div className="card-body">
          <h5 className={props.content.showTitle?"card-title":"hide"}>{props.content.title}</h5>
          <p className="card-text">{props.content.description}</p>
          <a href="#" className={props.content.cta?"btn btn-primary":"hide"}>Go somewhere</a>
        </div>
      </div>
    </div>
  )
}
