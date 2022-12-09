import SubmitResourceLink from "./SubmitResourceLink";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>
        This site is meant to facilitate mutual aid between people of the
        Greater Cincinnati area!
      </p>
      <p>
        It is run and maintained by a resident of the Greater Cincinnati area.
      </p>
      <p>
        Feedback of all kinds is welcome and encouraged. To report any issues,
        concerns, or feedback please <Link to="/contact">contact me!</Link>
      </p>
      <SubmitResourceLink />
    </div>
  );
};

export default About;
