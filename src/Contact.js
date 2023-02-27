import SubmitResourceLink from "./SubmitResourceButton";

const Contact = () => {
  return (
    <div
      className="mt-5"
      //bg-transparent py-2 px-4 border flex items-center justify-center  border-black rounded"
      // style={{ width: "50%" }}
    >
      <div className="flex items-center justify-center text-center w-2/4 h-30 m-auto">
        {/* border border-black rounded"> */}
        <p className="w-2/4">
          Please email webmaster@cincinnaticommunityaid.com with any questions,
          issues, or feedback.
        </p>
      </div>
      <SubmitResourceLink />
    </div>
  );
};

export default Contact;
