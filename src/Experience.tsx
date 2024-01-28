import { Col, Row } from "react-bootstrap";
import "./Experience.css"

function Experience() {
  const skillsData:any = [
    {"title":"Python","url":"./images/python.png"},
    {"title":"React JS","url":"./images/reactJS.png"},
    {"title":"JavaScript","url":"./images/js.png"},
    {"title":"Flask","url":"./images/flask.png"},
    {"title":"MySql","url":"./images/mysql.jpg"},
    {"title":"MongoDB","url":"./images/mongoDb.jpg"},
    {"title":"Azure","url":"./images/msAzure.png"},
    {"title":"Babylon JS","url":"./images/babylonJs.png"},
    {"title":"NodeJS","url":"./images/nodeJs.png"},
    {"title":"Css","url":"./images/css.png"},
    {"title":"Html","url":"./images/html5.png"},
    {"title":"Git","url":"./images/git.png"},
    {"title":"C Sharp","url":"./images/csharp.png"},
    {"title":"Azure","url":"./images/msAzure.png"},
  ]

  return (
    <div className="Experience">
      <div></div>
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
