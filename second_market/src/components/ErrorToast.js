import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';


function ErrorToast(props) {
    const errorMessage = props.data;

    if (Object.keys(errorMessage).length === 0) {
        return ( <div></div>);
    }
    else {

  return (
      <div>

        {
    Object.entries(errorMessage)
    .map( ([key, value]) => <Toast className="m-1 p-2" style={{background: 'rgba(51, 170, 51, .1)'}} key={key}><strong>Uh oh! {value}</strong></Toast> )
  }
  </div>
  );
}


  
}

export default ErrorToast;