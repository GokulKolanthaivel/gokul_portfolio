import { Col, Row } from "react-bootstrap";
import "./About.css"
import Footer from "./Footer";

function About() {
  return (
    <div className="aboutClass">
      <div className="aboutContainer">
        <Row >
          <Col className="pictureCol" xs={12} md={12} lg={6}  xl={6}>
            <img className="developerPic" src="./images/developerPicture2.jpeg"  />
          </Col>
          <Col className="aboutMeCol" xs={12} md={12} lg={6}  xl={6}>
            <div className="aboutTitleContainer">
              <hr></hr>
              <h2>About Me</h2>
              <hr></hr>
            </div>
            <section className="contentSection">
              <b>Hi !</b> 

              <p>I'm Gokul Kolanthaivel - Full stack web developer and Python developer in India 
                Leading an exploring lifestyle is a personal goal. Always dreams big.
              </p>
              <p>
              After schooling, I have done my graduation in Electrical and Electronics engineering. At that time used to visit many colleges in different cities to get exposure
              and more towards exploring the other cities. Love to travel.

              Apart from curriculum, I play cricket and volleyball. Not a great player but like to spend some time apart from studies and enjoy the game.

              I gained more interest towards the computers in my pre-final year.
              
              </p>
              <p>
              Then I learned Web Development and played with some funny projects.

              After graduation, I have entered into Nallas Corporation, worked on Web Apps using ReactJs, and, backend using Python.
              </p>
              <p>
                One thing I prefer to follow
              </p>
              <h3>Chase your Dreams</h3>
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
