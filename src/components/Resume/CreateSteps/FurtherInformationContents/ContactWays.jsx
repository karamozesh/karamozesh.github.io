const ContactWays = ({ heightOfChildren }) => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div>
        <ResumeInput
          label="راه های ارتباطی من"
          type="text"
          name="contact-name"
          onChange={null}
          className="mb-8"
        />
        <ResumeInput
          label="لینک مورد نظر "
          type="text"
          name="contant-link"
          onChange={null}
          className="mb-8"
        />
        <ButtonAddResume />
      </div>
      <div></div>
    </div>
  );
};

export default ContactWays;
