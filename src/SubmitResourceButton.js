import { useNavigate } from "react-router-dom";

const SubmitResourceButton = () => {
  const navigate = useNavigate();

  const navigateToSubmitResource = () => {
    navigate("/submit");
  };

  return (
    <div className="flex items-center justify-center mt-5 ">
      <button onClick={navigateToSubmitResource}>
        Click here to submit a new resource
      </button>
    </div>
  );
};

export default SubmitResourceButton;
