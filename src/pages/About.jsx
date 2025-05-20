import React from "react";
import "../css/About.css";
import myPhoto from "../assets/my-photo.jpg"; // مسیر عکس رو به درستی وارد کن

const About = () => {
  return (
    <>
      <div className="about-container">
        <img src={myPhoto} alt="Myself" className="about-photo" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate front-end developer with a strong focus on
            creating clean, responsive, and user-friendly web interfaces using
            React. I have a deep interest in UI/UX design and always strive to
            deliver engaging user experiences. In addition to web development,
            I'm also highly proficient in <strong>Flutter</strong>, and enjoy
            building fast, cross-platform mobile applications.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>React.js</li>
            <li>Flutter (Advanced)</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Responsive UI Design</li>
          </ul>
          <h3>Contact</h3>
          <p>You can reach me via email: amirhossein1mirzaei79@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default About;
