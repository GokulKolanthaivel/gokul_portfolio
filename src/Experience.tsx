import { Col, Row } from "react-bootstrap";
import "./Experience.css"

function Experience() {
  const skillsData:any = [
    {"title":"Python","url":"./python.png"},
    {"title":"React JS","url":"./reactJs.png"},
    {"title":"JavaScript","url":"./js.png"},
    {"title":"Flask","url":"./flask.png"},
    {"title":"MySql","url":"./mysql.jpg"},
    {"title":"MongoDB","url":"./mongoDb.jpg"},
    {"title":"Azure","url":"./msAzure.png"},
    {"title":"Babylon JS","url":"./babylonJs.png"},
    {"title":"NodeJS","url":"./nodeJs.png"},
    {"title":"Css","url":"./css.png"},
    {"title":"Html","url":"./html5.png"},
    {"title":"Git","url":"./git.png"},
    {"title":"C Sharp","url":"./csharp.png"},
    {"title":"Azure","url":"./msAzure.png"},
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
