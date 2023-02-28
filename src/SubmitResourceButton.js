import { useNavigate } from "react-router-dom";

const SubmitResourceButton = () => {
  const navigate = useNavigate();

  const navigateToSubmitResource = () => {
    navigate("/submit");
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <button
        className="bg-transparent py-2 px-4 border border-black rounded"
        onClick={navigateToSubmitResource}
      >
        Click here to submit a new resource
      </button>
    </div>
  );
};

export default SubmitResourceButton;
