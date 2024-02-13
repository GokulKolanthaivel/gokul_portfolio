import { Col, Row } from "react-bootstrap";
import "./Experience.css"

function Experience() {
  const skillsData:any = [
    {"title":"Python","url":"./images/python.png"},
    {"title":"React JS","url":"./images/reactJS.png"},
    {"title":"JavaScript","url":"./images/js.png"},
    {"title":"Redux","url":"./images/redux.png"},
    {"title":"Flask","url":"./images/flask.png"},
    {"title":"MySql","url":"./images/mysql.png"},
    {"title":"MongoDB","url":"./images/mongoDb.jpg"},
    {"title":"Azure","url":"./images/msAzure.png"},
    {"title":"Babylon JS","url":"./images/babylonJs.png"},
    {"title":"NodeJS","url":"./images/nodeJs.png"},
    {"title":"Css","url":"./images/css.png"},
    {"title":"Html","url":"./images/html5.png"},
    {"title":"Git","url":"./images/git.png"},
    {"title":"C Sharp","url":"./images/csharp.png"},
    {"title":"TypeScript","url":"./images/typescript.png"},
  ]

  return (
    <div className="Experience">
      <div className="experienceContainer">
        <h2  className="companyTitle">Nallas Corporation</h2>
          <h4 className="roleTitle">Trainee Engineer (Oct 2021 -Dec 2021)</h4>
            <p>
              Utilized .NET in C# to engineer web applications offering end-to-end solutions encompassing front-end and back-end services.
            </p>
            <p>
              Contributed collaboratively to an internal project focused on managing employee data.
            </p>
            <p>
              Played a key role in crafting tailored user interfaces that met specified criteria, while
              seamlessly integrating backend functionalities
            </p>
          <h4  className="roleTitle">Associate Engineer (Jan 2022 - Mar 2023)</h4>
            <p>
              Orchestrated the adoption of asynchronous operations to elevate API integration
              efficiency, optimizing the responsiveness of the system
            </p>
            <p>
              Engineered Python backend enhancements through the seamless integration of
              decorators, augmenting functionality and streamlining code execution
            </p>
            <p>Developed and integrated UI components utilizing ReactJS, contributing to an enriched
              user interface and improved overall user experience
            </p>
            <p>Collaborated on the implementation of product-related features within the babylonJS
              framework, tailoring functionality to meet specific project requirements and ensuring
              seamless integration with the overall product ecosystem
            </p>
            <p>Addressed and rectified issues and bugs within the web application to ensure a
              smooth and seamless user experience
            </p>

      <h2 className="companyTitle">Brahmarsive India Pvt Ltd (Sister Concern of Nallas)</h2>
        <h4  className="roleTitle">Associate Engineer (Apr 2023 -Jan 2024)</h4>
            <p>
              Developed robust Python backend APIs, seamlessly connecting them with the frontend 
              for effective communication
            </p>
            <p>
              Collaborated with the design unit to craft intuitive ReactJS user interfaces, integrating 
              immersive 3D experiences with Babylon.js
            </p>
            <p>
              Engaged collaboratively to gather and seamlessly integrate system requirements across 
              teams 
            </p>
            <p>
              Expertly integrated 3D assets, executed real-time physics simulations, and enriched 
              user interactions within Babylon.js
            </p>
            <p>
              Orchestrated Azure deployment, ensuring continuous application maintenance and 
              contributing to elevated quality standards.
            </p>


      </div>

      <div className="skillsContainer">
        <div className="skillsTitleContainer">
          <h3 title="skillsTitle">Skills</h3>
        </div>
        <Row className="skillImagesRow">
          {skillsData.map((data:any)=>{
            return(
              <>
                <Col className="skillImagesCol" xs={6} md={6} lg={4} xl={3}>
                  <p className="skillImageTitle">{data.title}</p>
                  <img className="skillImage" src={data.url} />
                </Col>
              </>
            )
          })}
        </Row>
      </div>
    </div>
  );
}

export default Experience;
