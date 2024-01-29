import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import { useEffect, useState } from 'react';

function Home() {
  const navigate = useNavigate()
  const names = ["Full stack Web Developer", "Software Engineer", "React Developer", "Python Developer"];
  const [developerPosition, setDeveloperPosition] = useState(names[0]);
  let idx = 1;
  useEffect(() => {
      const intervalId = setInterval(() => {
        setDeveloperPosition(names[idx++ % names.length]);
      }, 3000);
      return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="Home">
      <img className='developerPicture' src="./images/developerPicture.jpg" /> 
      <div className='homeText'>
        <h1 className='nameText'>Hi... This is Gokul</h1>
        <h6 className='positionText'><span>{developerPosition} </span></h6>
      </div>
    </div>
  );
}

export default Home;
