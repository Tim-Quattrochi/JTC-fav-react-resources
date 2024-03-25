import "./landing.css";
import reactLogo from "../../assets/react-logo.svg";

function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to Tim's favorite React resources.</h1>
      <p>
        👈 Here you will find a collection of resources that Tim has
        found useful in his journey to learn React.
      </p>

      <div className="img-container">
        <img
          className="react-logo"
          src={reactLogo}
          alt="React logo"
        />
      </div>
    </div>
  );
}
export default Landing;
