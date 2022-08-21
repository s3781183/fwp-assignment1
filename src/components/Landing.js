import logo from "./online-work.jpg";
function Landing() {
  return (
    <div>
      <div className="card">
        <h1>Loop Agile Now (LAN)</h1>
        <i>
          <br></br>
          You can register a new account, by navigating to the "Sign Up" page
          from the menu bar above. If you already have an existing account, you
          can login by navigating to the "Sign In" page. Once logged in, you
          will be directed to your profile page where you can edit your profile.
          <br></br>
        </i>
        <h2> Our purpose</h2>
        Loop Agile (LA) has funded the creation of this social media website
        (LAN) for their employees. Many employees have started to work online,
        after COVID 19 restrictions came to place, and the increase of staff
        numbers. Hence, communication between employees will need to be done
        online. LAN will help the employees to make a post, and maintain their
        profile details.
      </div>
      <br></br>
      <div className="logo">
        <img
          src={logo}
          alt="https://unsplash.com/photos/tMI2_-r5Nfo"
          width="400"
          height="200"
        />
      </div>
    </div>
  );
}

export default Landing;
