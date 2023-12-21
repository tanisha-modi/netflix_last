import React from "react";
// import tv from "../image/tv.png";
// import netflix1 from "../image/netflix1.mp4";

function Chamber(props) {
  return (
    <>
      {props.rev ? (
        <>
          <div className="img">
            <img src={props.pic} alt="" />
          </div>
          <div className="text">
            <h2>{props.heading}</h2>
            <span>
              {props.text}
            </span>
          </div>
        </>
      ) : (
        <>
          {props.v2 ? (
            <>
              <div className="text">
                <h2>{props.heading}</h2>
                <span>{props.text}</span>
              </div>
              <div className="video-container">
                <div className="image-overlay">
                  <img className="imgee img" src={props.pic} alt="Overlay" />
                  <video autoPlay loop muted className="video-bg2">
                    <source src={props.vid} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text">
                <h2>{props.heading}</h2>
                <span>{props.text}</span>
              </div>
              <div className="video-container">
                <div className="image-overlay">
                  <img className="imgee img" src={props.pic} alt="Overlay" />
                  <video autoPlay loop muted className="video-bg">
                    <source src={props.vid} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Chamber;
