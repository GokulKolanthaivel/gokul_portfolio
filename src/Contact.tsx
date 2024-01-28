import { Col, Row } from "react-bootstrap";
import "./Contact.css";

function Contact() {

  return (

    <section className="contact" id="contact">
      <div className="container">
        <div className="heading text-center">
          <h2>Contact
            <span> Us </span></h2>
            <p>Thank you for taking the time to explore my portfolio. If you have any inquiries, <br></br>collaboration proposals, or if you simply want to connect, I would love to hear from you.<br></br> Feel free to reach out using the contact information below:</p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="title">
              <h3>Contact detail</h3>
            </div>
            <div className="content">
              <div className="info">
                <i className="fas fa-mobile-alt"></i>
                <h4 className="d-inline-block">PHONE :
                  <br />
                  <span>+91 8300841583</span></h4>
              </div>
              <div className="info">
                <i className="far fa-envelope"></i>
                <h4 className="d-inline-block">EMAIL :
                  <br />
                  <span>gokulsksd@gmail.com</span></h4>
              </div>
              <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <h4 className="d-inline-block">ADDRESS :<br />
                  <span>73/92, Seerapalli, Rasipuram, Namakkal - 637406</span></h4>
              </div>
            </div>
          </div>

          {/* <div className="col-md-7">

            <form>
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-sm-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-sm-12">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-control" id="comment" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-block" type="submit">Send Now!</button>
            </form>
          </div> */}
        </div>
      </div>
    </section>

  );
}

export default Contact;
