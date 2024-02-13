import { Col, Row } from "react-bootstrap";
import "./Contact.css";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [email ,setEmail] = useState("");
  const [name ,setName] = useState("");
  const [message ,setMessage] = useState("");

  useEffect(() => emailjs.init("NISllBBP3SXW-_dgA"), []);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const serviceId = "service_r33neeb";
    const templateId = "template_f4xidaq";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: name,
        recipient: email,
        message : message
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setEmail("")
      setName("")
      setMessage("")
    }
  };

  return (

    <section className="contact" id="contact">
      <div className="container">
        <div className="heading text-center">
          <h2>Contact
            <span> Us </span></h2>
            <p>Thank you for taking the time to explore my portfolio. If you have any inquiries, collaboration proposals, or if you simply want to connect, I would love to hear from you. Feel free to reach out using the contact information below:</p>
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
            <div>
              <Row className="socialPlatforms"> 
                <Col   className="col-md-2 info"><a href="https://www.linkedin.com/in/gokul-kolanthaivel-b0b2a1221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i> </a></Col>
                <Col className="col-md-2 info"> <a href="https://github.com/dashboard"><i className="fab fa-github"></i> </a></Col>
                <Col className="col-md-2 info"> <a href="https://www.instagram.com/voldy_g?igsh=MWhleHE4ZnB4dW41dA=="><i className="fab fa-instagram"></i></a> </Col>
              </Row>
            </div>
          </div>

          <div className="col-md-7">

            <form onSubmit={handleSubmit} >
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" value={name} required onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />
                </div>
                <div className="col-sm-6">
                  <input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control" id="comment" placeholder="Message"></textarea>
              </div>
              <button disabled={loading} className="btn btn-block" type="submit">Send Now!</button>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact;


