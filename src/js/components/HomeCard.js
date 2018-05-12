import React, { Component } from 'react';

export default (props)=>{
  console.log(props);
  return(
    <div className={`${props.width} focus-box`}>
      <img src={process.env.PUBLIC_URL + props.content.url} className={props.showImage=="disabled"?"hide":"img-thumbnail"} alt="thumbnail"/>
      <h5 className="red-border-bottom">{props.content.title}</h5>
      <p>{props.content.description}</p>
      <p className={props.showAction=="disabled"?"hide":""}><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>
  );
}
