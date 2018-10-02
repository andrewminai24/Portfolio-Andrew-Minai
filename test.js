import React from "react";
import { render } from "react-dom";
import Image from "./Image";
import "./index.css";
document.body.style.backgroundColor = "#F6F8FA";

const App = () => (
  <div className="appStyles">
    <Image
      className="heroImage"
      imageSource="https://scontent.fsac1-2.fna.fbcdn.net/v/t1.0-9/39558026_2083573301677479_2713711391612600320_n.jpg?_nc_cat=0&oh=5ae6f512f5656c27ef9e3ae7d5cf7920&oe=5C2FBBE7"
    />
    <div className="textFlex">
      <div style={{ marginTop: "75px" }}>
        <div className="headliner">Andrew Minai</div>
        <div className="subheader">
          Software Engineer for Town Today.Start up Social media promotion app
          company in Sacramento CA / Sacramento, CA
        </div>
      </div>
      <div style={{ marginTop: "120px" }}>
        <div className="quoteHeadliner">
          "It's not a faith in technology. It's faith in people. -Steve Jobs
        </div>
        <div className="quoteOrigin">- </div>
      </div>
      <div style={{ marginTop: "120px" }}>
        <div className="contactHeader">Contact Me:</div>
        <div className="contactLinks">
          <a href="https://www.instagram.com/Towntoday">Instagram</a> |{" "}
          <a href="mailto:andrewminai24@gmail.com">Email</a> |{" "}
          <a href="tel:530-400-5582">Phone</a>
        </div>
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));

