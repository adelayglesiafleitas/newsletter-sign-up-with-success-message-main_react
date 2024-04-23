import { useState } from "react";

const Form = ({ succes, setSucces }) => {
  const [inputForm, setInputForm] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleInputForm = (e) => {
    const email = e.target.value;
    setInputForm(email);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(emailPattern.test(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = inputForm;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(emailPattern.test(email));
    if (setIsValidEmail && inputForm != "") {
      setInputForm("");
      setIsValidEmail(false);
      setSucces(false);
    }
  };

  return (
    <>
      <form className="Form_container" onSubmit={handleSubmit}>
        <div className="Form_container_lab_p">
          <label className="roboto__bold" htmlFor="email">
            Email address
          </label>
          <p
            className={`${
              isValidEmail || inputForm === "" ? "" : "hide"
            } roboto__bold`}
          >
            {isValidEmail || inputForm === "" ? "" : "Valid email required"}
          </p>
        </div>

        <input
          type="email"
          id="email"
          onChange={handleInputForm}
          placeholder="email@company.com"
          value={inputForm}
          className={isValidEmail || inputForm === "" ? "valid" : "invalid"}
        />
        <button className="roboto__bold">
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};
export default Form;
