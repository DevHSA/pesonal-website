import React from 'react';

const CV = () => {
  return (
    <>
      <div className="column side"></div>
      <div className="column middle">
        <div className="inside normal">
          <span className="heading">Curriculum Vitae</span>
          
           {" "}(Please click <a href="https://drive.google.com/file/d/12SMpK-vjhxTAi2nEuTAlrA4KHdlUTPQ7/view?usp=sharing" target="_blank" className="txtlink">here</a> for my full CV)

          <hr/>
          <br />
          <br />
          <br />
          <span className="headingsmall">Some Highlights </span>
        
        </div>
        

      </div>

      <div className="column side"></div>
    </>
  );
}

export default CV;