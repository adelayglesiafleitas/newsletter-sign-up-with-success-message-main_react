import Check from "../Components/Check.jsx";
import Form from "../Components/Form.jsx";

const Principal = ({ succes, setSucces }) => {
  return (
    <>
      <section className="container__principal">
        <div className="container__principal_img"></div>
        <div className="container__principal_div">
          <div className="container__principal_text">
            <h2 className="container__principal_text_h2 roboto__bold">
              Stay updated!
            </h2>
            <p className="container__principal_text_p roboto__bold">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <Check text="Product discovery and building what matters" />
            <Check text="Measuring to ensure updates are a success" />
            <Check text="And much more!" />
          </div>
          <Form succes={succes} setSucces={setSucces} />
        </div>
      </section>
    </>
  );
};

export default Principal;

/*


Email address
email@company.com

Subscribe to monthly newsletter*/
