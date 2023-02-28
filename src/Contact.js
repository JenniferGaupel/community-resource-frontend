import SubmitResourceLink from "./SubmitResourceButton";

const Contact = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-center text-center w-2/4 h-30 m-auto">
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
