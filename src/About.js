import SubmitResourceLink from "./SubmitResourceButton";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-5 ">
      <div className="flex items-center justify-center text-center w-2/4 h-30 m-auto">
        <p className="w-3/6">
          This site is meant to facilitate mutual aid between people of the
          Greater Cincinnati area! It is run and maintained by a resident of the
          Greater Cincinnati area. Feedback of all kinds is welcome and
          encouraged. To report any issues, concerns, or feedback please{" "}
          <Link to="/contact">contact me!</Link>
        </p>
      </div>
      <SubmitResourceLink />
    </div>
  );
};

export default About;
