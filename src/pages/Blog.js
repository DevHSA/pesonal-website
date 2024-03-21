import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Lessons from "./blogposts/Lessons";
import medium from "../images/medium_crop.png";

const Blog = () => {
  return (
    <>
      <div className="column side"></div>
      <div className="column middle">
        <div className="inside normal">
          <span className="heading">Blog Posts</span> (Still in the works....)
          <hr />
          <br />
          <Link
            to="/blog/16.03.2024/lessons-from-phd-pt-1"
            className="blogheading"
          >
            First Blog Post heading to appear here
          </Link>
          <br />
          <span className="blogdate">March 16, 2023</span>{" "}
          <a href="https://medium.com/@harishsa85/my-first-post-2fcf04d90a34" target="_blank">
          <img
            src={medium}
            alt="Description of the image"
            className="mediumimage"
          />
          <span className="medium">Read on Medium</span></a>
          <br />
          <br />
          <Link
            to="/blog/16.03.2024/lessons-from-phd-pt-1"
            className="blogheading"
          >
            First Blog Post heading to appear here
          </Link>
          <br />
          <span className="blogdate">March 16, 2023</span>{" "}
          <a href="https://medium.com/@harishsa85/my-first-post-2fcf04d90a34" target="_blank">
          <img
            src={medium}
            alt="Description of the image"
            className="mediumimage"
          />
          <span className="medium">Read on Medium</span></a>
          <br />
          <br /> <Link
            to="/blog/16.03.2024/lessons-from-phd-pt-1"
            className="blogheading"
          >
            First Blog Post heading to appear here
          </Link>
          <br />
          <span className="blogdate">March 16, 2023</span>{" "}
          <a href="https://medium.com/@harishsa85/my-first-post-2fcf04d90a34" target="_blank">
          <img
            src={medium}
            alt="Description of the image"
            className="mediumimage"
          />
          <span className="medium">Read on Medium</span></a>
          <br />
          <br />


          <Link
            to="/blog/16.03.2024/lessons-from-phd-pt-1"
            className="blogheading"
          >
            First Blog Post heading to appear here
          </Link>
          <br />
          <span className="blogdate">March 16, 2023</span>{" "}
          <a href="https://medium.com/@harishsa85/my-first-post-2fcf04d90a34" target="_blank">
          <img
            src={medium}
            alt="Description of the image"
            className="mediumimage"
          />
          <span className="medium">Read on Medium</span></a>
          <br />
          <br /> <Link
            to="/blog/16.03.2024/lessons-from-phd-pt-1"
            className="blogheading"
          >
            First Blog Post heading to appear here
          </Link>
          <br />
          <span className="blogdate">March 16, 2023</span>{" "}
          <a href="https://medium.com/@harishsa85/my-first-post-2fcf04d90a34" target="_blank">
          <img
            src={medium}
            alt="Description of the image"
            className="mediumimage"
          />
          <span className="medium">Read on Medium</span></a>
          <br />
          <br />


          {/* <Routes>
              <Route exact path="/blog/lessons" element={<Lessons />} />
            </Routes> */}
        </div>
      </div>

      <div className="column side"></div>
    </>
  );
};

export default Blog;
