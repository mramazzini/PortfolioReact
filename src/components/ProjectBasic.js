import React from 'react';

export default function ProjectBasic(props) {
  const cardStyle = {
    width: '18rem',
  };



  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={``}
          alt="Card cap"
        />
        <div className="card-body">
        <a href="#" className="btn btn-primary">
           {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
