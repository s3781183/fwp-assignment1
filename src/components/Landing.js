import image from "./online-work.jpg";
import '../css/Landing.css';

function Landing() {
  document.title="LAN";
  return (
    <div className="page">
      <div className="container">
        <h1>Loop Agile Now (LAN)</h1>
        <p>Connecting you with the online community.</p>
      </div>
      <div className="body">
        <div className="col">
          <h3>Our purpose</h3>
          <p> 
            Loop Agile (LA) has funded the creation of this social media website
            (LAN) for their employees. Many employees have started to work online,
            after COVID 19 restrictions came to place, and the increase of staff
            numbers. Hence, communication between employees will need to be done
            online. LAN will help the employees to make a post, and maintain their
            profile details.
          </p>
        </div>
        <div className="col">
          <img
            src={image}
            alt="https://unsplash.com/photos/tMI2_-r5Nfo"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
